const User = require('../models/user');

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const botFight = (currentHp, maxHp, level) => {
  const log = ['FIGHT BEGINS!'];
  const userMin = 5;
  const botMax = 3;
  const botMin = 1;
  let botHP = level * 20;

  while (true) {
    const userAttack = randomNum(maxHp, userMin)
    botHP = botHP - userAttack;
    log.push(`user attacks for ${userAttack}. bot has ${botHP} health remaning`);
    if (botHP <= 0) {
      log.push('user wins!');
      break;
    }
    const botAttack = randomNum(botMax, botMin)
    currentHp = currentHp - botAttack;
    if (currentHp < 0) currentHp = 0;
    log.push(`bot attacks for ${botAttack}. user has ${currentHp} health remaning`);
    if (currentHp <= 0) {
      log.push('bot wins!');
      break;
    }
  }

  return [currentHp, log];
};

exports.bot = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { level } = req.body;
    const user = await User.findById(id);
    const {
      maxHp,
      currentHp,
    } = user;
    const [postFighHp, log] = botFight(currentHp, maxHp, level);
    user.credits = user.credits + 10;
    user.currentHp = postFighHp;
    user.save();
    return res.status(200).json({ data: log });
  } catch (err) {
    return next(err);
  }
};

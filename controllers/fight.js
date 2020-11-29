const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const botFight = level => {
  const log = ['FIGHT BEGINS!'];
  const userMax = 500;
  const userMin = 5;
  let userHP = 20;
  const botMax = 3;
  const botMin = 1;
  let botHP = level * 20;
  let userWin;

  while (true) {
    const userAttack = randomNum(userMax, userMin)
    botHP = botHP - userAttack;
    log.push(`user attacks for ${userAttack}. bot has ${botHP} health remaning`);
    if (botHP <= 0) {
      log.push('user wins!');
      userWin = true;
      break;
    }
    const botAttack = randomNum(botMax, botMin)
    userHP = userHP - botAttack;
    log.push(`bot attacks for ${botAttack}. user has ${userHP} health remaning`);
    if (userHP <= 0) {
      log.push('bot wins!');
      userWin = false;
      break;
    }
  }

  return [userWin, log];
};

exports.bot = async (req, res, next) => {
  try {
    const { level } = req.body;
    const [userWin, log] = botFight(level);
    return res.status(200).json({ data: log });
  } catch (err) {
    return next(err);
  }
};

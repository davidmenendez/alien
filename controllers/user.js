const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateAccessToken = email => {
  return jwt.sign({ email }, 'alienzRule1995', { expiresIn: '30m' });
};

exports.register = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const passwordSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, passwordSalt);
    const newUser = new User({
      ...req.body,
      password: passwordHash,
    });
    await newUser.save();
    const token = generateAccessToken(email);
    return res.status(200).json({ data: token });
  } catch (err) {
    return next(err);
  }
};

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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validBody = email && password;
    if (!validBody) return res.status(400).send({ error: 'invalid body' });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: 'user not found' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).send({ error: 'invalid login' });
    const token = generateAccessToken(email);
    return res.status(200).json({ data: token });
  } catch (err) {
    return next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email });
    console.log()
    if (!user) return res.status(400).send({ error: 'user not found' });
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

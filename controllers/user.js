const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateAccessToken = email => {
  return jwt.sign({ email }, 'alienzRule1995', { expiresIn: '1h' });
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
    if (!user) return res.status(400).send({ error: 'user not found' });
    const data = {
      id: user._id,
      name: user.name,
      email: user.email,
      color: user.color,
    };
    return res.status(200).json({ user: data });
  } catch (err) {
    return next(err);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const { name } = req.query;
    const query = new RegExp(name, 'i');
    const results = await User.find({ name: query }, { password: 0 });
    return res.status(200).json({ results });
  } catch (err) {
    return next(err);
  }
};

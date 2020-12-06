const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateAccessToken = id => {
  return jwt.sign({ id }, process.env.AUTH_SECRET, { expiresIn: '1h' });
};

const timer = ms => {
  return new Promise(res => {
    setTimeout(res, ms);
  });
};

const getAge = created => {
  const now = new Date();
  const then = new Date(created);
  const days = Math.round(Math.abs((then - now) / (24 * 60 * 60 * 1000)));
  const years = Math.round(Math.abs((then - now) / (365 * 24 * 60 * 60 * 1000)));
  return `${years} year(s), ${days} day(s)`;
};

exports.register = async (req, res, next) => {
  try {
    const { password } = req.body;
    const passwordSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, passwordSalt);
    const newUser = new User({
      ...req.body,
      password: passwordHash,
    });
    await newUser.save();
    const token = generateAccessToken(newUser._id);
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
    const token = generateAccessToken(user._id);
    return res.status(200).json({ data: token });
  } catch (err) {
    return next(err);
  }
};

exports.user = async (req, res, next) => {
  try {
    await timer(100);
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) return res.status(400).send({ error: 'user not found' });
    const data = {
      id: user._id,
      name: user.name,
      email: user.email,
      color: user.color,
      age: getAge(user.created_at),
      credits: user.credits,
      level: user.level,
      maxHp: user.maxHp,
      currentHp: user.currentHp,
    };
    return res.status(200).json({ user: data });
  } catch (err) {
    return next(err);
  }
};

exports.profile = async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await User.findById(id);
    if (!user) return res.status(400).send({ error: 'user not found' });
    const data = {
      name: user.name,
      age: getAge(user.created_at),
      level: user.level,
      color: user.color,
    };
    return res.status(200).json({ user: data });
  } catch (err) {
    return next(err);
  }
};

exports.search = async (req, res, next) => {
  try {
    const { query } = req.query;
    const queryRegex = new RegExp(query, 'i');
    const data = await User.find({ name: queryRegex });
    const results = data.map(entry => ({
      id: entry._id,
      level: entry.level,
      name: entry.name,
    }));
    return res.status(200).json({ results });
  } catch (err) {
    return next(err);
  }
};

exports.bank = async (req, res, next) => {
  try {
    const { credits } = req.body;
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) return res.status(400).send({ error: 'user not found' });
    user.credits = credits;
    user.save();
    return res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
};

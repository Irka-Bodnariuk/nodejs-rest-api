const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, `${email} is already exist`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({ email, password: hashPassword });
  res.json({ email: result.email });
};

module.exports = register;

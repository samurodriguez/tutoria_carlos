const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  selectUserByEmail,
} = require("../../repositories/users/selectUserByEmail");

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);

    if (!user) {
      throw new Error("El email o la contraseña son incorrectos");
    }

    const isPasswordOk = await bcrypt.compare(password, user.password);

    if (!isPasswordOk) {
      throw new Error("El email o la contraseña son incorrectos");
    }

    const tokenPayload = {
      id: user.id,
      email,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.send({
      status: "ok",
      data: {
        accessToken: token,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginUser };

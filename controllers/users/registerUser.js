const bcrypt = require("bcrypt");

const { insertUser } = require("../../repositories/users/insertUser");
const {
  selectUserByEmail,
} = require("../../repositories/users/selectUserByEmail");

async function registerUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const userWithSameEmail = await selectUserByEmail(email);

    if (userWithSameEmail) {
      throw new Error("Ya existe una cuenta registrada con ese email");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const insertId = await insertUser(email, encryptedPassword);

    res.send({
      status: "ok",
      message: "Usuario registrado con éxito",
      data: {
        id: insertId,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { registerUser };

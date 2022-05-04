const { getPool } = require("../../db/getPool");

async function selectUserByEmail(email) {
  const pool = await getPool();

  const [[user]] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);

  return user;
}

module.exports = { selectUserByEmail };

const jwt = require("jsonwebtoken");

async function validateAuth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Falta la cabecera de autenticación");
    }

    const [tokenType, token] = authorization.split(" ");

    if (tokenType !== "Bearer" || !token) {
      throw new Error("Formato del token de autenticación incorrecto");
    }

    const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = tokenPayload;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { validateAuth };

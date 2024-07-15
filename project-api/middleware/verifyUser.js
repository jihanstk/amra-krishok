const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .send({ error: true, message: "authentication Fail!!" });
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const { userName, userEmail } = decoded;
    req.userName = userName;
    req.userEmail = userEmail;
    next();
  } catch {
    res.status(401).send({ error: true, message: "authentication Fail!!" });
  }
};

module.exports = verifyUser;

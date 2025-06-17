import jwt from "jsonwebtoken";

import User from "../db/User.js";

import HttpException from "../utils/HttpException.js";

const { JWT_SECRET } = process.env;

export const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  // const authorization = req.get("authorization");
  if (!authorization) throw HttpException(401, "Authorization header missing");

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") throw HttpException(401, "Bearer missing");

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(id);
    if (!user) {
      return next(HttpException(401, "User not found"));
    }
    req.user = user;
    next();
  } catch (error) {
    throw HttpException(401, error.message);
  }
};
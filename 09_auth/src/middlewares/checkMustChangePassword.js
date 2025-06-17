export const checkMustChangePassword = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.user.mustChangePassword) {
    return res.status(403).json({ message: "Password change required" });
  }

  next();
};

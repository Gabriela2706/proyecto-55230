//midd para los que son administradores
export const adminView = (req, res, next) => {
  try {
    const admin = req.email == "admincoder@coder.com" ? "admin" : "visit";
    res.status(200).send({ error: false, admin });
  } catch (e) {
    res.send({ error: true, msg: e.message });
  }
};

export const userView = (req, res, next) => {
  try {
    if (!req.user) return res.redirect("/login");
    next();
  } catch (e) {
    res.send({ error: true, msg: e.message });
  }
};

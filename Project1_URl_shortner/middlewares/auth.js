const { getUser } = require("../service/auth");

async function restrictToLogin(req, res, next) {
    // Ensure req.cookies exists
    if (!req.cookies) {
        return res.redirect("/login");
    }

    const userUid = req.cookies.uid;
    if (!userUid) {
        return res.redirect("/login");
    }

    const user = getUser(userUid);
    if (!user) {
        return res.redirect("/login");
    }

    req.user = user;
    next();
}

module.exports = { restrictToLogin };

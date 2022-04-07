const {Router} = require("express");
const {login,register} = require ("../controllers/users.controller")

const userRouter = Router();

userRouter.get("/login", login) 

userRouter.get("/register", register);

module.exports = userRouter;
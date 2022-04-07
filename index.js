const express = require('express');
const indexRouter = require("./routes/index.router");
const userRouter = require('./routes/user.router');

const app = express();

app.use("/",indexRouter);
app.use('/users', userRouter);


app.listen(4000, ()=>{
    console.log("🚀 Server up and running.");
});
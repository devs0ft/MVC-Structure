const welcome = (req, res) => {
    res.send("<h1>Hello, world</h1>");
}

const greet = (req,res) =>{
    res.send("<h1>hello 👋, Fellow programmer<h1/>");
}

module.exports = {
    welcome,
    greet,
};
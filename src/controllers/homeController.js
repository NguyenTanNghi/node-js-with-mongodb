const getHomePage = (req, res) => {
    res.send("Hello World123!212");
};
const getSamplePage = (req, res) => {
    res.render("sample");
}
module.exports = {
    getHomePage,
    getSamplePage
};

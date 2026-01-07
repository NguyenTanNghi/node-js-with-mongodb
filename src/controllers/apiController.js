const User = require("../models/user");

const getUsersAPI = async (req, res) => {
    const listUsers = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: listUsers,
    });
};

module.exports = {
    getUsersAPI,
};

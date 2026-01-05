const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await connection.query("SELECT * FROM Users");
    return results;
};
const getUserById = async (userId) => {
    let [results, fields] = await connection.query("SELECT * FROM Users WHERE id = ?", [userId]);
    return results[0];
}
const updateUser = async (id, email, name, city) => {
    return await connection.query(
        "UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?",
        [email, name, city, id]
    );
}
const createUser = async (email, name, city) => {
    return await connection.query(
        "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
        [email, name, city]
    );
}
const deleteUser = async (id) => {
    return await connection.query(
        "DELETE FROM Users WHERE id = ?",
        [id]
    );
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser,
};

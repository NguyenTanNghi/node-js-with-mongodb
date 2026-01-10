const Project = require("../models/project");
const aqp = require("api-query-params");
module.exports = {
    createProject: async (data) => {
        // khi truyền dư dữ liệu thì chỉ lấy những trường cần thiết có trong model project
        if (data.type === "EMPTY-PROJECT") {
            let newProject = await Project.create(data);
            return newProject;
        }
        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.usersArr.length; i++) {
                if (!myProject.usersInfor.includes(data.usersArr[i])) {
                    myProject.usersInfor.push(data.usersArr[i]);
                }
            }
            let result = await myProject.save();
            return result;
        }
        return null;
    },
    getProject: async (queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        let result = await Project.find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
        return result;
    },
};

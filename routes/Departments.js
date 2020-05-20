const router = require("express").Router();
const Department = require("../models/Department");

const { addDepartmentValidation } = require("../utils/validation");

router.post("/", async (req, res) => {
    // Add new department data validation
    const { error } = addDepartmentValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking for duplicate name
    const existingDepatmentName = await Department.findOne({ departmentName: req.body.departmentName });
    if (existingDepatmentName) return res.status(400).send("Department already exists");

    // Add new department
    const department = new Department({
        departmentName: req.body.departmentName,
    });

    try {
        const savedDepartment = await department.save();
        res.send({ departmentId: savedDepartment._id });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;

const apiData = require('../model/miniModel');

function controller(req, res) {
    const studentData = apiData()
    res.render('student', { students: studentData })

}

module.exports = controller
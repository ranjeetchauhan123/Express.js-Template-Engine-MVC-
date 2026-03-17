const login = true

function handleRoute(req, res) {
    const data = req.params.name
    if (login) {

        res.send(`This page is ${data}`)
    }
    else {
        res.send('Please Login First')
    }
}

module.exports = handleRoute;
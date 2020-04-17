class HomeController {
    static showHome(req, res) {
        res.render('home')
    }

    static show404(req, res) {
        res.render('error', { error: `Error - 404` })
    }
}

module.exports = HomeController
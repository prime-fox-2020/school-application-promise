class HomeCotroller {
    static home(req, res) {
        res.render('home');
    }

    static notFound(req, res) {
        res.render('error', {err: '404 - Page Not Found'});
    }
}

module.exports = HomeCotroller;
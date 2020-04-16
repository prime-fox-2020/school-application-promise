class HomeController {
    static getHome(req, res) {
        const message = 'Sekolah Muara Ilmu merupakan institusi pendidikan formal yang memiliki akreditasi A.\nSekolah Muara Ilmu menggunakan kurikulum berbasis internasional yang diterapkan di Jepang.\nDengan tim pengajar yang memiliki spesialisasi pada bidang pengajaran, kami dapat mencetak generasi-generasi cemerlang.'

        res.render('home.ejs', {
            message : message
        })
    }

    static notFound(req, res) {
        res.send('Please check again. There is no page which you type (404. NOT FOUND).')
    }
}

module.exports = HomeController;
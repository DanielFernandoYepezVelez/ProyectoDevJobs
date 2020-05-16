exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        tagline: 'Encuentra Y Pública Trabajos Para Desarrolladores Web',
        nombrePagina: 'DevJobs',
        barra: true,
        boton: true
    });
}
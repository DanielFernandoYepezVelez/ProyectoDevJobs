exports.formularioNuevaVacante = (req, res) => {
    res.render('nuevaVacante', {
        nombrePagina: 'Nueva Vacante',
        tagline: 'Llena El Formulario Y Publica Tu Vacante'
    });
}
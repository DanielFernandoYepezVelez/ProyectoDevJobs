exports.flash((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flas('error');
    return next();
});
const showHomepage = (req, res, next) => {
    res.render('index', { title: 'Wild Code School' });
}

const showEmailForm = (req, res, next) => {
    res.render('email');
}


module.exports = { showHomepage,showEmailForm };
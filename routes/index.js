const express = require('express');
const router = express.Router();
const { showHomepage, showEmailForm } = require('../controllers/pages-controller');
const { smtpTransport } = require('../db/config');



/* GET home page. */
router.get('/', showHomepage);

// Mostra o formulário de contacto
router.get('/askForCookiesRecipe', showEmailForm);

// Recebe o formulário de contacto
router.post('/askForCookiesRecipe', function (req, res) {
    // 1. Receber dados do formulário
    // Os detalhes são mapeados dos inupt (atributo name) para o body (atributo name do input)
     // 2. Enviar email com os dados do formulário
    smtpTransport.sendMail({
        from: "Raquel <araquelfmarques@gmail.com>", // Sender
        to: "supergrandma@yopmail.com", // Recipients
        subject: "Hello !", // Subject
        text: /*req.body.emailtext*/ "Hello Grandma, send me the cookies recipe"
    }, (error, response) => {

        if (error) {
            console.log(error);
        } else {
            console.log("Message sent");
            console.log(response);
            res.send('Message sent');
        }
    });
});



module.exports = router;

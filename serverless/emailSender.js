'use strict';

var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-east-1'});

module.exports.handle = (event, context, callback) => {

    let { name, email, quantity, minion } = JSON.parse(event.body);
    let response = { };

    var params = {
        Destination: {
            ToAddresses: [
                "ariel@lawcheck.com.br"
            ],
            CcAddresses: [
                "lucas@bgcbrasil.com.br",
                "thiago@bgcbrasil.com.br",
                "celticslisboa@gmail.com"
            ],
        },
        Message: {
            Body: {
                Text: { Data: 
                `
                    Sua reserva de um Minion em miniatura foi concluída.
                    Estaremos aguardando sua vinda ao nosso estabelecimento para realizar a retirada do seu Minion!

                    Dados do interessado -
                    Nome: ${name || '-'}
                    Email: ${email || '-'}
                    Produto: ${quantity || '-'} unidades do Minion ${minion || '-'}
                `    
                }  
            },
            Subject: { Data: "Reserva realizada com sucesso!" }
        },
        Source: "dayvidmoreira7@gmail.com"
    };

    ses.sendEmail(params, function (err, data) {
        if (err) {
            response = {
                "isBase64Encoded": false,
                "statusCode": 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                "body": JSON.stringify(err)
            };
        } else {
            response = {
                "isBase64Encoded": false,
                "statusCode": 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                "body": "Reserva realizada com sucesso"
            };
        }
        return callback(null, response);
    });
};

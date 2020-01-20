const uuid = require('uuid');
const aws = require('aws-sdk'); 

aws.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new aws.DynamoDB.DocumentClient();

module.exports.store = (event, context, callback) => {
    const { userId, itemId } = JSON.parse(event.body);

    putItemInCart(actionInfos(userId, itemId))
    .then(res => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: `O item está no carrinho!`,
            })
        });
    })
    .catch(err => {
        callback(null, {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: `Ocorreu um erro`
            })
        })
    });
};


    const putItemInCart = item => {
        const actionInfos = {
            TableName: process.env.RESERVE_TABLE,
            Item: item,
        };
        return dynamoDb.put(actionInfos).promise()
            .then(res => item);
    };

    const actionInfos = (userId, itemId) => {
        const timestamp = new Date().getTime();
        return {
            id: uuid.v1(),
            userId,
            itemId,
            createdAt: timestamp,
        };
    };

module.exports.show = (event, context, callback) => {
    const params = {
        TableName: process.env.RESERVE_TABLE,
        Key: {
            userId: event.pathParameters.id,
        },
    };
    
    dynamoDb.scan(params).promise()
    .then(results => {
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(results.Items),
        };
        callback(null, response);
    })
    .catch(error => {
        callback(error);
        return;
    });
};

module.exports.delete = (event, context, callback) => {
    const params = {
        TableName: process.env.RESERVE_TABLE,
        Key: {
            id: event.pathParameters.id,
          }
    };

    dynamoDb.delete(params).promise()
    .then(res => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: `O item saiu do carrinho!`,
            })
        });
    })
    .catch(err => {
        callback(null, {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: `Ocorreu um erro`
            })
        })
    });
}
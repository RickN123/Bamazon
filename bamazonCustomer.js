var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Barclays21",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

});

function listProducts(callback) {

    connection.query('select * from products', callback);
}

function promptForPurchase(callback) {


    inquirer.prompt([
        {

            type: "input",
            name: "item_id",
            message: "What is the ID of the product you would like to purchase?",
            filter: Number
        },
        {

            type: "input",
            name: "stock_quantity",
            message: "How many clothing items would you like to purchase?",
            filter: Number

        }


    ]).then(callback);
}

listProducts(function (err, result, fields) {

    console.table(result);

    promptForPurchase(function (input) {
        var item_id = input.item_id;
        var stock_quantity = input.stock_quantity;


        var currentStockSql = 'select stock_quantity from products where item_id = ' + item_id;

        connection.query(currentStockSql, function (err, result, fields) {

            if (err) console.log(err);

            if (stock_quantity > result[0].stock_quantity) {
                console.log('The amount you\'ve requested is more than what is in stock.\n\n');
                return;
            }

            var updateProductSql = 'update products set stock_quantity = stock_quantity - ' + stock_quantity + ' where item_id = ' + item_id;

            connection.query(updateProductSql, function (err, result, fields) {

                if (err) console.log(err);

                console.log(result.affectedRows + ' record(s) updated\n\n');

                listProducts(function (err, result, fields) {
                    console.table(result);
                });
            });
        });

    })

});


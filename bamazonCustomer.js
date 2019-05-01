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
    connection.end();
});

function connection.end(){
    inquirer.prompt([
        {

            type: "input",
            name: "item_id",
            message: "What is the ID of the product you would like to purchase?",
            validate: validateInput,
            filter: Number
        },
        {

            type: "input",
            name: "stock_quantity",
            message: "How many units would you like to purchase?",
            validate: validateInput,
            filter: Number

        }


    ]).then(function (input) {
        var item = input.item_id;
        var quantity = input.quantity;



    }


}
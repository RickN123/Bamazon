CREATE DATABASE bamazon;



CREATE TABLE products (

item_id INTEGER (30) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (30) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price DECIMAL (10) NOT NULL,
stock_quantity INTEGER (30) NOT NULL

);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nike Airmax', 'Shoes', 75.00, 200),
('Adidas Sweatshirt', 'Clothing', 38.00, 100),
('Reebok Hat','Headwear', 24.00, 300),
('Puma Shirt','Clothing', 28.00, 140),
('Fila Classic','Shoes', 80.00, 400),
('Jordan Dunks','Shoes', 90.00, 250),
('Reebok Iversons','Shoes', 120.00, 500),
('Adidas Snapback','Headwear',25.00, 150),
('Puma Sweater','Clothing', 40.00, 120),
('Jordan Shorts','Clothing',35.00, 110),
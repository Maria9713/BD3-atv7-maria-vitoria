const database = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(database);


//select-1 valor maior que R$700//
// db[collection].find({"valor" : {$gt : 700.0}})

// *************************************************************************



//Select-2 valor menor que R$450,00//
// db[collection].find({"valor": {$lt: 450.0}});

// *************************************************************************

//select-3 valor maior ou igual a R$500,00 e menor ou igual a R$950,00//
// db[collection].find({"valor" : {$gte: 500.00, $lte: 950.00}})
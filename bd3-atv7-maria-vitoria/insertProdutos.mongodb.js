use("BD3-NoSQL-Produtos");

db.getCollection("bd3-nosql-atv7").insertMany(
    [
        {
            "ID": 1,
            "nome_produto": "Cesta de Chocolate Premium",
            "descricao_produto": "Cesta com uma variedade de chocolates finos e trufas artesanais.",
            "valor": 950.00
        },
        {
            "ID": 2,
            "nome_produto": "Caixa de Macarons Gourmet",
            "descricao_produto": "Caixa com 12 macarons nos sabores mais requintados.",
            "valor": 150.00
        },
        {
            "ID": 3,
            "nome_produto": "Bolo de Pote Variado",
            "descricao_produto": "Kit com 6 potes de bolo nos sabores: chocolate, morango, e brigadeiro.",
            "valor": 119.99
        },
        {
            "ID": 4,
            "nome_produto": "Caixa de Bombons Artesanais",
            "descricao_produto": "Caixa com 24 bombons de diversos sabores e recheios especiais.",
            "valor": 199.95
        },
        {
            "ID": 5,
            "nome_produto": "Cesta de Frutas com Chocolate",
            "descricao_produto": "Cesta com frutas frescas acompanhadas de chocolate belga.",
            "valor": 850.00
        },
        {
            "ID": 6,
            "nome_produto": "Torta Holandesa Familiar",
            "descricao_produto": "Torta holandesa grande, ideal para festas e eventos.",
            "valor": 450.00
        },
        {
            "ID": 7,
            "nome_produto": "Sacola de Guloseimas Variadas",
            "descricao_produto": "Sacola com uma seleção de doces diversos: balas, chicletes e marshmallows.",
            "valor": 500.00
        },
        {
            "ID": 8,
            "nome_produto": "Pote de Doce de Leite Argentino",
            "descricao_produto": "Pote grande de doce de leite argentino tradicional.",
            "valor": 179.90
        },
        {
            "ID": 9,
            "nome_produto": "Caixa de Brigadeiros Gourmet",
            "descricao_produto": "Caixa com 20 brigadeiros gourmet nos sabores: tradicional, pistache e chocolate belga.",
            "valor": 169.50
        },
        {
            "ID": 10,
            "nome_produto": "Cesta de Doces Portugueses",
            "descricao_produto": "Cesta com uma variedade de doces portugueses tradicionais.",
            "valor": 299.00
        }
    ]
)

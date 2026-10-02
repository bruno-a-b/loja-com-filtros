/*Array com todos os objetos*/

export const catalogoProdutos = [
    // Arma Branca
    {
    nome: "Sabre",
    modelo: "Padrão Militar",
    especificacoes: "Ferro de Alta Qualidade, Lâmina Afiada",
    categoria: "Arma Branca",
    preco: 50,
    imagem: "./src/assets/img/sabre.webp",
    regiao_origem: "Utopia",
    muralha_origem: "Rose",
    tags_adicionais: "Equipamento Antigo, Espada, Arma Branca, Combate, Defesa, Ataque",
    },

    {
    nome: "Faca de Caça",
    modelo: "Padrão Caçador",
    especificacoes: "Aço Ultra-Resistente de Alta Qualidade, Lâmina Afiada",
    categoria: "Arma Branca",
    preco: 250,
    imagem: "./src/assets/img/faca.png",
    regiao_origem: "Utopia",
    muralha_origem: "Rose",
    tags_adicionais: "Faca, Arma Branca, Combate, Defesa, Ataque, Caça, Sobrevivência",
    },

    // Arma de Fogo
    {
    nome: "Flintlock",
    modelo: "Padrão Militar",
    especificacoes: "Distância Letal de 50 studs",
    categoria: "Arma de Fogo",
    preco: 100,
    imagem: "./src/assets/img/flintlock.webp",
    regiao_origem: "Yarckel",
    muralha_origem: "Sina",
    tags_adicionais: "Equipamento Antigo, Arma de Fogo, Pistola, Combate, Defesa Pessoal, Caça, Ataque",
    },

    {
    nome: "Mosquete",
    modelo: "Padrão Militar",
    especificacoes: "Distância Letal de 300 studs",
    categoria: "Arma de Fogo",
    preco: 75,
    imagem: "./src/assets/img/mosquete.webp",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Rifle, Arma de Fogo, Equipamento Antigo, Combate, Defesa Pessoal, Caça, Ataque",
    },

    // Artilharia
    {
    nome: "Canhão de Muralha",
    modelo: "Padrão Militar",
    especificacoes: "ALTAMENTE PERIGOSO, USO SOMENTE PARA DEFESA DE MURALHAS POR PESSOAL TREINADO",
    categoria: "Artilharia",
    preco: 7500,
    imagem: "./src/assets/img/cannon.png",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Artilharia, Defesa, Ataque, Explosivo, Perigoso, Combate",
    },

    // Combustível
    {
    nome: "Cilindro de Gás",
    modelo: "Padrão Militar",
    especificacoes: "Capacidade de 5000 Unidades de Gás, Perigoso e Explosivo",
    categoria: "Combustível",
    preco: 4000,
    imagem: "./src/assets/img/gas_cylinder.png",
    regiao_origem: "Holst",
    muralha_origem: "Maria",
    tags_adicionais: "Combustível, Equipamento Militar, Explosivo, Perigoso",
    },

    // Equipamento Militar
    {
    nome: "Dispositivo de Manobras Tri-Dimensional Gen. 1",
    modelo: "Gen. 1 MK1",
    especificacoes: "Capacidade de 2 Tanques de Gás (50 Unidades de Gás cada), Movimentação Rápida",
    categoria: "Equipamento Militar",
    preco: 200,
    imagem: "./src/assets/img/odmg_2.png",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Movimentação, Equipamento Militar, Equipamento Antigo, Titã, Equipamento de Combate, Equipamento de Sobrevivência",
    },

    {
    nome: "Caixa de Lâminas",
    modelo: "Padrão Militar",
    especificacoes: "Aço Ultra-Resistente, Lâminas Afiadas para Combate Anti-Titã",
    categoria: "Equipamento Militar",
    preco: 1000,
    imagem: "./src/assets/img/blades_box.png",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Lâminas, Arma Branca, Equipamento Militar",
    },

    // Medicina
    {
    nome: "Atadura",
    modelo: "Padrão Medical",
    especificacoes: "Uso para Médicos e Primeiros Socorros, Cura de Ferimentos Leves",
    categoria: "Medicina",
    preco: 15,
    imagem: "./src/assets/img/bandages.png",
    regiao_origem: "Trost",
    muralha_origem: "Rose",
    tags_adicionais: "Cura, Medicina, Primeiros Socorros, Médico, Combate, Sobrevivência",
    },

    // Minério
    {
    nome: "Cristal de Iceburst",
    modelo: "Alta Pureza",
    especificacoes: "ALTAMENTE VOLÁTIL, PERIGOSO E EXPLOSIVO",
    categoria: "Minério",
    preco: 150,
    imagem: "./src/assets/img/iceburst.png",
    regiao_origem: "Holst",
    muralha_origem: "Maria",
    tags_adicionais: "Combustível, Volátil, Explosivo",
    },

    // Peixe
    {
    nome: "Carpa",
    modelo: "Peixe de Água Doce",
    especificacoes: "20cm de Comprimento, Peixe de Água Doce, Rico em Proteínas, 2 Kg de Peso Médio",
    categoria: "Peixe",
    preco: 5,
    imagem: "./src/assets/img/carpa.jpg",
    regiao_origem: "Quinta",
    muralha_origem: "Maria",
    tags_adicionais: "Peixe, Alimentação, Proteínas, Sobrevivência",
    },

    {
    nome: "Salmão",
    modelo: "Peixe de Água Doce",
    especificacoes: "30cm de Comprimento, Peixe de Água Doce, Rico em Proteínas, 3 Kg de Peso Médio",
    categoria: "Peixe",
    preco: 10,
    imagem: "./src/assets/img/salmao.jpg",
    regiao_origem: "Quinta",
    muralha_origem: "Maria",
    tags_adicionais: "Peixe, Alimentação, Proteínas, Sobrevivência",
    },

    {
    nome: "Baiacu",
    modelo: "Peixe de Água Suja",
    especificacoes: "25cm de Comprimento, Peixe de Água Doce, Venenoso, 2.5 Kg de Peso Médio",
    categoria: "Peixe",
    preco: 2,
    imagem: "./src/assets/img/baiacu.jpg",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Peixe, Alimentação, Venenoso, Sobrevivência, Exótico, Perigoso",
    },

    // Sinalizador
    {
    nome: "Arma de Sinalizador",
    modelo: "Padrão Militar",
    especificacoes: "Cores Disponíveis: Vermelho, Verde, Azul, Amarelo, Preto, Roxo",
    categoria: "Sinalizador",
    preco: 25,
    imagem: "./src/assets/img/flare_gun.png",
    regiao_origem: "Karanese",
    muralha_origem: "Rose",
    tags_adicionais: "Sinalizador, Ajuda, Resgate, Alerta, Sobrevivência",
    },

    // Veículo
    {
    nome: "Cavalo",
    modelo: "Raça de Cavalo Marrom",
    especificacoes: "Extremamente Rápido, Forte e Ágil, Capaz de Transportar Pessoas e Cargas Leves",
    categoria: "Veículo",
    preco: 150,
    imagem: "./src/assets/img/horse.jpg",
    regiao_origem: "Ehrmich",
    muralha_origem: "Sina",
    tags_adicionais: "Movimentação, Transporte, Animal, Veículo, Montaria, Cavalaria",
    },

    {
    nome: "Carroça de Cavalo",
    modelo: "MKII",
    especificacoes: "Transporte de Cargas Leves, Capacidade de 8 Pessoas, Movimentação Rápida e Ágil",
    categoria: "Veículo",
    preco: 1000,
    imagem: "./src/assets/img/cart.webp",
    regiao_origem: "Shiganshina",
    muralha_origem: "Maria",
    tags_adicionais: "Movimentação, Transporte, Animal, Veículo",
    },

    {
    nome: "Carroça de Gás movida a Cavalo",
    modelo: "MKII",
    especificacoes: "Transporte de Cilindros de Gás, Movimentação Rápida e Ágil, Capacidade de 8 Pessoas",
    categoria: "Veículo",
    preco: 5000,
    imagem: "./src/assets/img/cart.webp",
    regiao_origem: "Krolva",
    muralha_origem: "Rose",
    tags_adicionais: "Movimentação, Transporte, Animal, Veículo, Combustível, Perigoso, Explosivo",
    },

    {
    nome: "Carroça de Lâminas movida a Cavalo",
    modelo: "MKII",
    especificacoes: "Transporte de Caixas de Lâminas, Movimentação Rápida e Ágil, Capacidade de 8 Pessoas",
    categoria: "Veículo",
    preco: 5000,
    imagem: "./src/assets/img/cart.webp",
    regiao_origem: "Krolva",
    muralha_origem: "Rose",
    tags_adicionais: "Movimentação, Transporte, Animal, Veículo, Equipamento Militar",
    },

    {
    nome: "Carroça de Ataduras movida a Cavalo",
    modelo: "MKII",
    especificacoes: "Transporte de Ataduras, Movimentação Rápida e Ágil, Capacidade de 8 Pessoas",
    categoria: "Veículo",
    preco: 4000,
    imagem: "./src/assets/img/cart.webp",
    regiao_origem: "Krolva",
    muralha_origem: "Rose",
    tags_adicionais: "Movimentação, Transporte, Animal, Veículo, Medicina",
    },
];
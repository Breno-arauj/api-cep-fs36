// //Objeto que se chama moto//
// let moto = {}

// let pessoa = {
//     nome: "Breno",
//     sobrenome: "Silva",
//     idade: 29,
//     endereco: {
//         rua: "Rua da Paz",
//         numero: 123,
//         cidade: "São Paulo",
//         estado: "SP"
//     }
// }

// //Acessando o valor

// console.log(pessoa.nome) //Breno
// console.log(pessoa.idade) //29
// console.log(pessoa.endereco.rua) //Rua da Paz
// console.log(pessoa.endereco.numero) //123
// console.log(pessoa.endereco.cidade) //São Paulo

// //Atualizando o valor
// pessoa.nome = 'Breno Aragão'
// pessoa.sobrenome = 'Araújo'

// console.log(pessoa);

// //console.log(pessoa)

// //Adicionando um novo elemento ao objeto

// pessoa.profissao = 'Advogado'
// pessoa['peso'] = 140.4;

// console.log(pessoa);

// //Deletando um elemento do objeto

// delete pessoa.profissao;

// console.log(pessoa);

// //Adicionando uma propriedade

// pessoa.nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`;

// console.log(pessoa);

// //Verificando se um elemento existe

// console.log('nome' in pessoa); // true
// console.log('idade' in pessoa); // true
// console.log('idade' in moto); // false

// //Listar propriedade do objeto

// console.log(Object.keys(pessoa));

//Desestrutação de objeto para criar um novo

const pessoa_teste = {...pessoa};

// console.log(pessoa_teste);

//Criar um array com a combinação chave valor

console.log(Object.entries(pessoa));
console.log(objeto);

//Converter um objeto em JSON

const objeto = JSON.stringify(pessoa);
console.log(objeto);

//15 - Mesclando objeto

let moto_objeto = {
    marca: 'Honda',
    modelo: 'ADV',
    ano: 2024,
    cor: 'Vermelho',
    cc: 150
}

let moto_objeto2 = {
    tipo: 'Trail',
    ano: 2025,
    combustivel: 'flex',
    chassi: 'fdsfg5dsf6g4d65fgd6sf45g6'
}


let moto_completa = Object.assign({}, moto_objeto, moto_objeto2 );
//console.log(moto_completa)

//16 -propriedade com função e refenciado a variável de escopo this ao objeto
moto.marca = 'Honda';
moto.modelo = 'XRE';
moto.ano = 2014;
moto.ligar = function() { return `A moto ${moto.marca} ${this.modelo}  ligou!`}

/* console.log(moto);
console.log(moto.ligar()) */

const ligarMoto =() => `A moto ${moto.marca} ${moto.modelo}  ligou!`

// 17 - Convertendo uma string em objeto JSON

let jsonString = '{"nome": "Breno", "idade": 30, "cores_favoritas": ["branco", "prata", "vermelho"]}'
let jsonObj = JSON.parse(jsonString)
//console.log(jsonObj);

//18 - Identação do objeto
const obj = { nome: 'Teste 1', valor: 12, ativo: false}
console.log(JSON.stringify(obj, null, 4));
// const nome = 'Guilherme';
// const sobrenome= 'Barros';

// const falaNome = () => nome + ' ' + sobrenome;

// //module.exports.nome = nome;
// //module.exports.sobrenome = sobrenome;
// //module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.algumacoisa = 'Qualquer coisa';

// console.log(module.exports);

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
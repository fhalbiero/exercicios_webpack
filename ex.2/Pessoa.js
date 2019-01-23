
export default class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }

    toString() {
        return `O nome é ${this.nome}`;
    }
}
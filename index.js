class Hero {
    constructor(nome, idade, tipoPersonagem) {
        this.nome = nome
        this.idade = idade
        this.tipoPersonagem = tipoPersonagem
    }

    atacar() {
    let ataque
    if (this.tipoPersonagem === "mago") {
        ataque = "magia"
    } else if (this.tipoPersonagem === "guerreiro") {
        ataque = "espada"
    } else if (this.tipoPersonagem === "monge") {
        ataque = "artes marciais"
    } else if (this.tipoPersonagem === "ninja"){
        ataque = "shuriken"
    } else {
        ataque = "sua força braçal"
    }
    return `O ${this.tipoPersonagem} atacou usando ${ataque}`
}
}

let qualPersonagem = new Hero("André", 28, "feiticeiro")
console.log(qualPersonagem.atacar())

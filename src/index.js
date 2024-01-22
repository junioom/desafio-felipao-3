class hero{
    constructor(nome, idade, sexo, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = " "
        this.sexo = sexo
    }

    atacar(){
        if (this.sexo === "F"){
            switch (this.tipo){
                case "mago":
                    this.ataque = "magia"
                    console.log(`A Heroina ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break
    
                case "guerreiro":
                    this.ataque = "espada"
                    console.log(`A Heroina ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break
    
                case "ninja":
                    this.ataque = "shuriken"
                    console.log(`A Heroina ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break
    
                case "monge":
                    this.ataque = "artes marciais"
                    console.log(`A Heroina ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                }    
        }
        else{
            switch (this.tipo){
                case "mago":
                    this.ataque = "magia"
                    console.log(`O Herói ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break

                case "guerreiro":
                    this.ataque = "espada"
                    console.log(`O Herói ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break

                case "ninja":
                    this.ataque = "shuriken"
                    console.log(`O Herói ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
                break

                case "monge":
                    this.ataque = "artes marciais"
                    console.log(`O Herói ${this.nome}, do tipo ${this.tipo} atacou usando ${this.ataque}!`)
            }
        }
    }
}

let saidas = [
    new hero("Junioom", "18", "M", "mago"), 
    new hero("Mateu", "16", "M", "guerreiro"), 
    new hero("Ceci", "18", "F", "ninja"), 
    new hero("Marco", "17", "M", "monge")]

for (let cont = 0; cont <= 3; cont++){
    saidas[cont].atacar(saidas[cont])
}


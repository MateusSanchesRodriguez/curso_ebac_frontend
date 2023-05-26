function Veiculo(num_rodas, cor) {
    this.num_rodas = num_rodas,
    this.cor = cor,
    this.velocidade_maxima= function () {
        console.log("A velocidade máxima desse veículo não foi definida.");
    }
}

function Carro(marca, modelo, num_rodas, cor) {
    Veiculo.call(this,num_rodas, cor)
    this.marca = marca,
    this.modelo = modelo
    this.velocidade_maxima = function() {
        console.log("A velocidade máxima do carro é de 200 km/h.");
    };
}

function Bicicleta(marca, modelo, num_rodas, cor) {
    Veiculo.call(this,num_rodas, cor)
    this.marca = marca,
    this.modelo = modelo
    this.velocidade_maxima = function() {
        console.log("A velocidade máxima da bicicleta é de 30 km/h.");
    };
}

function Moto(marca, modelo, num_rodas, cor) {
    Veiculo.call(this,num_rodas, cor)
    this.marca = marca,
    this.modelo = modelo
    this.velocidade_maxima = function() {
        console.log("A velocidade máxima da moto é de 300 km/h.");
    };
}


const carro1 = new Carro("Ford", "ka", 4, "vermelho");
const bicicleta1 = new Bicicleta("Caloi", "Cross", 2, "azul");
const moto1 = new Moto("Honda", "CBR500R", 2, "preta");


console.log(carro1)
carro1.velocidade_maxima()
console.log(bicicleta1)
bicicleta1.velocidade_maxima()
console.log(moto1)
moto1.velocidade_maxima()




class Alunos{
    constructor(nome, nota_aluno) {
        this.nome = nome
        this.nota_aluno = nota_aluno
    }
}

const boletim = [
    new Alunos('João',8),
    new Alunos('Maria',7),
    new Alunos('Pedro',5),
    new Alunos('Ana',9)
]


const alunosAprovados = boletim.filter(function (aluno) {
    return aluno.nota_aluno >= 6
});

alunosAprovados.forEach(aluno => {
    console.log(`Aluno aprovado: ${aluno.nome}`);
});




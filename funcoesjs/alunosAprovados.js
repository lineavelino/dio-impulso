// Atividade 1
const alunos = [
    {
        nome: "Aline",
        nota: 10
    },
    {
        nome: "André",
        nota: 0.25,
    },
    {
        nome: "Cynthia",
        nota: 7
    }
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nome, nota } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7))
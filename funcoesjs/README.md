## Atividade 1: Alunos Aprovados

- [x] Crie uma função que receba o array `alunos` e um número que irá representar a média final;

- [x] Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;

- [x] Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
```
# Projeto Hero ⚔️

## Descrição

O **Projeto Hero** é uma aplicação em JavaScript que define uma classe `Hero`. Esta classe permite criar personagens de diferentes tipos e realizar ataques baseados em seu tipo. Este projeto demonstra a utilização de classes, métodos e lógica condicional em JavaScript.

## Funcionalidades

- **Criação de Personagens**: Permite criar heróis com nome, idade e tipo de personagem.
- **Ataques Específicos**: O método `atacar()` define o tipo de ataque baseado no tipo de personagem.

## Estrutura do Código

### Classe `Hero`

- **Construtor**: Inicializa os atributos do herói.
  - `nome`: Nome do herói.
  - `idade`: Idade do herói.
  - `tipoPersonagem`: Tipo do personagem (por exemplo, "mago", "guerreiro", "monge", "ninja").

- **Método `atacar()`**: Retorna uma string descrevendo o tipo de ataque do herói com base no tipo de personagem.

### Exemplo de Uso

```javascript
// Criação de um novo herói
let qualPersonagem = new Hero("André", 28, "feiticeiro");

// Exibição do tipo de ataque
console.log(qualPersonagem.atacar()); // Saída: "O feiticeiro atacou usando sua força braçal"

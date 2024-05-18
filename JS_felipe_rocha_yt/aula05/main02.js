// Lista cotendo vários objetos
const todos = [
    {
        id: 1,
        description: 'Estudar',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true
    },
    {
        id: 3,
        description: 'Jogar',
        isCompleted: true
    }
];

const descriptionOfLastTodo = todos[2].description;
// OU -> const descriptionOfLastTodo = todos[todos.length - 1].description;
console.log(descriptionOfLastTodo);
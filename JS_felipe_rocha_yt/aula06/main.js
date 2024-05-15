// JSON
const todos = [
    {
        id: 1,
        description: "Estudar React",
        isCompleted: false
    },
    {
        id: 2,
        description: "Vender cimento",
        isCompleted: true
    },
    {
        id: 3,
        description: "Estudar SQL",
        isCompleted: true
    }
];

/* converte para JSOn, deixa de ser um objeto e fica um tipo de "string" 
mas em formato JSON */
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Convertendo para lista novamente
const todoList = JSON.parse(todosJSON);
console.log(todoList);

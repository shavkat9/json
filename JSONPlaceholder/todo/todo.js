const elTodo = document.querySelector('.todos')

const renderTodo = (todos) => {

    for(let i = 0; i < todos.length; i++){
        const todo = document.createElement('li')
        const userId= document.createElement('h2')
        const id = document.createElement('p')
        const title = document.createElement('span')


        todo.classList.add('todo__Item')

        userId.textContent = todos[i].userId
        id .textContent = todos[i].id 
        title.textContent = todos[i].title

        todo.append(userId)
        todo.append(id )
        todo.append(title)

        elTodo.append(todo)
    }
}
async function getTodos (){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const result = await response.json();

  console.log(result)
  return result
}
getTodos().then((result, rejected) => {
    renderTodo(result)
});
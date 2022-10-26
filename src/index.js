
// first check what to grab
const main = document.querySelector('#main-content')
//console.log(main)

document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("new-task-description")
  const taskList = document.querySelector('#tasks')
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    createMyTodos(e.target)
    e.target.reset()
    document.getElementById('new-task-description').value
    // const listItem = document.createElement('li')
    // listItem.innetText = newTaskDescription.value
    // taskList.appendChil(li)

  })
})

function createMyTodos(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', buttonDelete)
  btn.textContent = ' x '
  li.textContent = `${todo}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#list').appendChild(li)
}

function buttonDelete(e) {
  e.target.parentNode.remove()
}












// document.addEventListener('DOMContentLoaded', () => {
//   let main = document.querySelector('main')
//   main.addEventListener('submit', (e) => {
//     e.preventDefault()
//     createMyTodos(e.target.tasks)
//     form.reset()
//   })
// })



/*


const main = document.querySelector('#main-content')
console.log(main)


const taskForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')

taskForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const newTask = document.querySelector('#new-task-description').value

  taskList.innerHTML += `<li> ${newTask}
  <button> x </button
  </li>
  `
  taskForm.reset()
})



taskList.addEventListener('click', function (e) {

  e.target.parentNode.remove()
}
)

*/



/*
  console.log(e.target)
  if (e.target.x === "delete") {

    */

/*
const taskItem = document.createElement('li')
taskItem.innerText = newTask



let btn = document.createElement('button')
btn.textContent = 'x'
.appendChild(btn)


taskList.appendChild(taskItem)


*/


/*document.addEventListener("DOMContentLoaded", () => {
  const newTaskDescription = document.getElementById("new-task-description")
  const taskList = document.querySelector('#tasks')
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(newTaskDescription.value)

    e.target.newTaskDescription

    const listItem = document.createElement('li')
    listItem.innetText = newTaskDescription
    taskList.appendChil(listItem)


  })
});

*/
/*
function handleToDo(newTaskDescription) {
  let ul = document.createElement('ul')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  ul.textContent = newTaskDescription
  ul.appendChild(btn)
  console.log(ul)
  document.querySelector('#tasks')
  console.log(ul.childNodes)
}

*/

/*
function handleTaskDescription(taskDescription){
  let p = document.createElement('p')
  p.textContent= taskDescription
  document.querySelector('#taskDescription_container').appendChild(p)
}

*/








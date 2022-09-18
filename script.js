
const render=()=>{
    const todoList=document.getElementById('todo-list');
    todoList.textContent=''
    const  todos=JSON.parse(localStorage.getItem('Todos'));
    if(todos){
        todos?.map(ele=> {
            const li =document.createElement('li');
            li.classList.add("py-2", "flex", "justify-between");
            li.innerHTML = `<p>${ele.title}</p> 
        <button onclick="handleDelete('${ele.id}')" class="bg-red-400 px-2 py-1 rounded-md" >Delete</button>`;
  
        todoList.appendChild(li);
        })
    }
    else {
        const li =document.createElement('li');
        li.innerText="Data Not found"
        todoList.appendChild(li)
    }
}
const handleTodo = () => {
   let todoTxt=document.getElementById('todo-text').value;
 
   const id=Math.random().toString(36).slice(2);
   const todos=JSON.parse(localStorage.getItem('Todos'));
    if(!todos && todoTxt){
        const setLocalstr=[{
            id,
            title:todoTxt,
            complete:false,
          }]
          localStorage.setItem('Todos',JSON.stringify(setLocalstr))
    }
    else if(todos && todoTxt){
        const setLocalstr=[ ...todos,
            {
            id,
            title:todoTxt,
            complete:false,
          }]
          localStorage.setItem('Todos',JSON.stringify(setLocalstr))
    }
    render()
    todoTxt.value='';
}
// handle delete
const handleDelete=(id)=>{
    const todos=JSON.parse(localStorage.getItem('Todos'));
    const filter=todos.filter(item=> item.id!==id)
    if(filter.length){
        localStorage.setItem('Todos',JSON.stringify(filter))
    }
    else{
        localStorage.removeItem('Todos')
    }
    render()
}
//clear todo
const clearTodo=()=>{
    localStorage.removeItem('Todos')
    render()
}
render()
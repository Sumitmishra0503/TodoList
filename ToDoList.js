const input = document.querySelector(`.input`);
const Add = document.querySelector(`.Add`);
const Display_Ans = document.querySelector('.display_ans');
const inputDate = document.querySelector('.input-date');

const TodoList = [
    
];



function RenderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < TodoList.length;i++){

        const todo = TodoList[i];
        const {name} = todo;
        const {date} = todo;
        
        const html = `<p>
        ${name}
        ${date}
        <button onclick = "
            TodoList.splice(${i},1);
             RenderTodoList();
        ">Delete</button>
        </p>`;
        todoListHTML += html;
    }
    Display_Ans.innerHTML = todoListHTML;
}
input.onkeydown = function(){
    if(event.key === `Enter`){


        TodoList.push(
            {
                name: input.value,
                date:inputDate.value,
            }
        );
        // console.log(TodoList);
        RenderTodoList();
        input.value = '';
    }
}
Add.onclick = function(){
    TodoList.push(
        {
            name: input.value,
            date:inputDate.value,
        }
    );
    // console.log(TodoList);
    RenderTodoList();
    input.value = '';
}
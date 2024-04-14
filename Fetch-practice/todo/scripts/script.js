const url="https://priyansht.github.io/24W-JavaScript-Week14/todos.json";
const subBtt=document.querySelector("#searchBtt");
const userSearch=document.querySelector("#search-input");
const list=document.querySelector("#tableBody");

function fetchDataAPI(){
    const urlbase="https://priyansht.github.io/24W-JavaScript-Week14/todos.json";
    const userInput=userSearch.value;
    if(userInput===""){
        alert("Please enter a user id");
        
    }
    else{
        const url=`${urlbase}?userId=${userInput}`;
        console.log(url);
        fetch(url).then(response=>response.json()).then(json=>displayTodos(json));
    }
    console.log(userInput);
}
function displayTodos(json){
    console.log(json);
    const todosList=json.todos;
    //create table elements
    todosList.forEach(todo=>{
        const tRow=document.createElement("tr");
        const userIdTd=document.createElement("td");
        const todoIdTd=document.createElement("td");
        const completedTd=document.createElement("td");
        const idTd=document.createElement("td");
        //add data to td tags
        userIdTd.textContent=todo.userId;
        todoIdTd.textContent=todo.todo;
        completedTd.textContent=todo.completed;
        idTd.textContent=todo.id;

        tRow.appendChild(userIdTd);
        tRow.appendChild(todoIdTd);
        tRow.appendChild(completedTd);
        tRow.appendChild(idTd);

        list.appendChild(tRow);
    });
}
subBtt.addEventListener("click", fetchDataAPI);
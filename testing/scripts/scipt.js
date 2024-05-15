const printRes=document.querySelector('.displayRecepies');
const baseUrl="https://github.com/MazzoccoR/1073-JS/blob/main/testing/json/test.json";
fetch(baseUrl).then(response => response.json()).then(json => displayData(json));
function displayData(json){
    const data = json.recepies;
    const name=document.createElement('h2');//<h2></h2>
    const ingredients=document.createElement('ul');//<ul></ul>
    const instructions=document.createElement('ol');//<ol></ol>
    const more=document.createElement('p')//<p></p>

    name.textContent=data.name;
    data.ingredients.forEach(ingredient=>{
        const li=document.createElement('li');
        li.textContent=ingredient;
        ingredients.appendChild(li);
    });
    data.instructions.forEach(instruction=>{
        const li=document.createElement('li');
        li.textContent=instruction;
        instructions.appendChild(li);
    });
    more.textContent=data.more;
    printRes.appendChild(name);
    printRes.appendChild(ingredients);
    printRes.appendChild(instructions);
    printRes.appendChild(more);

}
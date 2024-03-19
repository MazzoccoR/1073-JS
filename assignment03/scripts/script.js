const summary = document.getElementById('done');
const summaryTitle = document.getElementById('finished');
const doneButton = document.getElementById('submit');
let stuNum = document.getElementById('studNum');
let studName= document.getElementById('studName');

document.addEventListener('DOMContentLoaded', function(){
    
    class Pizza{
        constructor(){
        this.size="";
        this.crust="";
        this.toppings=[];
        this.name ="";
    }
        served(){
            console.log('Pizza is served');
            let nullToppings=this.toppings.length;
            if(nullToppings===0){
                this.toppings="without toppings";
            }
            else{this.toppings=this.toppings.join(", ");}
            summary.textContent = `A ${this.size} pizza with ${this.crust} crust and ${this.toppings} toppings is ready for ${this.name}`;studName.innerHTML = "Rbecca Mazzocco";
studNum.innerHTML = "LU: 1218195 GC:200560972";
        }
    }
    let mazzPizza= new Pizza();
    function orderPioza(){
        mazzPizza.size = document.getElementById('size').value;
        mazzPizza.crust = document.getElementById('crust').value;
        mazzPizza.toppings = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(topping => topping.value);
        mazzPizza.name = document.getElementById('name').value;
        if(!mazzPizza.name.trim()){//help from google, just makes sure there is a name entered
            alert('Please enter your name');
            return;
        }
        mazzPizza.served();
    }
    doneButton.addEventListener('click', orderPioza);
});
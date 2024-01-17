var output = document.querySelector("p");//use p tag that is already created
output.textContent = 10;
 /* STEP 1: Creating Strings */
//innerHTML="<p>10</p>"//makes the p tag
var string1 ="Hello! How are you?";
output.textContent=string1;
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
var string2='It\'s cold out there!';
output.textContent=string2;
    /* STEP 3: Concatenation */
output.textContent=string1+" "+string2;
output.textContent=33+20;
output.textContent=33+20+"1";//does the addition and adds the string at the end
output.textContent="hello"+22+22+1+3;//output all in strings

    /* STEP 4: Numbers and Strings */
    output.textContent="check"+55;//the 55 is converted into a string then concatinated with the other string
    // numbers can be converted to strings
    var num1="20";
    var num2 =Number(num1);
    output.textContent=typeof(num2);
    // strings can be converted to numbers, too

    // and back again, if we want
    output.textContent=num2.toString()+String(num2);
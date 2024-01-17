var output = document.querySelector("p");
    var myString = "Hello! How are you are?";
output.textContent=myString
    /* STEP 1: String Length */
    output.textContent=myString.length;
    /* STEP 2: Retrieving a Specific String Character */
    output.textContent=myString[4];//count starts with 0 //o
    output.textContent=myString[9];//w
    /* STEP 3: Extracting Part of a String */
    output.textContent=myString.indexOf("are");//11 cause start with 0 and gives the position of a
    output.textContent=myString.indexOf("is");//not in the string so output is -1
    output.textContent=myString.indexOf("ARE");//IS case sentitive
    // Note - if the substring is not found within the string, indexOf() returns -1
    output.textContent=myString.slice(4,9);//only incude the characters between 4 and 9
    output.textContent=myString.slice(4);//goes to the end of the string


    // Note - if you don't specify where to end the slice, the method returns the rest of the string

    /* STEP 4: Changing Case */
    output.textContent=myString.toUpperCase();//toLocalUpperCase should not have a difference for english language but stick to toUpperCase
    output.textContent=myString.toLowerCase();

    /* STEP 5: Updating Parts of a String */  //2 arguments, 2st what you want to replace, 2nd what you want to replace it with
    output.textContent=myString.replace("are", "meeeee")//only replaces the first one
    output.textContent=myString.replaceAll("are", "meeeee")//replaces all cases
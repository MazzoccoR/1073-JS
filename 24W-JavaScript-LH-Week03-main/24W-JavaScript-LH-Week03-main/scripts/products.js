// STEP 1: Declare and initialize variables
// STEP 1a: Grab the parts of the DOM that we need to build the invoice
var textBody=document.querySelector("tbody");
var priceTotalTd=document.querySelector("td");
// STEP 1b: Build the products array in the format 'Product Name: 0.00'
var productsArray=["Cap: 12.99","Shirts: 20.43","Pants: 30.21", "Tshirts: 15.60"];
// STEP 1c: Set up invoiceTotal variable - start at zero
var totalInvoice=0;
// STEP 2: Build a loop to iterate through the products array
for(let i=0;i<productsArray.length;i++){
    //console.log(productsArray[i]);
    // STEP 3: Break apart the product name from the price for each item with split()
    var products=productsArray[i].split(": ");
    //console.log(products);
    // STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
    var productPrice=Number(products[1]);
    //console.log(productPrice);
    // STEP 5: Add the price of this product to the invoice total
    totalInvoice+=productPrice
    //console.log(totalInvoice);
    // STEP 6: Capture each product name and price as variables 
    var productName=products[0];
    //console.log(productName);
    // STEP 7: Create a TR element for this product and price in the invoice table
    var productTr=document.createElement("tr");//<re></tr>
    // STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
    //<td>Product Name</td><td>Price</tr>
    var productTd="<td>"+productName+"</td><td>"+productPrice+"</tr>";
    //console.log(productId);
    // STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
    productTr.innerHTML=productTd;
    console.log(productTr);
    tableBody.appendChild(productTr);
    // STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
    priceTotalTd.textContent="$"+totalInvoice;
}
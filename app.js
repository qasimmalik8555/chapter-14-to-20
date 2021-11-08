

          //////CHAPTER :13 TO CHAPTER :15/////////////////////////






// QUESTION: 1-7 //
/* var arr = Array();
var arr = [];
var namesArray = ["ZAIN" , "ARBAZ", "daniyal"];
var numArray = [23, 86,98];
var boolArray = [true, false, false];
var mixArray = ["Zain" , 90 , true];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", 
                         "M.Phil", "PhD"]; 
 document.write("Qualifications:" + "<br>");
document.write(qualifications[0] + "<br>");        
document.write(qualifications[1] + "<br>");  
document.write(qualifications[2] + "<br>");  
document.write(qualifications[3] + "<br>");  
document.write(qualifications[4] + "<br>");  
document.write(qualifications[5] + "<br>");  
document.write(qualifications[6]+ "<br>");  
document.write(qualifications[7]+ "<br>");  
 */

// QUESTION: 8 //
/* var students = ["ali" , "usama" , "asad"];
var marks = [480, 350 ,400];
var percentages = [480/500 * 100 , 350/500 * 100, 400/500 *100]
document.write("Score of subhan is: " + marks[0]+  " Percentage: " + percentages[0] + "% <br> ");
document.write("Score of mahad is: " + marks[1]+  " Percentage: " + percentages[1] + "% <br> ");
document.write("Score of ahmed is: " + marks[2]+  " Percentage: " + percentages[2] + "% <br> ");
 */

// Answer 9 //
 /* var colours = ["blue", "red", "orange", "purple"]; 
document.write(colours);
var begcol = prompt("enter beginning colour");
colours.unshift(begcol);
document.write("<br>" + colours);
var endcol = prompt("enter ending colour");
colours.push(endcol);
document.write("<br>" + colours);
var begcol1 = prompt("enter 1 more beginnig colour");
var begcol2 = prompt("enter 1 more beginnig colour");
colours.unshift(begcol1);
colours.unshift(begcol2);
document.write("<br>" + colours);
colours.shift();
document.write("<br>" + colours);
colours.pop();
document.write("<br>" + colours);  
 var indcol = prompt("enter the index at which you want to add a value");
var colname = prompt("enter the colour name"); 
colours.splice(indcol, 0, colname);
document.write("<br>" + colours);  
 var indcol = prompt("enter the index at which you want to delete colours");
var coldel = prompt("how many colours you want to delete")
colours.splice(indcol, coldel);
document.write(colours); */

// Answer 10 //
/* var scores = [320, 560, 927, 187];
document.write(scores);
scores.sort();
document.write( "<br>" +scores); */

// Answer 11 //
/* var cities = ["Karachi" , "Islamabad", "Quetta", "Peshawar", "Lahore"];
document.write(cities);
var selectedCities = cities.slice(1, 4);
document.write("<br>" + selectedCities); */

// Answer 12 //
/* var arr = ["This ", " is ", " my ", "cat"];
document.write(arr);
arr = arr.join("");
document.write("<br>"+ arr); */

// Answer 13 //
/* var devices = ["Mouse", "Keyboard", "Monitor" , "CPU"];
document.write("<h1>Devices:</h1> <br>" + devices);
document.write("<br>" + devices.shift());
document.write("<br>" + devices.shift());
document.write("<br>" + devices.shift());
document.write("<br>" + devices.shift());
 */

// Answer 14 //
/* var devices = ["Mouse", "Keyboard", "Monitor" , "CPU"];
document.write("<h1>Devices:</h1> <br>" + devices);
document.write("<br>" + devices.pop());
document.write("<br>" + devices.pop());
document.write("<br>" + devices.pop());
document.write("<br>" + devices.pop()); */

// Answer 15 //
 /* var manufacturers = ["Apple", "Samsung", "Infinix" , "Oppo" , "RealMe"];
document.write("<br>" + manufacturers[0]);
document.write("<br>" + manufacturers[1]);
document.write( "<br>" + manufacturers[2]);
document.write( "<br>" + manufacturers[3]);
document.write("<br>" + manufacturers[4]);  */




   //////////////////////chapter 16 to 20//////////////


// Answer 1 //
/* var arr = [[], [], []]; */
// Answer 2 //"""""""""""""
/* var arr = [["0","1","2","3"], ["1","0","1","2"], ["2","1","0","1"]];
document.write(arr[0].join(" ") + "<br>" + arr[1].join(" ") + "<br>" + arr[2].join(" "));
 */

// Answer 3 //
/* for(var i = 0; i < 11; i++){
    document.write("<br>" + i);
} */

// Answer 4 //
/* var table = prompt("Enter table number");
var length = prompt("Enter table length");
for(var i = 0; i <= length; i++){
    document.write("2 X " + i + "=" + i * 2 + "<br>");
} */

// Answer 5 //
/* var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruits + "<br>");
for(var i = 0; i< fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
} */

// Answer 6 //
 /* for(var i = 1; i <= 15; i++){
    document.write(i + " , ");
}  */
  /*  for(var i = 15; i <= 15; i--){
    if(i >= 1){
        document.write(i + " , ");
    }
    
}    */ 
/* for(var i = 0; i <= 20; i++){
    if(i%2 == 0){
        document.write(i + ",");
    }
} */
/* for(var i = 1; i <= 20; i++){
    if(i%2 !== 0){
        document.write(i + " , ");
    }
} */
/* for(var i = 2; i <= 20; i++){
    if(i%2 == 0){
        document.write(i + "k, ");
    }
}
 */

// Answer 7 //
 /* var items = ["cake", "apple pie", "cookie" , "chips", "patties"];
var search = prompt("what do you want to order?");
var isMatch = false;
for(var i = 0; i < items.length; i++){
    if(search === items[i]){
        isMatch = true;
        alert(items[i] + " is available at index " + i + " in the bakery");
        break;
    } 
      
} if(isMatch === false){
    alert("Your selected item is not available in bakery");
    
} */

// // Answer 8 //
// /* var A = [24, 53, 78, 91, 12];
// var largest = 0;
// for(var i = 0; i <= largest; i++){
//     if(A[i] > largest){
//         largest = A[i];
//     }
// }
// console.log(largest); */

// // Answer 9 //
// /* var A = [24, 53, 78, 91, 12];
// var smallest = 0;
//  for(var i = 0; i >= smallest; i++){
//     if(A[i] < smallest){
//         smallest = A[i];
//     }
// }
// console.log(smallest);  */

// // Answer 10 //
// /* var num = 5;
// for(var i = 1; i < 100; i++){
//     if(num * i <=100){
//         document.write(num * i + ", ")
//     }


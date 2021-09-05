
// Write your code here
const num1 = 2;
const num2 = 31;

//Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
const multiply = num1 * num2;
//Create a variable called random that will generate a random integer greater than 0.
    //Math.random() returns a number between 0 and 0.999..., which we multiply by 10 to give us a number between 0 and 9.999....
    //We then pass that number to Math.floor(), which returns an integer between 0 and 9.
const random = Math.floor(Math.random() * 10) + 1;
//Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
//16/6 has a remainder of 4
const num3 = 6;
const num4 = 16;
// 16 % 6 
const mod = num4 % num3;
//Create a variable called max that finds the highest number in a set; the value returned should be 20.
    //ensure 20 is the highest number passed in 
const max = Math.max(1, 2, 3, 4, 20);

//ALWAYS ADD ";" TO THE END OF EACH STATEMENT!!!
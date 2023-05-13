<!-- @format -->

# SpringBoard_Exercises

This Repository will be for the assignments that will not represent working apps/webpages.

# Purpose:

Listing the files that I add to My exercises repository.
The corrisponding questions/ problems posed will be added to this read me.
As a study guide for myself.

# Exercise list:

## 1.HTML Fundemental Exercise:

Write the necessary HTML to make your page look just like the one provided.
Make sure to create an HTML file and use tags like **_<h1>_**, **_<p>_** and **_<img>_**
https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F814f029a-20e6-4b09-90c7-4f1ba07857a0%2FUntitled.png?id=1c733833-9942-4a44-8477-48a27c784e80&table=block&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2

_AnswerKey_: cookies.html

## 2.Tables and Forms Exercise:

Write the necessary HTML to make your page look just like this one:
https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf3b43c2-cd17-4357-a351-e53f3a87ff82%2FUntitled.png?id=872cf19c-5d42-479e-a419-217e46ac5c07&table=block&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2

_AnswerKey_: tables-forms_exercises.html

## 3. CSS Intro Exercise:

### **Part 1 - Conceptual**

- What is a CSS selector? Please give an example.
- What is a CSS Declaration? Please give an example.
- What is a CSS Property? Please give an example.
- What is a CSS Value? Please give an example.
- What are the three ways to include CSS?
- What is the difference bettwen **_rgb_** and **_rgba_**?
- What is an **_em_**?
- What are the differences between **_em_** and **_rem_**?
- How do you include a google font?

### **Part 2 - Application**

Make the following changes:

- Change the background color of the entire page to be **_#d0cfcf_**
- Change the font of all paragraph tags to be Roboto Regular (this is a google font)
- Remove the default underline in all anchor tags on the page
- Using CSS, capitalize all **_h2_** elements on the page
- For the **_body_** tag, make sure the font-size is 16 pixels;
- For all **_section_** tags, make sure the font-size is 1.5 ems;
- (This last step will require outside research) - Add a drop shadow to the **_h1_** tag on the page. Ensure that there is 5px of horizontal and vertical offset and 2px of blur radius. The color of the drop shadow should be red.

_AnswerKey_: CSS-style_exercise.css

## 4. CSS Box Model Exercise:

### **Conceptual**

- What is the box model?
- What is the difference between margin and padding?
- What is collapsing margin?
- What is the purpose of the **_box-sizing_** CSS property?
- What does the **_outline_** property do?
- How do you add a background image in CSS?
- Given a **_div_** with a width of 200px, margin of 20px and padding of 20px, what is the calculated width by the browser?
- Given a **_div_** with a height of 100px, border of 10px and padding of 20px, what is the calculated height by the browser?
- What does **_margin:auto_** do?

_AnswerKey_: box-model_exercises.txt

## 5. CSS Mock Exercises:

### **Part I: CSS Positioning**

In this exercise, you’ve got an HTML file with a few divs inside of the **_body_** tag. Your goal is to modify the CSS so that you can make the page look like each of the following screenshots.

You should ONLY be modifying the CSS in this exercise: don’t change anything in the HTML file!

For a lot of these, there are many different ways to acheive the desired layout. Try to focus on using *positioning*, rather than other CSS concepts like margins, flexbox, or floats.

_AnswerKey_: positioning.css (comment out the examples you are not looking at)

### **Part II: CSS Mocks**

In this exercise, your goal is to create the three design elements depicted below. You can choose your own images for the later mocks, but otherwise you should try to make the styling as close to what you see as possible. Most importantly, don’t use any external CSS libraries, and no JavaScript! You should be writing all of the CSS you need yourself.

**For this exercise, you will write the HTML and CSS from scratch—we don’t provide starter code for you.**

_AnswerKey_: jm2.html , jm2.css

## 6. Variables and Data Types Exercise:

1. Create the following variables
   - **\*name**, which is a string set to your current name\*
   - **\*dayOfBirth**, which is a number set to the day of your birth month\*
2. See what happens when you have multiple variables of the same name. Which one takes precedence?
3. Write some JavaScript that prompt’s the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.
4. Create a string that contains both single quotes and double quotes.
5. What is the difference between null and undefined?
6. What is **_NaN_** in JavaScript? What is the **_typeof NaN_**?
7. You can declare a variable by typing **_let thing;_**. What is the value of **_thing_**?

_AnswerKey_: variables_data-types_exercises.txt

## 7. Boolean Logic Exercise:

### **Part I**

Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

1. **_2 == “2”;_**
2. **_2 === 2;_**
3. **_10 % 3;_**
4. **_10 % 3 === 1;_**
5. **_true && false;_**
6. **_false || true;_**
7. **_true || false;_**

### **Part II**

Answer the following questions about this code block:

```jsx
let isLearning = true;
if (isLearning) {
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}
```

1. What should the above code console.log?
2. Why do we not need to specify **_if(isLearning === true)_**? Why does **_if(isLearning)_** work on its own?

```jsx
let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if (firstVariable) {
  console.log("first");
} else if (firstVariable || secondVariable) {
  console.log("second");
} else if (firstVariable || thirdVariable) {
  console.log("third");
} else {
  console.log("fourth");
}
```

1. What should the above code console.log? **Why?**
2. What is the value of **_firstVariable_** when it is initialized?
3. Is the value of firstVariable a “truthy” value? **Why?**
4. Is the value of secondVariable a “truthy” value? **Why?**
5. Is the value of thirdVariable a “truthy” value? **Why?**

### **Part III**

1. Research  [here](<[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)>)

   **_Math.random_**

   Write an if statement that console.log’s “Over 0.5” if **_Math.random_** returns a number greater than 0.5.

   Otherwise console.log “Under 0.5”.

2. What is a falsey value? List all the falsey values in JavaScrip

_AnswerKey_: Boolean-logic_exercises.txt

## 8. Array Exercise:

For each of the exercises below, assume you are starting with the following **_people_** array.

```jsx
const people = ["Greg", "Mary", "Devon", "James"];
```

1. Write the command to remove “Greg” from the array.
2. Write the command to remove “James” from the array.
3. Write the command to add “Matt” to the front of the array.
4. Write the command to add your name to the end of the array.
5. Write the command to make a copy of the array using **_slice_**. The copy should **NOT** include “Mary” or “Matt”.
6. Write the command that gives the indexOf where “Mary” is located.
7. Write the command that gives the indexOf where “Foo” is located (this should return **_-1_**).
8. Redefine the people variable with the value you started with. Using the **_splice_** command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done **_[“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”]_**.
9. Create a new variable called **_withBob_** and set it equal to the **_people_** array concatenated with the string of **_“Bob”_**.

_AnswerKey_: Array_exercises.txt

## 9. Objects Exercise:

For each of the exercises below, assume you are starting with the following **_programming_** object.

```jsx
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://bit.ly/2ysFran",
};
```

1. Write the command to add the language “Go” to the end of the languages array.
2. Change the difficulty to the value of **_7_**.
3. Using the **_delete_** keyword, write the command to remove the jokes key from the programming object.
4. Write the command to add a new key called **_isFun_** and a value of **_true_** to the programming object.

_AnswerKey_: objects_exercises.txt

## 10. Loops Exercise:

Your assignment is to write the correct JavaScript for the following problems.

### **Numbers up to ten**

Using a **_for loop_** console.log all the numbers from 0 to 10
Using a **_while loop_** console.log all the numbers from 0 to 10

### **Even numbers to 20**

Using a **_for loop_** console.log all the even numbers from 0 to 20

### **Odd numbers to 20**

Using a **_while loop_** console.log all the odd numbers from 0 to 20

### **Back to zero**

Using a **_for loop_** console.log all the numbers from 10 to 0.

_AnswerKey_: loops_exercises.js

## 11. Functions Exercise:

Your assignment is to write the following functions in the descriptions below - good luck!

### **difference**

- this function takes in two parameters and returns the difference of the two;

```jsx
difference(2, 2); // 0
difference(0, 2); // -2
```

### **product**

- this function takes in two parameters and returns the product of the two;

```jsx
product(2, 2); // 4
product(0, 2); // 0
```

### **printDay**

- this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

```jsx
printDay(4); // "Wednesday"
printDay(41); // undefined
```

### **lastElement**

- this function takes in one parameter (an array) and returns the last value in the array. It should return **_undefined_** if the array is empty.

```jsx
lastElement([1, 2, 3, 4]); // 4
lastElement([]); // undefined
```

### **numberCompare**

- this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

```jsx
numberCompare(1, 1); // "Numbers are equal"

numberCompare(2, 1); // "First is greater"

numberCompare(1, 2); // "Second is greater"
```

### **singleLetterCount**

- this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

```jsx
singleLetterCount("amazing", "A"); // 2
singleLetterCount("Rithm School", "o"); // 2
```

### **multipleLetterCount**

- this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

```jsx
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
```

### **arrayManipulation**

- this function should take in at most four parameters (an array, command, location, and value).

  - If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
  - If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
  - If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
  - If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.

  ```jsx
  arrayManipulation([1, 2, 3], "remove", "end"); // 3

  arrayManipulation([1, 2, 3], "remove", "beginning"); // 1

  arrayManipulation([1, 2, 3], "add", "beginning", 20); // [20,1,2,3]

  arrayManipulation([1, 2, 3], "add", "end", 30); // [1,2,3,30]
  ```

  ### **isPalindrome**

  - A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns **_true_** or **_false_** if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that **_isPalindrome(‘a man a plan a canal Panama’);_** returns **_true_**

  ```jsx
  isPalindrome("testing"); // false

  isPalindrome("tacocat"); // true

  isPalindrome("hannah"); // true

  isPalindrome("robert"); // false
  ```

  ### **Bonus**

  **Rock / Paper / Scissor**

  - using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the **_prompt_** function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

_AnswerKey_: functions_exercises.js

## 12. Hacker Rank:

_Submissions_: TA_submission.js , TA-P_Submission.js

## 13. Timers Exercise:

### **countdown**

Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

```jsx
countDown(4);
// 3
// 2
// 1
// "DONE!"
```

### **randomGame**

Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

_AnswerKey_: timer-function_exercises.js

## 14. DOM Finding Exercise:

Given the following HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>

Write the code necessary to do the following:

1. Select the section with an id of container without using querySelector.
2. Select the section with an id of container using querySelector.
3. Select all of the list items with a class of “second”.
4. Select a list item with a class of third, but only the list item inside of the ol tag.
5. Give the section with an id of container the text “Hello!”.
6. Add the class main to the div with a class of footer.
7. Remove the class main on the div with a class of footer.
8. Create a new li element.
9. Give the li the text “four”.
10. Append the li to the ul element.
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
12. Remove the div with a class of footer

_AnswerKey_: DOM.js

## 15. Cookies Exercise:

In this exercise, you’ll implement three functions to set, get, and delete cookies. You’ll find three files in the Starter Code, including a completed HTML and CSS file, and a JavaScript file with three functions to implement. You should implement the following three functions.

### **setCookie**

This function should set the document’s cookie to the cookie name and value that are passed in as parameters. It should also create a date object for the date and set the time based off of the daysToExpire variable, the path to equal the path parameter, and the domain equal to the domain variable.

When all of this is completed, log “setCookieValue” with the cookieValue.

### **getCookie**

This function should return the current value of the cookie.

### **deleteCookie**

This function should delete the current value of the cookie and log a message that the cookie has been deleted.

_AnswerKey_: Cookie_function

## 16. Terminal Exercise:

Write the following terminal commands to perform the following tasks:

### \***\*Part I\*\***

1. make a directory called **_first_**
2. change directory to the **_first_** folder
3. create a file called **_person.txt_**
4. change the name of **_person.txt_** to **_another.txt_**
5. make a copy of the **_another.txt_** file and call it **_copy.txt_**
6. remove the **_copy.txt_** file
7. make a copy of the **_first_** folder and call it **_second_**
8. delete the **_second_** folder

### \***\*Part II\*\***

1. What does the **_man_** command do? Type in **_man rm_**. How do you scroll and get out?
2. Look at the **_man_** page for **_ls_**. What does the **_-l_** flag do? What does the **_-a_** flag do?
3. How do you jump between words in the terminal?
4. How do you get to the end of a line in terminal?
5. How do you move your cursor to the beginning in terminal?
6. How do you delete a word (without pressing backspace multiple times) in terminal?
7. What is the difference between a terminal and shell?
8. What is an absolute path?
9. What is an relative path?
10. What is a flag? Give three examples of flags you have used.
11. What do the **_r_** and **_f_** flags do with the **_rm_** command?

_AnswerKey_: terminal_commands.txt

## 17. Git Exercise:

Now that you have learned the basics of Git workflow, try running through this a couple of times on your own:

### Steps

1. Create a folder called **_learn_git_again_**.
2. **_cd_** into the **_learn_git_again_** folder.
3. Create a file called **_third.txt_**.
4. Initialize an empty git repository.
5. Add **_third.txt_** to the staging area.
6. Commit with the message “adding third.txt”.
7. Check out your commit with **_git log_**.
8. Create another file called **_fourth.txt_**.
9. Add **_fourth.txt_** to the staging area.
10. Commit with the message “adding fourth.txt”
11. Remove the **_third.txt_** file
12. Add this change to the staging area
13. Commit with the message “removing third.txt”
14. Check out your commits using **_git log_**
15. Change your global setting to **_core.pager=cat_** - you can read more about that in the link:([https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)).
16. Write the command to list all of the global configurations for **_git_** on your machine. You can type **git config --global** to find out how to do this

_AnswerKey_: git_exercises.txt

## 18. Branching Exercise:

Answer the following questions:

- What **_git_** command creates a branch?
- What is the difference between a fast-forward and recursive merge?
- What **_git_** command changes to another branch?
- What **_git_** command deletes a branch?
- How do merge conflicts happen?

_AnswerKey_: git-branching_exercises.txt

## 19. forEach/map/filter:

### **forEach**

#### **doubleValues**

Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

```jsx
doubleValues([1, 2, 3]); // [2,4,6]
doubleValues([5, 1, 2, 3, 10]); // [10,2,4,6,20]
```

#### **onlyEvenValues**

Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

```jsx
onlyEvenValues([1, 2, 3]); // [2]
onlyEvenValues([5, 1, 2, 3, 10]); // [2,10]
```

#### **showFirstAndLast**

Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

```jsx
showFirstAndLast(["colt", "matt", "tim", "test"]); // ["ct", "mt", "tm", "tt"]
showFirstAndLast(["hi", "goodbye", "smile"]); // ['hi', 'ge', 'se']
```

#### **addKeyAndValue**

Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

```jsx
addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/
```

#### **vowelCount**

Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

```jsx
vowelCount("Elie"); // {e:2,i:1};
vowelCount("Tim"); // {i:1};
vowelCount("Matt"); // {a:1})
vowelCount("hmmm"); // {};
vowelCount("I Am awesome and so are you"); // {i: 1, a: 4, e: 3, o: 3, u: 1}
```

### **map**

#### **doubleValuesWithMap**

Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

```jsx
doubleValuesWithMap([1, 2, 3]); // [2,4,6]
doubleValuesWithMap([1, -2, -3]); // [2,-4,-6]
```

function doubleValuesWithMap(arr) {}

#### **valTimesIndex**

Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

```jsx
valTimesIndex([1, 2, 3]); // [0,2,6]
valTimesIndex([1, -2, -3]); // [0,-2,-6]
```

#### **extractKey**

Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

```jsx
extractKey(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
);

// ['Elie', 'Tim', Matt', 'Colt']
```

#### **extractFullName**

Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

```jsx
/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
```

### **filter**

#### **filterByValue**

Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

```jsx
filterByValue(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner"
);

/*
  [
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]
*/
```

#### **find**

Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

```jsx
find([1, 2, 3, 4, 5], 3); // 3
find([1, 2, 3, 4, 5], 10); // undefined
```

#### **findInObj**

Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

```jsx
findInObj(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "att", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner",
  true
);

// {first: 'Tim', last:"Garcia", isCatOwner: true}
```

#### **removeVowels**

Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

```jsx
removeVowels("Elie"); // ('l')
removeVowels("TIM"); // ('tm')
removeVowels("ZZZZZZ"); // ('zzzzzz')
```

#### **doubleOddNumbers**

Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

_AnswerKey_: js-array-foreach-map-filter

## 20. Some Every Exercise:

### **hasOddNumber**

Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

```jsx
hasOddNumber([1, 2, 2, 2, 2, 2, 4]); // true
hasOddNumber([2, 2, 2, 2, 2, 4]); // false
```

### **hasAZero**

Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

```jsx
hasAZero(33321232131012); // true
hasAZero(1212121); // false
```

### **hasOnlyOddNumbers**

Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

```jsx
hasOnlyOddNumbers([1, 3, 5, 7]); // true
hasOnlyOddNumbers([1, 2, 3, 5, 7]); // false
```

### **hasNoDuplicates**

Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

```jsx
hasNoDuplicates([1, 2, 3, 1]); // false
hasNoDuplicates([1, 2, 3]); // true
```

### **hasCertainKey**

Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

```jsx
let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

hasCertainKey(arr, "first"); // true
hasCertainKey(arr, "isCatOwner"); // false
```

### **hasCertainValue**

Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

_AnswerKey_: js-array-some-every

## 21. Find/Findindex Exercise:

### **findUserByUsername**

Write a function called **_findUserByUsername_** which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

```jsx
const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

findUserByUsername(users, "mlewis"); // {username: 'mlewis'}
findUserByUsername(users, "taco"); // undefined
```

### **removeUser**

Write a function called **_removeUser_** which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.

_AnswerKey_: js-array-find-findindex

## 22. let and const Exercise:

### \***\*ES5 Global Constants\*\***

```jsx
var PI = 3.14;
PI = 42; // stop me from doing this!
```

### \***\*ES2015 Global Constants\*\***

```jsx
/* Write an ES2015 Version */
```

### **Quiz**

- What is the difference between **_var_** and **_let_**?
- What is the difference between **var** and **_const_**?
- What is the difference between **let** and **const**?
- What is hoisting?

_AnswerKey_: https://docs.google.com/document/d/1IusG-YV400faolCbNbWidk_z_P_-eyu5a8aPEvZ1K5Y/edit?usp=sharing

## 23. Arrow Functions Exercises:

##@ **ES5 Map Callback**

```jsx
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
```

1. **ES2015 Arrow Functions Shorthand**

Refactor the above code to use two arrow functions. Turn it into a one-liner.

```jsx
/* Write an ES2015 Version */
```

### **Refactor the following function to use arrow functions:**

2. Replace ALL functions with arrow functions:

```jsx
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}
```

_AnswerKey_: arrowFunctionsExercise.txt

## 24. Rest/Spread Operator Exercise::

In this exercise, you’ll refactor some ES5 code into ES2015.

### **Given this function:**

```jsx
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}
```

###\***\*Refactor it to use the rest operator & an arrow function:\*\***

```jsx
/* Write an ES2015 Version */
```

###**findMin**

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

```jsx
findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1
```

### **mergeObjects**

Write a function called **_mergeObjects_** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

```jsx
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}
```

### **doubleAndReturnArgs**

Write a function called **_doubleAndReturnArgs_** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

```jsx
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]
```

### **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.

```jsx
/*_ remove a random element in the items array
and return a new array without that item. _*/
function removeRandom(items) {}
/\*_ Return a new array with every item in array1 and array2. _/;
function extend(array1, array2) {}
/*_ Return a new object with all the keys and values
from obj and a new key/value pair _*/
function addKeyVal(obj, key, val) {}
/\*_ Return a new object with a key removed. _/;
function removeKey(obj, key) {}
/\*_ Combine two objects and return a new object. _/;
function combine(obj1, obj2) {}
/\*_ Return a new object with a modified key and value. _/;
function update(obj, key, val) {}
```

_AnswerKey_: rest-spread

## 25. Object Enhancements Exercise:

In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

### **Same keys and values**

```jsx
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
```

### \***\*Computed Property Names\*\***

```jsx
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";
```

### Object Methods

```jsx
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};
```

### **createAnimal function**

Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.

```jsx
const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"
```

_AnswerKey_: obj- enhance-exercise.js

## 26. Destructuring:

### **Object Destructuring 1**

What does the following code return/print?

```jsx
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
```

### **Object Destructuring 2**

What does the following code return/print?

```jsx
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?
```

### **Object Destructuring 3**

What does the following code return/print?

```jsx
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
getUserData({ firstName: "Melissa" }); // ?
getUserData({}); // ?
```

### **Array Destructuring 1**

What does the following code return/print?

```jsx
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
```

### **Array Destructuring 2**

What does the following code return/print?

```jsx
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
```

### **Array Destructuring 3**

What does the following code return/print?

```jsx
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // ?
```

**ES2015 Refactoring**

In this exercise, you’ll refactor some ES5 code into ES2015.

### **ES5 Assigning Variables to Object Properties**

```jsx
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;
```

### \***\*ES5 Array Swap\*\***

```jsx
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
```

### **raceResults()**

Write a function called **_raceResults_** which accepts a single array argument. It should return an object with the keys **_first_**, **_second_**, **_third_**, and **_rest_**.

- first: the first element in the array
- second: the second element in the array
- third: the third element in the array
- rest: all other elements in the array

**Write a *one line* function to make this work using**

- An arrow function
- Destructuring
- `Enhanced` object assignment (same key/value shortcut)

```jsx
raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
```

_AnswerKey_: destructuring_exercises.js

## 27. Maps and Sets Exercise:

### **Quick Question #1**

What does the following code return?

```jsx
new Set([1, 1, 2, 2, 3, 4]);
```

### **Quick Question #2**

What does the following code return?

```jsx
[...new Set("referee")].join("");
```

### **Quick Questions #3**

What does the Map **_m_** look like after running the following code?

```jsx
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
```

### **hasDuplicate**

Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

```jsx
hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false
```

### **vowelCount**

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

```jsx
vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
```

[Solution](https://lessons.springboard.com/Solution-785cba9d3554495f9787e49fcedd6c2f)

## 28. Object Oriented Programming:

### **Part One**

Create a class for vehicle. Each vehicle instance should have the following properties:

- make
- model
- year

Each vehicle instance should have access to a method called **_honk_**, which returns the string “Beep.”

```jsx
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
```

Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

```jsx
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
```

### **Part Two**

Create a class for a car. The **_Car_** class should inherit from **_Vehicle_** and each car instance should have a property called **_numWheels_** which has a value of 4.

```jsx
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk(); // "Beep."
myFirstCar.numWheels; // 4
```

### **Part Three**

Create a class for a Motorcycle. This class should inherit from **_Vehicle_** and each motorcycle instance should have a property called **_numWheels_** which has a value of 2. It should also have a **_revEngine_** method which returns “VROOM!!!”

```jsx
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk(); // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels; // 2
```

### **Part Four**

Create a class for a Garage. It should have a property called **_vehicles_** which will store an array of vehicles, and a property called **_capacity_** which is a number indicating how many vehicles will fit in the garage. When you create a garage, **_vehicles_** will always be empty; you only need to provide the **_capacity_**.

A garage should also have an **_add_** method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is *not* a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

_AnswerKey_: car-class.js

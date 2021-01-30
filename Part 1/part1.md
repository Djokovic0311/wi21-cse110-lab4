#### Variables & Scoping

1. This line will print `the length of prices` because `var` is used to define `i`, and i can be used within the whole function instead of the block in which `i` is created. 

2. This line will print the `discountPrice` of the final element in `prices`, because `discountPrice` is a var as well. It changes during the loop and keep the value of final element after that.

3. This line will print the value `finalPrice` of `prices` because it is a `var` meaning that it will not follow block-scope.

4. The function will return an array of `[50, 100, 150]` because all variables are `var` variables and, discounted will be returned. 

5. The line will throw an error because `i` is a `let` variable indicating that it is restricted with a block. Therefore, the only block that can access the declaration of `i` is the `for` loop. `Console.log` outside the loop will break down.

6. The line will throw an error because `discountedPrice` is a `let` variable indicating that it is restricted with a block. Therefore, the only block that can access the declaration of `discountedPrice` is the `for` loop. `Console.log` outside the loop will break down.

7. The line will print the `finalPrice` of `prices` because `finalPrice` is declared outside of the `for` loop and can be accessed within the entire `discoountPrices` function scope.

8. The function will return an array of `[50, 100, 150]` because the `discounted array` and   `finalPrice` is accessible throughout the entire function. Also, the `discountedPrice` and `i` will still be used when determining the `finalPrice` of an item. These will still be pushed to `discounted` and this array will be returned at the end.

9. The line will throw an error because `i` is a `let` variable indicating that it is restricted with a block. Therefore, the only block that can access the declaration of `i` is the `for` loop. `Console.log` outside the loop will break down.

10. The line will throw an error because  `discountedPrice` is a `const` variable indicating that it is restricted with a block. Therefore, the only block that can access the declaration of `discountedPrice` is the `for` loop. `Console.log` outside the loop will break down.

11. The line will throw an error because `finalPrices` is a `const` variable but is being reassigned at `line 7`. Because `const` variables cannot be reassigned after declaration, an error will be thrown.

12. Assuming that errors in other lines of the code are ignored, `[]` should be returned because the `discount` variable is also a `const` variable which is declared to be `[]`.

#### Data Types

13. - `student.name`
    - `student["Grad Year"]`
    - `student.greeting()`
    - `student["Favorite Teacher"].name`
    - `student.courseLoad[0]`

#### Basic Operators & Type Conversion 

14. - A: The output will be `"32"` because 2 will be converted into the string type and then be concatenated to the end of "3", resulting into "32".
    - B: The output will be `1` because "3" will be converted into the number type and then be subtracted by 2.
    - C: The output will be `3` since null will be converted into a Number 0 and then be added by 3.
    - D: The output will be `"3null"` because null will be converted into a String "null" and will be added at the end of "3".
    - E: The output will be `4` because true will be converted into a Number (1) and will be added by 3.
    - F: The output will be `0` because both false and null will be converted into a Number (0) and will be added together.
    - G: The output will be `"3undefined"` because undefined will be converted into a String ("undefined") and will be added at the end of "3".
    - H: The output will be `NaN` because undefined will be converted into a Number (NaN) and will be added to 3.

15. - A: `True` because "2" converted to number 2 which is greater than 1.
    - B: `False` because they are both strings.  '1' comes before '2' meaning that the string '12' comes after '2', therefore the expression equates to false.
    - C: `True` because the equality used allows for type conversion. '2' is converted to a Number 2 which is equivalent to 2.
    - D: `False` because the strict equality does not allow type conversion. '2' and 2 are of different types, the expression equals to false.
    - E: `False` because true converted to a Number is 1. `Since 1 != 2`, the expression equals to false.
    - F: `True` because Boolean(2) is evaluated to be true. And  `true === true`.

16. When comparing the == sign: first check the data types of the two operands, if they are the same, then perform === comparison, if they are different, perform a type conversion, and then compare them after converting to the same type, and === When comparing, if the types are different, it is directly false.

#### Conditionals

17. `"How are you?"` will be printed out in the console because `2 != true` but 2 is a bool value. This is because `true` will be converted to the Number 1 and `2 != 1`. However, 2 is a bool value, so the second block will run.

#### Loops

18. See code in file `part1-question18.js`.

19. The result will be `[6, 8, 10]`. Because `modifyArray` iterates over the array `[1, 2, 3]` and performs the following operation where `num` is the current element iterated through: `(num + 2) * 2`. Go through the callback functions where `modifyArray` callbacks `doSomething` which adds the element by two and then callbacks the  function which multiples the element by two. Totally [(1+2) * 2,(2+2) * 2,(3+2) * 2] = [6,8,10]

#### setInterval(), setTimeout(), clearTimeout()

20. See code in file `part1-question20.js`.

21. ```
    1 
    4 
    3 
    2
    ```

    
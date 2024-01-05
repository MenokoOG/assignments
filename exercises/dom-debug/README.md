This project is SUPPOSED TO be able to add items to the list.

Each item can have it's background changed.

It's super broken.

Please clone it down and fix it. 

Sources tab and the console are your friend. 

## **Troubleshooting DOM Issues**

> Important Note: This assignment is designed to challenge your troubleshooting skills. It's meant for individuals who are confident in their ability to solve complex problems. If you find yourself genuinely stuck, you can reveal the final section on this page, which serves as a guide. Keep in mind that this guide is a work in progress, and don't hesitate to seek help if you're stuck for more than 10 to 15 minutes.
> 

---

    
3. **Open `index.html` in Browser**
    
    Open the `index.html` file in your preferred browser. The instructions are based on using the Chrome developer tools, but Firefox and Opera are also compatible.
    

---

### **Objective**

Your objective is to add new items to a list and independently change the background of each item. The text for each item should be extracted from an input box. You can start with either a white or red background for each item.

!https://coursework.vschool.io/content/images/2020/01/Screen-Shot-2020-01-18-at-11.04.22-AM.png

---

### **Troubleshooting Steps**

1. **Address Console Errors**
    - Start by tackling any console errors that appear.
    - **Example:** If you encounter a `TypeError` mentioning `undefined is not a function`, inspect the code around that error and determine which object or function is undefined. Investigate why it's undefined and fix the issue.
2. **Explore the Sources Tab**
    - If there are no immediate console errors, navigate to the `sources` tab in your browser's developer tools.
    - **Example:** Within the `sources` tab, locate the JavaScript file that's likely involved in the issue. Inspect the code and identify the function responsible for executing when the "Add new item" button is clicked.
3. **Set Breakpoints**
    - Instead of using multiple `console.log` statements, utilize breakpoints to pause code execution at specific lines.
    - **Example:** If you suspect a particular function isn't being called, set a breakpoint by clicking the line number where the function is defined. This will pause execution, allowing you to inspect variables and values.
    
    ---
    

!https://coursework.vschool.io/content/images/2018/11/Screen-Shot-2018-11-21-at-11.06.55-AM.png

1. **Independent Troubleshooting**
    - After setting breakpoints, trigger the action that should invoke the function. The browser will pause at the breakpoint, giving you a chance to assess the situation.
    - **Example:** If the breakpoint is set within a function that's supposed to run when a button is clicked, click the button and observe whether the browser stops at the breakpoint. Investigate any code issues that may be preventing the function from executing as expected.
2. **Code Correction and Iteration**
    - Attempt to identify and fix the issue on your own by analyzing the code and applying your understanding of programming concepts.
    - **Example:** If you suspect a typo or syntax error is causing the issue, correct it. If a function parameter is incorrect, make necessary adjustments.
3. **Collaboration and Asking for Help**
    - If your individual troubleshooting efforts aren't yielding results, don't hesitate to ask for assistance.
    - **Example:** Collaborating with peers or seeking guidance from instructors can provide fresh perspectives and help overcome challenges.

### **Additional Strategies**

- **Handling Property Errors**
    - If you encounter errors related to properties not being found, it often means you're trying to access a property on an undefined object.
    - **Example:** If you see a `Cannot read property 'name' of undefined` error, review the code leading up to this error. Verify that the object you're trying to access actually exists and has the expected structure.
- **Inspecting Objects with `console.dir()`**
    - Use the `console.dir()` function to print the properties and values of objects to the console, allowing you to inspect their structure.
    - **Example:** If you're unsure about the contents of an object, add a line like `console.dir(myObject)` to your code to see its properties and values in the console.
- **Using Conditional Breakpoints**
    - Set breakpoints with conditions to pause execution only when specific conditions are met.
    - **Example:** If you suspect that a loop is causing an issue after a certain number of iterations, set a breakpoint within the loop with a condition like `i === 10` to pause execution when `i` reaches 10.

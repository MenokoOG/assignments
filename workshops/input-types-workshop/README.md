1. text:
   - Used for single-line text input.
   - Commonly used for usernames, email addresses, and short text inputs.
   - Can be customized with placeholder text, maximum length, and pattern validation.
     - maxlength: Specifies the maximum number of characters allowed in the input field.
     - pattern: Defines a regular expression pattern the input value must match to be valid.
     - autocomplete: Controls whether the browser should automatically complete the input value based on previously entered values.
2. password:
   - Similar to text input but hides the characters for password entry.
   - Ensures privacy and security by concealing the entered text.
   - Often used in login and registration forms.
     - autocomplete: Can be set to "new-password" to prevent the browser from suggesting previously used passwords.
3. email:
   - Specifically for entering email addresses.
   - Provides built-in validation for email format.
   - Useful for collecting email addresses in contact forms and user registration.
     - multiple: Allows multiple email addresses to be entered, separated by commas.
4. number:
   - Allows users to input numeric values.
   - Can be constrained by minimum and maximum values and set with a specific step size.
   - Suitable for collecting quantities, ages, and other numeric data.
     - min and max: Specifies the minimum and maximum allowed values.
     - step: Defines the increment/decrement step for the input value.
     - placeholder: Provides a hint or example of the expected input format.
5. tel:
   - Designed for entering telephone numbers.
   - Optimizes input for phone number entry, especially on mobile devices.
   - Helps maintain consistency and accuracy in phone number formatting.
     - pattern: Allows specifying a regular expression pattern for validating phone numbers.
     - placeholder: Gives a hint about the expected phone number format.
6. url:
   - For entering website URLs.
   - Provides validation for URL format.
   - Ensures that users enter valid URLs in web forms.
     - placeholder: Provides a hint or example of the expected URL format.
7. date, time, datetime-local:
   - For selecting dates and times.
   - Offers a user-friendly interface for choosing specific dates or times.
   - Useful for scheduling appointments, events, and deadlines.
     - min and max: Specifies the minimum and maximum allowed values.
     - step: Defines the increment/decrement step for the input value.
8. checkbox and radio:
   - For selecting options from a set of choices.
   - Checkbox allows multiple selections, while radio buttons restrict to a single option.
   - Provide clear and distinct choices for users to select from.
     - checked: Determines whether the checkbox or radio button is initially selected.
     - disabled: Disables the checkbox or radio button.
9. file:
   - For uploading files from the user's device.
   - Allows users to select one or multiple files to upload.
   - Commonly used for uploading images, documents, and media files.
     - accept: Specifies the file types that the input accepts.
10. range:
    - Allows users to select a value from a specified range using a slider.
    - Useful for selecting values within a defined range, such as volume or brightness.
      - min and max: Specifies the minimum and maximum allowed values.
      - step: Defines the increment/decrement step for the input value.
11. color:
    - Enables users to select a color from a color picker.
    - Provides a visual way to choose colors for various purposes, such as styling elements or drawing.
      - value: Sets the initial color value of the color picker.
12. submit and reset:
    - Submit triggers form submission, sending data to the server.
    - Reset clears all form fields, reverting them to their initial state.
    - Essential for form submission and data management.
      - value: Sets the text displayed on the button.
13. hidden:
    - Stores data that is not displayed to the user.
    - Useful for passing data between pages or storing session information.
      - value: Specifies the value of the hidden input field.
14. <select>:
    - Creates a dropdown list of options for users to choose from.
    - Can be single or multiple selection.
    - Useful for presenting a list of choices, such as countries or categories.
      - size: Specifies the number of visible options in a dropdown list.
      - multiple: Allows selecting multiple options from the dropdown list.
      - disabled: Disables the select element, preventing users from interacting with it.
15. <textarea>:
    - Allows users to enter multi-line text.
    - Ideal for longer messages, comments, or descriptions.
    - Offers more flexibility than single-line text inputs for capturing larger amounts of text.
      - placeholder: Provides a hint or example of the expected input format.
      - maxlength: Specifies the maximum number of characters allowed in the textarea.
      - readonly: Prevents users from editing the content of the textarea.
      - disabled: Disables the textarea, preventing users from interacting with it.

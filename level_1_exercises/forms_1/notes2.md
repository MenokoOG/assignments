# **Basic tags and attributes**

### **Tags**

---

The HTML `<form>` element defines a form that is used to collect user input:

```jsx
<form></-- input tags and variations of input tags --></form>
```

`<form>` wraps all your inputs.

A simple form in HTML would look like:

```jsx
<form>
    First Name: <input/></from>
```

And look like this in the browser:

First Name:  ___
It is wise to give each of your forms a `name` attribute.
`<form name="user-info">`
****Attributes****
There's many different kinds of input fields, and most of them still use the `<input/>` tag, but can be used by giving `<input/>` different **attributes**.
The big one is `type`
`type` defaults to `text`. So our "First Name" input box is already `<input type="text"/>`
There are many other types, and we'll talk about most of them in Part 2. You should be excited for that.

The different types gives the input boxes cool tools to help your user give the type of input.
For example:
Number restricts the inputs to numbers, and give you up and down arrows to increment or decrement it.Number:  ___
Number also has more attributes to help you control how the input box behaves.
For `type="number"` the common ones are: min, max, step
Min and max are exactly what the sound like. They restrict the minimum and the maximum value of the input box.
Step controls how much the up and down arrow move our number. Play around with this input box `Number: <input step="10" type="number"/>`:Number:  ___
Your step can also be decimals.
Here is a list of just some of the other attributes you can give your input box:
• `name` - Important for naming and using your input boxes. Similar to `id`
• `value` - Value gives your input and initial value
• `placeholder` - Placeholder gives your user an example or hint of what belongs in an input box
• `required` - From will not submit if you have this attribute in an empty input box
Many of these attributes are using by your browser to help with autofill. Especially the `name` attribute. If you say `name="firstname"`, Chrome can autofill that for your user.
****Using JavaScript to get values from your form****
Because JavaScript is JavaScript and HTML is HTML there are many different ways to get the value from an input box.
**By id**
The strategies that we will go over now are:
• With the `id` attribute of the input box
• With the `name` attribute of the form, and the `name` attribute of the input box
We know that we can select anything in our HTML (more accurately the DOM) with the `id`:

`<div id="first-name">Georgette</div>`

`document.getElementById("first-name")`

Once we've selected that element, we can look at it's attributes. Using the above example:

`document.getElementById("first-name").innerHTML //=> Georgette`

We can do this same sort of thing with `.value`. We are going to select the input box by it's id and then get the value from it.

`<input id="first-name"/>`

`document.getElementById("first-name").value`

**By name**Any form that we've named becomes part of the document. So we can select this form:

`<form name="info"><input name="age"/></form>`
as easily as:

`document.info`

and any input in that form as easily as:

`document.info.age`

and it's value like so:

`document.info.age.value`

****Example****
Follow along as we create a little mad lib game. If you haven't played mad libs before, we will have the user pick a noun and a verb and put those into a potentially silly sentence.
First, our HTML form. It will have an input for a noun, a verb, and an adjective.

`<form name="words"><input name="noun" placeholder="noun"/><input name="adverb" placeholder="adverbe"/><input name="verb" placeholder="verb"/></form>`
We would love to be able to grab the values from each of those input boxes and then print our silly sentence. Let's `alert()` it now, for simplicity.
It would be nice if we could just:

`var noun = document.words.noun.value
var adverb = document.words.adverb.value
var verb = document.words.verb.value

alert("The " + noun + " did " + adverb + " " + verb + " in it's home")`

But, if you try this out, the alert happens right away and all these variables are empty strings. This is because we haven't given our user any time to type in their response.
The appropriate user experience should be: they type their response, and then click a button.
For that, we'll add a button to our HTML and some event listener stuff.

`<form name="words"><input name="noun" placeholder="noun"/><input name="adverb" placeholder="adverb"/><input name="verb" placeholder="verb"/><button>Submit</button></form>`

`document.words.addEventListener("submit", function(e){
  e.preventDefault()

  var noun = document.words.noun.value
  var adverb = document.words.adverb.value
  var verb = document.words.verb.value

  alert("The " + noun + " did" + adverb + " " + verb + " in it's home")
})`

Concerning the button, the submit event, the event object, and `event.preventDefault()`, a very brief explanation:
A button in a form defaults to that forms submit button. Web developers use to `submit` forms and refresh the page by default. This is archaic and dumb, and now we overwrite that functionality with `event.preventDefault()` using the event object itself.
The submit stuff it nice for the user, because they can submit a form with the `Enter` key.
There is tons of other cool stuff you can do with forms.
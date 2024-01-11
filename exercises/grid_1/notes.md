

# Grid

To make a container a grid container, it has to be display: grid.

The appropriate way to set up grid columns is by using grid-template-columns.

You can prototype layouts using the grid-template-areas selector (not covered in these lessons)

This write-up is taken from the beautifully built course here: https://scrimba.com/g/gR8PTE

This will give you a brief rundown of the main functionality presented with CSS Grid and hopefully a simple explanation of how to implement it yourself.

If you want the cool color scheme below add this to your css.

```css
.container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #ffeead;
}

html, body {
  background-color: #ffeead;
  margin: 10px;
}

.container > div:nth-child(1n) {
  background-color: #96ceb4;
}

.container > div:nth-child(3n) {
  background-color: #88d8b0;
}

.container > div:nth-child(2n) {
      background-color: #ff6f69;
}

.container > div:nth-child(4n) {
      background-color: #ffcc5c;
}

```

First, lets make a simple html page that looks like this.

```css
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <style>
            .container {
                display: grid;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </body>
</html>

```

Adding `display: grid` will allow us to use all of the properties pertaining to CSS Grid.

Feel free to style your div's however you want, it doesn't have to look like mine.

But you should end up seeing something similar to this.

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.01.51-PM-1.png

**Grid-template-columns**

Now lets see what ways we can alter the different divs as columns.

First we will look at using `px`.

```css
.container {
                display: grid;
                grid-template-columns: 100px 100px 100px;
            }

```

Which tells our HTML page that we only want 3 columns and that we want each of them to only be 100px wide.

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.09.51-PM.png

```css
.container {
                display: grid;
                grid-template-columns: 100px 100px 100px 100px 100px 100px;
            }

```

If you add 6, it will make 6 columns with a width of 100px.

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.11.21-PM.png

If you want it to be responsive you can use `auto` instead of a px length.

```css
.container {
                display: grid;
                grid-template-columns: 100px auto 100px;
            }

```

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.13.17-PM.png

Feel free to make your window bigger and smaller and watch how the column labeled as auto expands/shrinks to fill the page.

A more common alternative to `auto` is `fr`. `fr` stands for fraction. You can specify how many fractions of the window you want each column to take up by simply putting the number in front of `fr`. So if i want the left and right edges to take up `1fr` and i want the middle to take up `2fr`. The code would look like this.

```css
 .container {
                display: grid;
                grid-template-columns: 1fr 2fr 1fr;
            }

```

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.17.15-PM.png

You can go as high as you want, but will usually want to use the smallest fraction available. For example if I did the following code instead, it would produce the same result, but would introduce potentially undesirable problems later on.

**DON'T DO THIS**

```css
.container {
                display: grid;
                grid-template-columns: 100fr 200fr 100fr;
            }

```

But the point is that the proportion is what matters, not necessarily the fraction amount.

# Next up

[Grid Part 2](https://www.notion.so/Grid-Part-2-7d4a40b31e1d4d8bbf663e2088a721da?pvs=21)
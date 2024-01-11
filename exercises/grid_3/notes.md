

**auto-fit**

Let's change our HTML code again to this

```css
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <div class="container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </body>
</html>

```

and our CSS to this

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(2, 100px);
}

```

it should look like this

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.36.27-PM.png

if you make your window bigger and smaller you will see that it is not responsive.

Well couldn't we just change `grid-template-columns: repeat(6, 100px);` to `grid-template-columns: repeat(6, 1fr);`?

When we make the screen small it looks like this

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.39.46-PM.png

and when its large it looks like this

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.39.59-PM.png

What if you wanted all the containers to be `100px` wide and responsive?

That's when you use `auto-fit`.

```css
.container {
    display: grid;
    grid-gap: 5px;

    **grid-template-columns: repeat(auto-fit, 100px);**

    grid-template-rows: repeat(2, 100px);
}

```

Below is what the screen would look like at varying sizes.

large screen

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.44.28-PM.png

medium screen

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.44.41-PM.png

small screen

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.44.53-PM.png

Notice how they just fall into position when there is at least `100px` worth of space for them, otherwise they simply fall to the next row.

**minmax()**

But we are still left with another problem.

We have this awkward spot in between 0-100px where we get this ugly extra space on the side.

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.49.25-PM.png

To solve this we will use `minmax()` like so...

```css
.container {
    display: grid;
    grid-gap: 5px;

    **grid-template-columns: repeat(auto-fit, minmax(100px, 1fr);**

    grid-template-rows: repeat(2, 100px);
}

```

This says that our box's will be a minimum of 100px wide and a maximum of 1fr, thus solving the problem of the unwanted extra space on the side.

This is a screen shot at the exact same screen width I had above just with the new code.

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.53.04-PM.png

**grid-auto-rows**

Our problems aren't all solved quite yet, however. You may have noticed that if you make your screen all the way to the smallest size, that it looks like this

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.55.57-PM.png

That is because we only have 2 rows defined currently. But since our grid is responsive now it may become difficult to predict how many rows there will be.

So lets go into our CSS and change `grid-template-rows` to `grid-auto-rows`

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr);

    **grid-auto-rows: 100px;**
}

```

Now look at our window

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-1.03.48-PM.png

All the rows are now created with the height of `100px`!!!

# Next Up

[CSS Grid Practice ](https://www.notion.so/CSS-Grid-Practice-d66921710ddb4740b25600f98f6ea761?pvs=21)


If you are wanting all your columns to be the same width, you can write `grid-template-columns: 1fr 1fr 1fr;` or you can use `repeat()`.

**repeat()**

repeat() takes two parameters, the first is the number of columns and the second is the column width.

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }

```

and

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, auto);
            }

```

would both produce the same result

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.23.45-PM.png

```css
.container {
                display: grid;
                grid-template-columns: repeat(6, 50px);
            }

```

would look like this

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.28.23-PM.png

Remember that `repeat()` is only useful for when you are wanting all the columns to be the same size.

**grid-template-rows**

`grid-template-rows` is the same as `grid-template-columns` but with rows instead.

So while with `grid-template-columns` you are setting/adjusting the **width**. With `grid-template-rows` you are setting/adjusting the **height**.

One difference to note is that `fr` cannot be used with `grid-template-rows`.

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 100px 100px;
            }

```

This will make 2 rows each with a height of 100px;

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.34.37-PM.png

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 50px 100px;
            }

```

would look like this.

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.35.20-PM.png

Notice how the first row on this one is 50px high and the second is 100px;

You can add more rows by adding more `px` amounts.if you don't add more `px` amounts for the amount of rows present, it will default to the height of the content inside of it.

```css
.container {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 100px;
            }

```

So this would make 2 columns, but since we have 6 divs, the extra divs will run over and create 3 rows total. But we only specified the height of 1 row, so it would look like this

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.39.26-PM.png

You can also use `repeat()` in the same way, just without using `fr` or `auto`. You have to use `px`.

**grid-gap**

`grid-gap` adds some space in between each of the divs to make it look a little nicer.

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 100px);
                grid-gap: 5px;
            }

```

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.43.18-PM.png

notice the space between each box.

**grid-template**

`grid-template` will provide a condensed version of what we did with `grid-template-rows` and `grid-template-columns`.

`grid-template` takes two values.

```css
.container {
                display: grid;
                grid-template: (grid-template-rows) / (grid-template-columns)
                grid-gap: 5px;
            }

```

The following code snippets would produce the same result

```css
.container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 100px);
                grid-gap: 5px;
            }

```

```css
.container {
                display: grid;
                grid-template: repeat(2, 50px) / repeat(3, 1fr);
                grid-gap: 5px;
            }

```

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-2.43.18-PM-1.png

**POSITIONING**

Add the following code to your css.

```css
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 200px 40px;
}

.header {}

.menu {}

.content {}

.footer {}

```

change your HTML to look like this

```css
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <div class="header">HEADER</div>
            <div class="menu">MENU</div>
            <div class="content">CONTENT</div>
            <div class="footer">FOOTER</div>
        </div>
    </body>
</html>

```

**grid-column-start**, **grid-column-end** & **grid-column**

Currently our page should look like this

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.03.54-PM.png

now lets add this code to our `.header` in our css

```css
.header {
     grid-column-start:1;
     grid-column-end: 3;
}

```

It will now look like this

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.06.52-PM.png

Cool! Now our header spans the whole length of the window.

Take note that this pushed our footer into a third row. You may be wondering why we set `grid-column-end` to 3 when we only have 2 columns. `grid-column-end` goes to the start of the column indicated but does not include it. So it starts at column 1 and goes to the start of column 3(or the end of column 2).

For the exact same result in less code. You can use `grid-column` instead.

```css
.header {
     grid-column: 1/3;
}

```

So to be clear, `grid-column` works like this.`grid-column: (grid-column-start)/(grid-column-end)`

Another alternative is using `span` like this.

```css
.footer {
    grid-column: 1 / span 2;
}

```

This acts in the same way as shown by the result in our window.

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.19.18-PM.png

The difference between `grid-column: 1/3;` and `grid-column: 1 / span 2;` is that the former is specifying where specifically it is going to cover, whereas the latter indicates how a starting point and then how many columns it will span rather than just two specific locations.

One more alternative is

```css
.footer {
    grid-column: 1 / -1;
}

```

Again this will produce the same result. The -1 will target the very last column line.

This last method is the best route to take if you are wanting to span the whole page because you may not always know exactly how many columns there are and this will always span the full page width.

Now lets fix the menu and content, we don't want them to share equal portions of the page. We can't use `grid-column` like we have been to fix it because we there are only 2 columns so we cant make the content column cover more of the page unless we make changes in our `grid-template`.

One possible option would be to do something like this

```css
.container {
    display: grid;
    grid-gap: 3px;

    **grid-template-columns: 1fr 4fr;**

    grid-template-rows: 40px 200px 40px;
}

```

That would look like this

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.52.17-PM.png

Seems nice right?

WRONG!

Just kidding, it does **seem** nice. The problem comes when we want to add more stuff in our content section and organize that. Because with our current layout we still only have 2 columns.

A better solution would be something like this.

```css
.container {
    display: grid;
    grid-gap: 3px;

    **grid-template-columns: repeat(12, 1fr);**

    grid-template-rows: 40px 200px 40px;
}

```

and then

```css
.content {
    grid-column: 2/-1;
}

```

The result

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.56.46-PM.png

Here is a look at it with the grid showing

!https://coursework.vschool.io/content/images/2018/01/Screen-Shot-2018-01-31-at-4.56.36-PM.png

Much better! Now we have so much more flexibility with our content section.

**grid-row**

We still have another problem. The menu sometimes goes to the very top of the page. If we want to do that, we will just do the following code.

```css
.header {
    grid-column: 2/-1;
}

```

This will leave some space up top by the header

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-01-31-at-5.07.27-PM.png

Now we simply add

```css
.menu {
    grid-row: 1/3:
}

```

and we get...

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-01-31-at-5.09.56-PM.png

`grid-row` works in the same way as `grid-column` but rather than left to right, it is top to bottom.

**grid-template-areas**

Take note of the small changes I made in our CSS

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
}

.header {
    grid-column: 1 / -1;
}

.menu {}

.content {
    grid-column: 2 / -1;
}

.footer {
    grid-column: 1 / -1;
}

```

I changed the second row to `auto` instead of `200px`. Now doing this alone won't actually work. We also have to add `height: 100%`, now if you look at the window you'll see that the second row expands and shrinks to fill any extra space in the window.

Now let's add `grid-template-areas` to our CSS.

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "h h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

```

What we have here is essentially a visual representation of our grid layout. The letters there are just to name each column on each row of our grid. The `h` is for header, `m` is for menu, `c` is for content, and `f` is for footer.

These names are arbitrary, the `h` could just as well be named `header` or `dolphinpants`. But best practice is to name it in a way that allows you to clearly understand its relation to its column, so in this case `h` is for header.

We will now remove all the `grid-columns` and replace them with `grid-area` like this.

```css
.header {
    grid-area: h;
}

.menu {
    grid-area: m;
}

.content {
    grid-area: c;
}

.footer {
    grid-area: f;
}

```

Your window should still look the same

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.18.15-PM.png

Isn't that cool? It's a very clear way of organizing your layout in a clear visual way.

Now if you want the menu to span all the way to the top like before, you can just switch the first `h` with an `m`

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "m h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

```

and now it spans all the way to the top

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.22.01-PM.png

You can also use a `.` to make a column blank.

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        ". h h h h h h h h h h ."
        "m c c c c c c c c c c ."
        ". f f f f f f f f f f .";
}

```

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.24.41-PM.png

Notice how the spaces above and below the menu are blank and the right column is completely blank all the way down.

You cannot put a `.` in between letters though.Your areas also have to be continuous rectangles.The following code would break the entire layout.

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas:
        "h h h h h . h h h h h h"
        "m c c c c . c c c c f c"
        "f f f f f . f f f f f f";
}

```

This is what our window would look like.

!https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-01-at-12.27.43-PM.png

As you can see, it completely ruined it. So keep the `.`'s on the edges. Also, the `f` interrupts the continuity of the `c` rectangle which also ruins the layout.

# Next Up

[Grid Part 3](https://www.notion.so/Grid-Part-3-b8d36771933e4e179e7c466000e3839c?pvs=21)
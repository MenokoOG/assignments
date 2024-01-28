

### CUSTOM COMPONENT QUIZ?

1. What is a React component? a function that returns react elements or UI
2. What’s wrong with this code?

```jsx --- needs to be PASCAL case
function MyComponent() {
return (
<small>I'm tiny text!</small>
)
}
```

1. What’s wrong with this code?

```jsx -- needs angle brackets when passing to render
function Header() {
return (
<header>
<nav>
<img src="./react-logo.png" width="40px" />
</nav>
</header>

ReactDOM.render(<Header />, document.getElementById("root))
```
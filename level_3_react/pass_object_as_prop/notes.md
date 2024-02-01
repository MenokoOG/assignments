

## Passing object as prop

In React, props are used to pass data from a parent component to a child component. While props are typically used to pass simple values like strings or numbers, you can also pass objects as props to provide more complex data structures and functionality to your child components.

To pass an object as a prop, you follow a similar syntax as passing other types of props. Let's walk through an example to illustrate the process:

1. Define the object in the parent component:

```jsx
import React from 'react';

const ParentComponent = () => {
  const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer'
  };

  return (
    <ChildComponent person={person} />
  );
};

export default ParentComponent;

```

1. Access the object in the child component:

```jsx
import React from 'react';

const ChildComponent = (props) => {
  const { person } = props;

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
};

export default ChildComponent;

```

In the parent component, we define an object `person` with properties like `name`, `age`, and `occupation`. We then pass this object as a prop to the `ChildComponent` by using the `person={person}` syntax within the JSX.

In the child component, we receive the props object and use destructuring to extract the `person` object from it. We can now access the properties of the `person` object in our JSX by using dot notation, such as `person.name`, `person.age`, and `person.occupation`.

By passing an object as a prop, you can encapsulate related data and functionality within a single object and pass it down to child components for rendering or further manipulation. This can be particularly useful when dealing with complex data structures or when you want to pass multiple related values to a child component.
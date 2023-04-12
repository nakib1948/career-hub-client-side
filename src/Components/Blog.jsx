import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbarr from "./Navbarr";

const Blog = () => {
  return (
    <>
      <Navbarr />
      <Container fluid className="mt-5">
        <h1 className="text-center mb-3">Blog</h1>
        <Row style={{ marginLeft: "10%", marginRight: "10%" }}>
          <Col>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>When should context api used?</Card.Title>
                <Card.Text>
                  The Context API in React is a way to manage global state that
                  can be accessed by multiple components. It allows us to avoid
                  "prop drilling," which is the process of passing data down
                  through multiple layers of components as props. When we use
                  the Context API, we can create a "context" object that
                  contains the data or state that we want to share. This context
                  object can then be accessed by any component that needs it,
                  regardless of where it is in the component tree. The Context
                  API is useful in situations where we have data or state that
                  needs to be shared across multiple components, and passing the
                  data down through props would be impractical or result in
                  overly complex code. For example, we might use the Context API
                  to manage a theme or a user's authentication status. Using the
                  Context API can help we write more maintainable and scalable
                  code by reducing the amount of prop drilling and making it
                  easier to share data between components. However, it's
                  important to use the Context API judiciously and not overuse
                  it, as it can make it more difficult to reason about the flow
                  of data in our application.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>What is custom hook?</Card.Title>
                <Card.Text>
                  A custom hook in React is a JavaScript function that uses the
                  built-in React hooks, such as useState, useEffect, useContext,
                  and useReducer, to encapsulate reusable logic that can be
                  shared across multiple components. Custom hooks allow us to
                  extract common code from components and create a single source
                  of truth for that logic, making your code more modular and
                  easier to maintain. Custom hooks follow a specific naming
                  convention, where the name of the hook starts with "use" to
                  indicate that it is a hook. For example, a custom hook that
                  uses the useState hook to manage the state of a checkbox might
                  be named useCheckboxState. By creating custom hooks, we can
                  abstract complex logic and simplify our components. For
                  example, we might create a custom hook that uses the useEffect
                  hook to fetch data from an API and then returns the data and a
                  loading status. we can then use this custom hook in multiple
                  components, rather than having to repeat the same logic in
                  each component. Custom hooks can also make your code more
                  reusable and portable, as they allow us to easily move logic
                  between projects or share it with other developers. Overall,
                  custom hooks are a powerful tool in React that can help us
                  write cleaner, more modular code.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>
                  What is useRef?What is the perpose of useRef?
                </Card.Title>
                <Card.Text>
                  we can use the useRef hook in React to create a mutable object
                  that persists between renders. This hook returns an object
                  with a single property, current, which we can use to store any
                  value. The main purpose of useRef is to provide a way to
                  access and manipulate DOM elements or other mutable values
                  without triggering a re-render. By using a ref to store the
                  value of an input field, for example, we can access it when
                  the form is submitted without causing a re-render. Similarly,
                  we can use a ref to store a reference to a DOM element and
                  access its scroll position or focus an input field. Overall,
                  useRef is a useful tool for optimizing performance and
                  accessing DOM elements in a React application.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>
                  What is useMemo?What is the perpose of useMemo?
                </Card.Title>
                <Card.Text>
                  we can use the useMemo hook in React to memoize the result of
                  a function call and only recompute it when one of its
                  dependencies has changed. The main purpose of useMemo is to
                  optimize performance by avoiding unnecessary recalculations of
                  expensive functions. By memoizing the result of these
                  functions, we can avoid recalculating them on every render,
                  improving the performance of our application. However, we
                  should use useMemo judiciously and only when we have a
                  function that is computationally expensive and has stable
                  dependencies that don't change often.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;

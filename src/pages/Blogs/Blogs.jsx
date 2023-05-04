import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    fontWeight: 700,
    fontSize: "28px",
  },
  questions: {
    fontWeight: 800,
    fontSize: "16px",
    color: "black",
    marginTop: "20px",
    textAlign: "left",
  },
  answers: {
    fontSize: "14px",
    color: "gray",
    marginTop: "5px",
    textAlign: "left",
  },
  listStyle: {
    fontSize: "14px",
    color: "gray",
    textAlign: "left",

    marginTop: "2px",
  },

  section: {
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

const Blogs = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A3" style={styles.page}>
          <View style={styles.section}>
            <Text>Our Blogs</Text>
            <Text style={styles.questions}>
              1.Tell us the differences between uncontrolled and controlled
              components.
            </Text>
            <Text style={styles.answers}>
              Controlled components: refer to components that are directly
              controlled by the application, meaning the application manages the
              state and behavior of the component. These components are
              typically custom-built for the specific application and have a
              clear interface with the application. Examples of controlled
              components include buttons, text inputs, and custom UI elements.
            </Text>
            <Text style={styles.answers}>
              Uncontrolled components , on the other hand, are components that
              manage their own state internally and do not have a clear
              interface with the application. These components are often
              pre-built and provided by third-party libraries or frameworks.
              Examples of uncontrolled components include HTML form elements
              such as checkboxes and radio buttons.
            </Text>
            <Text style={styles.questions}>
              2. How to validate React props using PropTypes?
            </Text>
            <Text style={styles.answers}>
              React, PropTypes is a library that is used to validate the props
              of a component. PropTypes is a built-in feature of React, which
              provides a way to specify the type and structure of props that a
              component expects to receive. By using PropTypes, developers can
              ensure that the components are being used correctly and avoid bugs
              caused by incorrect usage of props.
            </Text>
            <Text style={styles.answers}>
              Uncontrolled components , on the other hand, are components that
              manage their own state internally and do not have a clear
              interface with the application. These components are often
              pre-built and provided by third-party libraries or frameworks.
              Examples of uncontrolled components include HTML form elements
              such as checkboxes and radio buttons. Here are some common
              PropTypes validation:
            </Text>
            <Text style={styles.listStyle}>- PropTypes.string</Text>
            <Text style={styles.listStyle}>- PropTypes.number</Text>
            <Text style={styles.listStyle}>- PropTypes.bool</Text>
            <Text style={styles.listStyle}>- PropTypes.func</Text>
            <Text style={styles.listStyle}>- PropTypes.array</Text>
            <Text style={styles.listStyle}>- PropTypes.object</Text>

            <Text style={styles.questions}>
              3.Tell us the difference between nodejs and express js.
            </Text>
            <Text style={styles.answers}>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine. It allows developers to write server-side JavaScript code
              that can be executed on the server. Node.js provides a
              non-blocking I/O model that allows for fast and scalable
              server-side applications. With Node.js, developers can build
              back-end services, APIs, and other server-side applications.
              Express.js, on the other hand, is a web framework built on top of
              Node.js. It provides a simple and flexible API for building web
              applications and APIs. Express.js provides features like routing,
              middleware, and templating that make it easier to build web
              applications. With Express.js, developers can build web
              applications and APIs quickly and easily.
            </Text>

            <Text style={styles.questions}>
              4. What is a custom hook, and why will you create a custom hook?
            </Text>
            <Text style={styles.answers}>
              In React, a custom hook is a JavaScript function that uses one or
              more built-in React hooks to encapsulate a certain piece of logic
              and make it reusable across different components. Custom hooks
              allow developers to extract and reuse stateful logic from
              components, making the code more organized, readable, and
              maintainable. Custom hooks allow developers to abstract away
              complex logic and functionality from components, reducing the
              amount of code duplication and making it easier to maintain the
              codebase. By encapsulating common logic in a custom hook,
              developers can avoid code duplication and improve the overall code
              quality. Custom hooks are prefixed with the word "use" to indicate
              that they are built on top of the built-in React hooks. A custom
              hook can use any of the built-in React hooks, including useState,
              useEffect, useContext, and useRef.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Blogs;

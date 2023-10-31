import React, { useState } from "react";
import "./App.scss";
import Message from "./components/Message";
import Content from "./components/Content";
import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/ListGroup2";
import Alert from "./components/Alert";
import Button from "./components/Button";
import AlertDismiss from "./components/AlertDismiss";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisibility] =useState(false);

  const items = ["Tokyo", "Stockholm", "Oslo", "Wien", "Ottawa"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div className="App">
      <Message />
      <Form/>
      {/* <Content/> */}
      {/* <ListGroup items={items} heading="Cities"/> */}
      <ListGroup2 items={items} heading="Cities-click" onSelectItem={handleSelectItem}/>
      {/* <Alert>Hello <span>word</span></Alert> */}

      {alertVisible && <AlertDismiss onClose={() => setAlertVisibility(false)}>
        My alert</AlertDismiss>}
      <Button onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
      <Counter/>
      <div className="App-logo"></div>
    </div>
  );
}

export default App;

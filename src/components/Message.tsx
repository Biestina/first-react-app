import React from "react";
// import "../App.scss";

// PascalCase
function Message() {
  // JSX: JavaScript XML
  const name = "";
  // if(name)
  //   return <h1>Hello {name}</h1>;
  // return <h1>Hello World</h1>
  // return name ? <h1 className="App-header">Hello {name}</h1> : <h1>Hello stranger</h1>
  return (
    <>
      <h1 className="App-header text-orange-400">
        Hello {name ? name : "stranger"}
      </h1>
    </>
  );
}

export default Message;

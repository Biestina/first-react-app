import React from "react";

// PascalCase
function Message() {
  // JSX: JavaScript XML
  const name = '';
  // if(name)
  //   return <h1>Hello {name}</h1>;
  // return <h1>Hello World</h1>
  return name ? <h1>Hello {name}</h1> : <h1>Hello stranger</h1>
}

export default Message;
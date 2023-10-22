// import { Fragment, MouseEvent } from "react";
import { useState } from "react";

function Content() {
  const items = ["Tokyo", "Stockholm", "Oslo", "Wien", "Ottawa"];
  // let selectedIndex = 0;
  //! (State) Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // let arr = useState(-1)
  //* arr[0] // variable (selectedIndex)
  //* arr[1] // updater function

  // const message = items.length === 0 ? <p>No item found</p> : null;
  const message = items.length === 0 && <p>No item found</p>;

  //* Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <div>
    // <Fragment>
    <>
      <h2>List</h2>
      {message}
      <ul className="list-group">
        {/* <li className="list-group-item">1</li> */}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={(event) => console.log(item, index, event)}>
            // onClick={handleClick}
            // onClick={() => {selectedIndex = index}}
            onClick={() => { setSelectedIndex(index) }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    /* </Fragment> */
    /* </div> */
  );
}

export default Content;

import { useState } from "react";

export function Apps() {
  var name = "Vasanth"
  return (
    <div style={{ textAlign: "center" }}>
      {
        name === "Vasanth" ? "Hello" + name : "Hi Guys"
      }
    </div>
  );
}


export default function GoodMorning() {
  return (
    <>
      <h1>Good Morning</h1>
      <button onMouseOver={() => console.log("On Mouse Over")} onClick={() => alert("Hi")}>Hello</button>
      <input name="name" placeholder="Enter Name" onBlur={(e) => console.log(e.target.value)} />
    </>
  )
}



export function StateExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Santhana Raj");
  const [float, setFloat] = useState(1.1);
  const [array, setAray] = useState(["One", "Two", "Three"]);
  var a = 1
  const handleButtonClick = () => {
    setCount(count + 1)
    a += 1
    console.log("a ", a);
  }
  const handleOnClick = () => {
    setAray([...array, 1, 2, 3, 4, 5])
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>name is {name}</p>
      <p>float is {float}</p>
      <p>a is {a}</p>
      {
        array?.map(ar => {
          if (ar !== "Two") {
            return (ar)
          }
        })
      }

      {array}

      <button onClick={handleButtonClick}>
        Click me
      </button>
      <p>-------------------------</p>
      {
        array?.filter(arr => arr === "Two")
      }

      <p>-------------------------</p>
      <button onClick={handleOnClick}>Click Me</button>
    </div>
  );
}
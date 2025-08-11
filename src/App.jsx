import Header from "./assets/Header"
import Login, {Profile, Setting, UserKey } from "./UserComponent"

function App() {
  const userName = "Sahariar Emon";
  let x = 20;
  let y = 50;
  return (
    <>
      <h1>{userName}</h1>
      <h2>{2 + 4 * 4}</h2>
      <h3>{x * y}</h3>
      <button onClick={() => {
        alert("Hello!")
      }}>Click Me</button>
    </>
  )
}

export default App
import Header from "./assets/Header"
import Login, {Profile, Setting, UserKey } from "./UserComponent"

function App() {
  return (
    <div>
    
      <Header />
      <Login />
      <Profile />
      <Setting />
      <h1>{UserKey}</h1>
    </div>
  )
}

export default App
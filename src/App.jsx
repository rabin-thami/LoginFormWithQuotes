import Login from "./Login"
import DailyQuotes from "./DailyQuotes"



export default function App() {
  return (
    <main>
      <div className="first-circle"></div>
      <div className="second-circle"></div>
      <div className="container">
       <Login />
       <hr />
       <DailyQuotes/>
      </div>
    </main>
  )
}
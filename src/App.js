import Budget from "./Budget";
import "./MyApp.css"
import Authentication from "./Authentication";
import {useState} from "react";
import { BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'

function App() {
  // const [isSubmitted, setIsSubmitted] = useState(false)
    const [customerName, setCustomerName] = useState("")
  return (
    <div className="app-container">
      {/*<Budget/>*/}
      {/*  <Authentication/>*/}
      {/*  {isSubmitted ? <Budget/> : <Authentication setIsSubmitted = {setIsSubmitted}/>}*/}
      <Router>
          <Route exact path="/">
           {/*<Authentication setCustomerName = {setCustomerName}/>*/}
              <Authentication/>
          </Route>

        {/*{isSubmitted ? <Budget/> : <Authentication setIsSubmitted = {setIsSubmitted}/>}*/}
        <Switch>
          <Route path="/dashboard/:identity">
           {/*<Budget customerName = {customerName}/>*/}
              <Budget/>
          </Route>
        </Switch>
           </Router>
    </div>
  );
  }

export default App;

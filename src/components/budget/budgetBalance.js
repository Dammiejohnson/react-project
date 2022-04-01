import React, {useState} from "react"
import "./BudgetBalance.css"

const BudgetBalance = (props) => {
    const[input, setIsInput] = useState("")

    const handleInput = (e) => {
        setIsInput(e.target.value)
    }

    return (
      <div className='budgetBalance'>
          <div className='balance'>
              {props.balance}
          </div>
            <div className='balance-button'>
              <input onChange={handleInput}/>
              <button onClick={() => props.setBalance(input)}>Update Balance</button>
            </div>
      </div>
    )
  }
  
  export default BudgetBalance
import React, {useEffect, useState} from "react"
import "./BudgetBalance.css"
import axios from 'axios'

const BudgetBalance = (props) => {
    const[input, setIsInput] = useState("")
    const [exchangeRate, setExchangeRate] = useState ({})
    const [selectOption, setSelectOption] = useState("")

    const handleInput = (e) => {
        setIsInput(e.target.value)
    }

    const handleSelect = (e) => {
        e.target.value === Object.keys(exchangeRate)[0] ?
            props.setBalance(1000 * exchangeRate[e.target.value]):
            (selectOption === ""?
                props.setBalance(props.balance * exchangeRate[e.target.value]):
                props.setBalance(props.balance/ exchangeRate[selectOption] * exchangeRate[e.target.value])
            )
        setSelectOption(e.target.value)
    }
    useEffect (() => {
      axios.get('https://v6.exchangerate-api.com/v6/853b41de1c4aae21c99b083f/latest/NGN')
          .then ((response) =>
          {setExchangeRate(response.data.conversion_rates)
          setSelectOption(Object.keys(response.data.conversion_rates)[0])
          })
    },[]) 


    useEffect( () => {
      console.log("I just MOUNTED @ Budget Balance")
      return () => {
        console.log("I just UNMOUNTED @ Budget Balance")
      }
    }, [props.balance]  )

    return (
      <div className='budgetBalance'>
          <div className='balance'>
              {props.balance}
          </div>
          <select className="balance-dropdown" onChange={handleSelect}>
              {Object.keys(exchangeRate).length > 0 &&
              Object.keys(exchangeRate).map (
                  (data, index) => <option key = {index}>{data}</option>)}
          </select>

            <div className='balance-button'>
              <input onChange={handleInput}/>
              <button onClick={() => props.setBalance(input)}>Update Balance</button>
            </div>
      </div>
    )
  }
  
  export default BudgetBalance
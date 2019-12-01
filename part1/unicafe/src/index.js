import React, { useState } from 'react'
import ReactDOM from 'react-dom'



/*const Button = (props) => {
	set
	return 
}*/

const Display_stats = ({ choice, text }) => {
	return (
		<p>{text}: {choice} </p>
		)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + neutral + bad
  let good_feeback = (good / total) * 100

  return (
    /*<div>
      <h1>Give feedback</h1>
      <Button choice={good} text={"Good"} />
      <Button choice={neutral} text={"Neutral"} />
      <Button choice={bad} text={"Bad"} />
    </div>*/
    <div>
     <h1>Give feedback</h1>
     <button onClick={(() => setGood(good + 1))}> Good </button>
     <button onClick={(() => setNeutral(neutral + 1))}> Neutral </button>
     <button onClick={(() => setBad(bad + 1))}> Bad </button>
     <h1> Statistics </h1>
     <Display_stats text="Good" choice={good} />
     <Display_stats text="Neutral" choice={neutral} />
     <Display_stats text="Bad" choice={bad} />
     <Display_stats text="Total" choice={total} />
     <Display_stats text="Good feedback" choice={good_feeback + " %"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
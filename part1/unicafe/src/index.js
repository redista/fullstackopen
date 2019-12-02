import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({text, val, info}) => {
	if (val === 0 || val === "NaN%") {
		return (
			<tr>
			 <td>
			  {info}
			 </td>
			</tr>
			)
	}
	return (
		<tr>
		 <td>{text}:</td>
		 <td>{val}</td>
		</tr>
		)
}

const Button = ({setVal, text}) => {
	return (
		<button onClick={setVal}>{text}</button>
		)
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + neutral + bad
  let average = (good / total) * 100

  return (
    <div>
     <h1>Give feedback</h1>
     <Button setVal={() => setGood(good + 1)} text="Good" />
     <Button setVal={() => setNeutral(neutral + 1)} text="Neutral" />
     <Button setVal={() => setBad(bad + 1)} text="Bad" />
     <h1> Statistics </h1>
     <table>
      <tbody>
       <Statistics info="Stats are shown here" text="Good" val={good} />
       <Statistics text="Neutral" val={neutral} />
       <Statistics text="Bad" val={bad} />
       <Statistics text="Total" val={total} />
       <Statistics text="Average" val={average + "%"} />
      </tbody>
     </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display_Stats = ({stat}) => {
	if (stat.total === 0) {
		return (
			<div>
			 <p>Stats are shown here</p>
			</div>
			)
	}
	return (
		<div>
		 <p>Good: {stat.good}</p>
		 <p>Neutral: {stat.neutral}</p>
		 <p>Bad: {stat.bad}</p>
		 <p>Total: {stat.total}</p>
		 <p>Good feedback: {stat.good_feeback}% </p>
		</div>
		)
}

const Display_Feeback = ({ choice, text }) => {
	return (
		<p>{text}: {choice} </p>
		)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  var stats = {
  	good: good,
  	neutral: neutral,
  	bad: bad,
  	total: good + neutral + bad,
    get good_feeback() { return (this.good / this.total) * 100 }
	};

  return (
    <div>
     <h1>Give feedback</h1>
     <button onClick={() => setGood(good + 1)}> Good </button>
     <button onClick={() => setNeutral(neutral + 1)}> Neutral </button>
     <button onClick={() => setBad(bad + 1)}> Bad </button>
     <h1> Statistics </h1>
     <Display_Stats stat={stats} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
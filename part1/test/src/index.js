import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
			<div>
			These buttons move left or right
			</div>
			)
	}

	return (
		<div>
		button press history: {props.allClicks.join(' ')}
		</div>
		)
}





const App = () => {
	const [counter, setCounter] = useState(0)
	const [leftClick, setLeftClick] = useState(0)
	const [rightClick, setRightClick] = useState(0)
	const [allClicks, setallClicks] = useState([])

	const HandleLeftClick = () => {setallClicks(allClicks.concat('L'))
								   setLeftClick(leftClick + 1)}

	const HandleRightClick = () => {setallClicks(allClicks.concat('R'))
		   							setRightClick(rightClick + 1)}

	const SetToValue = (value) => () => setCounter(value)

	return (
		<div>
		<div>{counter}</div>
		<button onClick={SetToValue(counter + 1)}>
		plus
		</button>
		<button onClick={SetToValue(0)}>
		zero
		</button>
		<div>left: {leftClick} right: {rightClick}</div>
		<button onClick={HandleLeftClick}>
		l
		</button>
		<button onClick={HandleRightClick}>
		r
		</button>
		<History allClicks={allClicks} />
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root'));

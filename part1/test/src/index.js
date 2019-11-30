import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const [counter, setCounter] = useState(0)

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
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root'));

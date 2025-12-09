import { useState } from "react";

const Display = ({ text }) => {
	return <h1>{text}</h1>;
};

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const Stats = ({ text, figure }) => {
	return (
		<p>
			{text} {figure}
		</p>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		setGood(good + 1);
	};

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
	};

	const handleBadClick = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<Display text="give feedback" />
			<Button onClick={handleGoodClick} text="good" />
			<Button onClick={handleNeutralClick} text="neutral" />
			<Button onClick={handleBadClick} text="bad" />
			<Display text="statistics" />

			<Stats text="good" figure={good} />
			<Stats text="neutral" figure={neutral} />
			<Stats text="bad" figure={bad} />
		</div>
	);
};

export default App;

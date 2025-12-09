import { useState } from "react";

const Display = ({ text }) => {
	return <h1>{text}</h1>;
};

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th
							style={{
								minWidth: 60,
								maxWidth: 60,
							}}
						>
							{text}
						</th>
						<td>{value}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const Stats = ({ good, neutral, bad, total, average, positivePercent }) => {
	if (total === 0) {
		return <span>No feedback given</span>;
	}

	return (
		<div>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="total" value={total} />
			<StatisticLine text="average" value={average} />
			<StatisticLine text="positive" value={positivePercent + "%"} />
		</div>
	);
};

const App = () => {
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

	const total = bad + good + neutral;
	const average = (good * 1 + neutral * 0 + bad * -1) / total;
	const positivePercent = (good / total) * 100;

	return (
		<div>
			<Display text="give feedback" />
			<Button onClick={handleGoodClick} text="good" />
			<Button onClick={handleNeutralClick} text="neutral" />
			<Button onClick={handleBadClick} text="bad" />
			<Display text="statistics" />

			<Stats
				good={good}
				neutral={neutral}
				bad={bad}
				total={total}
				average={average}
				positivePercent={positivePercent}
			/>
		</div>
	);
};

export default App;

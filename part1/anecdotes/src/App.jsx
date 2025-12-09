import { useState } from "react";

const Display = ({ text }) => {
	return <h1>{text}</h1>;
};

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);

	const [votes, setVotes] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
	});

	const selectRandomAnecdote = () => {
		const minCeiled = Math.ceil(0);
		const maxFloored = Math.floor(anecdotes.length - 1);
		setSelected(
			Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
		);
		console.log("selected", selected);
	};

	let anecdoteWithMostVotes = Object.keys(votes).reduce((a, b) =>
		votes[a] > votes[b] ? a : b
	); //! returns the key, not the value

	console.log("anecdote with most votes", anecdoteWithMostVotes);

	const voteForAnecdote = () => {
		setVotes({
			...votes,
			[selected]: votes[selected] + 1,
		});
	};

	return (
		<div>
			<Display text="Anecdote of the day" />

			<div>
				{anecdotes[selected]} has {votes[selected]} votes
			</div>

			<Button text="Random anecdote" onClick={selectRandomAnecdote} />
			<Button text="vote" onClick={voteForAnecdote} />

			<Display text="Anecdote with most votes" />

			<div>
				{anecdotes[anecdoteWithMostVotes]} has {votes[anecdoteWithMostVotes]}{" "}
				votes
			</div>
		</div>
	);
};

export default App;

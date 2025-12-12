const Header = ({ courseName }) => <h1>{courseName}</h1>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => (
	<div>
		{parts.map((part, i) => (
			<Part key={i} part={part} />
		))}
	</div>
);

const Total = ({ parts }) => {
	const exercises = parts.map((part) => part.exercises);

	const total = exercises.reduce((a, b) => a + b, 0);

	return <strong>total of {total} exercises</strong>;
};

const Course = ({ course }) => {
	return (
		<div>
			<Header courseName={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default Course;

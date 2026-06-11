interface HeaderProps {
	title: string;
}

const Header = ({ title }: HeaderProps) => {
	return <h1>{title}</h1>;
};

interface PartProps {
	part: string;
	exercises: number;
}

const Part = ({ part, exercises }: PartProps) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

interface ContentProps {
	parts: { name: string; exercises: number }[];
}

const Content = ({ parts }: ContentProps) => {
	return parts.map((item) => (
		<Part key={item.name} part={item.name} exercises={item.exercises} />
	));
};

interface TotalProps {
	exercises: number[];
}

const Total = ({ exercises }: TotalProps) => {
	return (
		<p>
			Number of exercises {exercises.reduce((sum, current) => sum + current, 0)}
		</p>
	);
};

interface AppProps {
	counter: number;
}

export const App = ({ counter }: AppProps) => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React", exercises: 10 },
			{ name: "Using props to pass data", exercises: 7 },
			{ name: "State of a component", exercises: 14 },
		],
	};

	return (
		<div>
			<Header title={course.name} />
			<Content parts={course.parts} />
			<Total exercises={course.parts.map((item) => item.exercises)} />
		</div>
	);
};

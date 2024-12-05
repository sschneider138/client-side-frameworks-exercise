import "./App.css";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";

function App() {
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://solidjs.com" target="_blank" rel="noreferrer">
					<img src={solidLogo} class="logo solid" alt="Solid logo" />
				</a>
				<h1>Hello World from SolidJS</h1>
				<div style={{ "text-align": "left" }}>
					<ul>
						<li>
							SolidJS is interesting because unlike React, it does not use a{" "}
							<a href="https://en.wikipedia.org/wiki/Virtual_DOM">
								virtual DOM
							</a>
							.
						</li>
						<li>
							The virtual DOM can be a performance bottleneck in large-scale
							applications. By opting for direct manipulation of the browser DOM
							over a virtual DOM, SolidJS can load its content much quicker than
							React and with a far smaller memory footprint. In brief, SolidJS
							does its rendering work once whereas React must do it twice.
						</li>
						<li>
							Additionally, SolidJS has a more efficient state mangement
							solution, leading to reduced overhead concerning tracking and
							updating state.
						</li>
						<li>
							On the downside, SolidJS has a much smaller ecosystem than React.
							This may be a limitation in some situations, but it generally
							isn't an inhibitor for anyone looking to build a simple app that
							just shows the user some data.
						</li>
						<li>
							While SolidJS seems like an obvious choice over React due to its
							retention of React's finer features and improvement upon its
							deficiencies, it's unlikely to detract from React's dominance in
							the market. As much as developers admire performance improvements
							and efficiency gains, the average user would not be able to tell
							the difference between an application written in React vs one
							written in SolidJS. This makes that case of switching from React
							to SolidJS quite a hard sell to the managerial class who direct
							the company.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;

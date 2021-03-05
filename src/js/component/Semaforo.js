import React, { useState } from "react";

//create your  component
export function TrafficLight() {
	//        ↓ variable name             ↓ default value
	const [color, setColor] = useState([]);
	//               ⬆ function to change the color
	return (
		<div styles="margin: auto;">
			<div className="SemaforoTop"></div>
			<div className="container">
				<div
					className={
						color == "red" ? "red light selected" : "red light"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "yellow light selected"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green"
							? "green light selected"
							: "green light"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}

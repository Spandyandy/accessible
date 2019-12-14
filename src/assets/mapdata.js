var SIZE = 8;
export default {
	name: "my-map",
	areas: [
		// {
		// 	name: "1",
		// 	shape: "poly",
		// 	coords: [25, 33, 27, 300, 128, 240, 128, 94],
		// 	preFillColor: "green",
		// 	fillColor: "#0000ff"
		// },
		// {
		// 	name: "2",
		// 	shape: "poly",
		// 	coords: [219, 118, 220, 210, 283, 210, 284, 119],
		// 	preFillColor: "pink",
		// 	lineWidth: 10,
		// 	strokeColor: "#0000ff"
		// },
		// {
		// 	name: "3",
		// 	shape: "poly",
		// 	coords: [381, 241, 383, 94, 462, 53, 457, 282],
		// 	preFillColor: "yellow", // this is mandatory for stroke color to work
		// 	lineWidth: 10,
		// 	strokeColor: "#6afd09"
		// },
		// {
		// 	name: "4",
		// 	shape: "poly",
		// 	coords: [245, 285, 290, 285, 274, 239, 249, 238],
		// 	preFillColor: "red"
		// },
		{
			name: "Hogan",
			shape: "rect",
			coords: [195*SIZE/5, 379*SIZE/5, 219*SIZE/5, 398*SIZE/5],
			preFillColor: "rgb(255,255,255,0.1)",
			strokeColor: "red",
			lineWidth: 2,
			details: "2 elevators near the main lounge on first floor"
		},
		{
			name: "SIPA",
			shape: "rect",
			coords: [365*SIZE/5, 178*SIZE/5, 406*SIZE/5, 192*SIZE/5],
			preFillColor: "rgb(255,255,255,0.1)",
			strokeColor: "red",
			lineWidth: 2,
			details: "4 elevators near North entrance, another 4 near South entrance"
		},
		{
			name: "Pupin",
			shape: "rect",
			coords: [215*SIZE/5, 84*SIZE/5, 250*SIZE/5, 96*SIZE/5],
			preFillColor: "rgb(255,255,255,0.1)",
			strokeColor: "red",
			lineWidth: 2,
			details: "Right next to the entrance"
		},
		{
			name: "Kent",
			shape: "rect",
			coords: [302*SIZE/5, 250*SIZE/5, 342*SIZE/5, 261*SIZE/5],
			preFillColor: "rgb(255,255,255,0.1)",
			strokeColor: "red",
			lineWidth: 2,
			details: "Enter the building, turn right, there are 3 elevators"
		},
		{
			name: "Low Library",
			shape: "rect",
			coords: [252*SIZE/5, 187*SIZE/5, 289*SIZE/5, 225*SIZE/5],
			lineWidth: 2,
			preFillColor: "rgba(255, 255, 255, 0.1)",
			strokeColor: "red",
			details: "First floor next to the bathroom"
		},
		{
			name: "Mudd",
			shape: "rect",
			coords: [252*SIZE/5, 187*SIZE/5, 289*SIZE/5, 225*SIZE/5],
			lineWidth: 2,
			preFillColor: "rgba(255, 255, 255, 0.1)",
			strokeColor: "red",
			details: "First floor next to the bathroom"
		}
	]
};

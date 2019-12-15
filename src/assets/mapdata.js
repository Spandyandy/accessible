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
			details: "First floor next to the bathroom",
			comments: [{
				id: 0,
				user: "Junghoo Kim",
				content: "The elevator is no longer avaiable",
				userPic: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/68454768_2885093098173036_2738068297177104384_o.jpg?_nc_cat=111&_nc_ohc=SyVEx5hMg0YAQnX5StF2DfHRFHoOso68jhNVOdpEOAu6gNxurOYNAS_oQ&_nc_ht=scontent-mia3-1.xx&oh=716fe6bdd557702189cab9a622a6f32a&oe=5E7962AE",
				publishDate: "2 days ago"
				},
				{
				id: 1,
				user: "Maanvi Singhee",
				content: "It seems like elevator construction has been completed. Now the elevator is next to the entrance.",
				userPic: "https://media.licdn.com/dms/image/C5603AQE6yjdU21f3XQ/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=Lb7QxzUC4_rQE9T1wM2RTwEdPEiCFi0yddKRYxI946E",
				publishDate: "4 days ago"
				},
				{
				id: 2,
				user: "Trevor Laycock",
				content: "There is an elevator construction next to the entrance. There is one other elevator back of this building.",
				userPic: "https://media.licdn.com/dms/image/C4D03AQFQLjcwlp4E9A/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=HC-TNj2uKDGG24kIXeXM0zpoOoUOtxOJQb1IVFpZK1I",
				publishDate: "1 Week ago"
				}
			]
		},
		{
			name: "Mudd",
			shape: "rect",
			coords: [293*SIZE/5, 84*SIZE/5, 343*SIZE/5, 99*SIZE/5],
			lineWidth: 2,
			preFillColor: "rgba(255, 255, 255, 0.1)",
			strokeColor: "red",
			details: "3 elevators located in the lounge in front of CSB building"
		}
	]
};

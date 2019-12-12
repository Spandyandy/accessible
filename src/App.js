import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import map from './map.png';
import './App.css';

var SIZE = 8;

var MAP = {
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
		}
	]
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
	  hoveredArea: null, clickedArea: null, details: "", stylindDetails: null,
	  comment: "",
	  comments: [
		{
		  id: 0,
		  user: "Bonorum Malorum",
		  content: "Many desktop publishing packages and web page editors now use",
		  userPic: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png",
		  publishDate: "2 days ago"
		},
		{
		  id: 1,
		  user: "Cicero Areals",
		  content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
		  userPic: "https://static.tgstat.ru/public/images/channels/_0/f0/f0f7f79a275a83bfe8769dfd81d40bb2.jpg",
		  publishDate: "4 days ago"
		},
		{
		  id: 2,
		  user: "Hanna Pages",
		  content: "Lorem Ipsum comes from sectionsof de Finibus Bonorum et Malorum (The Extremes of Good and Evil)",
		  userPic: "https://vignette.wikia.nocookie.net/versus-compendium/images/0/09/Garfield.png/revision/latest?cb=20181122134939",
		  publishDate: "1 Week ago"
		},
	  ]
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
  }
	load() {
		this.setState({ msg: "Interact with image !" });
	}
	clicked(area) {
		this.setState({
			clickedArea: area,
			details: area.details,
		});
	}
	clickedOutside(evt) {
		this.setState({
			clickedArea: null,
			details: null
		});
	}
	enterArea(area) {
		this.setState({
			hoveredArea: area,
		});
	}
	leaveArea(area) {
		this.setState({
			hoveredArea: null,
		});
	}
	getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}
	handleSubmit(event) {
		event.preventDefault();
		var curr = this.state.comments;
		curr.unshift({
			id: curr[curr.length - 1] + 1,
			user: "anonymous",
			content: this.state.comment,
			userPic: "https://devtalk.blender.org/uploads/default/optimized/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a_2_1380x920.png",
			publishDate: "just now",
		})
		this.setState({
			comments: curr
		})
	}
	handleChange(event) {
		event.preventDefault();
		this.setState({
			comment: event.target.value
		})
	}

	render() {
		return (
			<div className="grid">
				<div className="presenter">
					<div style={{ position: "relative" }}>
						<ImageMapper
							src={map}
							map={MAP}
							width={SIZE*100}
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onImageClick={evt => this.clickedOutside(evt)}
							lineWidth={4}
							strokeColor={"white"}
						/>
						{this.state.hoveredArea && (
							<span
								className="hover-tooltip"
								style={{ ...this.getTipPosition(this.state.hoveredArea) }}
							>
								{this.state.hoveredArea && this.state.hoveredArea.name}
							</span>
						)}
					</div>
				</div>
				<div className="source">
					<h2>Accessibility Information</h2>
					Building Name : {this.state.clickedArea ? this.state.clickedArea.name:null}
					  <br/>
					  <br/>
					Details : <p>{this.state.details}</p>
					<div class="comment-container">
						<h2>Add A Comment Below</h2>
						<div class="form-group">
							<textarea class="form-control status-box" rows="3" name="c" onChange={this.handleChange} placeholder="Enter your comment here..."></textarea>
						</div>
						<div class="button-group pull-right">
						<button class="btn btn-primary" onClick={this.handleSubmit}>Post</button>
						</div>
					</div>

					<ul class="posts">
					<div className="commentBox">
						{this.state.comments.map((comment) => {
							return <div className="comment">
								<img src={comment.userPic} className="commentPic" alt="user Pic"/>
								<div className="commentBody">
								<div className="commentHeader">
									<span className="commentAuthor">{comment.user}</span>
									<span className="publishDate">{comment.publishDate}</span>
								</div>
								<span className="commentContent">{comment.content}</span>
								</div>
							</div>
							})
						}
					</div>
					</ul>
				</div>
			</div>
		);
	}
};

export default App;
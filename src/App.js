import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import map from './map.png';
import mapdata from './assets/mapdata.js'
import './App.css';


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
	clicked(area) {
		console.log(area);
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
			comments: curr,
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
							map={mapdata}
							width={8*100}
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
					<div className="comment-container">
						<h2>Add A Comment Below</h2>
						<div className="form-group">
							<textarea className="form-control status-box" rows="3" name="c" onChange={this.handleChange} placeholder="Enter your comment here..."></textarea>
						</div>
						<div className="button-group pull-right">
						<button className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
						</div>
					</div>

					<ul className="posts">
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
import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";
const URL="https://blog-json-api-react.herokuapp.com/blogs";
class App extends Component {
  
  state = {
		post: [],
		allPosts: []
	};

	componentDidMount() {
		axios
			.get(URL, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
			.then(({ data }) => {
				this.setState({
					post: data,
					allPosts: data // array data from JSON stored in these
				});
			})
			.catch(err => {});
	}

	_onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter(item =>
			item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};
  render() {
    return (
      <div className="container">
				<div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						{/* input field activates onKeyUp function on state change */}
						<input
							type="search"
							onChange={this.id}
							name="s"
							id="s"
							placeholder="Search"
						/>
						<button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</button>
					</form>
				</div>
				<ul className="data-list">
					{/* post items mapped in a list linked to onKeyUp function */}
					{this.state.post.map((item, index) => (
						<li className={"block-" + index}>
							<a className="title" href={item.id}>
								<h3>{item.name}</h3>
							</a>
							<a className="link" href={item.name}>
							 
							</a>
						</li>
					))}
				</ul>
			</div>
    );
  }
}

export default App;
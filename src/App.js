import React, { Component } from "react";
import { recipes } from "./recipe-data/tempList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";

class App extends Component {
	state = {
		recipes: recipes,
		url:
			"https://www.food2fork.com/api/search?key=719d09caa7479f6016cfad0523562ecd",

		search_url:
			"https://www.food2fork.com/api/search?key=719d09caa7479f6016cfad0523562ecd",

		recipe_id: 35382,
		pageIndex: "list",
		search: "",
		query: "&q=",

		error: ''
	};
	getRecipes = async () => {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			console.log(jsonData);
			if (jsonData.recipes.length === 0) {
				this.setState({
					error: "sorry there are no recipes for your search"
				});
			} else {
				this.setState({
					recipes: jsonData.recipes
				});
			}
		} catch (error) {
			console.log("error:", error);
		}
	};
	// componentDidMount() {
	// 	this.getRecipes();
	// }
	displayPage = index => {
		switch (index) {
			case "list":
				return (
					<RecipeList
						handleDetail={this.handleDetail}
						recipes={this.state.recipes}
						value={this.state.search}
						handleInputChange={this.handleInputChange}
						handleInputSumbit={this.handleInputSumbit}
						error={this.state.error}
					/>
				);
			case "detail":
				return (
					<RecipeDetail
						id={this.state.recipe_id}
						handleList={this.handleList}
					/>
				);
		}
	};
	handleList = index => {
		this.setState({
			pageIndex: index
		});
	};
	handleDetail = (index, id) => {
		this.setState({
			pageIndex: index,
			recipe_id: id
		});
	};
	handleInputChange = e => {
		this.setState({
			search: e.target.value
		});
	};
	handleInputSumbit = e => {
		e.preventDefault();

		const { search, search_url, query } = this.state;

		this.setState(
			() => {
				return { url: `${search_url}${query}${search}`, search: "" };
			},
			() => this.getRecipes()
		);
	};

	render() {
		// console.log(this.state.recipes);

		return (
			<React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
		);
	}
}

export default App;

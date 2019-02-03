import React, { Component } from "react";
import { recipe } from "../recipe-data/tempDetails";
export default class RecipeDetail extends Component {
	// old method
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		recipe: recipe,
	// 		url: `https://www.food2fork.com/api/get?key=719d09caa7479f6016cfad0523562ecd&rId=${
	// 			this.props.id
	// 		}`
	// 	};
	// }
	// getRecipeDetail = async () => {
	// 	try {
	// 		const data = await fetch(this.state.url);
	// 		const jsonData = await data.json();
	// 		this.setState({
	// 			recipe: jsonData.recipe
	// 		});
	// 	} catch (error) {
	// 		console.log("error:", error);
	// 	}
	// };
	// componentDidMount() {
	// 	this.getRecipeDetail();
	// }

	state = {
		recipe: recipe
	};

	async componentDidMount() {
		const id = this.props.id;
		const url = `https://www.food2fork.com/api/get?key=719d09caa7479f6016cfad0523562ecd&rId=${id}`;
		try {
			const data = await fetch(url);
			const jsonData = await data.json();
			console.log(data);

			console.log(jsonData);

			this.setState(() => ({
				recipe: jsonData.recipe
			}));
		} catch (error) {
			console.log("error:", error);
		}
	}

	render() {
		const {
			image_url,
			ingredients,
			publisher,
			publisher_url,
			source_url,
			title
		} = this.state.recipe;
		const { handleList } = this.props;

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						{/* Header */}
						<div className="col-10 mx-auto col-md-6 my-3">
							<button
								onClick={() => handleList("list")}
								className="btn btn-warning mb-5 text-capitalize"
							>
								back to recipe list
							</button>
							<img src={image_url} className="d-block w-100 " alt="recipe" />
						</div>
						{/* End of Header */}

						{/* detail */}
						<div className="col-10 mx-auto col-md-6 my-3">
							<h6 className="text-uppercase">{title}</h6>
							<h6 className="text-warning text-capitalize text-slanted">
								provided by {publisher}
							</h6>
							<a
								href={publisher_url}
								className="btn btn-primary mt-2 text-capitalize"
								target="_blank"
								rel="noopener noreferrer"
							>
								Publisher
							</a>
							<a
								href={source_url}
								className="btn btn-success mt-2 mx-3 text-capitalize"
								target="_blank"
								rel="noopener noreferrer"
							>
								recipe url
							</a>
							<ul className="list-group mt-4">
								<h2 className="mt-3 mb-4">Ingredients</h2>
								{ingredients.map((item, i) => (
									<li key={i} className="list-group-item text-slanted">
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
	render() {
		const {
			recipes,
			handleDetail,
			value,
			handleInputChange,
			handleInputSumbit,
			error
		} = this.props;

		return (
			<React.Fragment>
				<RecipeSearch
					value={value}
					handleInputChange={handleInputChange}
					handleInputSumbit={handleInputSumbit}
				/>
				<div className="container my-5">
					{/* title */}
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center text-uppercase mb3">
							<h1 className="text-slanted ">recipe List</h1>
						</div>
					</div>
					{/* end of title */}
					<div className="row">
						{error ? (
							<h1 className="text-danger text-center">{error}</h1>
						) : (
							recipes.map(recipe => (
								<Recipe
									key={recipe.recipe_id}
									recipe={recipe}
									handleDetail={handleDetail}
								/>
							))
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

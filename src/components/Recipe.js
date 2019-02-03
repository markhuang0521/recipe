import React, { Component } from "react";

export default class Recipe extends Component {
	render() {
		const {
			image_url,
			title,
			publisher,
			source_url,
			recipe_id
		} = this.props.recipe;
		const { handleDetail } = this.props;

		return (
			<React.Fragment>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
					<div className="card">
						<img
							src={image_url}
							alt="food"
							className="img-card-top"
							style={{ height: "14rem" }}
						/>
						<div className="card-body text-capitalize">
							<h6>{title}</h6>
							<h6 className="text-warning text-slanted">
								provided by {publisher}
							</h6>
						</div>
						<div className="card-footer">
							<div className="text-center">
								<button
									onClick={() => handleDetail("detail", recipe_id)}
									className="btn btn-primary text-capitalize"
								>
									details
								</button>
								<a
									href={source_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-success mx-3 text-capitalize"
								>
									Recipe
								</a>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

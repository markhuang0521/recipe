import React, { Component } from "react";

export default class RecipeSearch extends Component {
	render() {
		const { value, handleInputChange, handleInputSumbit } = this.props;
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-8 mt-5 text-center">
							<h1 className="text-slanted text-capitalize">
								recipe search with{" "}
								<strong className="text-danger">food2Fork</strong>
							</h1>
							<form className="mt-4">
								<label className="text-capitalize" htmlFor="search">
									type recipes seperated by comma{" "}
								</label>
								<div className="input-group">
									<input
										value={value}
										onChange={handleInputChange}
										type="text"
										name="search"
										placeholder="Your favorite dishes"
										className="form-control"
									/>
									<div className="input-group-append">
										<button
											onClick={handleInputSumbit}
											className="input-group-text bg-primary text-white"
											type="submit"
										>
											<i className="fas fa-search" />
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

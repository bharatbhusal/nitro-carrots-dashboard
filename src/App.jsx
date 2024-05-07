import React, { useState } from "react";
import { fetchData } from "./fetchData";
import DataTable from "./DataTable";
import "./App.css";

const App = () => {
	const [limit, setLimit] = useState(1000);
	const [offset, setOffset] = useState(0);
	const [wallet, setWallet] = useState("");
	const [fetchedData, setFetchedData] = useState(null);

	const handleFetchData = async () => {
		const data = await fetchData(limit, offset, wallet);
		setFetchedData(data);
		console.log(data);
	};

	return (
		<div className="app-container">
			<h1 className="app-title">Nitro Carrots Data Fetcher</h1>

			<div className="input-container">
				<label className="input-label">
					Limit:
					<input
						className="input-field"
						type="number"
						value={limit}
						required
						onChange={(e) => setLimit(e.target.value || 1000)}
					/>
				</label>
				<label className="input-label">
					Offset:
					<input
						className="input-field"
						type="number"
						required
						value={offset}
						onChange={(e) => setOffset(e.target.value || 0)}
					/>
				</label>
				<label className="input-label">
					Wallet Address:
					<input
						className="input-field"
						type="text"
						required
						value={wallet}
						onChange={(e) => setWallet(e.target.value)}
					/>
				</label>
				<button
					className="submit-button"
					onClick={handleFetchData}
					data-toggle="modal"
					data-target="#test"
				>
					Fetch Data
				</button>

				<div
					className="modal fade"
					id="test"
					tabIndex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Carrots Details</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							{fetchedData ? (
								<div className="modal-body">
									<div className="data-display">
										<h6>Wallet: {wallet}</h6>

										<>
											<div className="points-summary">
												<p>
													Life Time Points:{" "}
													{fetchedData.lifeTimePoints?._sum?.value}
												</p>
												<p>
													Current Points:{" "}
													{fetchedData.currentPoints?._sum?.value}
												</p>
												<p>
													Used Nitro Points:{" "}
													{fetchedData.usedNitroPoints?._sum?.value}
												</p>
												<p>Total: {fetchedData.total}</p>
											</div>

											<div className="points-table-container">
												<h4>Points Details:</h4>
												<DataTable rows={fetchedData.points} />
											</div>
										</>
									</div>
								</div>
							) : (
								<div className="modal-body">
									<div className="data-display">
										<h4>No data found</h4>
									</div>
								</div>
							)}

							{/* <!-- Modal footer -->} */}
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-danger"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

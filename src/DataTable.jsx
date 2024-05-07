import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	// { field: "id", headerName: "ID", width: 100 },
	{
		field: "description",
		headerName: "Description",
		width: 250,
	},
	{
		field: "value",
		headerName: "Value",
		width: 60,
	},
	{
		field: "created_At",
		headerName: "Date",
		width: 200,
	},
	{
		field: "src_transaction_hash",
		headerName: "TransactionHash",
		width: 200,
	},
	{
		field: "transaction_type",
		headerName: "TransactionType",
		width: 100,
	},
	{ field: "type", headerName: "Type", width: 100 },
];

export default function DataTable({ rows }) {
	return (
		<div>
			<DataGrid
				style={{
					border: "1px solid black",
					marginTop: "1rem",
					minHeight: "400px",
				}}
				rows={rows}
				columns={columns}
				initialSortModel={[{ field: "date", sort: "desc" }]}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[10, 20]}
			/>
		</div>
	);
}

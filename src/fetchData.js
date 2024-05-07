export const fetchData = async (limit, offset, wallet) => {
	const apiUrl = process.env.REACT_APP_NITRO_API_URL;
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({}),
	};
	try {
		const response = await fetch(
			`${apiUrl}?limit=${limit}&offset=${offset}&wallet_address=${wallet}`,
			requestOptions
		);
		if (!response.ok) {
			throw new Error(
				`HTTP error! Status: ${response.status}`
			);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const logError = (response) => {
	const errorMessage = `An error has occurred: ${response.message}`;

	const httpStatus = response.status
		? `HTTP status code: ${response.status}`
		: "No HTTP status code available";

	console.error(`errorMessage: ${errorMessage}`);
	console.error(`httpStatus: ${httpStatus}`);
};

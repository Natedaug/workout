export const logError = (error) => {
	console.error("!!! An error has occurred: ", error);

	// to replace with modal, or ErrorPage
	alert("An error has occurred, unable to complete your action.");
};

const getPlaces = async () => {
	const googleAPI = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const city = 'gdańsk';
	const google_places_api = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=(cities)&key=${googleAPI}`;
	const locationData = await fetch(google_places_api);
	const response = await locationData.json();
	return response;
};

//Handle data sent to the request
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const foorecast_data = await predictions:();
		return {
			success: true,
			name: data.get('location'),
			foorecast_data
		};
	}
};

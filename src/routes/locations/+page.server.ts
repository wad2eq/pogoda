// TODO: add return Type promise
const getPlaces = async (location: string) => {
	const googleAPI = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const google_places_api = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=(cities)&key=${googleAPI}`;
	const locationData = await fetch(google_places_api);
	const response = await locationData.json();
	return response;
};

//Handle data sent to the request
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let localizationList: string = '';
		if (data.get('location')) {
			localizationList = await getPlaces(data.get('location'));
		}
		return {
			success: true,
			localization: data.get('location'),
			localizationList
		};
	}
};

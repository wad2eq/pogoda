// TODO: add return Type promise
const getPlaces = async (location: string) => {
	const googleAPI = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const google_places_api = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=(cities)&key=${googleAPI}`;
	const locationData = await fetch(google_places_api);
	const response = await locationData.json();
	return response;
};

//Handle data sent to the request
// Sveletkit urzywa actions do pracy z formularzami
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		// let localizationList: string = '';
		const localizationList = await getPlaces(data.get('location'));
		if (localizationList.status === 'INVALID_REQUEST') {
			return {
				success: false,
				error: data.get('location') ? 'The value not exists' : 'Please provide place to forecast'
			};
		}
		// if (data.get('location')) {
		// 	localizationList = await getPlaces(data.get('location'));
		// }
		return {
			success: true,
			searchLocalization: data.get('location'),
			localizationList
		};
	}
};

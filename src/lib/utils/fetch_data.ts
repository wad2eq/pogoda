export const get_forecast = async () => {
	const url =
		'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.95742329999999&lon=10.4786126';

	const forecast_data = await fetch(url);
	console.log('Forecast data');
	const data = await forecast_data.json();
	console.log(data.properties.timeseries);
};

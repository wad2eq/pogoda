import { Item } from '$lib/components/ui/menubar';
import type { Data } from '$lib/types/compact_forecast';

// TODO: porównać to rozwiązanie z tym https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
export const getFormattedDate = (dateTime: Date) => {
	const national = 'no-NO';
	const date = new Date(dateTime);
	// // const options = {dateStyle: 'full'};
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const formattedDate = date.toLocaleDateString(national, options);
	return formattedDate;
};

interface newForecastObj {
	time: string;
	data: Array<Data>;
}

//Fix temperature

// TODO: Change to Map Object
function getPartOfDay(time) {
	const hour = time.getHours();
	if (hour >= 2 && hour < 8) {
		return 'Night';
	} else if (hour >= 8 && hour < 14) {
		return 'Morning';
	} else if (hour >= 14 && hour < 20) {
		return 'Afternoon';
	} else {
		return 'Evening';
	}
}

// TODO: zmienić nazwę tej metody
export const get_part_day = (item, obj) => {
	const time = new Date(item.time);
	const date = getFormattedDate(time);
	const partOfDay = getPartOfDay(time);
	if (!obj[date]) {
		obj[date] = {
			Night: [],
			Morning: [],
			Afternoon: [],
			Evening: []
		};
	}
	obj[date][partOfDay].push(item);
};

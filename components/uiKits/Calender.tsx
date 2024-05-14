import { useEffect, useState } from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const modifiers: DayPickerProps['modifiers'] = {};
	if (selectedDate) {
		modifiers.selected = selectedDate;
	}
	// useEffect(() => {
	// 	console.log(selectedDate);
	// }, [selectedDate]);
	return (
		<DayPicker
			className="calender"
			mode="single"
			numberOfMonths={2}
			selected={selectedDate}
			modifiers={modifiers}
			onSelect={setSelectedDate}
			onDayClick={(day, modifiers) => {
				if (modifiers.selected) {
					setSelectedDate(undefined);
				} else {
					setSelectedDate(day);
				}
			}}
		/>
	);
};
export default Calender;

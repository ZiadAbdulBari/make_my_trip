/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import Fare from './Fare';
import TripCombobox from './TripCombobox';
import Calender from '../uiKits/Calender';
import Dropdown from '../uiKits/Dropdown';
import SelectNumber from '../uiKits/SelectNumber';
const SearchTrip = () => {
	const ref = useRef(null);
	const [trip, setTrip] = useState('one-way');
	const [value, setValue] = useState('');
	const [startingpoint, setStartingpoint] = useState('');
	const [endingpoint, setEndingpoint] = useState('');
	const [openFeature, setOpenFeature] = useState({
		openCalender: false,
		startingpoinSearch: false,
		openClass: false,
	});
	const getFare = (e: any) => {
		setValue(e.target.value);
	};
	useEffect(() => {
		const handleOutSideClick = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				setOpenFeature({
					openCalender: false,
					startingpoinSearch: false,
					openClass: false,
				});
			}
		};

		window.addEventListener('mousedown', handleOutSideClick);

		return () => {
			window.removeEventListener('mousedown', handleOutSideClick);
		};
	}, [ref]);
	return (
		<>
			<div className="custom-container h-[333px] absolute top-[120px] left-[50%] -translate-x-[50%] bg-white z-[0] rounded-[8px]">
				<div className="pt-[70px] px-[20px]">
					<div className="flex justify-between">
						<div className="flex gap-[26px] text-[14px]">
							<div
								className={`${
									trip == 'one-way' &&
									'rounded-full px-[6px] py-[2px] bg-[#EAF5FF] font-[900]'
								}`}
							>
								<input
									type="radio"
									value="one-way"
									id="one-way"
									name="trip"
									onChange={(e: any) => setTrip(e.target.value)}
									checked={trip == 'one-way'}
								/>
								<label className="ml-[5px]" htmlFor="one-way">
									One Way
								</label>
							</div>
							<div
								className={`${
									trip == 'round-trip' &&
									'rounded-full px-[6px] py-[2px] bg-[#EAF5FF] font-[900]'
								}`}
							>
								<input
									type="radio"
									value="round-trip"
									id="round-trip"
									name="trip"
									onChange={(e: any) => setTrip(e.target.value)}
									checked={trip == 'round-trip'}
								/>
								<label className="ml-[5px]" htmlFor="round-trip">
									Round Trip
								</label>
							</div>
							<div
								className={`${
									trip == 'multy-country' &&
									'rounded-full px-[6px] py-[2px] bg-[#EAF5FF] font-[900]'
								}`}
							>
								<input
									type="radio"
									value="multy-country"
									id="multy-country"
									name="trip"
									onChange={(e: any) => setTrip(e.target.value)}
									checked={trip == 'multy-country'}
								/>
								<label className="ml-[5px]" htmlFor="multy-country">
									Multy Country
								</label>
							</div>
						</div>
						<p className="text-[14px] text-[#4A4A4A]">
							Book International and Domestic Flights
						</p>
					</div>
					{/*  */}
					<div className="flex w-full border border-gray-300 my-[11px] h-[112px] rounded-[8px] mb-[20px]">
						<div className="w-[50%] h-full border-r relative">
							<div className="flex w-full h-full divide-x">
								<div
									className={`w-[50%] h-full px-[19px] py-[10px] relative cursor-pointer ${
										openFeature.startingpoinSearch && 'bg-[#EAF5FF]'
									}`}
									onClick={() =>
										setOpenFeature({
											openClass: false,
											startingpoinSearch: true,
											openCalender: false,
										})
									}
									ref={ref}
								>
									<p
										className={`text-[14px] text-[#4A4A4A] mb-[10px] ${
											openFeature.startingpoinSearch && 'text-[#008cff]'
										}`}
									>
										From
									</p>
									<p className="text-[30px] font-[900] leading-[36px]">Delhi</p>
									<p className="text-[14px] text-[#4A4A4A]">
										DEL, Delhi Airport India
									</p>
									{openFeature.startingpoinSearch && (
										<div className="absolute top-[30%] left-0 w-[105%] z-[999999999]">
											<TripCombobox />
										</div>
									)}
								</div>
								<div className="w-[50%] h-full px-[38px] py-[10px] cursor-pointer">
									<p className="text-[14px] text-[#4A4A4A] mb-[10px]">To</p>
									<p className="text-[30px] font-[900] leading-[36px]">
										Bengaluru
									</p>
									<p className="text-[14px] text-[#4A4A4A]">
										DEL, Delhi Airport India
									</p>
								</div>
							</div>
							<div className="h-[40px] w-[40px] rounded-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] shadow-[0_1px_30px_0_rgba(0,0,0,0.1)] z-[999] bg-white">
								<div className="flex justify-center items-center h-full w-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="18"
										height="18"
										className="fill-[#0E8FFD]"
									>
										<path d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="w-[50%] h-full flex">
							<div
								className={`border-r w-[29%] h-full px-[19px] py-[10px] relative z-[8] cursor-pointer ${
									openFeature.openCalender && 'bg-[#EAF5FF]'
								}`}
								onClick={() =>
									setOpenFeature({
										openCalender: true,
										startingpoinSearch: false,
										openClass: false,
									})
								}
							>
								<div className="flex">
									<p
										className={`text-[14px] text-[#4A4A4A] mb-[10px] ${
											openFeature.openCalender && 'text-[#008cff]'
										}`}
									>
										Departure
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="20"
										height="20"
										fill="rgba(0,140,255,1)"
									>
										<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
									</svg>
								</div>
								<p className="text-[20px] leading-[30px]">
									<span className="font-[900] text-[30px]">6</span> May'24
								</p>
								<p className="text-[14px] text-[#4A4A4A]">Monday</p>
								{openFeature.openCalender && <Calender />}
							</div>
							<div className="border-r w-[29%] h-full px-[19px] py-[10px]">
								<div className="flex">
									<p className="text-[14px] text-[#4A4A4A] mb-[10px]">Return</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="20"
										height="20"
										fill="rgba(0,140,255,1)"
									>
										<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
									</svg>
								</div>
							</div>
							<div
								className={`border-r w-[42%] h-full px-[19px] py-[10px] relative cursor-pointer ${
									openFeature.openClass && 'bg-[#EAF5FF]'
								}`}
								onClick={() =>
									setOpenFeature({
										openCalender: false,
										startingpoinSearch: false,
										openClass: true,
									})
								}
							>
								<div className="flex">
									<p
										className={`text-[14px] text-[#4A4A4A] mb-[10px] ${
											openFeature.openClass && 'text-[#008cff]'
										}`}
									>
										Travellers & Class
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="20"
										height="20"
										fill="rgba(0,140,255,1)"
									>
										<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
									</svg>
								</div>
								<p className="text-[20px] leading-[30px]">
									<span className="font-[900] text-[30px]">1</span> Traveller
								</p>
								<p className={`text-[14px] text-[#4A4A4A]`}>
									Economy/Premium Economy
								</p>
								{openFeature.openClass && (
									<Dropdown>
										<div className="flex">
											<SelectNumber
												lastnumber={9}
												heading="ADULTS (12y +)"
												subheading="on the day of travel"
											/>
										</div>
										<div className="flex gap-[10px]">
											<SelectNumber
												lastnumber={6}
												heading="CHILDREN (2y - 12y )"
												subheading="on the day of travel"
											/>
											<SelectNumber
												lastnumber={6}
												heading="INFANTS (below 2y)"
												subheading="on the day of travel"
											/>
										</div>
										<div className="flex justify-end">
											<button className="text-white px-[20px] text-[14px] py-[5px] rounded-full bg-gradient-to-r from-blue-400  to-blue-700">
												APPLY
											</button>
										</div>
									</Dropdown>
								)}
							</div>
						</div>
					</div>
					<div className="flex gap-[8px]">
						<div className="mr-[15px]">
							<p className="text-[14px] font-[900]">Select a special fare</p>
							<p className="text-[14px] font-[900] text-center bg-gradient-to-r from-[#42DFA8] to-[#229694] text-white rounded-[5px]">
								EXTRA SAVINGS
							</p>
						</div>
						<Fare
							title="Regular"
							subtitle="Regular fares"
							selectedvalue={value}
							onChange={getFare}
						/>
						<Fare
							title="Student"
							subtitle="Extra discounts/baggage"
							selectedvalue={value}
							onChange={getFare}
						/>
						<Fare
							title="Senior Citizen"
							subtitle="up to ₹600 off"
							selectedvalue={value}
							onChange={getFare}
						/>
						<Fare
							title="Armed Forces"
							subtitle="up to ₹600 off"
							selectedvalue={value}
							onChange={getFare}
						/>
						<Fare
							title="Doctor and Nurses"
							subtitle="up to ₹600 off"
							selectedvalue={value}
							onChange={getFare}
						/>
					</div>
				</div>
			</div>
			{/* <div className="absolute top-[430px] left-[50%] -translate-x-[50%] text-[24px] font-[700] leading-[24px] text-white bg-gradient-to-r from-blue-400 to-blue-600 p-[10px] rounded-full w-[216px] text-center !z-[0]">
				<button>SEARCH</button>
			</div> */}
		</>
	);
};
export default SearchTrip;

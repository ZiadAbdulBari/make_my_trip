import { useState } from 'react';
const SearchTrip = () => {
	const [trip, setTrip] = useState('one-way');
	return (
		<div className="w-[1200px] h-[333px] absolute top-[120px] left-[50%] -translate-x-[50%] bg-white z-[99] rounded-[8px]">
			<div className="pt-[70px] px-[20px]">
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
			</div>
		</div>
	);
};
export default SearchTrip;

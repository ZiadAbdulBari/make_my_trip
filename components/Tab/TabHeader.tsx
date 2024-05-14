const TabHeader = () => {
	return (
		<ul className="flex lg:gap-[20px] text-[14px] lg:border-b border-[#c6c6c6] min-w-full">
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				All Offers
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Bank Offers
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Flights
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Hotels
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Holidays
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Trains
			</li>
			<li className="p-[12px] lg:p-[5px] mb-[3px] cursor-pointer min-w-[120px] lg:min-w-0 text-center">
				Cabs
			</li>
		</ul>
	);
};
export default TabHeader;

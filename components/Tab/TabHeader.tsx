const TabHeader = () => {
	return (
		<ul className="flex gap-[20px] text-[14px] border-b border-[#c6c6c6]">
			<li className="p-[5px] mb-[3px] cursor-pointer">All Offers</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Bank Offers</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Flights</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Hotels</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Holidays</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Trains</li>
			<li className="p-[5px] mb-[3px] cursor-pointer">Cabs</li>
		</ul>
	);
};
export default TabHeader;

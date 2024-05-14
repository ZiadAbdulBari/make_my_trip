import Service from './Service';

const Services = () => {
	return (
		<div className=" bg-white w-[1000px] rounded-full z-[9999] shadow-[0_1px_30px_0_rgba(0, 0, 0, 0.1)] mx-auto mb-[20px] mt-[5px] hidden lg:block">
			<div className="w-full px-[10px] flex divide-x">
				<Service imageUrl="../../go.png" title="Where2Go" subtitle="" extraCSS="" />
				<Service
					imageUrl="../../insurance.png"
					title="Insurance"
					subtitle="For International Trips"
					extraCSS=""
				/>
				<Service
					imageUrl="../../explore.png"
					title="Explore International Flights"
					subtitle="Cheapest Flights to Paris, Bali, Tokyo & more"
					extraCSS="font-[700]"
				/>
				<Service
					imageUrl="../../group.png"
					title="MICE"
					subtitle="Offsites, Events & Meetings"
					extraCSS=""
				/>
				<Service imageUrl="../../gift.png" title="Gift Cards" subtitle="" extraCSS="" />
			</div>
		</div>
	);
};
export default Services;

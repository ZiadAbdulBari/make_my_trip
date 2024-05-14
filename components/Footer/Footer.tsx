import Discloser from '../uiKits/Discloser';
import FooterCard from './FooterCard';
import LowerFooter from './LowerFooter';
import SinglePara from './SinglePara';
import TopFooter from './TopFooter';

const Footer = () => {
	const footerData = [
		{
			heading: 'PRODUCT OFFERING',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'MAKEMYTRIP',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'ABOUT THE SITE',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'TOP HOTELS IN INDIA',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'TOP INTERNATIONAL HOTELS',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'QUICK LINKS',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'IMPORTANT LINKS',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
		{
			heading: 'CORPORATE TRAVEL',
			para: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab',
		},
	];
	const lowerFooter = [
		{
			heading: 'Why MakeMyTrip?',
			para: 'Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.',
		},
		{
			heading: 'Booking Flights with MakeMyTrip',
			para: 'At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.',
		},
		{
			heading: 'Domestic Flights with MakeMyTrip',
			para: 'MakeMyTrip is Indias leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.',
		},
	];
	return (
		<>
			<div className="block lg:hidden mt-[20px] py-[10px]">
				{lowerFooter.map((data, index) => (
					<Discloser
						key={index}
						heading={data.heading}
						paragraph={data.para}
						guideline={true}
					/>
				))}
			</div>
			<TopFooter>
				<div className="custom-container py-[20px] lg:py-0 px-[10px] lg:px-0">
					{footerData.map((data, index) => (
						<>
							<SinglePara key={index} heading={data.heading} paragraph={data.para} />
							<div className="block lg:hidden">
								<Discloser
									heading={data.heading}
									paragraph={data.para}
									guideline={false}
								/>
							</div>
						</>
					))}
				</div>
			</TopFooter>
			<LowerFooter>
				<div className="grid grid-flow-row grid-cols-3 gap-x-[36px]">
					{lowerFooter.map((data, index) => (
						<FooterCard key={index} heading={data.heading} paragraph={data.para} />
					))}
				</div>
			</LowerFooter>
			<div className="block lg:hidden px-[20px] mb-[30px]">
				<p className="text-[20px] font-[900] text-black/[0.6]">Useful Links</p>
				<div className="flex justify-between mt-[20px]">
					<div>
						<ul className="text-black/[0.7] text-[14px]">
							<li className="mt-[5px]">Flights</li>
							<li className="mt-[5px]">International Flights</li>
							<li className="mt-[5px]">Hotels</li>
							<li className="mt-[5px]">International Hotels</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">International Hotels</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">International Hotels</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">International Hotels</li>
							<li className="mt-[5px]">House Stays and Villas</li>
						</ul>
					</div>
					<div>
						<ul className="text-black/[0.7] text-[14px]">
							<li className="mt-[5px]">Flights</li>
							<li className="mt-[5px]">International Flights</li>
							<li className="mt-[5px]">Hotels</li>
							<li className="mt-[5px]">International Hotels</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
							<li className="mt-[5px]">House Stays and Villas</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="lg:pt-[50px] pb-0 lg:pb-[60px] bg-black w-full">
				<div className="custom-container">
					<div className="flex flex-col lg:flex-row justify-between w-auto lg:w-full">
						<div className="hidden lg:flex gap-[20px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="36"
								height="36"
								fill="rgba(253,253,253,1)"
							>
								<path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="36"
								height="36"
								fill="rgba(255,255,255,1)"
							>
								<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
							</svg>
						</div>
						<div className="block lg:hidden flex gap-[20px] w-full justify-center mt-[24px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="26"
								height="26"
								fill="rgba(253,253,253,1)"
							>
								<path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="26"
								height="26"
								fill="rgba(255,255,255,1)"
							>
								<path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
							</svg>
						</div>
						<div className="block lg:hidden flex w-full gap-[20px] justify-center my-[20px]">
							<img src="../../apple-store.png" alt="" className="w-[30%]" />
							<img src="../../google-store.png" alt="" className="w-[30%]" />
						</div>
						<div className="w-auto">
							<p className="text-white text-[16px] font-[700] hidden lg:block">
								© 2024 MAKEMYTRIP PVT. LTD.
							</p>
							<p className="text-white text-end hidden lg:block">
								Country
								<span className="text-[16px] font-[700]"> India USA UAE</span>
							</p>
							<p className="text-white text-[10px] text-center block lg:hidden mt-[20px]">
								© 2024 MAKEMYTRIP PVT. LTD.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;

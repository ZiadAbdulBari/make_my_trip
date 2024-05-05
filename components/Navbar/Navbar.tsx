import Image from 'next/image';
import flight from '../../public/flight.png';
import hotel from '../../public/hotel.png';
import home from '../../public/home.png';
import holiday from '../../public/holyday.png';
import train from '../../public/train.png';
import bus from '../../public/bus.png';
import car from '../../public/car.png';
import card from '../../public/card.png';
import travel from '../../public/travel.png';
const Navbar = () => {
	const navItems = [
		{
			image: hotel,
			title: 'Hotels',
			url: '/',
		},
		{
			image: home,
			title: 'Homestays & Villas',
			url: '/',
		},
		{
			image: holiday,
			title: 'Holiday Packages',
			url: '/',
		},
		{
			image: train,
			title: 'Trains',
			url: '/',
		},
		{
			image: bus,
			title: 'Buses',
			url: '/',
		},
		{
			image: car,
			title: 'Cabs',
			url: '/',
		},
		{
			image: card,
			title: 'Forex Card & Currency',
			url: '/',
		},
		{
			image: travel,
			title: 'Travel Insurance',
			url: '/',
		},
	];
	return (
		<div className="absolute top-[78px] w-[928px] h-[100px] left-[50%] -translate-x-[50%] bg-white rounded-[8px] px-[30px] py-[8px] shadow-md z-[999]">
			<div className="grid grid-flow-row grid-cols-9">
				<div>
					<Image
						src={flight}
						alt=""
						style={{
							width: '42px',
							height: 'auto',
							marginBottom: '4px',
							margin: '0 auto',
						}}
					/>
					<p className="font-[900] text-[14px] text-[#008CFF] text-center">Flights</p>
				</div>
				{navItems.map((nav, index) => (
					<div key={index}>
						<Image
							src={nav.image}
							alt=""
							style={{
								width: '42px',
								height: 'auto',
								marginBottom: '4px',
								margin: '0 auto',
							}}
						/>
						<p className="text-[#4A4A4A] text-[14px] text-center">{nav.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Navbar;

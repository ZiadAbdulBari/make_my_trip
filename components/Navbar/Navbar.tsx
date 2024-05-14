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

import mbl_train from '../../public/mbl_train.png';
import mbl_hotel from '../../public/mbl_hotel.png';
import mbl_home from '../../public/mbl_home.png';
import mbl_holiday from '../../public/mbl_holiday.png';
import mbl_bus from '../../public/mbl_bus.png';
import mbl_car from '../../public/mbl_car.png';
import mbl_card from '../../public/mbl_card.png';
import mbl_pnr from '../../public/mbl_pnr.png';
import mbl_visa from '../../public/mbl_visa.png';
import mbl_travel from '../../public/mbl_travel.png';
import { useEffect, useState } from 'react';
import { set } from 'date-fns';
const Navbar = () => {
	const [SW, setSW] = useState(0);
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

	const mobileUpperNavItems = [
		{
			image: mbl_hotel,
			title: 'Hotels',
			url: '/',
		},
		{
			image: mbl_home,
			title: 'Homestays & Villas',
			url: '/',
		},
		{
			image: mbl_holiday,
			title: 'Holiday Packages',
			url: '/',
		},
	];
	const mobileLowerNavItems = [
		{
			image: mbl_train,
			title: 'Trains',
			url: '/',
		},
		{
			image: mbl_bus,
			title: 'Buses',
			url: '/',
		},
		{
			image: mbl_car,
			title: 'Cabs',
			url: '/',
		},
		{
			image: mbl_card,
			title: 'Forex Card & Currency',
			url: '/',
		},
		{
			image: mbl_car,
			title: 'Cabs',
			url: '/',
		},
		{
			image: mbl_pnr,
			title: 'Travel Insurance',
			url: '/',
		},
		{
			image: mbl_visa,
			title: 'Travel Insurance',
			url: '/',
		},
		{
			image: mbl_travel,
			title: 'Travel Insurance',
			url: '/',
		},
		{
			image: travel,
			title: 'Travel Insurance',
			url: '/',
		},
	];
	const [isHide, setIsHide] = useState(true);
	useEffect(() => {
		setSW(screen.width);
	}, []);
	return (
		<>
			<div className="lg:absolute lg:top-[78px] w-full lg:w-[928px] lg:h-[100px] lg:left-[50%] lg:-translate-x-[50%] lg:bg-white rounded-[8px] px-[16px] lg:px-[30px] py-[8px] lg:shadow-md z-[9]">
				<div className="grid grid-flow-row grid-cols-4 lg:grid-cols-9 gap-[5px] lg:gap-0">
					{SW >= 1024 && (
						<>
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
								<p className="font-[900] text-[14px] text-[#008CFF] text-center">
									Flights
								</p>
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
									<p className="text-[#4A4A4A] text-[14px] text-center">
										{nav.title}
									</p>
								</div>
							))}
						</>
					)}
					{SW < 1024 && (
						<>
							<div className="bg-white p-[8px] w-full rounded-[16px]">
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
								<p className="font-[900] text-[14px] text-black text-center">
									Flights
								</p>
							</div>
							{mobileUpperNavItems.map((nav, index) => (
								<div className="bg-white p-[8px] w-full rounded-[16px]" key={index}>
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
									<p className="text-[#4A4A4A] text-[14px] text-center font-[900] text-[14px] text-black text-center">
										{nav.title}
									</p>
								</div>
							))}
						</>
					)}
				</div>
			</div>
			<div className={`min-h-[216px] relative w-full mb-[40px] block lg:hidden`}>
				<div
					className={`grid grid-flow-row grid-cols-4 gap-[5px] bg-white rounded-[16px] mx-[16px] ${
						isHide ? 'h-[216px] overflow-hidden' : 'h-auto'
					}`}
				>
					{SW < 1024 &&
						mobileLowerNavItems.map((nav: any, index: any) => (
							<div className="bg-white p-[8px] w-full rounded-[16px]" key={index}>
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
								<p className="text-[#4A4A4A] text-[14px] text-center text-[14px] text-black text-center">
									{nav.title}
								</p>
							</div>
						))}
				</div>
				<div
					className="bg-white flex justify-center items-center absolute top-[100%] left-[50%] -translate-x-[50%] w-[80px] rounded-b-lg"
					onClick={() => setIsHide(!isHide)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="rgba(70,146,221,1)"
						className={`${isHide ? 'rotate-0' : 'rotate-180'}`}
					>
						<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
					</svg>
				</div>
			</div>
		</>
	);
};
export default Navbar;

import Modal from '../uiKits/Modal';
import HeaderList from './HeaderList';
import React, { useEffect, useState } from 'react';
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
const Header = () => {
	const [scrolled, setScrolled] = useState(0);
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
	const checkScrolling = () => {
		const header = document.querySelector('.page-header');
		const toggleClass = 'is-sticky';
		const currentScroll = window.scrollY;
		setScrolled(currentScroll);
		if (currentScroll > 150) {
			header?.classList.add(toggleClass);
		} else {
			header?.classList.remove(toggleClass);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', checkScrolling);
	}, []);
	return (
		<>
			<div
				className={`page-header w-full ${
					scrolled > 150 ? 'h-[65px]' : 'h-[78px]'
				} absolute top-0 left-0 z-[9999999] hidden lg:block`}
			>
				{scrolled < 150 && (
					<div className="custom-container pt-[5px] flex justify-between">
						<div>
							<img src="../../mmtLogo.png" alt="brand logo" className="w-[113px]" />
						</div>
						<div className="flex">
							<div className="flex divide-x divide-dotted divide-white/[0.15]">
								<HeaderList
									image_url="../../header-icon1.png"
									title="List Your Property"
									subtitle="Start earning today!"
									img_width="w-[33px]"
									titleSize="text-[11px]"
									subtitleSize="text-[10px]"
								/>
								<HeaderList
									image_url="../../header-icon2.png"
									title="Introducing myBiz"
									subtitle="Business Travel Solution"
									img_width="w-[44px]"
									titleSize="text-[14px] font-[700]"
									subtitleSize="text-[10px]"
								/>
								<HeaderList
									image_url="../../header-icon3.png"
									title="My Trips"
									subtitle="Manage your bookings"
									img_width="w-[16px]"
									titleSize="text-[11px]"
									subtitleSize="text-[10px]"
								/>
							</div>
							<Modal>
								<div className="flex justify-between items-center bg-gradient-to-r from-blue-300  to-blue-700 px-[10px] py-[10px] rounded">
									<div className=" ">
										<div></div>
										<p className="text-[10px] font-[700] text-white w-[155px]">
											Login or Create Account
										</p>
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											// fill="currentColor"
											className="bi bi-chevron-down fill-white"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
											/>
										</svg>
									</div>
								</div>
							</Modal>
							<div className="flex justify-between items-center bg-[#797A75] px-[10px] py-[10px] rounded gap-2">
								<div className=" ">
									<div></div>
									<p className="text-[10px] font-[700] text-white">
										IN | ENG | INR
									</p>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										// fill="currentColor"
										className="bi bi-chevron-down fill-white"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				)}
				{scrolled > 150 && (
					<div className="custom-container pt-[5px] hidden lg:flex items-center">
						<div className="mr-[40px] w-[10%]">
							<img
								src="../../mobile-logo.png"
								alt="brand logo"
								className="w-[113px]"
							/>
						</div>
						<div className="flex justify-between w-[90%] items-center">
							<div className="flex gap-[25px] items-center justify-between">
								<div className="max-w-[60px]">
									<Image
										src={flight}
										alt=""
										style={{
											width: '26px',
											height: 'auto',
											marginBottom: '4px',
											margin: '0 auto',
										}}
									/>
									<p className="font-[900] text-[12px] text-[#008CFF] text-center truncate">
										Flights
									</p>
								</div>
								{navItems.map((nav, index) => (
									<div className="max-w-[60px]" key={index}>
										<Image
											src={nav.image}
											alt=""
											style={{
												width: '26px',
												height: 'auto',
												marginBottom: '4px',
												margin: '0 auto',
											}}
										/>
										<p className="text-[#4A4A4A] text-[12px] text-center truncate">
											{nav.title}
										</p>
									</div>
								))}
							</div>
							<div className="flex gap-[20px]">
								<Modal>
									<div className="flex items-center gap-[10px]">
										<div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-gradient-to-r from-green-300 to-green-600">
											<img src="../../logo-icon.png" className="w-[15px]" />
										</div>
										<p className="text-start text-[12px] font-[700]">
											<span className="block">Login or</span> Create Account
										</p>
									</div>
								</Modal>
								<div>
									<p className="text-[10px] mb-[2px]">Country</p>
								</div>
								<div>
									<p className="text-[10px] mb-[2px]">Language</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;

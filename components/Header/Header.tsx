import HeaderList from './HeaderList';

const Header = () => {
	return (
		<div className="w-full h-[78px] absolute top-0 left-0 z-[99]">
			<div className="w-[1200px] mx-auto pt-[5px] flex justify-between">
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
				</div>
			</div>
		</div>
	);
};

export default Header;

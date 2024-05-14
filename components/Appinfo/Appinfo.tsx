const Appinfo = () => {
	return (
		<div className="custom-container mb-[20px] pt-[10px] px-[40px] pb-[40px] bg-white rounded-[10px] hidden lg:block">
			<div className="flex justify-between items-stretch">
				<div>
					<div className="flex gap-[20px] items-center">
						<div className="w-[55px] h-[57px]">
							<img src="../../app-icon.png" alt="" className="w-full h-full" />
						</div>
						<div>
							<p className="text-[32px] font-[900] leading-[50px]">
								Download App Now !
							</p>
							<p className="text-[14px] text-[#4A4A4A]">
								Use code{' '}
								<span className="text-[14px] font-[900] text-black">
									WELCOMEMMT
								</span>{' '}
								and get{' '}
								<span className="text-[14px] font-[900] text-black">FLAT 12%</span>{' '}
								OFF* on your first domestic flight booking
							</p>
						</div>
					</div>
					<div className="flex mt-[40px]">
						<div className="flex h-[40px] items-center">
							<div className="flex border border-[#9b9b9b] rounded-l h-full items-center pl-[10px]">
								<div className="w-[85px] h-full flex items-center text-[16px] font-[700]">
									<img src="../../ind.png" alt="" className="w-[23px] mr-[5px]" />
									+91 —
								</div>
								<div className="w-[280px] h-full">
									<input
										type="text"
										placeholder="Enter Mobile Number"
										className="w-full h-full border-none outline-none focus:ring-0"
									/>
								</div>
							</div>
							<div className="w-[160px] h-full">
								<button className="w-full text-center h-full border border-[#008CFF] text-[#008CFF] text-[16px] font-[900] rounded-r">
									GET APP LINK
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-[36px] self-end">
					<div>
						<img src="../../google-store.png" alt="" className="w-[150px] mb-[20px]" />
						<img src="../../apple-store.png" alt="" className="w-[150px]" />
					</div>
					<div>
						<img src="../../qr.png" alt="" className="w-[120px]" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Appinfo;

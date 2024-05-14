import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import HeadlessCombobox from './HeadlessCombobox';
import ModalSlider from '../Slider/ModalSlider';
type ModalProps = {
	children: React.ReactNode;
};
import { SwiperSlide } from 'swiper/react';
import { Children } from 'react';
const Modal = ({ children }: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent className="!max-w-[45vw] !h-[62vh] p-0 bg-transparent !border-0">
				<div className="flex items-center h-full !max-w-[45vw]">
					<div className="!h-[95%] !w-[45%] rounded-l-[10px] overflow-hidden">
						<ModalSlider>
							<SwiperSlide>
								<img
									src="../../modal-slider-1.jpeg"
									alt=""
									className="w-full h-full"
								/>
								<div className="absolute top-0 left-0 bg-black/[0.5] w-full h-full z-[99999999]">
									<div className="flex justify-center items-center h-full w-full px-[48px]">
										<div className="border border-white/[0.5] text-white px-[16px] py-[24px] rounded">
											<p className="font-[900] text-[24px] leading-[28px]">
												Sign up now to join the club of
											</p>
											<p className="font-[900] text-[32px] leading-[38px] mt-[12px]">
												10 crore+ Happy Travellers
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src="../../modal-slider-3.jpeg"
									alt=""
									className="w-full h-full"
								/>
								<div className="absolute top-0 left-0 bg-black/[0.5] w-full h-full z-[99999999]">
									<div className="h-full w-full px-[48px] pt-[55px]">
										<div className="text-white">
											<p className="font-[900] text-[24px] leading-[28px]">
												Sign up now to get
											</p>
											<div className="p-[7px] grid grid-flow-row grid-cols-1 mt-[20px]  divide-y divide-white/[0.5]">
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-1.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															FLAT 10% OFF
														</p>
														<p className="text-[14px] leading-[20px]">
															On Domestic Flight*
														</p>
													</div>
												</div>
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-2.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															FLAT 20% OFF*
														</p>
														<p className="text-[14px] leading-[20px]">
															On Domestic Hotels
														</p>
													</div>
												</div>
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-3.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															Zero Convenience Fee*
														</p>
														<p className="text-[14px] leading-[20px]">
															On Train Bookings
														</p>
													</div>
												</div>
											</div>
											<p className="px-[14px] border-t border-white-[0.5] py-[24px] font-[900] text-[14px] leading-[16px]">
												COUPON CODE: WELCOMEMMT
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src="../../modal-slider-2.jpeg"
									alt=""
									className="w-full h-full"
								/>
								<div className="absolute top-0 left-0 bg-black/[0.5] w-full h-full z-[99999999]">
									<div className="h-full w-full px-[48px] pt-[55px]">
										<div className="text-white">
											<p className="font-[900] text-[24px] leading-[28px]">
												Sign up/Login now to
											</p>
											<div className="p-[7px] grid grid-flow-row grid-cols-1 mt-[20px]  divide-y divide-white/[0.5]">
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-1.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															Lock Flight Prices & Pay Later
														</p>
													</div>
												</div>
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-2.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															Book Hotels @ ₹0
														</p>
													</div>
												</div>
												<div className="flex gap-[16px] items-center py-[7px] px-[14px]">
													<div className="w-[35px] h-[35px]">
														<img
															src="../../2ndslider-3.png"
															alt=""
															className="object-contain h-full w-full"
														/>
													</div>
													<div>
														<p className="font-[900] text-[16px] leading-[20px]">
															Get 3X refund, if your waitlisted train
															doesn’t get confirmed
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</ModalSlider>
					</div>
					<div className="h-full !w-[55%] py-[50px] px-[30px] bg-white rounded-[10px]">
						<div className="p-[7px] rounded-full shadow-[0_1px_7px_0_rgba(0,0,0,0.3)] w-full text-[15x] font-[900] mb-[25px]">
							<div className="flex w-full">
								<div className="px-[14px] py-[7px] w-[50%] text-center cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white">
									<p>PERSONAL ACCOUNT</p>
								</div>
								<div className="px-[14px] py-[7px] w-[50%] text-center cursor-pointer">
									<p>MYBIZ ACCOUNT</p>
								</div>
							</div>
						</div>
						<div className="w-full h-[86px]">
							<div className="w-full h-full font-[700] text-[14px]">
								<label className="mb-[10px] block" htmlFor="contact">
									Mobile Number
								</label>
								<div className="w-full h-[42px] flex border border-gray-300 rounded ">
									<div className="w-[20%] h-full ml-[5px] overflow-hidden">
										<HeadlessCombobox />
									</div>
									<input
										className=" w-[80%] h-full outline-none"
										id="contact"
										type="text"
										placeholder="Enter Mobile Number"
									/>
								</div>
							</div>
						</div>
						<button className="w-full rounded-full bg-[#E9E9E9] my-[20px] text-white py-[12.5px] text-[16px]">
							CONTINUE
						</button>
						<div className="flex w-full items-center justify-center gap-[10px]">
							<div className="bg-[#9b9b9b] h-[0.5px] w-[30%]"></div>
							<p className="text-[#9b9b9b] text-[12px]">Or Login/Signup With</p>
							<div className="bg-[#9b9b9b] h-[0.5px] w-[30%]"></div>
						</div>
						<div className="flex items-center justify-center mt-[26px]">
							<div className="flex items-center gap-[15px]">
								<div className="flex justify-center items-center rounded-full border border-[#dadce0] w-[40px] h-[40px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="rgba(1,1,1,1)"
									>
										<path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
									</svg>
								</div>
								<div className="flex justify-center items-center rounded-full border border-[#dadce0] w-[40px] h-[40px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="rgba(1,1,1,1)"
									>
										<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default Modal;

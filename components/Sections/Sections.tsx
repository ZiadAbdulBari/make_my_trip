// import OfferSlider from '../Slider/OfferSlider';
import TabHeader from '../Tab/TabHeader';
import { SwiperSlide } from 'swiper/react';
type SectionsProps = {
	heading: string;
	isTab: boolean;
	isViewAll: boolean;
	isOffer: boolean;
	isHandPickCollection: boolean;
	children: React.ReactNode;
};
const Sections = ({
	heading,
	isTab,
	isViewAll,
	children,
	isOffer,
	isHandPickCollection,
}: SectionsProps) => {
	return (
		<div className="custom-container mb-[20px] px-0 lg:px-[40px] lg:pb-[40px] lg:pt-[40px] shadow-[0px_3px_30px_0px_rgba(0,0,0,0)] lg:shadow-[0px_3px_30px_0px_rgba(0,0,0,0.1)] bg-transparent lg:bg-white rounded-[10px]">
			<div
				className={`w-full lg:w-[90%] flex justify-between px-[20px] !lg:px-0 ${
					isHandPickCollection ? 'mb-[40px]' : 'mb-[10px] lg:mb-[20px]'
				}`}
			>
				<div className="flex items-center gap-[60px]">
					<p className="text-[22px] lg:text-[32px] font-[900] mb-[10px] inline lg:block flex-none">
						{heading}
					</p>
					<div className="hidden lg:block">{isTab && <TabHeader />}</div>
				</div>
				{isViewAll && (
					<div className="flex">
						<div className="flex items-center gap-[10px]">
							<p className="text-[#008CFF] font-[900] text-[12px] lg:text-[16px]">
								VIEW ALL
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="currentColor"
								className="bi bi-arrow-right fill-[#008CFF] hidden lg:block"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="rgba(0,140,255,1)"
								className="block lg:hidden"
							>
								<path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
							</svg>
						</div>
					</div>
				)}
			</div>
			<div className="block lg:hidden bg-white rounded-[15px] min-w-full overflow-hidden mb-[15px] lg:mb-0 ">
				<div className="overflow-auto bg-transparent lg:bg-white">
					{isTab && <TabHeader />}
				</div>
			</div>
			<div
				className={`${
					isOffer ? 'h-[166px] lg:h-[400px] pl-[20px] lg:pl-0' : 'h-[220px]'
				} w-full lg:bg-white`}
			>
				{children}
			</div>
		</div>
	);
};
export default Sections;

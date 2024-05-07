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
		<div className="custom-container mb-[20px] px-[40px] pb-[40px] pt-[40px] !shadow-[0px_3px_30px_0px_rgba(0, 0, 0, 0.1)] bg-white rounded-[10px]">
			<div
				className={`w-[90%] flex justify-between ${
					isHandPickCollection ? 'mb-[40px]' : 'mb-[20px]'
				}`}
			>
				<div className="flex items-center gap-[60px]">
					<p className="text-[32px] font-[900]">{heading}</p>
					{isTab && <TabHeader />}
				</div>
				{isViewAll && (
					<div className="flex">
						<div className="flex items-center gap-[10px]">
							<p className="text-[#008CFF] font-[900] text-[16px]">VIEW ALL</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								fill="currentColor"
								className="bi bi-arrow-right fill-[#008CFF]"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
			<div className={`${isOffer ? 'h-[400px]' : 'h-[220px]'} w-full bg-white`}>
				{children}
			</div>
		</div>
	);
};
export default Sections;

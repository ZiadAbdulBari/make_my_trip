import Appinfo from '@/components/Appinfo/Appinfo';
import Banner from '@/components/Banner/Banner';
import General from '@/components/Cards/General';
import News from '@/components/Cards/News';
import Offer from '@/components/Cards/Offer';
import Navbar from '@/components/Navbar/Navbar';
import Sections from '@/components/Sections/Sections';
import GeneralSlider from '@/components/Slider/GeneralSlider';
import NewsSlider from '@/components/Slider/NewsSlider';
import OfferSlider from '@/components/Slider/OfferSlider';
import Services from '@/components/services/Services';
import HeadlessCombobox from '@/components/uiKits/HeadlessCombobox';
import Layouts from '@/layouts/layout';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

export default function Home() {
	const [SW, setSW] = useState(0);
	const offerData = [
		{
			imageUrl: '../../offer-1.jpg',
			category: 'INTL HOTELS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
		{
			imageUrl: '../../offer-2.jpg',
			category: 'INTL FLIGHTS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
		{
			imageUrl: '../../offer-3.jpg',
			category: 'INTL FLIGHTS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
		{
			imageUrl: '../../offer-4.jpg',
			category: 'INTL FLIGHTS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
		{
			imageUrl: '../../offer-5.jpg',
			category: 'INTL FLIGHTS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
		{
			imageUrl: '../../offer-6.jpg',
			category: 'INTL FLIGHTS',
			isConditionApplied: true,
			title: 'Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...',
			description: 'Also, get up to 40% OFF* at select Indian restaurants.',
		},
	];
	const wonders = [
		{
			imageUrl: '../wonder-1.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-2.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-3.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-4.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-5.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-6.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-7.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
		{
			imageUrl: '../wonder-8.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: false,
			badgeText: '',
		},
	];
	const handpickCollections = [
		{
			imageUrl: '../wonder-1.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 8',
		},
		{
			imageUrl: '../wonder-2.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 9',
		},
		{
			imageUrl: '../wonder-3.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 5',
		},
		{
			imageUrl: '../wonder-4.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 9',
		},
		{
			imageUrl: '../wonder-5.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 7',
		},
		{
			imageUrl: '../wonder-6.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 6',
		},
		{
			imageUrl: '../wonder-7.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 3',
		},
		{
			imageUrl: '../wonder-8.jpg',
			text: 'Quaint Little Hill Station in Gujarat',
			isBadge: true,
			badgeText: 'TOP 9',
		},
	];
	const news = [
		{
			imagesUrl: './news-1.png',
			description:
				'Check out our Indian Travel Trends Report. Our trends report 2023-24 is out now. Read on for top travel insights.',
		},
		{
			imagesUrl: './news-2.png',
			description:
				'Check out our Indian Travel Trends Report. Our trends report 2023-24 is out now. Read on for top travel insights.',
		},
		{
			imagesUrl: './news-3.png',
			description:
				'Check out our Indian Travel Trends Report. Our trends report 2023-24 is out now. Read on for top travel insights.',
		},
		{
			imagesUrl: './news-4.png',
			description:
				'Check out our Indian Travel Trends Report. Our trends report 2023-24 is out now. Read on for top travel insights.',
		},
	];
	const mobileoffer = [
		{
			imagesUrl: './mbl_offer (1).jpg',
		},
		{
			imagesUrl: './mbl_offer (2).jpg',
		},
		{
			imagesUrl: './mbl_offer (3).jpg',
		},
		{
			imagesUrl: './mbl_offer (4).jpg',
		},
	];
	const where2go = [
		{
			imagesUrl: './go (1).jpg',
		},
		{
			imagesUrl: './go (2).jpg',
		},
		{
			imagesUrl: './go (3).jpg',
		},
		{
			imagesUrl: './go (4).jpg',
		},
	];
	useEffect(() => {
		setSW(screen.width);
	}, []);
	return (
		<main>
			<Layouts>
				<Navbar />
				<Banner />
				<Services />
				{SW >= 1024 && (
					<Sections
						heading="Offer"
						isOffer={true}
						isHandPickCollection={false}
						isTab={true}
						isViewAll={true}
					>
						<OfferSlider>
							{offerData.map((offer, index) => (
								<SwiperSlide key={index}>
									<Offer
										imageUrl={offer.imageUrl}
										category={offer.category}
										isConditionApplied={offer.isConditionApplied}
										title={offer.title}
										description={offer.description}
									/>
								</SwiperSlide>
							))}
						</OfferSlider>
					</Sections>
				)}
				<div className="custom-container h-[104px] overflow-hidden hidden lg:block">
					<NewsSlider>
						{news.map((data, index) => (
							<SwiperSlide key={index}>
								<News imageUrl={data.imagesUrl} description={data.description} />
							</SwiperSlide>
						))}
					</NewsSlider>
				</div>
				<div className="w-[60%] lg:w-[968px] mx-auto my-[20px] rounded-[16px] overflow-hidden relative border border-[#d8d8d8]">
					<div className="absolute top-[5px] right-[5px] text-[10px] bg-white rounded-full border border-[#d8d8d8] px-[5px]">
						Sponsored
					</div>
					<img src="../sponser.jpeg" alt="" className="w-full hidden lg:block" />
					<img src="../mobile_sponsor.jpeg" alt="" className="w-full block lg:hidden " />
				</div>
				{SW < 1024 && (
					<Sections
						heading="Offer"
						isOffer={true}
						isHandPickCollection={false}
						isTab={true}
						isViewAll={true}
					>
						<div className="flex w-full gap-[10px] overflow-auto">
							{mobileoffer.map((img, index) => (
								<div key={index} className="min-w-[289px] h-[166px] rounded-[8px]">
									<img
										src={img.imagesUrl}
										alt=""
										className="ovject-contain h-full w-full rounded-[8px]"
									/>
								</div>
							))}
						</div>
					</Sections>
				)}
				{SW < 1024 && (
					<div className="px-[20px] mt-[30px]">
						<div className="flex  justify-between mb-[10px]">
							<p className="text-[22px] font-[900] ">WHERE2GO</p>
							<div className="flex">
								<div className="flex items-center gap-[10px]">
									<p className="text-[#008CFF] font-[900] text-[12px] lg:text-[16px]">
										VIEW ALL
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="18"
										height="18"
										fill="rgba(0,140,255,1)"
									>
										<path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="grid gird-flow-row grid-cols-2 gap-4 rounded-[16px]">
							{where2go.map(
								(img, index) => (
									<div
										key={index}
										className="min-w-[50%] h-[122px] rounded-[16px] relative "
									>
										<img
											src={img.imagesUrl}
											alt=""
											className="h-full w-full object-cover rounded-[16px]"
										/>
										<div className="absolute bottom-0 left-0 px-[12px] pb-[12px]">
											<p className="text-[10px] text-white">
												Explore Destinations
											</p>
											<p className="text-[16px] text-white font-[900]">
												Relax on the beach
											</p>
										</div>
									</div>
								),
								[]
							)}
						</div>
					</div>
				)}
				{SW >= 1024 && (
					<>
						<Appinfo />
						<Sections
							heading="Handpicked Collections for You"
							isHandPickCollection={true}
							isOffer={false}
							isTab={false}
							isViewAll={false}
						>
							<GeneralSlider isHandPickCollection={true}>
								{handpickCollections.map((collection, index) => (
									<SwiperSlide key={index}>
										<General
											imageUrl={collection.imageUrl}
											text={collection.text}
											isBadge={collection.isBadge}
											badgeText={collection.badgeText}
										/>
									</SwiperSlide>
								))}
							</GeneralSlider>
						</Sections>
						<Sections
							heading="Unlock Lesser-Known Wonders of India "
							isHandPickCollection={false}
							isOffer={false}
							isTab={false}
							isViewAll={false}
						>
							<GeneralSlider isHandPickCollection={false}>
								{wonders.map((wonder, index) => (
									<SwiperSlide key={index}>
										<General
											imageUrl={wonder.imageUrl}
											text={wonder.text}
											isBadge={wonder.isBadge}
											badgeText={wonder.badgeText}
										/>
									</SwiperSlide>
								))}
							</GeneralSlider>
						</Sections>
					</>
				)}
			</Layouts>
		</main>
	);
}

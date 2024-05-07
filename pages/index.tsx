import Appinfo from '@/components/Appinfo/Appinfo';
import Banner from '@/components/Banner/Banner';
import General from '@/components/Cards/General';
import Offer from '@/components/Cards/Offer';
import Sections from '@/components/Sections/Sections';
import GeneralSlider from '@/components/Slider/GeneralSlider';
import OfferSlider from '@/components/Slider/OfferSlider';
import Services from '@/components/services/Services';
import Layouts from '@/layouts/layout';
import { SwiperSlide } from 'swiper/react';

export default function Home() {
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
	return (
		<main>
			<Layouts>
				<Banner />
				<Services />
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
			</Layouts>
		</main>
	);
}

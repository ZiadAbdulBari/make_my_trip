import Banner from '@/components/Banner/Banner';
import Offer from '@/components/Cards/Offer';
import Sections from '@/components/Sections/Sections';
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
	return (
		<main>
			<Layouts>
				<Banner />
				<Services />
				<Sections heading="Offer" isTab={true} isViewAll={true}>
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
			</Layouts>
		</main>
	);
}

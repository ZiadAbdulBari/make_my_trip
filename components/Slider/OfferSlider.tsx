import React from 'react';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import Offer from '../Cards/Offer';
const OfferSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Swiper
			slidesPerView={2}
			grid={{
				rows: 2,
			}}
			spaceBetween={20}
			grabCursor={true}
			navigation
			modules={[Grid, Navigation]}
		>
			{children}
		</Swiper>
	);
};

export default OfferSlider;

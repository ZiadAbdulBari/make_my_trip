import React from 'react';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const OfferSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Swiper
			slidesPerView={2}
			grid={{
				rows: 2,
			}}
			spaceBetween={20}
			grabCursor={false}
			navigation
			modules={[Grid, Navigation]}
			className="offer"
		>
			{children}
		</Swiper>
	);
};

export default OfferSlider;

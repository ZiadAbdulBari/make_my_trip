import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const NewsSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			navigation
			modules={[Navigation]}
			className="news-slider"
		>
			{children}
		</Swiper>
	);
};
export default NewsSlider;

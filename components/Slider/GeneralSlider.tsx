import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const GeneralSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={20}
			grabCursor={true}
			navigation
			modules={[Navigation]}
		>
			{children}
		</Swiper>
	);
};
export default GeneralSlider;

import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const GeneralSlider = ({
	children,
	isHandPickCollection,
}: {
	children: React.ReactNode;
	isHandPickCollection: boolean;
}) => {
	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={20}
			navigation
			modules={[Navigation]}
			className={isHandPickCollection ? 'collection' : 'general'}
		>
			{children}
		</Swiper>
	);
};
export default GeneralSlider;

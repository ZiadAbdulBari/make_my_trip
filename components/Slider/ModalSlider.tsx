import React from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ModalSlider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			className="modal-slider "
		>
			{children}
		</Swiper>
	);
};
export default ModalSlider;

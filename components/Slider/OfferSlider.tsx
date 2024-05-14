import React, { useEffect, useState } from 'react';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const OfferSlider = ({ children }: { children: React.ReactNode }) => {
	const [SW, setSW] = useState(0);
	useEffect(() => {
		setSW(screen.width);
	}, []);
	return (
		<Swiper
			slidesPerView={2}
			grid={{
				rows: 2,
			}}
			spaceBetween={SW >= 1024 ? 20 : 10}
			grabCursor={false}
			navigation={true}
			modules={[Grid, Navigation]}
			className="offer"
		>
			{children}
		</Swiper>
	);
};

export default OfferSlider;

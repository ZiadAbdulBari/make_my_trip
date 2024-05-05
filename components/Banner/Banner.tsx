import Navbar from '../Navbar/Navbar';
import SearchTrip from '../SearchTrip/SearchTrip';

const Banner = () => {
	return (
		<div className="w-full h-[566px] relative overflow-hidden">
			<img src="../../banner.jpg" alt="Banner image" />
			<Navbar />
			<SearchTrip />
		</div>
	);
};
export default Banner;

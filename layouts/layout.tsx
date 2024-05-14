import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MobileHeader from '@/components/Header/MobileHeader';

const Layouts = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<MobileHeader />
			{children}
			<Footer />
		</>
	);
};
export default Layouts;

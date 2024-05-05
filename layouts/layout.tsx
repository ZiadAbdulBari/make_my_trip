import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Layouts = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
};
export default Layouts;

const LowerFooter = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-[#E7E7E7] w-full hidden lg:block">
			<div className="custom-container py-[60px] mt-[70px]">{children}</div>
		</div>
	);
};
export default LowerFooter;

const FooterCard = ({ heading, paragraph }: { heading: string; paragraph: string }) => {
	return (
		<div>
			<p className="font-[700] text-[16px] mb-[25px]">{heading}</p>
			<p className="text-[12px] leaing-[16px]">{paragraph}</p>
		</div>
	);
};
export default FooterCard;

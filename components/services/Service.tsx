type ServiceProps = {
	imageUrl: string;
	title: string;
	subtitle: string;
	extraCSS: string;
};
const Service = ({ imageUrl, title, subtitle, extraCSS }: ServiceProps) => {
	return (
		<div className={`flex py-[12px] px-[15px] cursor-pointer gap-[12px] items-center`}>
			<div>
				<img src={imageUrl} alt="" className="w-[28px]" />
			</div>
			<div>
				<p className={`text-[14px] text-[#4A4A4A] leading-[14px] ${extraCSS}`}>{title}</p>
				<p className="text-[12px] text-[#4A4A4A]">{subtitle}</p>
			</div>
		</div>
	);
};
export default Service;

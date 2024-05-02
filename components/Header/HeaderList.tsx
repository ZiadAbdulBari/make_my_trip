type HeaderlistProps = {
	image_url: string;
	title: string;
	subtitle: string;
	img_width: string;
	titleSize: string;
	subtitleSize: string;
};
const HeaderList = ({
	image_url,
	title,
	subtitle,
	img_width,
	titleSize,
	subtitleSize,
}: HeaderlistProps) => {
	return (
		<div className="flex gap-[10px] items-center px-[10px]">
			<div className={`overflow-hidden ${img_width}`}>
				<img src={image_url} alt="" className="" />
			</div>
			<div>
				<p className={`${titleSize} text-white text-[11px]`}>{title}</p>
				<p className={`${subtitleSize} text-[10px] text-white`}>{subtitle}</p>
			</div>
		</div>
	);
};
export default HeaderList;

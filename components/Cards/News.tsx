type NewsProps = {
	imageUrl: string;
	description: string;
};
const News = ({ imageUrl, description }: NewsProps) => {
	return (
		<div className="bg-white px-[30px] py-[16px] flex items-center gap-[20px] w-[390px] rounded-[6px]">
			<div className="w-[68px] h-[68px] rounded-full overflow-hidden">
				<img src={imageUrl} alt="" className="w-full " />
			</div>
			<div className="w-[234px]">
				<p className="text-[16px] text-[#4A4A4A] leading-[18px]">{description}</p>
			</div>
		</div>
	);
};
export default News;

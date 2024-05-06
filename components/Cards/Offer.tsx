/* eslint-disable react/no-unescaped-entities */
type OfferProps = {
	imageUrl: string;
	category: string;
	isConditionApplied: boolean;
	title: string;
	description: string;
};
const Offer = ({ imageUrl, category, isConditionApplied, title, description }: OfferProps) => {
	return (
		<div className="p-[10px] shadow-[0_1px_6px_0_rgba(0,0,0,0.2)] rounded-[6px]">
			<div className="flex gap-[20px]">
				<div className="h-[134px] w-[134px] rounded-[6px] overflow-hidden">
					<img src={imageUrl} alt="" className="object-cover h-full w-full" />
				</div>
				<div>
					<div className="flex justify-between">
						<p className="text-[12px] font-[700] text-[#4A4A4A]">{category}</p>
						{isConditionApplied && (
							<p className="text-[12px] text-[#4A4A4A]">T&C's Apply</p>
						)}
					</div>
					<div>
						<p className="text-[18px] font-[900]">{title}</p>
						<div className="w-[33px] h-[1px] bg-[#EB2026] my-[10px]"></div>
						<p className="text-[14px] text-[#4A4A4A]">{description}</p>
					</div>
				</div>
			</div>
			<div className="flex justify-end">
				<p className="text-[#0A91FF] font-[900] text-[14px]">BOOK NOW</p>
			</div>
		</div>
	);
};
export default Offer;

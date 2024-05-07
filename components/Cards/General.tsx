/* eslint-disable react/no-unescaped-entities */
type GeneralProps = {
	imageUrl: string;
	text: string;
	isBadge: boolean;
	badgeText: string;
};
const General = ({ imageUrl, text, isBadge, badgeText }: GeneralProps) => {
	return (
		<div className="w-[210px] h-[230px] relative rounded-[8px]">
			<div className="absolute top-0 left-0 h-full w-full z-[99]">
				<img src={imageUrl} alt="" className="h-full w-full rounded-[8px]" />
				<div className="absolute bottom-[0px] left-0 z-[999] p-[12px]">
					{isBadge && (
						<span className="px-[9px] py-[2px] bg-white rounded-[5px] text-[14px] font-[900] mb-[5px]">
							{badgeText}
						</span>
					)}
					<p className="text-[16px] font-[700] text-white leading-[22px]">{text}</p>
				</div>
			</div>
			{isBadge && (
				<>
					<div className="absolute -top-[20px] left-[50%] -translate-x-[50%] h-full w-[80%] bg-[#F5F5F5] rounded-[8px]"></div>
					<div className="absolute -top-[10px] left-[50%] -translate-x-[50%] h-full w-[90%] bg-[#DCDCDC] rounded-[8px]"></div>
				</>
			)}
		</div>
	);
};
export default General;

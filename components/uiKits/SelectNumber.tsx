export default function SelectNumber({
	lastnumber,
	heading,
	subheading,
}: {
	lastnumber: number;
	heading: string;
	subheading: string;
}) {
	return (
		<div className="">
			<p className="text-[12px] font-[700] text-black/[0.7]">{heading}</p>
			<p className="text-[12px] font-[700] text-black/[0.5]">{subheading}</p>
			<ul className="flex shadow-[0_0_6px_0_rgba(0,0,0,0.2)] py-2 px-6 gap-6 rounded-[5px] mt-[10px] mb-[24px]">
				{[...Array(lastnumber)].map((e, i) => {
					return (
						<li key={i} className={`text-[11px] font-[900] text-black/[0.6]`}>
							{i + 1}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

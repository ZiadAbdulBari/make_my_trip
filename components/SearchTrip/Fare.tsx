import { useState } from 'react';

type FareProps = {
	title: string;
	subtitle: string;
	onChange: (e: any) => void;
	selectedvalue: string;
};
const Fare = ({ title, subtitle, onChange, selectedvalue }: FareProps) => {
	return (
		<div
			className={`flex items-start gap-[10px] px-[12px] py-[8px] border rounded-[8px] cursor-pointer ${
				selectedvalue == title.split(' ').join('-') &&
				'border-[#008CFF] text-[#008CFF] bg-[#EAF5FF]'
			}`}
		>
			<div>
				<input
					className="h-[18] w-[18px] cursor-pointer"
					type="radio"
					name="fare"
					id={title.split(' ').join('-')}
					value={title.split(' ').join('-')}
					onChange={onChange}
				/>
			</div>
			<div>
				<label
					className="font-[700] leading-0 cursor-pointer"
					htmlFor={title.split(' ').join('-')}
				>
					{title}
				</label>
				<p className="leading-0 text-[12px] cursor-pointer text-[#757575]">{subtitle}</p>
			</div>
		</div>
	);
};
export default Fare;

export default function Dropdown({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white absolute top-[30%] right-0 w-[660px] z-[99999999] px-[40px] py-[20px] shadow-[0_1px_6px_0_rgba(0,0,0,0.2)] rounded-[5px]">
			{children}
		</div>
	);
}

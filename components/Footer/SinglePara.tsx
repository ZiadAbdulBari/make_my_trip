const SinglePara = ({ heading, paragraph }: { heading: string; paragraph: string }) => {
	return (
		<div className="mb-[20px]">
			<p className="text-[10px] font-[900] mb-[10px]">{heading}</p>
			<p className="text-[12px]">{paragraph}</p>
		</div>
	);
};
export default SinglePara;

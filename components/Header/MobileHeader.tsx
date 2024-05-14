import { useState, useEffect, useRef } from 'react';

const MobileHeader = () => {
	const ref = useRef(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	useEffect(() => {
		const handleOutSideClick = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				setIsSidebarOpen(false);
			}
		};

		window.addEventListener('mousedown', handleOutSideClick);

		return () => {
			window.removeEventListener('mousedown', handleOutSideClick);
		};
	}, [ref]);
	return (
		<div className="px-[16px] py-[10px] block lg:hidden relative !z-[99] w-full h-[50px]">
			<div
				className={`h-[100vh] w-[100vw] transition-opacity duration-300 fixed top-0  ${
					isSidebarOpen ? 'left-0 bg-black/[0.55]' : '-left-[100vw] bg-black/[0.0]'
				} !z-[9999]`}
			>
				<div
					className={`h-[100vh] w-[70vw] bg-white !z-[9999] transition-all duration-300 fixed top-0 px-[12px] py-[16px] ${
						isSidebarOpen ? 'left-0' : '-left-[70vw] '
					}`}
					ref={ref}
				>
					<div className="grid grid-flow-row grid-cols-1 gap-y-[16px]">
						<div className="flex justify-between items-center bg-[#008CFF]/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="53"
									height="53"
									viewBox="0 0 48 47"
									fill="none"
									className="border-white border-[3px] rounded-full shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] shadow-[0px_6px_20px_0px_rgba(0,0,0,0.1) ]"
								>
									<circle
										cx="24.0001"
										cy="23.7631"
										r="23.1683"
										fill="#E4FBF4"
									></circle>
									<path
										d="M36.3884 17.7655C35.9096 18.3008 32.8112 24.1051 32.3606 25.0349C31.7409 26.1619 31.1494 26.5282 30.6987 26.5282C29.6847 26.5282 29.8819 24.8658 30.0509 24.3023C31.0086 20.5549 32.0507 19.1743 32.1916 18.9207C32.9239 17.9064 32.2197 16.6948 31.1776 16.6948C29.9101 16.6948 29.4312 17.4837 29.4312 18.7798C29.0651 19.7942 28.3327 21.5692 28.2201 21.7383C27.7694 22.6963 25.4879 26.0492 24.6992 26.8099C24.5302 26.979 24.3049 26.979 24.3049 26.7536C24.3894 24.4432 25.6569 20.1323 25.6569 20.1323C25.6851 19.9914 25.7132 19.8505 25.7132 19.7378C25.7132 19.0616 25.4034 18.6108 24.6992 18.5544C23.9951 18.4981 23.6289 18.8362 22.9811 19.5969C21.5727 21.3438 19.8827 23.9924 19.0659 25.2039C18.9814 25.3448 18.8124 25.2884 18.8124 25.1194C18.8124 24.584 20.5306 18.5263 20.5306 18.5263C20.6714 17.8782 20.2489 17.371 19.5166 17.371C18.6997 17.371 16.9816 19.7096 14.3057 23.4007C14.2212 23.5134 14.0241 23.457 14.0804 23.3443C14.7001 21.6819 15.2916 19.6815 15.2916 18.639C15.2916 17.6528 14.8691 17.1456 14.0241 17.1456C12.1087 17.1456 10.3342 19.287 10.3342 20.3013C10.3342 20.8648 10.6722 21.4002 11.2356 21.4002C12.0806 21.4002 12.2777 19.8223 12.8974 19.8223C13.0101 19.8223 13.0101 19.9632 13.0101 19.9914C12.8974 21.1184 11.5172 25.7393 10.7849 27.937C10.4187 29.064 10.6441 29.8529 11.5736 29.8529C12.2496 29.8529 12.8974 29.2049 13.5452 28.2187C14.8127 26.3028 16.6999 23.3161 16.8971 23.3161C16.9534 23.3161 16.9816 23.3443 16.9816 23.4007C16.7281 24.7813 15.6577 29.0358 17.7702 29.0358C18.1646 29.0358 18.5871 28.9231 19.0377 28.4723C19.5447 27.937 21.5164 25.2884 22.6994 23.1753C22.7839 23.0344 22.8684 23.1471 22.8402 23.2598C22.6149 24.3586 21.8262 27.4298 21.8262 28.1342C21.8262 29.7684 23.0092 29.7684 23.0656 29.7684C25.3471 29.7684 27.6286 25.7393 28.0229 25.1757C27.3187 27.627 28.4736 30.0501 30.9804 29.064C30.2762 30.8109 29.0651 33.4594 29.0651 36.1643C29.0651 37.8267 29.9946 38.6438 30.9241 38.6438C31.6001 38.6438 32.2197 38.2493 32.2197 37.5731C31.2621 35.7698 32.1352 31.0363 34.5576 25.5702C35.7124 24.2741 38.5572 19.8505 38.5572 18.4699C38.5572 17.681 38.1066 17.3147 37.5151 17.3147C37.0081 17.2302 36.7264 17.3992 36.3884 17.7655Z"
										fill="url(#paint0_linear_9555_47592)"
									></path>
									<defs>
										<linearGradient
											id="paint0_linear_9555_47592"
											x1="14.4674"
											y1="35.4294"
											x2="29.5097"
											y2="16.0873"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#43E1A8"></stop>
											<stop offset="1" stop-color="#219393"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="">
								<p className="text-[#008CFF]  text-[12px] font-[700] mb-[5px]">
									Login/Sign-up now
								</p>
								<p className="text-[12px] text-black">
									Login for best deal & offers
								</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="rgba(0,140,255,1)"
								>
									<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
								</svg>
							</div>
						</div>
						<div className="flex items-center border border-black/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
								>
									<path
										stroke="#757575"
										stroke-width="1.26"
										d="M16.1 7.84v-3.1c0-.96-.82-1.74-1.82-1.74H9.87c-1 0-1.83.78-1.83 1.75v3.1"
									></path>
									<path
										fill="#757575"
										fill-rule="evenodd"
										d="M7.13 17.86a.7.7 0 0 0 1.38 0V10.2a.7.7 0 1 0-1.38 0v7.67ZM15.13 17.86a.7.7 0 0 0 1.39 0V10.2a.7.7 0 0 0-1.4 0v7.67Z"
										clip-rule="evenodd"
									></path>
									<rect
										width="18.55"
										height="13.53"
										x="2.73"
										y="7.48"
										stroke="#757575"
										stroke-width="1.26"
										rx="3.51"
									></rect>
								</svg>
							</div>
							<div className="">
								<p className="text-black/[0.8] text-[12px] font-[700] mb-[5px]">
									View/Manage Trips
								</p>
								<p className="text-[12px] text-black/[0.5] font-[700]">
									View, modify your trips
								</p>
							</div>
						</div>
						<div className="flex items-center border border-black/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
								>
									<path
										stroke="#757575"
										stroke-width="1.26"
										d="M3.51 6.44A3.28 3.28 0 0 1 6.8 3.29h10.5a3.23 3.23 0 0 1 3.24 3.07 144 144 0 0 1 .18 6.02c0 1.64-.08 3.61-.16 5.29a3.2 3.2 0 0 1-3.23 3.04H6.8a3.28 3.28 0 0 1-3.28-3.15L3.3 12l.22-5.56ZM12.23 3.29v17.42M20.71 11.93H3.29"
									></path>
									<path
										fill="#fff"
										stroke="#757575"
										stroke-width="1.26"
										d="M11.8 11c-.21.38-.63.64-1.2.7a3.1 3.1 0 0 1-1.91-.44A3.1 3.1 0 0 1 7.38 9.8c-.22-.54-.19-1.03.03-1.4.22-.38.65-.64 1.22-.7a3.1 3.1 0 0 1 1.9.45c.65.38 1.1.92 1.31 1.45.22.54.2 1.03-.03 1.4ZM12.34 11c.22.38.64.64 1.21.7a3.1 3.1 0 0 0 1.9-.44 3.1 3.1 0 0 0 1.32-1.46c.21-.54.19-1.03-.04-1.4-.22-.38-.64-.64-1.21-.7a3.1 3.1 0 0 0-1.9.45A3.1 3.1 0 0 0 12.3 9.6c-.21.54-.18 1.03.04 1.4Z"
									></path>
								</svg>
							</div>
							<div className="">
								<p className="text-black/[0.8] text-[12px] font-[700] mb-[5px]">
									Gift Cards
								</p>
							</div>
						</div>
						<div className="flex justify-between items-center border border-black/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div className="flex items-center gap-[10px]">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
									>
										<mask id="a" fill="#fff">
											<path
												fill-rule="evenodd"
												d="M9.87 2.48c-2 0-3.66 1.58-3.74 3.59l-.2 5.35.2 5.34c.08 2.01 1.73 3.6 3.74 3.6h5.22l1.7 2.24a.9.9 0 0 0 1.45 0l1.71-2.24c1.97 0 3.6-1.52 3.7-3.49.08-1.6.15-3.5.15-5.09 0-1.69-.08-3.93-.17-5.79a3.7 3.7 0 0 0-3.7-3.51H9.87Z"
												clip-rule="evenodd"
											></path>
										</mask>
										<path
											fill="#757575"
											d="m6.13 6.07-1.2-.05 1.2.05Zm-.2 5.35-1.21-.05v.09l1.2-.04Zm.2 5.34-1.2.05 1.2-.05Zm8.96 3.6.95-.74-.36-.47h-.6v1.2Zm1.7 2.24-.95.73.96-.73Zm1.45 0-.96-.73.96.73Zm1.71-2.24v-1.21h-.6l-.35.47.95.74Zm3.7-3.49-1.2-.05 1.2.05ZM23.63 6l-1.2.06 1.2-.06Zm-16.29.13a2.53 2.53 0 0 1 2.53-2.44v-2.4a4.94 4.94 0 0 0-4.94 4.74l2.41.1Zm-.21 5.34.21-5.34-2.41-.1-.21 5.35 2.4.1Zm.21 5.26-.21-5.35-2.41.1.21 5.34 2.41-.1Zm2.53 2.43a2.53 2.53 0 0 1-2.53-2.43l-2.41.1a4.94 4.94 0 0 0 4.94 4.74v-2.41Zm5.22 0H9.87v2.41h5.22v-2.41Zm2.67 2.72-1.72-2.25-1.91 1.47 1.71 2.24 1.92-1.46Zm-.48 0a.3.3 0 0 1 .48 0l-1.92 1.46a2.11 2.11 0 0 0 3.36 0l-1.92-1.46ZM19 19.62l-1.72 2.25 1.92 1.46 1.71-2.24L19 19.62Zm.96-.47v2.41-2.41Zm2.48-2.33a2.47 2.47 0 0 1-2.48 2.33v2.41c2.6 0 4.76-2 4.9-4.63l-2.42-.11Zm.15-5.04c0 1.55-.07 3.43-.15 5.04l2.41.11c.08-1.61.16-3.54.16-5.14h-2.42Zm-.16-5.73c.08 1.85.16 4.07.16 5.74h2.42c0-1.73-.09-4-.17-5.85l-2.41.1Zm-2.5-2.37a2.49 2.49 0 0 1 2.5 2.37l2.4-.11a4.9 4.9 0 0 0-4.9-4.67v2.41Zm-10.06 0h10.06v-2.4H9.87v2.4Z"
											mask="url(#a)"
										></path>
										<path
											fill="#757575"
											d="M14.5 11.46a.57.57 0 0 0-.22-.16.71.71 0 0 0-.34-.09.7.7 0 0 0-.51.2.72.72 0 0 0-.19.52c0 .23.06.41.19.55a.66.66 0 0 0 .88.03c.13-.1.19-.25.19-.46v-.6Zm1.12 2.98H14.5V13.4a.79.79 0 0 1-.28.15 1.77 1.77 0 0 1-1.14-.04c-.2-.07-.37-.19-.52-.34a1.84 1.84 0 0 1-.35-.55 2.04 2.04 0 0 1-.13-.74c0-.27.04-.5.12-.7.08-.2.2-.37.33-.51.14-.14.3-.24.49-.3a1.79 1.79 0 0 1 1.09-.04c.16.04.3.1.39.19v-.89h-2.75V8.7h6.7v.93h-2.82v.91c.1-.07.21-.13.36-.18a1.9 1.9 0 0 1 1.17.05 1.32 1.32 0 0 1 .8.82c.08.2.11.43.11.68 0 .28-.04.52-.13.73a1.47 1.47 0 0 1-.9.83 1.92 1.92 0 0 1-.88.1l-.2-.04.07-.94.1.02h.14c.17 0 .31-.06.44-.18s.2-.3.2-.52c0-.2-.06-.37-.17-.48-.11-.12-.27-.18-.48-.18a.59.59 0 0 0-.46.2c-.11.13-.17.32-.17.57v2.42Z"
										></path>
										<path
											stroke="#fff"
											stroke-width="1.21"
											d="M15.47 1.65A3.5 3.5 0 0 1 18.97 5l.23 5.84-.23 5.84a3.5 3.5 0 0 1-3.5 3.36H4.41A3.43 3.43 0 0 1 .97 16.8C.88 15.04.8 12.96.8 11.25c0-1.85.1-4.3.19-6.33a3.45 3.45 0 0 1 3.46-3.27h11.02Z"
										></path>
										<mask id="b" fill="#fff">
											<path
												fill-rule="evenodd"
												d="M14.92 2c2 0 3.66 1.58 3.74 3.6l.2 5.34-.2 5.35c-.08 2-1.73 3.59-3.74 3.59H9.7L8 22.12a.9.9 0 0 1-1.45 0l-1.71-2.24a3.67 3.67 0 0 1-3.7-3.48C1.06 14.78 1 12.88 1 11.3c0-1.69.08-3.93.17-5.79A3.7 3.7 0 0 1 4.86 2h10.06Z"
												clip-rule="evenodd"
											></path>
										</mask>
										<path
											fill="#fff"
											fill-rule="evenodd"
											d="M14.92 2c2 0 3.66 1.58 3.74 3.6l.2 5.34-.2 5.35c-.08 2-1.73 3.59-3.74 3.59H9.7L8 22.12a.9.9 0 0 1-1.45 0l-1.71-2.24a3.67 3.67 0 0 1-3.7-3.48C1.06 14.78 1 12.88 1 11.3c0-1.69.08-3.93.17-5.79A3.7 3.7 0 0 1 4.86 2h10.06Z"
											clip-rule="evenodd"
										></path>
										<path
											fill="#757575"
											d="m18.66 5.6 1.2-.06-1.2.05Zm.2 5.34 1.21-.05v.1l-1.2-.05Zm-.2 5.35 1.2.04-1.2-.04ZM9.7 19.88l-.95-.74.36-.47h.6v1.2ZM8 22.12l.95.73-.96-.73Zm-1.45 0 .96-.73-.96.73Zm-1.71-2.24v-1.21h.6l.35.47-.95.74Zm-3.7-3.48 1.2-.06-1.2.06ZM1.16 5.5l1.2.06-1.2-.06Zm16.29.13a2.53 2.53 0 0 0-2.53-2.43V.79c2.65 0 4.84 2.1 4.94 4.75l-2.41.1Zm.21 5.35-.21-5.35 2.41-.1.21 5.35-2.4.1Zm-.21 5.25.21-5.35 2.41.1-.21 5.34-2.41-.1Zm-2.53 2.43a2.53 2.53 0 0 0 2.53-2.43l2.41.1a4.95 4.95 0 0 1-4.94 4.74v-2.41Zm-5.22 0h5.22v2.41H9.7v-2.41Zm-2.67 2.72 1.72-2.25 1.91 1.47-1.71 2.24-1.92-1.46Zm.48 0a.3.3 0 0 0-.48 0l1.92 1.46a2.11 2.11 0 0 1-3.36 0L7.5 21.4Zm-1.72-2.25 1.72 2.25-1.92 1.46-1.71-2.24 1.91-1.47Zm-.96-.47v2.41-2.41Zm-2.48-2.33a2.47 2.47 0 0 0 2.48 2.33v2.41c-2.6 0-4.76-2-4.9-4.63l2.42-.11ZM2.2 11.3c0 1.54.07 3.42.15 5.03l-2.41.11c-.08-1.61-.16-3.54-.16-5.14H2.2Zm.16-5.74a137.4 137.4 0 0 0-.16 5.74H-.22c0-1.73.09-4 .17-5.85l2.41.1Zm2.5-2.36a2.49 2.49 0 0 0-2.5 2.36l-2.4-.11A4.9 4.9 0 0 1 4.85.79v2.42Zm10.06 0H4.86V.79h10.06v2.42Z"
											mask="url(#b)"
										></path>
										<path
											fill="#757575"
											d="M7.16 13.78a.48.48 0 0 1-.44-.67l2.24-5.08a.48.48 0 0 1 .44-.29h1.06c.19 0 .36.11.44.29l2.25 5.08c.14.32-.1.67-.44.67H12a.48.48 0 0 1-.44-.3L9.7 8.9a.23.23 0 1 1 .42 0l-1.84 4.6a.48.48 0 0 1-.45.3h-.68Zm1.4-1.17a.48.48 0 0 1-.46-.64l.1-.3c.08-.2.26-.32.46-.32h2.27c.2 0 .39.13.45.32l.11.3c.1.31-.12.64-.45.64H8.56Z"
										></path>
									</svg>
								</div>
								<div className="">
									<p className="text-black/[0.8] text-[12px] font-[700] mb-[5px]">
										Language{' '}
										<span className="ml-[4px] text-black/[0.6] text-[10px]">
											English
										</span>
									</p>
								</div>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="rgba(0,140,255,1)"
								>
									<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
								</svg>
							</div>
						</div>
						<div className="flex justify-between items-center border border-black/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div className="flex items-center gap-[10px]">
								<div>
									<img src="../../ind.png" alt="" className="w-[24px]" />
								</div>
								<div className="">
									<p className="text-black/[0.8] text-[12px] font-[700] mb-[5px]">
										Country{' '}
										<span className="ml-[4px] text-black/[0.6] text-[10px]">
											India
										</span>
									</p>
								</div>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="rgba(0,140,255,1)"
								>
									<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
								</svg>
							</div>
						</div>
						<div className="flex justify-between items-center border border-black/[0.1] rounded-[14px] p-[14px] gap-[10px]">
							<div className="flex items-center gap-[10px]">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
									>
										<path
											stroke="#757575"
											stroke-width="1.33"
											d="M13.33 4.37a1.8 1.8 0 0 1 3.12 1.3 1.8 1.8 0 0 0 1.88 1.88 1.8 1.8 0 0 1 1.3 3.12 1.8 1.8 0 0 0 0 2.66 1.8 1.8 0 0 1-1.3 3.12 1.79 1.79 0 0 0-1.88 1.88 1.8 1.8 0 0 1-3.12 1.3 1.8 1.8 0 0 0-2.66 0 1.8 1.8 0 0 1-3.12-1.3 1.8 1.8 0 0 0-1.88-1.88 1.8 1.8 0 0 1-1.3-3.12 1.8 1.8 0 0 0 0-2.66 1.8 1.8 0 0 1 1.3-3.12 1.8 1.8 0 0 0 1.88-1.88 1.8 1.8 0 0 1 3.12-1.3 1.8 1.8 0 0 0 2.66 0"
										></path>
										<path
											fill="#757575"
											d="M14.63 8.52a.64.64 0 0 1 1.01.76l-.1.14-6.09 6.09a.64.64 0 0 1-1.01-.77l.1-.14 6.1-6.08ZM10.43 8.33a.99.99 0 1 0 0 1.97.99.99 0 0 0 0-1.97ZM13.57 13.73a.99.99 0 1 0 0 1.97.99.99 0 0 0 0-1.97Z"
										></path>
									</svg>
								</div>
								<div className="">
									<p className="text-black/[0.8] text-[12px] font-[700] mb-[5px]">
										Offers
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-[16px]">
						<img src="../../google-store.png" alt="" className="w-[110px]" />
						<img src="../../apple-store.png" alt="" className="w-[110px]" />
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-[10px]">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							fill="rgba(10,9,9,1)"
							onClick={() => setIsSidebarOpen(true)}
						>
							<path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
						</svg>
					</div>
					<div>
						<img src="../../mobile-logo.png" alt="" className="w-[86px]" />
					</div>
				</div>
				<div className="flex items-center">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							className="bi bi-translate fill-[#008cff]"
							viewBox="0 0 16 16"
						>
							<path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
							<path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
						</svg>
						<p className="ml-1 text-[12px] text-black/[0.6] font-[900]">ENG</p>
					</div>
					<div className="flex items-center ml-[12px]">
						<div className="h-[22px] w-[22px] rounded-full flex items-center justify-center border border-[#008CFF] ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="rgba(0,140,255,1)"
							>
								<path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
							</svg>
						</div>
						<p className="text-[14px] font-[900] text-black/[0.6] ml-[2px]">
							Login Now
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MobileHeader;

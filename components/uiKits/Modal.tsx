import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Combo from './combo';
type ModalProps = {
	button: string;
};
const Modal = ({ button }: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger>{button}</DialogTrigger>
			<DialogContent className="max-w-[800px] p-0">
				<DialogHeader>
					<DialogDescription>
						<div className="flex">
							<div className="h-full w-[40%] bg-red-500">ddfsdfds</div>
							<div className="h-full w-[60%] py-[50px] px-[30px]">
								<div className="p-[7px] rounded-full shadow-lg w-full text-[15x] font-[900] mb-[25px]">
									<div className="flex w-full">
										<div className="px-[14px] py-[7px] w-[50%] text-center cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white">
											<p>PERSONAL ACCOUNT</p>
										</div>
										<div className="px-[14px] py-[7px] w-[50%] text-center cursor-pointer">
											<p>MYBIZ ACCOUNT</p>
										</div>
									</div>
								</div>
								<div className="w-full h-[86px]">
									<div className="w-full h-full font-[700] text-[14px]">
										<label className="mb-[10px] block" htmlFor="contact">
											Mobile Number
										</label>
										<div className="w-full h-[42px] relative">
											<div className="w-full h-full absolute top-0 left-0"></div>
											<input
												className="border border-gray-300 w-full h-full rounded"
												id="contact"
												type="text"
											/>
											<div className="absolute top-0 left-0">
												<Combo />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
export default Modal;

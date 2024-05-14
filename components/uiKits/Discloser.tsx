import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Discloser({
	heading,
	paragraph,
	guideline,
}: {
	heading: string;
	paragraph: string;
	guideline: boolean;
}) {
	return (
		<div className=" w-full px-4">
			<div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
				<Disclosure
					as="div"
					className={`px-[16px] py-[10px] mb-[10px] rounded-[8px] ${
						guideline
							? 'bg-transparent'
							: 'bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.2)]'
					} `}
					defaultOpen={false}
				>
					<DisclosureButton className="group flex w-full items-center justify-between">
						<span className="!text-[14px] font-[900] text-black/[0.7] group-data-[hover]:text-white/80">
							{heading}
						</span>
						<ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
					</DisclosureButton>
					<DisclosurePanel className="mt-2 text-sm/5 text-black/50">
						{paragraph}
					</DisclosurePanel>
				</Disclosure>
			</div>
		</div>
	);
}

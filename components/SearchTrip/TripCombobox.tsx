import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
// import clsx from 'clsx';
import { Fragment, useState } from 'react';

const people = [
	{ id: +880, name: 'Bangladesh(+880)' },
	{ id: +91, name: 'India(+91)' },
	{ id: +1, name: 'United State(+1)' },
	{ id: +213, name: 'Algeria(+213)' },
	{ id: +54, name: 'Argentina(+54)' },
];
const TripCombobox = () => {
	const [query, setQuery] = useState('');
	const [selected, setSelected] = useState();
	const filteredPeople =
		query === ''
			? people
			: people.filter((person) => {
					return person.name.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<Combobox value={selected} onChange={(value: any) => setSelected(value)}>
			<div className="w-full h-full">
				<div className="flex items-center h-full w-full bg-white">
					<ComboboxInput
						className="!h-[40px] w-full overflow-hidden outline-none pl-[10px] shadow-[0_2px_3px_0_rgba(0,0,0,0.1)] rounded"
						displayValue={(person: any) => person?.name}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<ComboboxButton className="right-0 absolute inset-y-0 px-2.5">
						<ChevronDownIcon className="size-4 fill-black" />
					</ComboboxButton>
				</div>
			</div>
			<Transition
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				afterLeave={() => setQuery('')}
			>
				<div className="w-full max-h-[280px] overflow-y-auto bg-white ">
					<ComboboxOptions
						anchor="bottom"
						className="w-[var(--input-width)]  max-h-[280px] bg-white  z-[99999] shadow-[0_8px_8px_0_rgba(0,0,0,0.12)] rounded-[2px] p-1"
					>
						{filteredPeople.map((person) => (
							<ComboboxOption
								key={person.id}
								value={person}
								className="group flex !cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
							>
								<CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
								<div className="text-black">{person.name}</div>
							</ComboboxOption>
						))}
					</ComboboxOptions>
				</div>
			</Transition>
		</Combobox>
	);
};
export default TripCombobox;

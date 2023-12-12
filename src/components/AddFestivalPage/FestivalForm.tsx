import {FieldValues, UseFormRegister} from "react-hook-form";

type festivalProps = {
    register: UseFormRegister<FieldValues>
}

export function FestivalForm(props: festivalProps) {
    return (
        <>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                    <label className="mt-6 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Festival Name *
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        type="text"
                        placeholder="Enter festival name"
                        {...props.register("name")}
                    />
                </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                    <label className="mt-6 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Festival Details *
                    </label>
                    <textarea
                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        rows={4}
                        maxLength={500}
                        placeholder="A brief description of the festival"
                        {...props.register("details")}
                    />
                </div>
            </div>
            <div className="-mx-3  flex flex-wrap">
                <div className="w-full px-3">
                    <label className="mt-6 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Organizer *
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        type="text"
                        placeholder="Enter organisation"
                        required
                        {...props.register("organizer")}
                    />
                </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3">
                    <label className="mt-6 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Add Website *
                    </label>
                    <input
                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        type="text" placeholder="Website link"
                        {...props.register("website")}
                    />

                </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="mt-6 mb-2 w-full px-3 md:mb-0 md:w-1/2">
                    <label
                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        htmlFor="grid-city"
                    >
                        City *
                    </label>
                    <input
                        className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-city"
                        type="text"
                        placeholder="Amsterdam"
                        {...props.register("city")}
                    />
                </div>
                <div className="w-full px-3 md:mb-0 md:w-1/2">
                    <label
                        className="mt-6 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        htmlFor="grid-country"
                    >
                        Country *
                    </label>
                    <div className="relative">
                        <select
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-state"
                            {...props.register("country")}
                        >
                            <option>Netherlands</option>
                            <option>United Kingdom</option>
                            <option>Norway</option>
                            <option>Ireland</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
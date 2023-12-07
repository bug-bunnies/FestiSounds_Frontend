import Datepicker, {DateValueType} from "react-tailwindcss-datepicker";
import {FieldValues, UseFormRegister} from "react-hook-form";

type DateSelectorProps = {
    register: UseFormRegister<FieldValues>
    festivalDates: DateValueType;
    onChange: (newValue: DateValueType) => void;
};

export function DateSelector(props: DateSelectorProps) {
    return (
        <form className="w-full max-w-lg ">
            <div className="md:w-3/3 w-full px-0 md:mb-0">
                {/*{...props.register("date")}>*/}
                <label className="mt-8 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Select start and end date*
            </label>
                <Datepicker value={props.festivalDates} onChange={props.onChange}/>
        </div>

        </form>
    );
}

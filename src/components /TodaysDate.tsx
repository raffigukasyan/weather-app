import {JSX} from "react";

export const TodaysDate = ():JSX.Element => {
    const currentDate:Date = new Date();
    const month = currentDate.toLocaleDateString(undefined, {month: "long"});
    const year =  currentDate.toLocaleDateString(undefined, {year: "numeric"});
    const fullDate =  currentDate.toLocaleDateString(undefined, {month: "short", weekday: "long", year: "numeric"});
    console.log(month, 'month')
    return (
        <div className='mb-20'>
            <h3 className={'text-4xl font-bold mb-2 text-gray-600'}>{month} {year}</h3>
            <span className={'text-xl text-stone-500/50'}>{fullDate}</span>
        </div>
    )
}
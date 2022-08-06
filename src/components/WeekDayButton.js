import { useState } from "react";

export default function WeekDayButton({ day, form, setForm, selectedWeekDays, setSelectedWeekDays }) {
    const [selected, setSelected] = useState("unselected");

    function selectDay() {
        selected === "unselected" ? setSelected("selected") : setSelected("unselected");

        if(selected === "unselected") {
            const newArray = [...selectedWeekDays, day];

            setSelectedWeekDays(newArray);

            setForm({
                ...form, 
                days: newArray
            });
            
        } else if(selected === "selected") {
            const newArray = [...selectedWeekDays];
            const indexDay = newArray.indexOf(day);

            newArray.splice(indexDay, 1);
            setSelectedWeekDays(newArray);

            setForm({
                ...form, 
                days: selectedWeekDays 
            });
        }
    }

    return (
        <>
            {day === 7 ? (
                <div className={selected} onClick={() => selectDay()}>D</div>
            ) : ("")}
            {day === 1 ? (
                <div className={selected} onClick={() => selectDay()}>S</div>
            ) : ("")}
            {day === 2 ? (
                <div className={selected} onClick={() => selectDay()}>T</div>
            ) : ("")}
            {day === 3 ? (
                <div className={selected} onClick={() => selectDay()}>Q</div>
            ) : ("")}
            {day === 4 ? (
                <div className={selected} onClick={() => selectDay()}>Q</div>
            ) : ("")}
            {day === 5 ? (
                <div className={selected} onClick={() => selectDay()}>S</div>
            ) : ("")}
            {day === 6 ? (
                <div className={selected} onClick={() => selectDay()}>S</div>
            ) : ("")}
        </>
    );
}
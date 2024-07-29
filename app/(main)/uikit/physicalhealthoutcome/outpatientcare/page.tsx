"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";




import type { Demo, Page } from "@/types";


const Outpatientcare: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);
    const [radioValue8, setRadioValue8] = useState(null);
    const [radioValue9, setRadioValue9] = useState(null);
    const [radioValue10, setRadioValue10] = useState(null);
    const [radioValue11, setRadioValue11] = useState(null);
    const [radioValue12, setRadioValue12] = useState(null);
    const [radioValue13, setRadioValue13] = useState(null);
    const [radioValue14, setRadioValue14] = useState(null);
    const [radioValue15, setRadioValue15] = useState(null);
    const [radioValue16, setRadioValue16] = useState(null);
    const [radioValue17, setRadioValue17] = useState(null);




    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            awareness_of_mental_health_disorder: "",
            care_seeking_community: "",
            visited_hospital_or_clinic: "",
            frequency_of_visits: "",
            treated_at_hospital_or_clinic: "",
            treatment_received: "",
            psychosocial_sessions_attended: "",
            other_treatments_received: "",
            medicine_taken: "",
            who_prescribed_medicine: "",
            sometimes_forget_medication: "",
            careless_about_taking_medication: "",
            stop_medication_when_better: "",
            stop_medication_when_worse: "",
            medication_adherence: "",
            advice_support_medication: "",
            talk_about_side_effects: ""
        }
    });

    const handleChange = () => {

    }

    const saveOutpatientcare = (event: any) => {
        event.preventDefault();



        console.log(event)

    }

    return (
        <div>
            <div className="card ">
                <form onSubmit={saveOutpatientcare} >
                    <h5>Outpatient Care</h5>
                    <p>I would now like to know about your recent experiences with obtaining health care. Following questions will be about your outpatient care which you have received in the last year.</p>
                </form>
            </div>
        </div>


    )
}
export default Outpatientcare

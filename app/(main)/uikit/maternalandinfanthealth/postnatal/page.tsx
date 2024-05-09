"use client"
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import api from "@/app/api/api";




import type { Demo, Page } from "@/types";


const Postnatal: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);
    const [radioValue9, setRadioValue9] = useState(null);
    const [radioValue10, setRadioValue10] = useState(null);
    const [radioValue11, setRadioValue11] = useState(null);
    const [radioValue12, setRadioValue12] = useState(null);
    const [radioValue13, setRadioValue13] = useState(null);
    const [radioValue14, setRadioValue14] = useState(null);
    const [radioValue15, setRadioValue15] = useState(null);
    const [radioValue16, setRadioValue16] = useState(null);
    const [radioValue17, setRadioValue17] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState(null)





    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            pregnancy_end_duration: null,
            pregnancy_end_method: "",
            place_of_birth: "",
            infant_alive: "",
            infant_passing_age: "",
            user_id:"",
            
        }
    });
    const handleChange = () => { }

    const savePostnatal = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("postnatal", formState.formValues, "3").then((data:any) => {
                console.log(data)
            })

            
        } catch (error) {
            console.log(error)
            
        }
    }

useEffect(()=>{
    let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser'))
        let { _id } = localData
        setSelectedUserId(_id)

})
    function handlePlaceOfBirthChange(arg0: string): void {
        throw new Error("Function not implemented.");
    }

        return (
            <div>
                <div className="card">
                    <form onSubmit={savePostnatal}>
                        <h5>Postnatal</h5>
                        <p>The next few questions about your experience in Postnatal care.</p>
                        <div className="card">
                            {/* Question 1 */}
                            <div>
                                <div className="p-field">
                                    <label htmlFor="pregnancyEndDuration">1. How long ago did your pregnancy end?</label>
                                    <p></p>
                                    <Calendar
                                        id="pregnancyEndDuration"
                                        name="pregnancy_end_duration"
                                        value={formState.formValues.pregnancy_end_duration}
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                pregnancy_end_duration: e.target.value
                                            }
                                        }))}
                                        dateFormat="mm/dd/yy"
                                        required // Make the field mandatory
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br></br>
                        <div className="card">
                            {/* Question 2 */}
                            <div className="p-field">
                                <label>2. How did the pregnancy end ?</label>
                                <br />
                                <p></p>
                                {["Live birth", "Miscarriage","Abortion", "Stillbirth"].map((method, index) => (
                                    <div key={index}>
                                        <RadioButton
                                            inputId={`pregnancyEndMethod${index}`}
                                            name="pregnancyEndMethod"
                                            value={method}
                                            onChange={(e) => setFormState(prevState => ({
                                                ...prevState,
                                                formValues: {
                                                    ...prevState.formValues,
                                                    pregnancy_end_method: e.target.value
                                                }
                                            }))}
                                            checked={formState.formValues.pregnancy_end_method === method}
                                        />
                                        <label htmlFor={`pregnancyEndMethod${index}`}>{method}</label>
                                    </div>
                                ))}
                                <br></br>
                                <p>Miscarriage = Loss of baby before 28 Weeks </p>
                                <p>Still birth = Loss of baby at 28 weeks or greater than 28 weeks </p>
                                <p>If response Equals /miscarriage/abortion/stillbirth/infant mortality then end this section</p>
                            </div>
                        </div>
                        <div className="card">
                        {/* Question 3 */}
                        <div>
                            <div className="p-field">
                                <label>3. Where did you give birth?</label>
                                <br />
                                <RadioButton
                                    inputId="home"
                                    name="placeOfBirth"
                                    value="home"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                        checked={formState.formValues.place_of_birth === "home"}
                                />
                                <label htmlFor="home">Home</label>
                                <br />
                                <RadioButton
                                    inputId="healthFacility"
                                    name="placeOfBirth"
                                    value="health facility"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                    checked={formState.formValues.place_of_birth === "health facility"}
                                />
                                <label htmlFor="healthFacility">Health Facility</label>
                                <br />
                                <RadioButton
                                    inputId="other"
                                    name="placeOfBirth"
                                    value="other"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                    checked={formState.formValues.place_of_birth === "other"}
                                />
                                <label htmlFor="other">Other</label>
                                {formState.formValues.place_of_birth === "other" && (
                                    <InputText
                                        id="otherPlaceOfBirth"
                                        name="otherPlaceOfBirth"
                                        value={formState.formValues.otherPlaceOfBirth}
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                otherPlaceOfBirth: e.target.value
                                            }
                                        }))}
                                    />
                                )}
                            </div>
                        </div>
                        </div>
                
                        <div className="card">
                            {/* Question 4 
                        <div className="p-field">
                            <label>4. Did you or the baby experience any problems or complications during the birth ?</label>
                            <br />
                            <p></p>
                            {["Yes, mother only", "Yes, baby only", "Yes, both mother and baby", "No"].map((complication, index) => (
                                <div key={index}>
                                    <RadioButton
                                        inputId={`birthComplication${index}`}
                                        name="birthComplication"
                                        value={complication}
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                birth_complications: e.target.value
                                            }
                                        }))}
                                        checked={formState.formValues.birth_complications === complication}
                                    />
                                    <label htmlFor={`birthComplication${index}`}>{complication}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card"> */}
                            {/* Question 5 */}
                            <div className="p-field">
                                <label>5. Is your infant still alive ?</label>
                                <br />
                                <p></p>
                                <div>
                                    <RadioButton
                                        inputId="infantAliveYes"
                                        name="infantAlive"
                                        value="Yes"
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                infant_alive: e.target.value
                                            }
                                        }))}
                                        checked={formState.formValues.infant_alive === "Yes"}
                                    />
                                    <label htmlFor="infantAliveYes">Yes</label>
                                </div>
                                <div>
                                    <RadioButton
                                        inputId="infantAliveNo"
                                        name="infantAlive"
                                        value="No"
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                infant_alive: e.target.value
                                            }
                                        }))}
                                        checked={formState.formValues.infant_alive === "No"}
                                    />
                                    <label htmlFor="infantAliveNo">No</label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            {/* Question 6 */}
                            <div className="p-field">
                                <label htmlFor="infantPassingAge">6. If no, how old was your infant when he/she passed ?</label>
                                <p></p>
                                <InputText
                                    id="infantPassingAge"
                                    name="infantPassingAge"
                                    value={formState.formValues.infant_passing_age}
                                    onChange={(e) => setFormState(prevState => ({
                                        ...prevState,
                                        formValues: {
                                            ...prevState.formValues,
                                            infant_passing_age: e.target.value
                                        }
                                    }))}
                                />
                            </div>
                        </div>
                        <br></br>

                        {/*    <div className="card">
                         Question 7 
                        <div className="p-field">
                            <label htmlFor="weeksOfPregnancyAtBirth">7. At how many weeks of your pregnancy was the baby born ?</label>
                            <p></p>
                            <InputText
                                id="weeksOfPregnancyAtBirth"
                                name="weeksOfPregnancyAtBirth"
                                value={formState.formValues.weeks_of_pregnancy_at_birth}
                                onChange={(e) => setFormState(prevState => ({
                                    ...prevState,
                                    formValues: {
                                        ...prevState.formValues,
                                        weeks_of_pregnancy_at_birth: e.target.value
                                    }
                                }))}
                            />
                        </div> 
                    </div>*/}
                        {/* Save Button */}
                        <Button type="submit" label="Save" />
                    </form>
                </div>
            </div>

        )
    }
    export default Postnatal

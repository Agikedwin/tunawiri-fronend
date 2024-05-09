"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";




import type { Demo, Page } from "@/types";


const ARTadhearence: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);




    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            missed_doses: "",
            medicines_taking_quality: "",
            medicine_frequency: "",
            study_id:"",
            
        }
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            formValues: {
                ...prevState.formValues,
                [name]: value
            }
        }));
    }

    const saveARTadhearence = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formState.formValues);
    }

return (
    <div>
         <div className="card ">
        <form  >
        <h5>ART Adhearence </h5>

        <div className="card">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <h6><i>
                        1. In the last 30 days, on how many days did you miss at least one dose of any of your HIV medicines?
                    </i> </h6>
                </div>
                        <div className="flex align-items-center">
                            <InputText
                                type="number"
                                id="missed_doses"
                                name="missed_doses"
                                value={formState.formValues.missed_doses}
                                onChange={handleChange}
                                min={0}
                                max={30}
                                placeholder="0 – 30"
                            />
                        </div>
            </div>
        </div>
        <div className="card">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <h6><i>
                        2. In the last 30 days, how good a job did you do at taking your HIV medicines in the way you were supposed to?
                    </i> </h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value='Very poor'
                        checked={radioValue2 === 'Very poor'}
                        onChange={(e) => {
                            setRadioValue2(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="ingredient1" className="ml-2">Very poor</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value="Poor"
                        onChange={(e) => {
                            setRadioValue2(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue2 === 'Poor'} />
                    <label htmlFor="medicines_taking_quality" className="ml-2">Poor</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value='Fair'
                        checked={radioValue2 === 'Fair'}
                        onChange={(e) => {
                            setRadioValue2(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="ingredient1" className="ml-2">Fair</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value="Good"
                        onChange={(e) => {
                            setRadioValue2(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue2 === 'Good'} />
                    <label htmlFor="medicines_taking_quality" className="ml-2">Good</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value="Very Good"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Very Good'} />
                    <label htmlFor="medicines_taking_quality" className="ml-2">Very Good</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality" value="Excellent"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicines_taking_quality = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Excellent'} />
                    <label htmlFor="medicines_taking_quality" className="ml-2">Excellent</label>
                </div>

            </div>
        </div>
        <div className="card">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <h6><i>
                        3. In the last 30 days, how often did you take your HIV medicines in the way you were supposed to?
                    </i> </h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_very_poor" name="medicine_frequency_3" value='Very poor'
                        checked={radioValue3 === 'Very poor'}
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="medicine_frequency_3_very_poor" className="ml-2">Very poor</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_poor" name="medicine_frequency_3" value="Poor"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Poor'} />
                    <label htmlFor="medicine_frequency_3_poor" className="ml-2">Poor</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_fair" name="medicine_frequency_3" value='Fair'
                        checked={radioValue3 === 'Fair'}
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="medicine_frequency_3_fair" className="ml-2">Fair</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3" value="Good"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Good'} />
                    <label htmlFor="medicine_frequency_3_good" className="ml-2">Good</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3" value="Very Good"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Very Good'} />
                    <label htmlFor="medicine_frequency_3_good" className="ml-2">Very Good</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3" value="Excellent"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicine_frequency = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Excellent'} />
                    <label htmlFor="medicine_frequency_3_good" className="ml-2">Excellent</label>
                </div>
            </div>
        </div>
 {/*       <div className="card">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <h6><i>
                        4. In the last 30 days, how Usually a job did you do at taking your HIV medicines in the way you were supposed to?
                    </i> </h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value='Never'
                        checked={radioValue4 === 'Never'}
                        onChange={(e) => {
                            setRadioValue4(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="ingredient1" className="ml-4">Never</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value="Rarely"
                        onChange={(e) => {
                            setRadioValue4(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue4 === 'Rarely'} />
                    <label htmlFor="medicines_taking_frequency_2" className="ml-4">Rarely</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value='Sometimes'
                        checked={radioValue4 === 'Sometimes'}
                        onChange={(e) => {
                            setRadioValue4(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        } />
                    <label htmlFor="ingredient1" className="ml-4">Sometimes</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value="Usually"
                        onChange={(e) => {
                            setRadioValue4(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue4 === 'Usually'} />
                    <label htmlFor="medicines_taking_frequency_2" className="ml-4">Usually</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value="Almost Always"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Almost Always'} />
                    <label htmlFor="medicines_taking_frequency_2" className="ml-4">Almost Always</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medicines_taking_frequency_2" name="medicines_taking_frequency_2" value="Always"
                        onChange={(e) => {
                            setRadioValue3(e.value)
                            formState.formValues.medicines_taking_frequency_2 = e.target.value
                            console.log(formState)
                        }
                        }
                        checked={radioValue3 === 'Always'} />
                    <label htmlFor="medicines_taking_frequency_2" className="ml-4">Always</label>
                </div>

            </div> 

        </div>*/}
                <Button type="submit" label="Submit" />
        </form>
        </div>
    </div>
)
}
export default ARTadhearence


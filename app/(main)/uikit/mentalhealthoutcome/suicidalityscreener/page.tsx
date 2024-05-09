"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";





import type { Demo, Page } from "@/types";


const SuicidalityScreener: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState("")





    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            wished_dead_or_to_sleep: "",
            thoughts_about_killing_yourself: "",
            thinking_about_how_to_kill_Yourself: "",
            thoughtsWithIntentionOfActing: "",
            worked_out_details_of_killing_yourself: "",
            done_anything_to_end_your_life_3month: "",
            done_anything_to_end_your_life_lifetime: "",
            suicidality_screener_score: "",
            user_id:"",

        }
    });
    // Evaluate conditions based on form values
    let color;
    let severity;

    const {
        wished_dead_or_to_sleep,
        thoughts_about_killing_yourself,
        thinking_about_how_to_kill_Yourself,
        thoughtsWithIntentionOfActing,
        worked_out_details_of_killing_yourself,
        done_anything_to_end_your_life_3month,
        done_anything_to_end_your_life_lifetime
    } = formState.formValues;

    if (
        wished_dead_or_to_sleep === 'Yes' &&
        thoughts_about_killing_yourself === 'Yes' &&
        thinking_about_how_to_kill_Yourself === 'No' &&
        thoughtsWithIntentionOfActing === 'No' &&
        worked_out_details_of_killing_yourself === 'No' &&
        done_anything_to_end_your_life_3month === 'No' &&
        done_anything_to_end_your_life_lifetime === 'No'
    ) {
        color = 'yellow';
        severity = 'Low';
    } else if (
        thinking_about_how_to_kill_Yourself === 'Yes' &&
        done_anything_to_end_your_life_3month === 'No' &&
        wished_dead_or_to_sleep === 'No' &&
        thoughts_about_killing_yourself === 'No' &&
        thoughtsWithIntentionOfActing === 'No' &&
        worked_out_details_of_killing_yourself === 'No' &&
        done_anything_to_end_your_life_lifetime === 'No'
    ) {
        color = 'orange';
        severity = 'Moderate';
    } else if (
        thoughtsWithIntentionOfActing === 'Yes' &&
        worked_out_details_of_killing_yourself === 'Yes' &&
        done_anything_to_end_your_life_lifetime === 'Yes'
    ) {
        color = 'red';
        severity = 'Severe';
    } else {
        color = 'green';
        severity = 'Minimal';
    }

    const handleChange = () => {

    }

    const saveSuicidalityScreener = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("suicidal", formState.formValues, "3").then((data: any) => {
                console.log(data)
            })

        } catch (error) {
            console.log(error)

        }



        console.log(formState.formValues)

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)
    })

    return (
        <div>

            <div className="card ">
                <form onSubmit={saveSuicidalityScreener} >
                    <h5>Suicidality Screener (C-SSRS) </h5>
                    <p>Always ask question 1 and 2</p>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                1. Have you wished you were dead or wished you could go to sleep and not wake up?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="wished_dead_or_to_sleep" name="wished_dead_or_to_sleep" value='Yes'
                                checked={radioValue1 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.wished_dead_or_to_sleep = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="wished_dead_or_to_sleep" name="wished_dead_or_to_sleep" value="No"
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.wished_dead_or_to_sleep = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue1 === 'No'} />
                            <label htmlFor="wished_dead_or_to_sleep" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                2. Have you actually had any thoughts about killing yourself?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_about_killing_yourself" name="thoughts_about_killing_yourself" value='Yes'
                                checked={radioValue2 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.thoughts_about_killing_yourself = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_about_killing_yourself" name="thoughts_about_killing_yourself" value="No"
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.thoughts_about_killing_yourself = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue2 === 'No'} />
                            <label htmlFor="thoughts_about_killing_yourself" className="ml-2">No</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                3. Have you been thinking about how you might do this?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thinking_about_how_to_kill_Yourself" name="thinking_about_how_to_kill_Yourself" value='Yes'
                                checked={radioValue3 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.thinking_about_how_to_kill_Yourself = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thinking_about_how_to_kill_Yourself" name="thinking_about_how_to_kill_Yourself" value="No"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.thinking_about_how_to_kill_Yourself = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue3 === 'No'} />
                            <label htmlFor="thinking_about_how_to_kill_Yourself" className="ml-2">No</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                4. Have you had these thoughts and had some intention of acting on them?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughtsWithIntentionOfActing" name="thoughtsWithIntentionOfActing" value='Yes'
                                checked={radioValue4 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.thoughtsWithIntentionOfActing = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughtsWithIntentionOfActing" name="thoughtsWithIntentionOfActing" value="No"
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.thoughtsWithIntentionOfActing = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue4 === 'No'} />
                            <label htmlFor="thoughtsWithIntentionOfActing" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                5. Have you started to work out or worked out the details of how to kill yourself? Did you intend to carry out this plan?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="worked_out_details_of_killing_yourself" name="worked_out_details_of_killing_yourself" value='Yes'
                                checked={radioValue5 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.worked_out_details_of_killing_yourself = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="worked_out_details_of_killing_yourself" name="worked_out_details_of_killing_yourself" value="No"
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.worked_out_details_of_killing_yourself = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue5 === 'No'} />
                            <label htmlFor="worked_out_details_of_killing_yourself" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                6. Have you done anything, started to do anything, or prepared to do anything to end your life? If YES, was this within the past 3 months?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="done_anything_to_end_your_life_3month" name="done_anything_to_end_your_life_3month" value='Yes'
                                checked={radioValue6 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.done_anything_to_end_your_life_3month = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="done_anything_to_end_your_life_3month" name="done_anything_to_end_your_life_3month" value="No"
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.done_anything_to_end_your_life_3month = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue6 === 'No'} />
                            <label htmlFor="done_anything_to_end_your_life_3month" className="ml-2">No</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                7. Have you done anything, started to do anything, or prepared to do anything to end your life?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="done_anything_to_end_your_life_lifetime" name="done_anything_to_end_your_life_lifetime" value='Yes'
                                checked={radioValue7 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.done_anything_to_end_your_life_lifetime = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="done_anything_to_end_your_life_lifetime" name="done_anything_to_end_your_life_lifetime" value="No"
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.done_anything_to_end_your_life_lifetime = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue7 === 'No'} />
                            <label htmlFor="done_anything_to_end_your_life_lifetime" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className='card' style={{ backgroundColor: color }}>
                        <p>Severity: {severity}</p>
                    </div>
                    <br></br>
                    <Button label="Search" icon="pi pi-save" type="submit" />
                    </form>
            </div>
        </div>
    )
}

export default SuicidalityScreener

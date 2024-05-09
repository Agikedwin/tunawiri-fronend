"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";




import type { Demo, Page } from "@/types";


const EuropeanQualityOfLife: Page = () => {
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
            walking_no_problems: "",
            walking_slight_problems: "",
            walking_moderate_problems: "",
            walking_severe_problems: "",
            walking_unable: "",
            washing_dressing_no_problems: "",
            washing_dressing_slight_problems: "",

        }
    });

    const handleChange = () => {

    }

    const saveEuropeanQualityOfLife = (event: any) => {
        event.preventDefault();



        console.log(event)

    }

    return (
        <div>

            <div className="card ">
                <form onSubmit={saveEuropeanQualityOfLife} >
                    <h5>Quality of life- European Quality of Life </h5>
                    <p>5-Dimensional measure</p>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                1. I have no problems in walking about?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_no_problems" name="walking_no_problems" value='Yes'
                                checked={radioValue1 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.walking_no_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_no_problems" name="walking_no_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.walking_no_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue1 === 'No'} />
                            <label htmlFor="walking_no_problems" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                2. I have slight problems in walking about?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_slight_problems" name="walking_slight_problems" value='Yes'
                                checked={radioValue2 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.walking_slight_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_slight_problems" name="walking_slight_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.walking_slight_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue2 === 'No'} />
                            <label htmlFor="walking_slight_problems" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                3. I have moderate problems in walking about?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_moderate_problems" name="walking_moderate_problems" value='Yes'
                                checked={radioValue3 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.walking_moderate_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_moderate_problems" name="walking_moderate_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.walking_moderate_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue3 === 'No'} />
                            <label htmlFor="walking_moderate_problems" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                4. I have severe problems in walking about?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_severe_problems" name="walking_severe_problems" value='Yes'
                                checked={radioValue4 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.walking_severe_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_severe_problems" name="walking_severe_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.walking_severe_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue4 === 'No'} />
                            <label htmlFor="walking_severe_problems" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                5. I am unable to walk about?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_unable" name="walking_unable" value='Yes'
                                checked={radioValue5 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.walking_unable = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="walking_unable" name="walking_unable" value="No"
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.walking_unable = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue5 === 'No'} />
                            <label htmlFor="walking_unable" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                6. I have no problems washing or dressing myself?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="washing_dressing_no_problems" name="washing_dressing_no_problems" value='Yes'
                                checked={radioValue6 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.washing_dressing_no_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="washing_dressing_no_problems" name="washing_dressing_no_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.washing_dressing_no_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue6 === 'No'} />
                            <label htmlFor="washing_dressing_no_problems" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                7. I have slight problems washing or dressing myself?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="washing_dressing_slight_problems" name="washing_dressing_slight_problems" value='Yes'
                                checked={radioValue7 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.washing_dressing_slight_problems = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="washing_dressing_slight_problems" name="washing_dressing_slight_problems" value="No"
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.washing_dressing_slight_problems = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue7 === 'No'} />
                            <label htmlFor="washing_dressing_slight_problems" className="ml-2">No</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    </form>
            </div>
        </div>
    )
}
export default EuropeanQualityOfLife

"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";





import type { Demo, Page } from "@/types";


const TraumaExposure: Page = () => {
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

    const [selectedUserId, setSelectedUserId] = useState(null)




    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            witnessed_murder_of_family_or_friend: "",
            witnessed_murder_of_stranger_or_known_person: "",
            witnessed_armed_attack_on_someone: "",
            left_country_due_to_war_conflict_poverty: "",
            sexually_assaulted_or_raped: "",
            experienced_torture: "",
            robbed_at_gun_point_or_knife_point: "",
            kidnapped: "",
            felt_close_to_death: "",
            witnessed_someone_being_raped: "",
            user_id:"",
        }
    });
    // Calculate total score and determine severity
    const yesCount = Object.values(formState.formValues).filter(value => value === 'Yes').length;
    const noCount = Object.values(formState.formValues).filter(value => value === 'No').length;

    let totalScore;
    let color;
    let severity;

    if (yesCount > 0) {
        totalScore = yesCount;
        color = '#ffb6c1'; // Light red
        severity = 'Severe';
    } else {
        totalScore = 0;
        color = '#90ee90'; // Light green
        severity = 'Minimal';
    }

    const handleChange = () => {

    }

    const saveTraumaExposures = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("traumaScale", formState.formValues, "3").then((data: any) => {
                console.log(data)
            })

        } catch (error) {
            console.log(error)

        }




    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser'))
        let { _id } = localData
        setSelectedUserId(_id)
    })

    return (
        <div>

            <div className="card ">
                <form onSubmit={saveTraumaExposures} >
                    <h5>Trauma Exposures </h5>
                    <p>
                        We would like to ask you about your past experiences. However, you may find some questions upsetting. 
                        If so, please feel free not to answer. Have you ever experienced any of the following
                    </p>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                1. I witnessed a murder of family or friend??
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_murder_of_family_or_friend" name="witnessed_murder_of_family_or_friend" value='Yes'
                                checked={radioValue1 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.witnessed_murder_of_family_or_friend = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_murder_of_family_or_friend" name="witnessed_murder_of_family_or_friend" value="No"
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.witnessed_murder_of_family_or_friend = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue1 === 'No'} />
                            <label htmlFor="witnessed_murder_of_family_or_friend" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                2. I witnessed the murder of a stranger or someone I knew?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_murder_of_stranger_or_known_person" name="witnessed_murder_of_stranger_or_known_person" value='Yes'
                                checked={radioValue2 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.witnessed_murder_of_stranger_or_known_person = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_murder_of_stranger_or_known_person" name="witnessed_murder_of_stranger_or_known_person" value="No"
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.witnessed_murder_of_stranger_or_known_person = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue2 === 'No'} />
                            <label htmlFor="witnessed_murder_of_stranger_or_known_person" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                3. I witnessed any other armed attack on someone?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_armed_attack_on_someone" name="witnessed_armed_attack_on_someone" value='Yes'
                                checked={radioValue3 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.witnessed_armed_attack_on_someone = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_armed_attack_on_someone" name="witnessed_armed_attack_on_someone" value="No"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.witnessed_armed_attack_on_someone = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue3 === 'No'} />
                            <label htmlFor="witnessed_armed_attack_on_someone" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                4. I had to leave my country due to war, conflict, or poverty?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="left_country_due_to_war_conflict_poverty" name="left_country_due_to_war_conflict_poverty" value='Yes'
                                checked={radioValue4 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.left_country_due_to_war_conflict_poverty = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="left_country_due_to_war_conflict_poverty" name="left_country_due_to_war_conflict_poverty" value="No"
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.left_country_due_to_war_conflict_poverty = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue4 === 'No'} />
                            <label htmlFor="left_country_due_to_war_conflict_poverty" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>      
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                5. I was sexually assaulted or raped?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sexually_assaulted_or_raped" name="sexually_assaulted_or_raped" value='Yes'
                                checked={radioValue5 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.sexually_assaulted_or_raped = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sexually_assaulted_or_raped" name="sexually_assaulted_or_raped" value="No"
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.sexually_assaulted_or_raped = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue5 === 'No'} />
                            <label htmlFor="sexually_assaulted_or_raped" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                6. I witnessed the murder of a stranger or someone I knew?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="experienced_torture" name="experienced_torture" value='Yes'
                                checked={radioValue6 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.experienced_torture = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="experienced_torture" name="experienced_torture" value="No"
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.experienced_torture = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue6 === 'No'} />
                            <label htmlFor="experienced_torture" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                7. I was robbed at gunpoint or knifepoint?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="robbed_at_gun_point_or_knife_point" name="robbed_at_gun_point_or_knife_point" value='Yes'
                                checked={radioValue7 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.robbed_at_gun_point_or_knife_point = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="robbed_at_gun_point_or_knife_point" name="robbed_at_gun_point_or_knife_point" value="No"
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.robbed_at_gun_point_or_knife_point = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue7 === 'No'} />
                            <label htmlFor="robbed_at_gun_point_or_knife_point" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                8. I was kidnapped?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="kidnapped" name="kidnapped" value='Yes'
                                checked={radioValue8 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.kidnapped = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="kidnapped" name="kidnapped" value="No"
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.kidnapped = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue8 === 'No'} />
                            <label htmlFor="kidnapped" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>  
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                9. I felt that I was close to death?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="felt_close_to_death" name="felt_close_to_death" value='Yes'
                                checked={radioValue9 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.felt_close_to_death = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="felt_close_to_death" name="felt_close_to_death" value="No"
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.felt_close_to_death = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue9 === 'No'} />
                            <label htmlFor="felt_close_to_death" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                10. I witnessed someone being raped?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_someone_being_raped" name="witnessed_someone_being_raped" value='Yes'
                                checked={radioValue10 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.witnessed_someone_being_raped = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="witnessed_someone_being_raped" name="witnessed_someone_being_raped" value="No"
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.witnessed_someone_being_raped = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue10 === 'No'} />
                            <label htmlFor="witnessed_someone_being_raped" className="ml-2">No</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                   
                        <div className='card' style={{ backgroundColor: color }}>
                            <p>Total Score: {totalScore}</p>
                            <p>Severity: {severity}</p>
                    </div>
                        <br></br>
                    <Button label="Save" icon="pi pi-save" type="submit" />
                    </form>
            </div>
        </div>
    )
}

export default TraumaExposure

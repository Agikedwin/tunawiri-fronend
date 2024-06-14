"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Button } from "primereact/button";

import api from "@/app/api/api";
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';

import type { Demo, Page } from "@/types";


const Tunawiriintervention: Page = () => {
    const toast = useRef<Toast>(null);
    const router = useRouter();
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

    const  [selectedUserId, setSelectedUserId] = useState("")

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });
    };




    const [formState, setFormState] = useState({
        isValid: false,
        touched: {},
        errors: {},
        formValues: {
            involved_in_tunawiri: "", // Will be set to either "Yes" or "No"
            sessions_attended: "", // Will be a number
            session_leader: "", // Will be set to one of the options
            othersession_leader: "", // Will be set to one of the options
            average_meeting_length: "", // Will be a number
            still_involved: "", // Will be set to either "Yes" or "No"
            program_helpfulness: "", // Will be set to one of the options
            user_id:"",
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
    function session_leader(arg0: string): void {
        throw new Error("Function not implemented.");
    }
    const saveTunawiriintervention = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await  api.addEntry('interventions',formState.formValues,3).then((data:any) =>{
                console.log("data save")
                showSuccess();
                setTimeout(() => {

                    console.log("saving data ---")

                    router.push('/uikit/users/profile/')
                }, 3000);
            })

        }catch (e){
            console.log(e)
        }


    }
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)

    }, []);
    return (
        <div>
            <div className="card ">
                <Toast ref={toast} />
                <form onSubmit={saveTunawiriintervention} >
                    <h5>Tunawiri Intervention</h5>
                    <p>PM+ sessions</p>
                    <p>I would like to ask you a few questions about any sessions you have participated in related to your emotional/mental health challenges</p>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                1.For help with mental health in the past THREE months, have you been involved in the Tunawiri Program ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="involved_in_tunawiri" name="involved_in_tunawiri" value='Yes'
                                checked={radioValue1 === 'Yes'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.involved_in_tunawiri = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Yes I have been involved </label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="involved_in_tunawiri" name="involved_in_tunawiri" value="Several days"
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.involved_in_tunawiri = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue1 === 'Several days'} />
                            <label htmlFor="involved_in_tunawiri" className="ml-2">Several days</label>
                        </div>


                    </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="p-field">
                        <label htmlFor="sessions">2.	How many sessions have you attended with a mentor mother or other provider related to your mental health in the past 3 months?</label>
                        <br />
                        <p></p>
                        <InputText
                            id="sessions"
                            name="sessions_attended"
                            value={formState.formValues.sessions_attended}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    </div>
                    <br></br>
                    <div className="card">
                    {/* Question 3 */}
                    <div>
                        <div className="p-field">
                                <label>3. Who led the session ?</label>
                            <p></p>
                            <br />
                            <RadioButton
                                inputId="Mentor Mother"
                                name="session_leader"
                                value="Mentor Mother"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.session_leader = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={formState.formValues.session_leader === "Mentor Mother"}
                            />
                            <label htmlFor="Mentor Mother">Mentor Mother</label>
                            <br />
                            <RadioButton
                                inputId="Doctor or Nurse"
                                name="session_leader"
                                value="Doctor or Nurse"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.session_leader = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={formState.formValues.session_leader === "Doctor or Nurse"}
                            />
                            <label htmlFor="Doctor or Nurse">Doctor or Nurse</label>
                            <br />
                            <RadioButton
                                inputId="Counselor"
                                name="session_leader"
                                value="Counselor"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.session_leader = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={formState.formValues.session_leader === "Counselor"}
                            />
                            <label htmlFor="counselor">Counselor</label>
                            <br />
                            <RadioButton
                                inputId="other"
                                name="session_leader"
                                value="other"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.session_leader = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={formState.formValues.session_leader === "other"}
                            />
                            <label htmlFor="other">Other</label>
                            {formState.formValues.session_leader === "other" && (
                                <InputText
                                    id="othersession_leader"
                                    name="othersession_leader"
                                    value={formState.formValues.othersession_leader}
                                    onChange={(e) => setFormState(prevState => ({
                                        ...prevState,
                                        formValues: {
                                            ...prevState.formValues,
                                            othersession_leader: e.target.value
                                        }
                                    }))}
                                />
                            )}
                        </div>
                    </div>
                    </div>
                    <div className="card">
                        <div className="p-field">
                            <label htmlFor="average_meeting_length">4.	How long were the meetings on average? (minutes)</label>
                            <br />
                            <p></p>
                            <InputText
                                id="average_meeting_length"
                                name="average_meeting_length"
                                value={formState.formValues.average_meeting_length}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="card">
                        {/* Question 3 */}
                        <div>
                            <div className="p-field">
                                <label>5.	Are you still involved with the program/meetings ?</label>
                                <p></p>
                                <br />
                                <RadioButton
                                    inputId="Yes"
                                    name="still_involved"
                                    value="Yes"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.still_involved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.still_involved === "Yes"}
                                />
                                <label htmlFor="Yes">Yes</label>
                                <br />
                                <RadioButton
                                    inputId="No"
                                    name="still_involved"
                                    value="No"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.still_involved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.still_involved === "No"}
                                />
                                <label htmlFor="No">No</label>
                                <br />

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        {/* Question 3 */}
                        <div>
                            <div className="p-field">
                                <label>6.	How much did the Programme/sessions help you ?</label>
                                <p></p>
                                <br />
                                <RadioButton
                                    inputId="A Lot"
                                    name="program_helpfulness"
                                    value="A Lot"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.program_helpfulness = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.program_helpfulness === "A Lot"}
                                />
                                <label htmlFor="A Lot">A Lot</label>
                                <br />
                                <RadioButton
                                    inputId="Some"
                                    name="program_helpfulness"
                                    value="Some"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.program_helpfulness = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.program_helpfulness === "Some"}
                                />
                                <label htmlFor="Some">Some</label>
                                <br />
                                <RadioButton
                                    inputId="A Little"
                                    name="program_helpfulness"
                                    value="A Little"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.program_helpfulness = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.program_helpfulness === "A Little"}
                                />
                                <label htmlFor="A Little">A Little</label>
                                <br />
                                <RadioButton
                                    inputId="Not at all"
                                    name="program_helpfulness"
                                    value="Not at all"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.program_helpfulness = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.program_helpfulness === "Not at all"}
                                />
                                <label htmlFor="Not at all">Not at all</label>
                                <br />
                                <RadioButton
                                    inputId="Dont Know"
                                    name="program_helpfulness"
                                    value="Dont Know"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.program_helpfulness = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={formState.formValues.program_helpfulness === "Dont Know"}
                                />
                                <label htmlFor="Dont Know">Dont Know</label>
                                <br />
                            </div>
                        </div>
                    </div>
                    <br />
                    <Button type="submit" label="Save" />


                </form>
            </div>
        </div>


    )
}
export default Tunawiriintervention

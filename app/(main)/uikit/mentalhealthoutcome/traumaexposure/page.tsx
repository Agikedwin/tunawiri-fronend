"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";

import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';





import type { Demo, Page } from "@/types";
import { ProgressBar } from "primereact/progressbar";


interface InputValueReg {
    timepoint: string,
    regcode: string
}

const TraumaExposure: Page = () => {
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

    const [selectedUserId, setSelectedUserId] = useState("")
    const [themeColor, setThemeColor] = useState("secondary")
    const [comment, setComment] = useState("")





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
            comment: "",
            timepoint: "",
            user_id: "",
            trauma_score: 0,
            severity: "",
            color: ""

        }
    });

    const [progressBarValue, setProgressBarValue] = useState(0)
    const [colorCode, setColorCode] = useState("")
    const [severity, setSeverity] = useState("")

    const [dropdowntimepointValue, setDropdowntimepointValue] = useState({ timepoint: "", code: "" });

    const dropdowntimepoint: InputValueReg[] = [
        { timepoint: "Baseline", regcode: "B" },
        { timepoint: "6 Months Follow Up", regcode: "6" },
        { timepoint: "12 Months Follow Up", regcode: "12" },

    ];
    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });


    };

    const scores = {
        'Yes': 1,
        'No': 0,
    };

    const multiplierFactor = (100 / 10)



    const severityRanking = async (data: any, scores: any) => {
        await api.countOccurrences(formState.formValues, scores).then((data: any) => {
            console.log('Severity count ', data)
            setProgressBarValue(data * multiplierFactor)

            if (data <= 0) {
                setColorCode("green")
                setSeverity("Low")
                setThemeColor("lightgreen")
            } else if (data > 0) {
                setColorCode("red")
                setSeverity("Severe")
                setThemeColor("red")
            }
            console.log("Color code  ====== ", data)

        })

    }

    const handleChange = () => {

    }

    const saveTraumaExposures = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        formState.formValues.trauma_score = Math.ceil((progressBarValue / multiplierFactor))
        formState.formValues.severity = severity
        formState.formValues.color = themeColor
        formState.formValues.timepoint = dropdowntimepointValue.timepoint
        formState.formValues.comment = comment

        try {
            await api.addEntry("traumaScale", formState.formValues, "3").then((data: any) => {
                showSuccess()
                setTimeout(() => {

                    console.log("saving data ---")

                    router.push('/uikit/users/profile/')
                }, 3000);


            })

        } catch (error) {
            console.log(error)

        }




    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)
    })

    const onchangeComment = (event:any) =>{
        const commentValue = event.target.value;

       setComment(commentValue)
    
    }
    

    return (
        <div>
            <Toast ref={toast} />

            <div className="card ">
                <form onSubmit={saveTraumaExposures} >
                    <div className="card ">
                            
                            <h5>Trauma Exposures </h5>
                            <p>
                                We would like to ask you about your past experiences. However, you may find some questions upsetting.
                                If so, please feel free not to answer. Have you ever experienced any of the following
                            </p>
                            <div className="card">
                        <div className="flex flex-wrap gap-6">
                            <label htmlFor="registration_type"><h6><i>Participant Timepoint ? </i></h6></label>
                            <Dropdown
                                value={dropdowntimepointValue}
                                onChange={(e) => setDropdowntimepointValue(e.value)}
                                options={dropdowntimepoint}
                                optionLabel="timepoint"
                                placeholder="Select"
                                required
                            />
                        </div>


                    </div>
    
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="witnessed_murder_of_family_or_friend" name="witnessed_murder_of_family_or_friend" value="No"
                                            onChange={(e) => {
                                                setRadioValue1(e.value)
                                                formState.formValues.witnessed_murder_of_family_or_friend = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="witnessed_murder_of_stranger_or_known_person" name="witnessed_murder_of_stranger_or_known_person" value="No"
                                            onChange={(e) => {
                                                setRadioValue2(e.value)
                                                formState.formValues.witnessed_murder_of_stranger_or_known_person = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="witnessed_armed_attack_on_someone" name="witnessed_armed_attack_on_someone" value="No"
                                            onChange={(e) => {
                                                setRadioValue3(e.value)
                                                formState.formValues.witnessed_armed_attack_on_someone = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="left_country_due_to_war_conflict_poverty" name="left_country_due_to_war_conflict_poverty" value="No"
                                            onChange={(e) => {
                                                setRadioValue4(e.value)
                                                formState.formValues.left_country_due_to_war_conflict_poverty = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="sexually_assaulted_or_raped" name="sexually_assaulted_or_raped" value="No"
                                            onChange={(e) => {
                                                setRadioValue5(e.value)
                                                formState.formValues.sexually_assaulted_or_raped = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                            6. I witnessed the torture of a stranger or someone I knew?
                                        </i> </h6>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="experienced_torture" name="experienced_torture" value='Yes'
                                            checked={radioValue6 === 'Yes'}
                                            onChange={(e) => {
                                                setRadioValue6(e.value)
                                                formState.formValues.experienced_torture = e.target.value
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="experienced_torture" name="experienced_torture" value="No"
                                            onChange={(e) => {
                                                setRadioValue6(e.value)
                                                formState.formValues.experienced_torture = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="robbed_at_gun_point_or_knife_point" name="robbed_at_gun_point_or_knife_point" value="No"
                                            onChange={(e) => {
                                                setRadioValue7(e.value)
                                                formState.formValues.robbed_at_gun_point_or_knife_point = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="kidnapped" name="kidnapped" value="No"
                                            onChange={(e) => {
                                                setRadioValue8(e.value)
                                                formState.formValues.kidnapped = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="felt_close_to_death" name="felt_close_to_death" value="No"
                                            onChange={(e) => {
                                                setRadioValue9(e.value)
                                                formState.formValues.felt_close_to_death = e.target.value
                                                severityRanking(formState.formValues, scores)
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
                                                severityRanking(formState.formValues, scores)
                                            }
                                            } />
                                        <label htmlFor="ingredient1" className="ml-2">Yes</label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="witnessed_someone_being_raped" name="witnessed_someone_being_raped" value="No"
                                            onChange={(e) => {
                                                setRadioValue10(e.value)
                                                formState.formValues.witnessed_someone_being_raped = e.target.value
                                                severityRanking(formState.formValues, scores)
                                            }
                                            }
                                            checked={radioValue10 === 'No'} />
                                        <label htmlFor="witnessed_someone_being_raped" className="ml-2">No</label>
                                    </div>

                                </div>
                            </div>
                            <div >
                                <span id="label_status">{severity}</span>
                                <ProgressBar color={colorCode} value={Math.ceil(progressBarValue)} style={{ height: '15px' }}></ProgressBar>
                                <br></br>


                            </div>
                            <div className="card">
                            <div className="field col-12 md:col-12">
                                    <label htmlFor="comment" style={{ width: '100%' }}>Comment</label>
                                    <InputText
                                        name="comment"                                
                                        value={comment}
                                        onChange= {onchangeComment}
                                        type="text"
                                        style={{ width: '100%', height: '3.5em' }}
                                    />
                                </div>
    
                            </div>
                            <br></br>
                            <Button label="Save" icon="pi pi-save" type="submit" />

                    </div>
                </form>

            </div>
            </div>
            )
}

export default TraumaExposure

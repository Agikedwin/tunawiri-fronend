"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import {SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";




import type { Demo, Page } from "@/types";


const Mentalhealthtreatment: Page = () => {
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
            mental_health_disorder: "",
            community_care: "",
            visit_hospital_clinic: "",
            treatment: "",
            other_treatments: "",
            medicine: "",
            taking_as_prescribed: "",
            Study_id:"",
        }
    });

    const handleChange = () => {

    }

    const saveMentalHealthTreatment = (event: any) => {
        event.preventDefault();



        console.log(event)

    }
    function setVisitCount(value: number): void {
        throw new Error("Function not implemented.");
    }
    function handleCheckboxChange(value: any): void {
        throw new Error("Function not implemented.");
    }
    function setPsychosocialSessions(value: string): void {
        throw new Error("Function not implemented.");
    }
    return (
        <div>
            <div className="card ">
                <form onSubmit={saveMentalHealthTreatment} >
                    <h5>Mental Health Treatment</h5>
                    <p>In this section, Im going to ask you a few more questions about the care you have received over the past THREE months</p>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    1. Are you aware that you were identified as having a common mental health disorder (such as stress, distress, depression, or anxiety)?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="mental_health_disorder" name="mental_health_disorder" value='No'
                                    checked={radioValue1 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.mental_health_disorder = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="mental_health_disorder" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="mental_health_disorder" name="mental_health_disorder" value="Yes"
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.mental_health_disorder = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === 'Yes'} />
                                <label htmlFor="mental_health_disorder" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    2. What care did you seek for this common mental disorder from your community?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="not_seeked"
                                    checked={radioValue2 === 'not_seeked'}
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="community_care" className="ml-2">I did not seek care in my community</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="friend_family"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'friend_family'} />
                                <label htmlFor="community_care" className="ml-2">Speaking to a friend or family</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="traditional_healer"
                                    checked={radioValue2 === 'traditional_healer'}
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="community_care" className="ml-2">Visiting traditional healer</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="spiritual_leader"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'spiritual_leader'} />
                                <label htmlFor="community_care" className="ml-2">Spiritual/religious leader</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="community_health_worker"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'community_health_worker'} />
                                <label htmlFor="community_care" className="ml-2">Other community health worker</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="support_group"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'support_group'} />
                                <label htmlFor="community_care" className="ml-2">Support group</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="other_community_care"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.community_care = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'other_community_care'} />
                                <label htmlFor="community_care" className="ml-2">Other</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    3. Did you visit a hospital or clinic for this common mental health disorder?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="visit_hospital_clinic" name="visit_hospital_clinic" value="No"
                                    checked={radioValue3 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.visit_hospital_clinic = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="visit_hospital_clinic" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="visit_hospital_clinic" name="visit_hospital_clinic" value="Yes"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.visit_hospital_clinic = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue3 === 'Yes'} />
                                <label htmlFor="visit_hospital_clinic" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

            {/*        <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    4. How many times did you visit the hospital or clinic for this common mental disorder? [Ask for an estimate]
                                </i> </h6>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                value={setVisitCount}
                                onChange={(e) => setVisitCount(e.target.value)}
                                placeholder="Enter visit count..."
                            />
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    5. Did the hospital or clinic ever treat you for these problems?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="treated_at_hospital" name="treated_at_hospital" value="No"
                                    checked={radioValue5 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.treated_at_hospital = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="treated_at_hospital" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="treated_at_hospital" name="treated_at_hospital" value="Yes"
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.treated_at_hospital = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue5 === 'Yes'} />
                                <label htmlFor="treated_at_hospital" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br> */}

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    6. What treatment did you receive for this common mental health disorder?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_medicine" name="treatment_medicine" value="Medicine"
                                    checked={formState.formValues.treatment.includes('Medicine')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_medicine" className="ml-2">Medicine</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_psychosocial_clinic" name="treatment_psychosocial_clinic" value="Psychosocial support from someone at the clinic"
                                    checked={formState.formValues.treatment.includes('Psychosocial support from someone at the clinic')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_psychosocial_clinic" className="ml-2">Psychosocial support from someone at the clinic</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_psychosocial_home" name="treatment_psychosocial_home" value="Psychosocial support during home visits"
                                    checked={formState.formValues.treatment.includes('Psychosocial support during home visits')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_psychosocial_home" className="ml-2">Psychosocial support during home visits</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_other" name="treatment_other" value="Other"
                                    checked={formState.formValues.treatment.includes('Other')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_other" className="ml-2">Other</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_none" name="treatment_none" value="None"
                                    checked={formState.formValues.treatment.includes('None')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_none" className="ml-2">None</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                   {/* <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    7. How many psychosocial sessions at the clinic did you attend?
                                </i> </h6>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                value={setPsychosocialSessions} // Assuming `psychosocialSessions` is a state variable
                                onChange={(e) => setPsychosocialSessions(e.target.value)}
                                placeholder="Enter the number of sessions..."
                            />
                        </div>
                    </div>
                    <br></br>*/}



                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    8. What other treatments did you receive for this common health disorder?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_traditional_healer" name="treatment_traditional_healer" value="Traditional healer"
                                    checked={formState.formValues.other_treatments.includes('Traditional healer')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_traditional_healer" className="ml-2">Traditional healer</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_spiritual_leader" name="treatment_spiritual_leader" value="Spiritual/religious leader"
                                    checked={formState.formValues.other_treatments.includes('Spiritual/religious leader')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_spiritual_leader" className="ml-2">Spiritual/religious leader</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_other_community_worker" name="treatment_other_community_worker" value="Other community health worker"
                                    checked={formState.formValues.other_treatments.includes('Other community health worker')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_other_community_worker" className="ml-2">Other community health worker</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_support_group" name="treatment_support_group" value="Support group"
                                    checked={formState.formValues.other_treatments.includes('Support group')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_support_group" className="ml-2">Support group</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_other" name="treatment_other" value="Other"
                                    checked={formState.formValues.other_treatments.includes('Other')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_other" className="ml-2">Other</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="treatment_none" name="treatment_none" value="None"
                                    checked={formState.formValues.other_treatments.includes('None')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="treatment_none" className="ml-2">None</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    9. What medicine did you take?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="medicine_carbamazepine" name="medicine_carbamazepine" value="Carbamazepine"
                                    checked={formState.formValues.medicine.includes('Carbamazepine')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="medicine_carbamazepine" className="ml-2">Carbamazepine</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="medicine_diazepam" name="medicine_diazepam" value="Diazepam"
                                    checked={formState.formValues.medicine.includes('Diazepam')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="medicine_diazepam" className="ml-2">Diazepam</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="medicine_sodium_valproate" name="medicine_sodium_valproate" value="Sodium valproate"
                                    checked={formState.formValues.medicine.includes('Sodium valproate')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="medicine_sodium_valproate" className="ml-2">Sodium valproate</label>
                            </div>
                            {/* Add other medications similarly */}
                            <div className="flex align-items-center">
                                <Checkbox inputId="medicine_other" name="medicine_other" value="Other"
                                    checked={formState.formValues.medicine.includes('Other')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="medicine_other" className="ml-2">Other</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="medicine_none" name="medicine_none" value="None"
                                    checked={formState.formValues.medicine.includes('None')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="medicine_none" className="ml-2">None</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
{/*}
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    10. Who prescribed the medication for you?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="prescriber_traditional_healer" name="prescriber_traditional_healer" value="Traditional healer/spiritualist/herbalist"
                                    checked={formState.formValues.prescriber.includes('Traditional healer/spiritualist/herbalist')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="prescriber_traditional_healer" className="ml-2">Traditional healer/spiritualist/herbalist</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="prescriber_community_worker" name="prescriber_community_worker" value="Community health worker"
                                    checked={formState.formValues.prescriber.includes('Community health worker')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="prescriber_community_worker" className="ml-2">Community health worker</label>
                            </div>
                            
                            <div className="flex align-items-center">
                                <Checkbox inputId="prescriber_social_worker" name="prescriber_social_worker" value="Social worker"
                                    checked={formState.formValues.prescriber.includes('Social worker')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="prescriber_social_worker" className="ml-2">Social worker</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="prescriber_other" name="prescriber_other" value="Other"
                                    checked={formState.formValues.prescriber.includes('Other')}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="prescriber_other" className="ml-2">Other</label>
                            </div>
                            <div className="flex align-items-center">
                                <Checkbox inputId="prescriber_dont_know" name="prescriber_dont_know" value="Don't know"
                                    checked={formState.formValues.prescriber.includes("Don't know")}
                                    onChange={(e) => handleCheckboxChange(e.target.value)}
                                />
                                <label htmlFor="prescriber_dont_know" className="ml-2">Dont know</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    11. Do you sometimes forget to take your medication?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="forget_medication_no" name="forget_medication" value="No"
                                    checked={radioValue11 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue11(e.target.value)
                                        formState.formValues.forget_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="forget_medication_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="forget_medication_yes" name="forget_medication" value="Yes"
                                    checked={radioValue11 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue11(e.target.value)
                                        formState.formValues.forget_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="forget_medication_yes" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    12. Are you careless at times about taking the drug?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="careless_medication_no" name="careless_medication" value="No"
                                    checked={radioValue12 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue12(e.target.value)
                                        formState.formValues.careless_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="careless_medication_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="careless_medication_yes" name="careless_medication" value="Yes"
                                    checked={radioValue12 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue12(e.target.value)
                                        formState.formValues.careless_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="careless_medication_yes" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    13. When you feel better do you sometimes stop taking the drug listed above?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="stop_medication_no" name="stop_medication" value="No"
                                    checked={radioValue13 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue13(e.target.value)
                                        formState.formValues.stop_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="stop_medication_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="stop_medication_yes" name="stop_medication" value="Yes"
                                    checked={radioValue13 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue13(e.target.value)
                                        formState.formValues.stop_medication = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="stop_medication_yes" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    14. Sometimes if you feel worse when you take the drug, do you stop taking it?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="stop_feeling_worse_no" name="stop_feeling_worse" value="No"
                                    checked={radioValue14 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue14(e.target.value)
                                        formState.formValues.stop_feeling_worse = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="stop_feeling_worse_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="stop_feeling_worse_yes" name="stop_feeling_worse" value="Yes"
                                    checked={radioValue14 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue14(e.target.value)
                                        formState.formValues.stop_feeling_worse = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="stop_feeling_worse_yes" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>
                    <br></br> */}
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    15. In the past ONE MONTH, have you been taking the drug as prescribed?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_all_time" name="taking_as_prescribed" value="All the time"
                                    checked={radioValue15 === 'All the time'}
                                    onChange={(e) => {
                                        setRadioValue15(e.target.value)
                                        formState.formValues.taking_as_prescribed = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="taking_as_prescribed_all_time" className="ml-2">All the time</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_most_time" name="taking_as_prescribed" value="Most of the time (>3 of the last 4 weeks)"
                                    checked={radioValue15 === 'Most of the time (>3 of the last 4 weeks)'}
                                    onChange={(e) => {
                                        setRadioValue15(e.target.value)
                                        formState.formValues.taking_as_prescribed = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="taking_as_prescribed_most_time" className="ml-2">Most of the time (3 of the last 4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_some_time" name="taking_as_prescribed" value="Sometimes (at least 2-3/4 weeks)"
                                    checked={radioValue15 === 'Sometimes (at least 2-3/4 weeks)'}
                                    onChange={(e) => {
                                        setRadioValue15(e.target.value)
                                        formState.formValues.taking_as_prescribed = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="taking_as_prescribed_some_time" className="ml-2">Sometimes (at least 2-3/4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_occasionally" name="taking_as_prescribed" value="Took the medicine occasionally (<2 of the last 4 weeks)"
                                    checked={radioValue15 === 'Took the medicine occasionally (<2 of the last 4 weeks)'}
                                    onChange={(e) => {
                                        setRadioValue15(e.target.value)
                                        formState.formValues.taking_as_prescribed = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="taking_as_prescribed_occasionally" className="ml-2">Took the medicine occasionally (Less than 2 of the last 4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_none" name="taking_as_prescribed" value="Did not take any medicine at all"
                                    checked={radioValue15 === 'Did not take any medicine at all'}
                                    onChange={(e) => {
                                        setRadioValue15(e.target.value)
                                        formState.formValues.taking_as_prescribed = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="taking_as_prescribed_none" className="ml-2">Did not take any medicine at all</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
    {/*                <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    16. Did the provider give you advice and support with taking the drug?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="provider_support_no" name="provider_support" value="No"
                                    checked={radioValue16 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue16(e.target.value)
                                        formState.formValues.provider_support = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="provider_support_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="provider_support_yes" name="provider_support" value="Yes"
                                    checked={radioValue16 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue16(e.target.value)
                                        formState.formValues.provider_support = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="provider_support_yes" className="ml-2">Yes</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="provider_support_dont_know" name="provider_support" value="Don't know/Can't remember"
                                    checked={radioValue16 === "Don't know/Can't remember"}
                                    onChange={(e) => {
                                        setRadioValue16(e.target.value)
                                        formState.formValues.provider_support = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="provider_support_dont_know" className="ml-2">Dont know/Cant remember</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    17. Did the provider talk to you about potential side effects of the drug and what to do if you experience any of those side effects?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="side_effects_no" name="side_effects" value="No"
                                    checked={radioValue17 === 'No'}
                                    onChange={(e) => {
                                        setRadioValue17(e.target.value)
                                        formState.formValues.side_effects = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="side_effects_no" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="side_effects_yes" name="side_effects" value="Yes"
                                    checked={radioValue17 === 'Yes'}
                                    onChange={(e) => {
                                        setRadioValue17(e.target.value)
                                        formState.formValues.side_effects = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="side_effects_yes" className="ml-2">Yes</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="side_effects_dont_know" name="side_effects" value="Don't know/Can't remember"
                                    checked={radioValue17 === "Don't know/Can't remember"}
                                    onChange={(e) => {
                                        setRadioValue17(e.target.value)
                                        formState.formValues.side_effects = e.target.value
                                        console.log(formState)
                                    }}
                                />
                                <label htmlFor="side_effects_dont_know" className="ml-2">Dont know/Cant remember</label>
                            </div>
                        </div>
                    </div> */}



                </form>
            </div>

        </div>


    )

}
export default Mentalhealthtreatment

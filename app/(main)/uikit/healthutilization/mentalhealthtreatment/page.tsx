'use client';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';


import type { Demo, Page } from '@/types';

import api from "@/app/api/api";
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';



const Mentalhealthtreatment: Page = () => {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);

    const [radioValue15, setRadioValue15] = useState(null);
    const [ingredients, setIngredients] = useState<String[]>([]);
    const [otherTreatments, setOtherTreatments] = useState<String[]>([]);
    const [medicine, setMedicine] = useState<String[]>([]);
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
            mental_health_disorder: '',
            community_care: '',
            visit_hospital_clinic: '',
            treatment: '',
            other_treatments: '',
            medicine: '',
            taking_as_prescribed: '',
            user_id: ''
        }
    });

    const onTreatmentChange = (e: any) => {
        let _treatments = [...ingredients];

        if (e.checked)
            _treatments.push(e.value);
        else
            _treatments.splice(_treatments.indexOf(e.value), 1);

        setIngredients(_treatments);

        console.log(' --- ', _treatments.join(' , '));
        formState.formValues.treatment = _treatments.join(', ');

    };

    const onOtherTreatmentChange = (e: any) => {
        let _treatments = [...otherTreatments];

        if (e.checked)
            _treatments.push(e.value);
        else
            _treatments.splice(_treatments.indexOf(e.value), 1);

        setOtherTreatments(_treatments);

        console.log(' --- ', _treatments.join(' , '));
        formState.formValues.treatment = _treatments.join(', ');

    };

    const onMedicineChange = (e: any) => {
        let _medicine = [...medicine];

        if (e.checked)
            _medicine.push(e.value);
        else
            _medicine.splice(_medicine.indexOf(e.value), 1);

        setMedicine(_medicine);

        console.log(' --- ', _medicine.join(' , '));
        formState.formValues.medicine = _medicine.join(', ');

    };

    const handleChange = () => {

    };

    const saveMentalHealthTreatment = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId

        try {
            await  api.addEntry('mental', formState.formValues,3).then((data: any) => {
                console.log(" saved data : ",data)
                showSuccess();
                setTimeout(() => {

                    console.log("saving data ---")

                    router.push('/uikit/users/profile/')
                }, 3000);




            })

        }catch (e){
            console.log(e)
        }

    };

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)

    }, []);

    function setVisitCount(value: number): void {
        throw new Error('Function not implemented.');
    }

    function handleCheckboxChange(value: any): void {
        throw new Error('Function not implemented.');
    }

    function setPsychosocialSessions(value: string): void {
        throw new Error('Function not implemented.');
    }

    // @ts-ignore
    return (
        <div>
            <div className="card ">
                <Toast ref={toast} />
                <Toast ref={toast} />
                <form onSubmit={saveMentalHealthTreatment}>
                    <h5>Mental Health Treatment</h5>
                    <p>In this section, Im going to ask you a few more questions about the care you have received over
                        the past THREE months</p>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    1. Are you aware that you were identified as having a common mental health disorder
                                    (such as stress, distress, depression, or anxiety)?
                                </i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="mental_health_disorder" name="mental_health_disorder" value="No"
                                             checked={radioValue1 === 'No'}
                                             onChange={(e) => {
                                                 setRadioValue1(e.value);
                                                 formState.formValues.mental_health_disorder = e.target.value;
                                                 console.log(formState);
                                             }
                                             } />

                                <label htmlFor="mental_health_disorder" className="ml-2">No</label>
                            </div>
                            <br></br>
                            <div className="flex align-items-center">
                                <RadioButton inputId="mental_health_disorder" name="mental_health_disorder" value="Yes"
                                             onChange={(e) => {
                                                 setRadioValue1(e.value);
                                                 formState.formValues.mental_health_disorder = e.target.value;
                                                 console.log(formState);
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
                                </i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="not_seeked"
                                             checked={radioValue2 === 'not_seeked'}
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             } />
                                <label htmlFor="community_care" className="ml-2">I did not seek care in my
                                    community</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="friend_family"
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             }
                                             checked={radioValue2 === 'friend_family'} />
                                <label htmlFor="community_care" className="ml-2">Speaking to a friend or family</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="traditional_healer"
                                             checked={radioValue2 === 'traditional_healer'}
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             } />
                                <label htmlFor="community_care" className="ml-2">Visiting traditional healer</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="spiritual_leader"
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             }
                                             checked={radioValue2 === 'spiritual_leader'} />
                                <label htmlFor="community_care" className="ml-2">Spiritual/religious leader</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care"
                                             value="community_health_worker"
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             }
                                             checked={radioValue2 === 'community_health_worker'} />
                                <label htmlFor="community_care" className="ml-2">Other community health worker</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="support_group"
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
                                             }
                                             }
                                             checked={radioValue2 === 'support_group'} />
                                <label htmlFor="community_care" className="ml-2">Support group</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="community_care" name="community_care" value="other_community_care"
                                             onChange={(e) => {
                                                 setRadioValue2(e.value);
                                                 formState.formValues.community_care = e.target.value;
                                                 console.log(formState);
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
                                </i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="visit_hospital_clinic" name="visit_hospital_clinic" value="No"
                                             checked={radioValue3 === 'No'}
                                             onChange={(e) => {
                                                 setRadioValue3(e.value);
                                                 formState.formValues.visit_hospital_clinic = e.target.value;
                                                 console.log(formState);
                                             }
                                             } />
                                <label htmlFor="visit_hospital_clinic" className="ml-2">No</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="visit_hospital_clinic" name="visit_hospital_clinic" value="Yes"
                                             onChange={(e) => {
                                                 setRadioValue3(e.value);
                                                 formState.formValues.visit_hospital_clinic = e.target.value;
                                                 console.log(formState);
                                             }
                                             }
                                             checked={radioValue3 === 'Yes'} />
                                <label htmlFor="visit_hospital_clinic" className="ml-2">Yes</label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    4. What treatment did you receive for this common mental health disorder?
                                </i></h6>
                            </div>

                            <div className="flex flex-wrap justify-content-center gap-3">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="ingredient1" name="treatment_psychosocial_clinic"
                                              value="Medicine" onChange={onTreatmentChange}
                                              checked={ingredients.includes('Medicine')} />
                                    <label htmlFor="ingredient1" className="ml-2">Medicine</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="ingredient2" name="treatment_psychosocial_clinic"
                                              value="Psychosocial support from someone at the clinic"
                                              onChange={onTreatmentChange}
                                              checked={ingredients.includes('Psychosocial support from someone at the clinic')} />
                                    <label htmlFor="ingredient2" className="ml-2">Psychosocial support from someone at
                                        the clinic</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="ingredient3" name="treatment_psychosocial_clinic"
                                              value="Psychosocial support during home visits"
                                              onChange={onTreatmentChange}
                                              checked={ingredients.includes('Psychosocial support during home visits')} />
                                    <label htmlFor="ingredient3" className="ml-2">Psychosocial support during home
                                        visits</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="ingredient4" name="treatment_psychosocial_clinic" value="Other"
                                              onChange={onTreatmentChange} checked={ingredients.includes('Other')} />
                                    <label htmlFor="ingredient4" className="ml-2">Other</label>
                                </div>

                                <div className="flex align-items-center">
                                    <Checkbox inputId="ingredient4" name="treatment_psychosocial_clinic" value="None"
                                              onChange={onTreatmentChange} checked={ingredients.includes('None')} />
                                    <label htmlFor="ingredient4" className="ml-2">None</label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <br></br>


                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    5. What other treatments did you receive for this common health disorder?
                                </i></h6>
                            </div>

                            <div className="flex flex-wrap justify-content-center gap-3">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="other_treatments1" name="other_treatments"
                                              value="Traditional healer" onChange={onOtherTreatmentChange}
                                              checked={otherTreatments.includes('Traditional healer')} />
                                    <label htmlFor="other_treatments1" className="ml-2">Traditional healer</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="other_treatments2" name="other_treatments"
                                              value="Spiritual/religious leader"
                                              onChange={onOtherTreatmentChange}
                                              checked={otherTreatments.includes('Spiritual/religious leader')} />
                                    <label htmlFor="other_treatments2" className="ml-2">Spiritual/religious
                                        leader</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="other_treatments3" name="other_treatments"
                                              value="Other community health worker"
                                              onChange={onOtherTreatmentChange}
                                              checked={otherTreatments.includes('Other community health worker')} />
                                    <label htmlFor="other_treatments3" className="ml-2">Other community health worker
                                    </label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="other_treatments4" name="other_treatments" value="Support group"
                                              onChange={onOtherTreatmentChange}
                                              checked={otherTreatments.includes('Support group')} />
                                    <label htmlFor="other_treatments4" className="ml-2">Support group</label>
                                </div>

                                <div className="flex align-items-center">
                                    <Checkbox inputId="other_treatments5" name="other_treatments" value="None"
                                              onChange={onOtherTreatmentChange}
                                              checked={otherTreatments.includes('None')} />
                                    <label htmlFor="None5" className="ml-2">None</label>
                                </div>
                            </div>


                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    6. What medicine did you take?
                                </i></h6>
                            </div>

                            <div className="flex flex-wrap justify-content-center gap-3">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="medicine1" name="medicine"
                                              value="Carbamazepine" onChange={onMedicineChange}
                                              checked={medicine.includes('Carbamazepine')} />
                                    <label htmlFor="medicine1" className="ml-2">Carbamazepine</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="medicine2" name="medicine"
                                              value="Diazepam"
                                              onChange={onMedicineChange}
                                              checked={medicine.includes('Diazepam')} />
                                    <label htmlFor="medicine2" className="ml-2">Diazepam
                                        leader</label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="medicine3" name="medicine"
                                              value="Sodium valproate"
                                              onChange={onMedicineChange}
                                              checked={medicine.includes('Sodium valproate')} />
                                    <label htmlFor="medicine3" className="ml-2">Sodium valproate
                                    </label>
                                </div>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="medicine4" name="medicine" value="Other"
                                              onChange={onMedicineChange}
                                              checked={medicine.includes('Other')} />
                                    <label htmlFor="medicine4" className="ml-2">Other</label>
                                </div>


                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    7. In the past ONE MONTH, have you been taking the drug as prescribed?
                                </i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_all_time" name="taking_as_prescribed"
                                             value="All the time"
                                             checked={radioValue15 === 'All the time'}
                                             onChange={(e) => {
                                                 setRadioValue15(e.target.value);
                                                 formState.formValues.taking_as_prescribed = e.target.value;
                                                 console.log(formState);
                                             }}
                                />
                                <label htmlFor="taking_as_prescribed_all_time" className="ml-2">All the time</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_most_time" name="taking_as_prescribed"
                                             value="Most of the time (>3 of the last 4 weeks)"
                                             checked={radioValue15 === 'Most of the time (>3 of the last 4 weeks)'}
                                             onChange={(e) => {
                                                 setRadioValue15(e.target.value);
                                                 formState.formValues.taking_as_prescribed = e.target.value;
                                                 console.log(formState);
                                             }}
                                />
                                <label htmlFor="taking_as_prescribed_most_time" className="ml-2">Most of the time (3 of
                                    the last 4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_some_time" name="taking_as_prescribed"
                                             value="Sometimes (at least 2-3/4 weeks)"
                                             checked={radioValue15 === 'Sometimes (at least 2-3/4 weeks)'}
                                             onChange={(e) => {
                                                 setRadioValue15(e.target.value);
                                                 formState.formValues.taking_as_prescribed = e.target.value;
                                                 console.log(formState);
                                             }}
                                />
                                <label htmlFor="taking_as_prescribed_some_time" className="ml-2">Sometimes (at least
                                    2-3/4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_occasionally" name="taking_as_prescribed"
                                             value="Took the medicine occasionally (<2 of the last 4 weeks)"
                                             checked={radioValue15 === 'Took the medicine occasionally (<2 of the last 4 weeks)'}
                                             onChange={(e) => {
                                                 setRadioValue15(e.target.value);
                                                 formState.formValues.taking_as_prescribed = e.target.value;
                                                 console.log(formState);
                                             }}
                                />
                                <label htmlFor="taking_as_prescribed_occasionally" className="ml-2">Took the medicine
                                    occasionally (Less than 2 of the last 4 weeks)</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="taking_as_prescribed_none" name="taking_as_prescribed"
                                             value="Did not take any medicine at all"
                                             checked={radioValue15 === 'Did not take any medicine at all'}
                                             onChange={(e) => {
                                                 setRadioValue15(e.target.value);
                                                 formState.formValues.taking_as_prescribed = e.target.value;
                                                 console.log(formState);
                                             }}
                                />
                                <label htmlFor="taking_as_prescribed_none" className="ml-2">Did not take any medicine at
                                    all</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="field col-12 md:col-6">
                        <Button label="Save" icon="pi pi-save" type="submit" outlined />

                    </div>


                </form>
            </div>

        </div>


    );

};
export default Mentalhealthtreatment;

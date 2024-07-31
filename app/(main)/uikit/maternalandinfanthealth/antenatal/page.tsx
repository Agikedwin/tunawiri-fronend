"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import api from "@/app/api/api";
import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';
import GloabalUserProfile from "../../users/globalprofile/page";






import type { Demo, Page } from "@/types";

interface InputValueReg {
    timepoint: string,
    regcode: string
}



const Antenatal: Page = () => {
    const router = useRouter();

    const toast = useRef<Toast>(null);
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);
    const [comment, setComment] = useState("")

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });
    };

    const [selectedUserId, setSelectedUserId] = useState("")
    const [selectedUser, setSelectedUser] = useState({ first_name: "", other_names: "", mch_number: "" })


    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            gestational_age_weeks: "",
            user_id: "",
            months_pregnancy_antenatal_care: "",
            comment_antenatal: "",
            comment: ""

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

    const saveAntenatal = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        formState.formValues.comment = comment
        console.log(formState.formValues);

        try {
            await api.addEntry("antenatal", formState.formValues, "3").then((data: any) => {
                showSuccess()
                setTimeout(() => {

                    console.log("saving data ---")

                    router.push('/uikit/users/profile/')
                }, 3000);
                console.log(data)
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

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        setSelectedUser(localData)
        console.log(" The selected user :: ", localData.mch_number)

    }, []);

    const onchangeComment = (event: any) => {
        const commentValue = event.target.value;

        setComment(commentValue)

    }

    return (
        <>
            <hr></hr>
            <GloabalUserProfile />
            <div>
                <Toast ref={toast} />

                <div className="card">
                    <form onSubmit={saveAntenatal}>
                        <h5>Antenatal</h5>
                        <p>The next few questions about your experience in antenatal care.</p>
                        {/* Question 1 */}
                        <div className="card">
                            <div className="p-field">
                                <label htmlFor="weeksPregnant">1. What's your current gestational age in weeks?</label>

                                <p></p>
                                <InputText
                                    type="number"
                                    id="gestational_age_weeks"
                                    name="gestational_age_weeks"
                                    value={formState.formValues.gestational_age_weeks}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    max="48"
                                />
                            </div>
                        </div>


                        <div className="card">
                            <div className="p-field">
                                <label htmlFor="monthsIntoPregnancy">2. How many ANC visits have you attended during this pregnancy ?</label>
                                <br />
                                <p></p>
                                <InputText
                                    id="monthsIntoPregnancy"
                                    name="months_pregnancy_antenatal_care"
                                    value={formState.formValues.months_pregnancy_antenatal_care}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
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

                        <Button type="submit" label="Save" />
                    </form>
                </div>
            </div>

        </>


    )
}

export default Antenatal

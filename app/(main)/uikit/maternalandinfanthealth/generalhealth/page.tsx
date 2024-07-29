"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import api from "@/app/api/api";

import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';
import GloabalUserProfile from "../../users/globalprofile/page";



interface InputValueReg {
    timepoint: string,
    regcode: string
}


import type { Demo, Page } from "@/types";


const Generalhealth: Page = () => {

    const router = useRouter();

    const toast = useRef<Toast>(null);
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [InputValue1, setInputValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState("")
    const [selectedUser, setSelectedUser] = useState({ first_name: "", other_names: "", mch_number: "" })
    const [comment, setComment] = useState("")

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });
    };




    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            pregnancy_count: "",
            comment: "",
            timepoint: "",
            user_id: ""
            // parity_count: "",
            // living_children_count: "",
            // birth_control_method: "",
            // feelings_before_pregnancy: "",
            // pre_pregnancy_state: "",
            // partner_feelings_before_pregnancy: "",
        }
    });

    const handleChange = () => {

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)
    })
    const [dropdowntimepointValue, setDropdowntimepointValue] = useState({ timepoint: "", code: "" });

    const dropdowntimepoint: InputValueReg[] = [
        { timepoint: "Baseline", regcode: "B" },
        { timepoint: "6 Months Follow Up", regcode: "6" },
        { timepoint: "12 Months Follow Up", regcode: "12" },

    ];
    const saveGeneralhealth = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        formState.formValues.timepoint = dropdowntimepointValue.timepoint
        formState.formValues.comment = comment
        console.log(formState.formValues);

        try {
            await api.addEntry("maternalandinfanthealth", formState.formValues, "3").then((data: any) => {
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



        console.log(formState.formValues)

    }
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
                    <form onSubmit={saveGeneralhealth}>

                        <h5>General Health</h5>
                        <p>The next few questions about your experience in antenatal care.</p>
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
                                        1. How many times have you been pregnant?
                                    </i></h6>
                                </div>
                                <div className="flex align-items-center">
                                    <input
                                        type="text"
                                        id="pregnancy_count"
                                        name="pregnancy_count"
                                        value={formState.formValues.pregnancy_count}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setFormState(prevState => ({
                                                ...prevState,
                                                formValues: {
                                                    ...prevState.formValues,
                                                    pregnancy_count: value
                                                }
                                            }));
                                        }}
                                    />
                                </div>
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
                        <br />
                        <Button type="submit" label="Save" outlined />




                    </form>
                </div>
            </div>
        </>


    )
}
export default Generalhealth

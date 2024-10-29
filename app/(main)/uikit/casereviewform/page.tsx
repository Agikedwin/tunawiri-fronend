"use client"
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";

import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';
import GloabalUserProfile from "../users/globalprofile/page";





import type { Demo, Page } from "@/types";
interface InputValueReg {
    timepoint: string,
    regcode: string
}

const CaseReview: Page = () => {
    const router = useRouter();

    const toast = useRef<Toast>(null);
    const [cd4RadioValue, setCd4RadioValue] = useState(null);
    const [vlRadioValue, setVlRadioValue] = useState(null);
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
    const [radioValue18, setRadioValue18] = useState(null);
    const [radioValue19, setRadioValue19] = useState(null);
    const [radioValue20, setRadioValue20] = useState(null);
    const [radioValue21, setRadioValue21] = useState(null);
    const [radioValue22, setRadioValue22] = useState(null);
    const [radioValue23, setRadioValue23] = useState(null);
    const [radioValue24, setRadioValue24] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState("")
    const [selectedUser, setSelectedUser] = useState({ first_name: "", other_names: "", ccc_number: "" })
    const [comment, setComment] = useState("")




    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            user_id: "",
            insulted_feelings: "",
            belittled_humiliated: "",
            scare_intimidate: "",
            threw_out_house: "",
            confined_locked: "",
            threatened_hurt: "",
            slapped_thrown: "",
            pushed_dhoved: "",
            hit_with_fist: "",
            kicked_dragged: "",
            choked_burnt: "",
            threatened_used_weapon: "",
            forced_sexual_Intercourse: "",
            agreed_unwanted_Intercourse: "",
            forced_other_sexual_act: "",
            tried_keep_from_friends: "",
            tried_restrict_family_contact: "",
            insisted_knowing_location: "",
            jealous_angry_with_men: "",
            suspicious_unfaithful: "",
            took_earnings_savings: "",
            refused_money_for_household: "",
            tried_convince_crazy: "",
            timepoint: "",
            blamed_for_violent_behavior: "",
            comment: ""
        }
    });



    const handleChange = () => {

    }

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });
    };

    const saveCaseReview = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        formState.formValues.timepoint = dropdowntimepointValue.timepoint
        formState.formValues.comment = comment

        try {
            await api.addEntry("CaseReview", formState.formValues, 3).then((data: any) => {
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
    const [dropdowntimepointValue, setDropdowntimepointValue] = useState({ timepoint: "", code: "" });

    const dropdowntimepoint: InputValueReg[] = [
        { timepoint: "Baseline", regcode: "B" },
        { timepoint: "6 Months Follow Up", regcode: "6" },
        { timepoint: "12 Months Follow Up", regcode: "12" },

    ];
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

                <div className="card ">
                    <form onSubmit={saveCaseReview} >

                        <h5>Case Review Form </h5>

                        
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
                            <div className="field col-12 md:col-12">
                                <label htmlFor="comment" style={{ width: '100%' }}>Comment</label>
                                <InputText
                                    name="comment"
                                    value={comment}
                                    onChange={onchangeComment}
                                    type="text"
                                    style={{ width: '100%', height: '3.5em' }}
                                />
                            </div>

                        </div>
                        <div className="field col-24 md:col-12">
                            <label htmlFor="otherNames">..</label>
                            <Button label="Save" icon="pi pi-save" type="submit" outlined />
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default CaseReview

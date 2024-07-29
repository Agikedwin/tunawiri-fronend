"use client"
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
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

const Postnatal: Page = () => {

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
    const [radioValue9, setRadioValue9] = useState(null);
    const [radioValue10, setRadioValue10] = useState(null);
    const [radioValue11, setRadioValue11] = useState(null);
    const [radioValue12, setRadioValue12] = useState(null);
    const [radioValue13, setRadioValue13] = useState(null);
    const [radioValue14, setRadioValue14] = useState(null);
    const [radioValue15, setRadioValue15] = useState(null);
    const [radioValue16, setRadioValue16] = useState(null);
    const [radioValue17, setRadioValue17] = useState(null);

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



    const [dropdowntimepointValue, setDropdowntimepointValue] = useState({ timepoint: "", code: "" });

    const dropdowntimepoint: InputValueReg[] = [
        { timepoint: "Baseline", regcode: "B" },
        { timepoint: "6 Months Follow Up", regcode: "6" },
        { timepoint: "12 Months Follow Up", regcode: "12" },

    ];

    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            pregnancy_end_duration: null,
            pregnancy_end_method: "",
            place_of_birth: "",
            infant_alive: "",
            infant_passing_age: "",
            timepoint: "",
            comment: "",
            user_id: "",

        }
    });
    const handleChange = (event: any) => {
        //event.persist();

        setFormState(formState => ({
            ...formState,
            formValues: {
                ...formState.formValues,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            },

            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }));
        console.log('Form state ::', formState)
    };

    const savePostnatal = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        formState.formValues.timepoint = dropdowntimepointValue.timepoint
        formState.formValues.comment = comment
        console.log(formState.formValues);

        try {
            await api.addEntry("postnatal", formState.formValues, "3").then((data: any) => {
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
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        setSelectedUser(localData)
        console.log(" The selected user :: ", localData.mch_number)

    }, []);
    function handlePlaceOfBirthChange(arg0: string): void {
        throw new Error("Function not implemented.");
    }

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
                    <form onSubmit={savePostnatal}>

                        <h5>Postnatal</h5>
                        <p>The next few questions about your experience in Postnatal care.</p>
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
                            {/* Question 1 */}
                            <div>
                                <div className="p-field">
                                    <label htmlFor="pregnancyEndDuration">1. How long ago did your pregnancy end?</label>
                                    <p></p>
                                    <Calendar
                                        id="pregnancyEndDuration"
                                        name="pregnancy_end_duration"
                                        value={formState.formValues.pregnancy_end_duration}

                                        onChange={handleChange}
                                        dateFormat="mm/dd/yy"
                                        required // Make the field mandatory
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br></br>
                        <div className="card">
                            {/* Question 2 */}
                            <div className="p-field">
                                <label>2. How did the pregnancy end ?</label>
                                <br />
                                <p></p>
                                {["Live birth", "Miscarriage", "Abortion", "Stillbirth"].map((method, index) => (
                                    <div key={index}>
                                        <RadioButton
                                            inputId={`pregnancyEndMethod${index}`}
                                            name="pregnancyEndMethod"
                                            value={method}
                                            onChange={(e) => setFormState(prevState => ({

                                                ...prevState,
                                                formValues: {
                                                    ...prevState.formValues,
                                                    pregnancy_end_method: e.target.value
                                                }

                                            }))}
                                            checked={formState.formValues.pregnancy_end_method === method}
                                        />
                                        <label htmlFor={`pregnancyEndMethod${index}`}>{method}</label>
                                    </div>
                                ))}
                                <br></br>
                                <p>Miscarriage = Loss of baby before 28 Weeks </p>
                                <p>Still birth = Loss of baby at 28 weeks or greater than 28 weeks </p>
                                <p>If response Equals /miscarriage/abortion/stillbirth/infant mortality then end this section</p>
                            </div>
                        </div>
                        <div className="card">
                            {/* Question 3 */}
                            <div>
                                <div className="p-field">
                                    <label>3. Where did you give birth?</label>
                                    <br />
                                    <RadioButton
                                        inputId="home"
                                        name="placeOfBirth"
                                        value="home"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                        checked={formState.formValues.place_of_birth === "home"}
                                    />
                                    <label htmlFor="home">Home</label>
                                    <br />
                                    <RadioButton
                                        inputId="healthFacility"
                                        name="placeOfBirth"
                                        value="health facility"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                        checked={formState.formValues.place_of_birth === "health facility"}
                                    />
                                    <label htmlFor="healthFacility">Health Facility</label>
                                    <br />
                                    <RadioButton
                                        inputId="other"
                                        name="placeOfBirth"
                                        value="other"
                                        onChange={(e) => {
                                            setRadioValue3(e.value)
                                            formState.formValues.place_of_birth = e.target.value
                                            console.log(formState)
                                        }
                                        }
                                        checked={formState.formValues.place_of_birth === "other"}
                                    />
                                    <label htmlFor="other">Other</label>
                                    {formState.formValues.place_of_birth === "other" && (
                                        <InputText
                                            id="otherPlaceOfBirth"
                                            name="otherPlaceOfBirth"
                                            value={formState.formValues.place_of_birth}
                                            onChange={(e) => setFormState(prevState => ({
                                                ...prevState,
                                                formValues: {
                                                    ...prevState.formValues,
                                                    otherPlaceOfBirth: e.target.value
                                                }
                                            }))}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <div className="p-field">
                                <label>5. Is your infant still alive ?</label>
                                <br />
                                <p></p>
                                <div>
                                    <RadioButton
                                        inputId="infantAliveYes"
                                        name="infantAlive"
                                        value="Yes"
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                infant_alive: e.target.value
                                            }
                                        }))}
                                        checked={formState.formValues.infant_alive === "Yes"}
                                    />
                                    <label htmlFor="infantAliveYes">Yes</label>
                                </div>
                                <div>
                                    <RadioButton
                                        inputId="infantAliveNo"
                                        name="infantAlive"
                                        value="No"
                                        onChange={(e) => setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                infant_alive: e.target.value
                                            }
                                        }))}
                                        checked={formState.formValues.infant_alive === "No"}
                                    />
                                    <label htmlFor="infantAliveNo">No</label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            {/* Question 6 */}
                            <div className="p-field">
                                <label htmlFor="infantPassingAge">6. If no, how old was your infant when he/she passed ?</label>
                                <p></p>
                                <InputText
                                    id="infantPassingAge"
                                    name="infantPassingAge"
                                    value={formState.formValues.infant_passing_age}
                                    onChange={(e) => setFormState(prevState => ({
                                        ...prevState,
                                        formValues: {
                                            ...prevState.formValues,
                                            infant_passing_age: e.target.value
                                        }
                                    }))}
                                />
                            </div>
                        </div>
                        <br></br>
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

                        <Button type="submit" label="Save" outlined />
                    </form>
                </div>
            </div>
        </>

    )
}
export default Postnatal

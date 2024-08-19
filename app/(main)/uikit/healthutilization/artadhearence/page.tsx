"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useRef, useState } from 'react';
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import api from "@/app/api/api";
import { useRouter } from 'next/navigation';
import GloabalUserProfile from '../../users/globalprofile/page';




import type { Demo, Page } from "@/types";
interface InputValueReg {
    timepoint: string,
    regcode: string
}

const ARTadhearence: Page = () => {
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

    const  [selectedUserId, setSelectedUserId] = useState("")
    const [comment, setComment] = useState("")

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
            missed_doses: "",
            medicines_taking_quality: "",
            medicine_frequency: "",
            timepoint:"",
            user_id:"",
            comment:""

        }
    });
    const [dropdowntimepointValue, setDropdowntimepointValue] = useState({timepoint:"",code:""});

            const dropdowntimepoint: InputValueReg[] = [
                        { timepoint: "Baseline", regcode: "B" },
                        { timepoint: "6 Months Follow Up", regcode: "6" },
                        { timepoint: "12 Months Follow Up", regcode: "12" },

            ];
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormState((prevState : any) => ({
            ...prevState,
            formValues: {
                ...prevState.formValues,
                [name]: value
            }
        }));
    }

    const saveARTadhearence = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId
        formState.formValues.timepoint = dropdowntimepointValue.timepoint
        formState.formValues.comment = comment
        console.log(formState.formValues);

        await  api.addEntry('artAdherence',formState.formValues,3).then((data:any) =>{
            console.log("data save")
            showSuccess();
            setTimeout(() => {

                console.log("saving data ---")

                router.push('/uikit/users/profile/')
            }, 3000);
        })
    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)

    }, []);

    const onchangeComment = (event:any) =>{
        const commentValue = event.target.value;

       setComment(commentValue)
    
    }

return (

    <div>
         <div className="card ">
            <Toast ref={toast} />
            <GloabalUserProfile />
             <h5>ART Adhearence </h5>
                 <form onSubmit={saveARTadhearence}>

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
                                     1. In the last 30 days, on how many days did you miss at least one dose of any of
                                     your HIV medicines?
                                 </i></h6>
                             </div>
                             <div className="flex align-items-center">
                                 <InputText
                                     type="number"
                                     id="missed_doses"
                                     name="missed_doses"
                                     value={formState.formValues.missed_doses}
                                     onChange={handleChange}
                                     min={0}
                                     max={30}
                                     placeholder="0 – 30"
                                 />
                             </div>
                         </div>
                     </div>
                     <div className="card">
                         <div className="flex flex-wrap gap-3">
                             <div className="flex align-items-center">
                                 <h6><i>
                                     2. In the last 30 days, how good a job did you do at taking your HIV medicines in
                                     the way you were supposed to?
                                 </i></h6>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Very poor"
                                              checked={radioValue2 === 'Very poor'}
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              } />
                                 <label htmlFor="ingredient1" className="ml-2">Very poor</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Poor"
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue2 === 'Poor'} />
                                 <label htmlFor="medicines_taking_quality" className="ml-2">Poor</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Fair"
                                              checked={radioValue2 === 'Fair'}
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              } />
                                 <label htmlFor="ingredient1" className="ml-2">Fair</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Good"
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue2 === 'Good'} />
                                 <label htmlFor="medicines_taking_quality" className="ml-2">Good</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Very Good"
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue2 === 'Very Good'} />
                                 <label htmlFor="medicines_taking_quality" className="ml-2">Very Good</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicines_taking_quality" name="medicines_taking_quality"
                                              value="Excellent"
                                              onChange={(e) => {
                                                  setRadioValue2(e.value);
                                                  formState.formValues.medicines_taking_quality = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue2 === 'Excellent'} />
                                 <label htmlFor="medicines_taking_quality" className="ml-2">Excellent</label>
                             </div>

                         </div>
                     </div>
                     <div className="card">
                         <div className="flex flex-wrap gap-3">
                             <div className="flex align-items-center">
                                 <h6><i>
                                     3. In the last 30 days, how often did you take your HIV medicines in the way you
                                     were supposed to?
                                 </i></h6>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_very_poor" name="medicine_frequency_3"
                                              value="Very poor"
                                              checked={radioValue3 === 'Very poor'}
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              } />
                                 <label htmlFor="medicine_frequency_3_very_poor" className="ml-2">Very poor</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_poor" name="medicine_frequency_3"
                                              value="Poor"
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue3 === 'Poor'} />
                                 <label htmlFor="medicine_frequency_3_poor" className="ml-2">Poor</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_fair" name="medicine_frequency_3"
                                              value="Fair"
                                              checked={radioValue3 === 'Fair'}
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              } />
                                 <label htmlFor="medicine_frequency_3_fair" className="ml-2">Fair</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3"
                                              value="Good"
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue3 === 'Good'} />
                                 <label htmlFor="medicine_frequency_3_good" className="ml-2">Good</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3"
                                              value="Very Good"
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue3 === 'Very Good'} />
                                 <label htmlFor="medicine_frequency_3_good" className="ml-2">Very Good</label>
                             </div>
                             <div className="flex align-items-center">
                                 <RadioButton inputId="medicine_frequency_3_good" name="medicine_frequency_3"
                                              value="Excellent"
                                              onChange={(e) => {
                                                  setRadioValue3(e.value);
                                                  formState.formValues.medicine_frequency = e.target.value;
                                                  console.log(formState);
                                              }
                                              }
                                              checked={radioValue3 === 'Excellent'} />
                                 <label htmlFor="medicine_frequency_3_good" className="ml-2">Excellent</label>
                             </div>

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
                     </div>
                     <Button type="submit" label="Submit" outlined />
                 </form>
         </div>
    </div>
)
}
export default ARTadhearence


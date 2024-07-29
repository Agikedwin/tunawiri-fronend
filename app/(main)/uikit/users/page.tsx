"use client"

import { Demo } from "@/types";
import {
    AutoComplete, AutoCompleteCompleteEvent
} from  "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";


import { Button } from 'primereact/button'
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState, useRef } from "react";

import api from "@/app/api/api";
import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';


interface InputValue {
    education_level: string;
    code: string;
}
interface InputValueReg {
    registration_level: string;
    regcode: string;
}
interface InputValueRead {
    reading_ability: string;
    leveCode: string;
}
interface marital_statusInput {
    marital_status: String
}

const userModel = {
    visit: '',
    mch_number: '',
    ccc_number: '',
    ptid_number: '',
    first_name: '',
    other_names: '',
    dob: '',
    marital_status: '',
    education_level: '',
    registration_level:'',
    reading_ability: '',
    religion: '',
    home_language: '',
    study_id: '01',
    // username:'edu',
    // password:'edu123',

}



const RegisterUser1 = () =>{
    const toast = useRef<Toast>(null);
    const router = useRouter();

    const [useDetails, setUserDetails] = useState(userModel)
    const [dropdowneducation_levelValue, setDropdowneducation_levelValue] = useState({education_level:"",code:""});
    const [dropdownregistration_levelValue, setDropdownregistration_levelValue] = useState({registration_level:"",regcode:""});
    const [dropdownreading_abilityValue, setDropdownreading_abilityValue] = useState({reading_ability:",",levelCode:"" });
    const [dropdownMarital_value, setDropdown_marital] = useState({marital_status:","});

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Data Saved Successfully',
            life: 4000
        });


    };



    const onchaneUserDetails =(event:any) => {
        const { name, value } = event.target;
        setUserDetails((prevProps) => ({
      ...prevProps,
      [name]: value

    }));
    console.log(useDetails)

    }
    const fetchAllUsers = async () => {
      //  await api.getEntries('user',3).then(users =>console.log(users))
    }
    const saveUserDetails = async (event: any) => {
        event.preventDefault();
        console.log("=========================")


        useDetails.education_level = dropdowneducation_levelValue.education_level
        useDetails.registration_level = dropdownregistration_levelValue.registration_level
        useDetails.reading_ability = dropdownreading_abilityValue.reading_ability
        useDetails.marital_status = dropdownMarital_value.marital_status



        try {
            console.log('try ---')
            console.log(useDetails)
            await api.addEntry('user',useDetails,3).then(user =>{
                showSuccess()
                setTimeout(() => {

                    console.log("saving data ---")

                    router.push('/uikit/users/view')
              }, 3000);




                console.log(user)
            })

        } catch (error) {
            console.log(error)
        }

        console.log('submiting')


        };
useEffect(()=>{
    console.log('Using effect ______')
    //fetchAllUsers();

},[])
const dropdowneducation_level: InputValue[] = [
    { education_level: "Primary", code: "P" },
    { education_level: "Secondary", code: "s" },
    { education_level: "College", code: "P" },
    { education_level: "University", code: "P" },


];
const dropdownregistration_level: InputValueReg[] = [
    { registration_level: "Participant", regcode: "R" },
    { registration_level: "Staff", regcode: "U" },


];
const dropdownreading_ability: InputValueRead[] = [

    { reading_ability: "Easily", leveCode: "W" },
    { reading_ability: "With difficulty", leveCode: "D" },
    { reading_ability: "Not at all", leveCode: "N" },

]
const maritalStatisOption: marital_statusInput[] = [
    {marital_status: "Single"},
    {marital_status: "Married"},
    {marital_status: "Divorced"},
]

    return (
        <div className="grid">
        <Toast ref={toast} />

            <div className="col-12">
                <div className="card">
                    <h5>Demographic</h5>
                    <form onSubmit={saveUserDetails}>
                    <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                                                <label htmlFor="registration_type">Registration Type</label>
                                                <Dropdown
                                                value={dropdownregistration_levelValue}
                                                onChange={(e) => setDropdownregistration_levelValue(e.value)}
                                                options={dropdownregistration_level}
                                                optionLabel="registration_level"
                                                placeholder="Select"
                                                required
                                            />
                                            </div>
                    <div className="field col-12 md:col-6">
                            <label htmlFor="mch_number">MCH Number</label>
                            <InputText  name="mch_number" value={useDetails.mch_number} onChange={onchaneUserDetails} type="text"  required/>
                        </div>
                        <div className="field col-12 md:col-6">
                                                    <label htmlFor="ccc_number">CCC Number</label>
                                                    <InputText  name="ccc_number" value={useDetails.ccc_number} onChange={onchaneUserDetails} type="text"  required/>
                                                </div>
                        <div className="field col-12 md:col-6">
                                                                            <label htmlFor="ccc_number">PTID Number</label>
                                                                            <InputText  name="ptid_number" value={useDetails.ptid_number} onChange={onchaneUserDetails} type="text"  required/>
                                                                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="first_name">First Name</label>
                            <InputText  name="first_name" value={useDetails.first_name} onChange={onchaneUserDetails} type="text" required/>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="other_names">Other Names</label>
                            <InputText  name="other_names" value={useDetails.other_names} onChange={onchaneUserDetails} type="text" required/>
                        </div>

                        <div className="field col-12 md:col-6">
                            <label htmlFor="dob">How old are you?</label>
                            <InputText name="dob" value={useDetails.dob } onChange={onchaneUserDetails} type="text" required/>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="marital_status">What is your current marital status?</label>
                            <Dropdown
                            value={dropdownMarital_value}
                            onChange={(e) => setDropdown_marital(e.value)}
                            options={maritalStatisOption}
                            optionLabel="marital_status"
                            placeholder="Select"
                            required

                        />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="education_level">What is the highest level of education you have completed?</label>
                            <Dropdown
                            value={dropdowneducation_levelValue}
                            onChange={(e) => setDropdowneducation_levelValue(e.value)}
                            options={dropdowneducation_level}
                            optionLabel="education_level"
                            placeholder="Select"
                            required
                        />
                        </div>



                        <div className="field col-12 md:col-6">
                            <label htmlFor="reading_ability">Can you read a newspaper easily, with difficulty, or not at all?</label>
                            <Dropdown
                            value={dropdownreading_abilityValue}
                            onChange={(e) => setDropdownreading_abilityValue(e.value)}
                            options={dropdownreading_ability}
                            optionLabel="reading_ability"
                            placeholder="Select"
                            required
                        />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="religion">What is your religion?</label>
                            <InputText name="religion" value={useDetails.religion } onChange={onchaneUserDetails} type="text" required/>

                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="home_language">What language do you most commonly speak at home?</label>
                            <InputText name="home_language" value={useDetails.home_language } onChange={onchaneUserDetails} type="text" required/>

                        </div>


                        <div className="field col-12 md:col-6">
                        <Button label="Save" icon="pi pi-save"  type="submit" outlined />

                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser1



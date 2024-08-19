"use client"

import { Demo } from "@/types";
import {
    AutoComplete, AutoCompleteCompleteEvent
} from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";


import { Button } from 'primereact/button'
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState, useRef } from "react";

import api from "@/app/api/api";
import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';
import { Calendar } from "primereact/calendar"; // Import Calendar component
import { Checkbox } from "primereact/checkbox";


interface InputValue {
    education_level: string;
    code: string;
}
interface InputValueReg {
    registration_level: string;
    regcode: string;
}
interface InputValueFac {
    facility_level: string;
    faccode: string;
}
interface InputValueRead {
    reading_ability: string;
    leveCode: string;
}
interface InputValueRel {
    religion_level: string;
    relcode: string;
}
interface marital_statusInput {
    marital_status: String
}

const userModel = {
    visit: '',
    job_title: '',
    department: '',
    Phone_number: '',
    first_name: '',
    other_names: '',
    date_of_reg: '',
    marital_status: '',
    education_level: '',
    registration_level: '',
    reading_ability: '',
    religion_level: '',
    other_religion: '',
    staff_number: '',
    facility_level: '',
    permissions: '', // Add this field to the user model
    study_id: '01',
    // username:'edu',
    // password:'edu123',

}

const RegisterUser1 = () => {
    const toast = useRef<Toast>(null);
    const router = useRouter();

    const [useDetails, setUserDetails] = useState(userModel)
    const [dropdowneducation_levelValue, setDropdowneducation_levelValue] = useState({ education_level: "", code: "" });
    const [dropdownreligion_levelValue, setDropdownreligion_levelValue] = useState({ religion_level: "", relcode: "" });
    const [dropdownregistration_levelValue, setDropdownregistration_levelValue] = useState({ registration_level: "", regcode: "" });
    const [dropdownfacility_levelValue, setDropdownfacility_levelValue] = useState({ facility_level: "", faccode: "" });
    const [dropdownreading_abilityValue, setDropdownreading_abilityValue] = useState({ reading_ability: ",", levelCode: "" });
    const [dropdownMarital_value, setDropdown_marital] = useState({ marital_status: "," });

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Data Saved Successfully',
            life: 4000
        });


    };

    const showFailed = (mch: any, ccc: any) => {
        toast.current?.show({
            severity: 'error',
            summary: 'Success Message',
            detail: `MCH Number : ${mch} or CCN Number ${ccc} Already in Use `,
            life: 10000
        });


    };



    const onchaneUserDetails = (event: any) => {
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
        useDetails.religion_level = dropdownreligion_levelValue.religion_level
        useDetails.registration_level = dropdownregistration_levelValue.registration_level
        useDetails.facility_level = dropdownfacility_levelValue.facility_level
        useDetails.reading_ability = dropdownreading_abilityValue.reading_ability
        useDetails.marital_status = dropdownMarital_value.marital_status



        try {
            console.log('try ---')
            console.log(useDetails)
            await api.addEntry('user', useDetails, 3).then(user => {
                console.log("the data is not here :: ", user)
                if (user.data.fieldExists) {
                    showFailed(user.data.mch_number, user.data.ccc_number)

                } else {

                    showSuccess()
                    setTimeout(() => {

                        router.push('/uikit/users/view')
                    }, 4000);

                }


            })

        } catch (error) {
            console.log(error)
        }

        console.log('submiting')


    };
    useEffect(() => {
        console.log('Using effect ______')
        //fetchAllUsers();

    }, [])
    const dropdowneducation_level: InputValue[] = [
        { education_level: "Primary", code: "P" },
        { education_level: "Secondary", code: "s" },
        { education_level: "College", code: "P" },
        { education_level: "University", code: "P" },


    ];
    const dropdownreligion_level: InputValueRel[] = [
        { religion_level: "Christian", relcode: "C" },
        { religion_level: "Muslim", relcode: "M" },
        { religion_level: "African Traditional", relcode: "AT" },
        { religion_level: "Others", relcode: "O" },


    ];
    const dropdownregistration_level: InputValueReg[] = [
        //{ registration_level: "Participant", regcode: "R" },
        { registration_level: "Staff", regcode: "U" },


    ];
    const dropdownfacility_level: InputValueFac[] = [
        { facility_level: "Awasi Mission Health Center", faccode: "13491" },
        { facility_level: "Bunde Health Center", faccode: "B" },
        { facility_level: "Nyakach County Hospital", faccode: "C" },
        { facility_level: "Katito Sub County Hospital", faccode: "D" },
        { facility_level: "Maseno Mission Hospital", faccode: "E" },
        { facility_level: "Muhoroni Sub County Hospital", faccode: "F" },
        { facility_level: "Nyabondo Mission Hospital", faccode: "G" },
        { facility_level: "Nyahera Sub County Hospital", faccode: "H" },
        { facility_level: "Nyalunya Health Center", faccode: "I" },
        { facility_level: "Nyangande Sub County Hospital", faccode: "J" },
        { facility_level: "Nyangoma Sub County Hospital", faccode: "K" },
        { facility_level: "Rabuor Sub County Hospital", faccode: "L" },
        { facility_level: "Sondu Sub County Hospital", faccode: "M" },
        { facility_level: "St. Elizabeth Chiga", faccode: "N" },
        { facility_level: "St. Monica Hospital", faccode: "O" },
        { facility_level: "Kargeno Hub ", faccode: "KH" },

    ];
    const dropdownreading_ability: InputValueRead[] = [

        { reading_ability: "Easily", leveCode: "W" },
        { reading_ability: "With difficulty", leveCode: "D" },
        { reading_ability: "Not at all", leveCode: "N" },

    ]
    const maritalStatisOption: marital_statusInput[] = [
        { marital_status: "Single" },
        { marital_status: "Married" },
        { marital_status: "Divorced" },
    ]
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const onPermissionChange = (e) => {
        let selected = [...selectedPermissions];
        if (e.checked) selected.push(e.value);
        else selected.splice(selected.indexOf(e.value), 1);

        setSelectedPermissions(selected);
        setUserDetails({ ...useDetails, permissions: selected });
    };
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
                                <label htmlFor="facility_type">Select Facility</label>
                                <Dropdown
                                    value={dropdownfacility_levelValue}
                                    onChange={(e) => setDropdownfacility_levelValue(e.value)}
                                    options={dropdownfacility_level}
                                    optionLabel="facility_level"
                                    placeholder="Select"
                                    required
                                />
                            </div>

                            <div className="field col-12 md:col-6">
                                <label htmlFor="job_title">Job Title</label>
                                <InputText name="job_title" value={useDetails.job_title} onChange={onchaneUserDetails} type="text" required />
                            </div>
                            <div className="field col-12 md:col-6">
                                <label htmlFor="department">Department</label>
                                <InputText name="department" value={useDetails.department} onChange={onchaneUserDetails} type="text" required />
                            </div>
                            <div className="field col-12 md:col-6">
                                <label htmlFor="Phone_number">Phone Number</label>
                                <InputText name="Phone_number" value={useDetails.Phone_number} onChange={onchaneUserDetails} type="text" required />
                            </div>
                            <div className="field col-12 md:col-6">
                                <label htmlFor="first_name">First Name</label>
                                <InputText name="first_name" value={useDetails.first_name} onChange={onchaneUserDetails} type="text" required />
                            </div>
                            <div className="field col-12 md:col-6">
                                <label htmlFor="other_names">Other Names</label>
                                <InputText name="other_names" value={useDetails.other_names} onChange={onchaneUserDetails} type="text" required />
                            </div>
                            {/* Date of Registration Field */}
                            <div className="field col-12 md:col-6">
                                <label htmlFor="date_of_reg">Date of Registration</label>
                                <Calendar
                                    name="date_of_reg"
                                    value={useDetails.date_of_reg}
                                    onChange={onchaneUserDetails}
                                    showIcon
                                    maxDate={new Date()}  // Prevent selecting future dates
                                    required
                                />
                            </div>

                            {/*
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
                                <label htmlFor="religion">What is your religion?</label>
                                <Dropdown
                                    value={dropdownreligion_levelValue}
                                    onChange={(e) => setDropdownreligion_levelValue(e.value)}
                                    options={dropdownreligion_level}
                                    optionLabel="religion"
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
                                <label htmlFor="other_religion">Specify Other religion?</label>
                                <InputText name="other_religion" value={useDetails.other_religion} onChange={onchaneUserDetails} type="text" required />

                            </div>  */}
                            <div className="field col-12 md:col-6">
                                <label htmlFor="staff_number">Staff Number ?</label>
                                <InputText name="staff_number" value={useDetails.staff_number} onChange={onchaneUserDetails} type="text" required />

                            </div>
                            {/* Add the new section for permissions */}
                            <div className="field col-12">
                                <label>Permissions</label>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="readWrite" value="Read/Write" onChange={onPermissionChange} checked={selectedPermissions.includes('Read/Write')} />
                                    <label htmlFor="readWrite">Read/Write</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="viewOnly" value="View Only" onChange={onPermissionChange} checked={selectedPermissions.includes('View Only')} />
                                    <label htmlFor="viewOnly">View Only</label>
                                </div>
                                <div className="p-field-checkbox">
                                    <Checkbox inputId="admin" value="Admin" onChange={onPermissionChange} checked={selectedPermissions.includes('Admin')} />
                                    <label htmlFor="admin">Admin</label>
                                </div>
                            </div>
                            {/* End of permissions section */}

                            <div className="field col-12 md:col-6">
                                <Button label="Save" icon="pi pi-save" type="submit" outlined />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser1;



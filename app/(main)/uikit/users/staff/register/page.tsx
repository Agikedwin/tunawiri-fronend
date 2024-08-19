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

const RegisterStaff = () => {
    
}
export default RegisterStaff;



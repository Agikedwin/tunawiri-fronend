"use client"
import api from "@/app/api/api";


import type { Demo, Page } from "@/types";
import {
    AutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Chips } from "primereact/chips";
import {
    ColorPicker,
    ColorPickerHSBType,
    ColorPickerRGBType,
} from "primereact/colorpicker";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Knob } from "primereact/knob";
import { ListBox } from "primereact/listbox";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { Rating } from "primereact/rating";
import { SelectButton } from "primereact/selectbutton";
import { Slider } from "primereact/slider";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useRef, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";
import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';




interface InputValue {
    name: string;
    code: string;
}

const clinicalModel = {
    vitals: {
        bloodPressure: '',
        weight: '',
        height: '',
        bmi: ''
    },
    cd4Count: {
        cd4_count_known: Boolean,
        cd4_count_unknown: Boolean,
        known_cd4_count: '',
        cd4_count_date: ''
    },
    viralLoad: {
        viral_load_known: Boolean,
        viral_load_unknown: Boolean,
        known_viral_load: '',
        viral_load_date: ''
    },
    art_start_date: '',
    current_art_regimen: '',
    last_hiv_visit_date: '',
    missed_visits_no: true,
    missed_visits_yes: true,
    missed_visits_count: '',
}


const ClinicalDetails: Page = () => {
    const router = useRouter();

    const toast = useRef<Toast>(null);
    const [floatValue, setFloatValue] = useState("");
    const [autoValue, setAutoValue] = useState<Demo.Country[]>([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState<Demo.Country[]>(
        []
    );
    const [calendarValue, setCalendarValue] = useState<any>(null);
    const [inputNumberValue, setInputNumberValue] = useState<number | null>(
        null
    );
    const [chipsValue, setChipsValue] = useState<any[]>([]);
    const [sliderValue, setSliderValue] = useState<number | string>("");
    const [ratingValue, setRatingValue] = useState<number | null>(null);
    const [colorValue, setColorValue] = useState<
        string | ColorPickerRGBType | ColorPickerHSBType
    >("1976D2");
    const [knobValue, setKnobValue] = useState(20);
    const [radioValue, setRadioValue] = useState(null);
    const [cd4RadioValue, setCd4RadioValue] = useState(null);
    const [vlRadioValue, setVlRadioValue] = useState(null);
    const [showCD4Input, setShowCD4Input] = useState(false)
    const [showVLInput, setShowVLInput] = useState(false)

    const [selectedUserId, setSelectedUserId] = useState("")

    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            user_id: '',
            cd4_known: '',
            known_cd4_count: '',
            cd4_count_date: '',
            viral_load_known: '',
            known_viral_load: '',
            viral_load_date: '',
            art_start_date: '',
            current_art_regimen: '',
            last_hiv_visit_date: '',
            ever_missed_visit: '',
            missed_visits_count: '',
            other_regimen_name: ''

        }
    });

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });       
    };


    const [clinicalDetailData, setClinicalDetailData] = useState({
        isValid: false,
        vitals: {},
        cd4Count: {},
        viralLoad: {}
    }
    )

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)

    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            } else {
                setAutoFilteredValue(
                    autoValue.filter((country) => {
                        return country.name
                            .toLowerCase()
                            .startsWith(event.query.toLowerCase());
                    })
                );
            }
        }, 250);
    };



    const onChangeClinicalDetails = (event: any) => {
        const { name, value } = event.target;
        setClinicalDetailData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
        console.log(clinicalDetailData)

    }


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



    const saveClinicalDetails = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId

       try {
        await api.addEntry('clinical',formState.formValues, '3').then((data:any) => {
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



        



        console.log(formState)
        console.log(vlRadioValue)

    }
    

    return (
        <div className="grid">
             <Toast ref={toast} />  
            <form onSubmit={saveClinicalDetails} >


                <div className="grid">

                    <div className="col-12 md:col-6">
                        <div className="card">
                            <h5>Most recent CD4 count</h5>
                            <div className="grid">
                                <div className="col-12 md:col-4">
                                    <div className="field-radiobutton">
                                        <RadioButton
                                            inputId="cd4_known"
                                            name="cd4_known"
                                            value="Yes"
                                            checked={cd4RadioValue === "Yes"}
                                            onChange={(event) => {
                                                setCd4RadioValue(event.value)
                                                formState.formValues.cd4_known = event.target.value
                                                setShowCD4Input(true)

                                            }}

                                        />
                                        <label htmlFor="cd4">Known</label>
                                    </div>
                                </div>
                                <div className="col-12 md:col-4">
                                    <div className="field-radiobutton">
                                        <RadioButton
                                            inputId="option"
                                            name="cd4_known"
                                            value="No"
                                            checked={cd4RadioValue === "No"}
                                            onChange={(event) => {
                                                setCd4RadioValue(event.value)
                                                formState.formValues.cd4_known = event.target.value
                                                formState.formValues.known_cd4_count = ''
                                                setShowCD4Input(false)

                                            }}
                                        />
                                        <label htmlFor="cd4_count_unknown">Unknown</label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">
                                {showCD4Input &&
                                    <div className="p-fluid formgrid grid">
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="known_cd4_count">If known, CD4 count (cells/µL)</label>
                                            <InputText name="known_cd4_count" value={formState.formValues.known_cd4_count || ''} onChange={handleChange} type="text" />
                                        </div>

                                    </div>
                                }


                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-12 date-picker" >
                                        <label htmlFor="name2">Date of Collection (CD4 count)</label>
                                        <InputText name="cd4_count_date" value={formState.formValues.cd4_count_date || ''} onChange={handleChange} type="date" />
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>



                    <div className="col-12 md:col-6">
                        <div className="card">
                            <h5>Most recent Viral load</h5>
                            <div className="grid">
                                <div className="col-12 md:col-4">
                                    <div className="field-radiobutton">
                                        <RadioButton
                                            inputId="viral_load_known"
                                            name="viral_load_known"
                                            value="Yes"
                                            checked={vlRadioValue === "Yes"}
                                            onChange={(event) => {
                                                setVlRadioValue(event.value)
                                                formState.formValues.viral_load_known = event.target.value
                                                setShowVLInput(true)

                                            }}
                                        />
                                        <label htmlFor="option1">Known</label>
                                    </div>
                                </div>
                                <div className="col-12 md:col-4">
                                    <div className="field-radiobutton">
                                        <RadioButton
                                            inputId="viral_load_unknown"
                                            name="viral_load_known"

                                            value="No"
                                            checked={vlRadioValue === "No"}
                                            onChange={(event) => {
                                                setVlRadioValue(event.value)
                                                formState.formValues.viral_load_known = event.target.value
                                                setShowVLInput(false)
                                                formState.formValues.known_viral_load = ''

                                            }}
                                        />
                                        <label htmlFor="viral_load_unknown">Unknown</label>
                                    </div>
                                </div>
                                <div className="col-12 md:col-4">
                                    <div className="field-radiobutton">
                                        <RadioButton
                                            inputId="viralLoadPending"
                                            name="viral_load_known"

                                            value="pending"
                                            checked={vlRadioValue === "pending"}
                                            onChange={(event) => {
                                                setVlRadioValue(event.value)
                                                formState.formValues.viral_load_known = event.target.value
                                                formState.formValues.known_viral_load = ''

                                            }}
                                        />
                                        <label htmlFor="viral_load_unknown">Pending</label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12">
                                {showVLInput &&
                                    <div className="p-fluid formgrid grid">
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="name3"> If known, viral load (copies/ml)</label>
                                            <InputText name="known_viral_load" value={formState.formValues.known_viral_load || ''} onChange={handleChange} type="text" />

                                        </div>

                                    </div>
                                }


                                <div className="p-fluid formgrid grid">
                                    <div className="field col-12 md:col-12">
                                        <label htmlFor="viral_load_date">Date of Collection (viral load)</label>
                                        <InputText name="viral_load_date" value={formState.formValues.viral_load_date || ''} onChange={handleChange} type="date" />
                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>


                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="p-fluid formgrid grid">
                            <div className="field col-12 md:col-6">
                                <label htmlFor="art_start_date">ART Start date</label>
                                <InputText name="art_start_date" value={formState.formValues.art_start_date || ''} onChange={handleChange} type="date" />
                            </div>

                            <div className="field col-12 md:col-12">
                                <label htmlFor="current_art_regimen">Current ART regimen</label>
                                <div className="field-radiobutton field col-12 md:col-12">
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="TDF+3TC +DTG"
                                            checked={formState.formValues.current_art_regimen === "TDF+3TC +DTG"}
                                            onChange={handleChange}
                                        />
                                        TDF+3TC +DTG
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="TDF +3TC +EFV"
                                            checked={formState.formValues.current_art_regimen === "TDF +3TC +EFV"}
                                            onChange={handleChange}
                                        />
                                        TDF +3TC +EFV
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="TDF +3TC +ATV/r"
                                            checked={formState.formValues.current_art_regimen === "TDF +3TC +ATV/r"}
                                            onChange={handleChange}
                                        />
                                        TDF +3TC +ATV/r
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="TDF +3TC +LPV/r"
                                            checked={formState.formValues.current_art_regimen === "TDF +3TC +LPV/r"}
                                            onChange={handleChange}
                                        />
                                        TDF +3TC +LPV/r
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="AZT+3TC +ATV/r"
                                            checked={formState.formValues.current_art_regimen === "AZT+3TC +ATV/r"}
                                            onChange={handleChange}
                                        />
                                        AZT+3TC +ATV/r
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="AZT+3TC + LPV/r"
                                            checked={formState.formValues.current_art_regimen === "AZT+3TC + LPV/r"}
                                            onChange={handleChange}
                                        />
                                        AZT+3TC + LPV/r
                                    </label>
                                    <br />

                                    {/* Add other regimen options similarly */}

                                    {/* Other option with input field */}
                                    <label>
                                        <input
                                            type="radio"
                                            name="current_art_regimen"
                                            value="Other"
                                            checked={formState.formValues.current_art_regimen === "Other"}
                                            onChange={handleChange}
                                        />
                                        Other:
                                        <input
                                            type="text"
                                            name="other_regimen_name"
                                            value={formState.formValues.other_regimen_name || ""}
                                            onChange={handleChange}
                                            disabled={formState.formValues.current_art_regimen !== "Other"} 
                                            // Disable input field if other option is not selected
                                            
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="field col-12 md:col-6">
                                <label htmlFor="last_hiv_visit_date">Date of most recent HIV visit</label>
                                <InputText name="last_hiv_visit_date" value={formState.formValues.last_hiv_visit_date || ''} onChange={handleChange} type="date" />
                            </div>
                            <div className="field col-12 md:col-6">

                                <label htmlFor="otherNames">Has the woman missed any clinic visit in the past 14 days</label>
                                <br></br>
                                <RadioButton
                                    inputId="missed_visits_yes"
                                    name="ever_missed_visit"
                                    value="Yes"
                                    checked={radioValue === "Yes"}
                                    onChange={(event) => {
                                        setRadioValue(event.value)
                                        formState.formValues.ever_missed_visit = event.target.value

                                    }}
                                />
                                <label htmlFor="option1">Yes</label>
                                <RadioButton
                                    inputId="missed_visits_yes"
                                    name="ever_missed_visit"
                                    value="No"
                                    checked={radioValue === "No"}
                                    onChange={(event) => {
                                        setRadioValue(event.value)
                                        formState.formValues.ever_missed_visit = event.target.value

                                    }}
                                />
                                <label htmlFor="missed_visits_no">No</label>
                            </div>


                            <div className="field col-12 md:col-6">
                                <label htmlFor="missed_visits_count">If yes, approximately how many missed visits in the past 14 days</label>
                                <InputText name="missed_visits_count" value={formState.formValues.missed_visits_count || ''} onChange={handleChange} type="text" />
                            </div>

                            <div className="field col-12 md:col-6">
                                <label htmlFor="otherNames">..</label>
                                <Button label="Save" icon="pi pi-save" type="submit" outlined />
                            </div>







                        </div>

                    </div>
                </div>
            </form>




        </div>
    )

}
export default ClinicalDetails

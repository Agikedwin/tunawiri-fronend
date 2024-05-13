"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

import api from "@/app/api/api";





import type { Demo, Page } from "@/types";
import { ProgressBar } from "primereact/progressbar";

import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';



const DepressionPhq9: Page = () => {
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
    const [radioValue8, setRadioValue8] = useState(null);
    const [radioValue9, setRadioValue9] = useState(null);
    const [radioValue10, setRadioValue10] = useState(null);
    const [phq9totalScore, setphq9totalScore] = useState(0); // Total score
    const [selectedUserId, setSelectedUserId] = useState("")

    const [progressBarValue, setProgressBarValue] = useState(0)
    const [colorCode, setColorCode] = useState("")
    const [severity, setSeverity] = useState("")



    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            interest_pleasure: "",
            feeling_depressed: "",
            trouble_sleeping: "",
            feeling_tired: "",
            poor_appetite: "",
            feeling_bad_about_yourself: "",
            trouble_concentrating: "",
            slow_or_restless: "",
            thoughts_of_harming_yourself: "",
            user_id: "",
            phq9_score: 0,
            severity: ""
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




    // Define the scores for each option
    const scores = {
        'Not at all': 0,
        'Several days': 1,
        'More than half the days': 2,
        'Nearly every day': 3
    };

     


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)
    })

    const handleChange = () => {

    }

    const multiplierFactor = (100/27)

   

    const severityRanking = async (data:any, scores:any) => {
        await api.countOccurrences(formState.formValues, scores).then((data:any) =>{
            console.log('Severity count ', data)
            setProgressBarValue(data * multiplierFactor)

            if(data * multiplierFactor >  0 && data * multiplierFactor <= 50){
                setColorCode("green")
                setSeverity("moderate")
            } else if(data * multiplierFactor >  50 && data * multiplierFactor < 70){
                setColorCode("orange")
                setSeverity("Mild")
            }else  if(data * multiplierFactor > 70 ){
                setColorCode("red")
                setSeverity("Severe")
            }
            console.log("Color code  ====== ",data)

        })

    }

    const saveDepressionPhq9 = async (event: any) => {
        event.preventDefault();

        event.preventDefault();
        

        formState.formValues.user_id = selectedUserId
        formState.formValues.phq9_score = Math.ceil((progressBarValue / 3.7))
        formState.formValues.severity = severity

        try {
            await api.addEntry("phq9", formState.formValues, "3").then((data: any) => {
                showSuccess()
                setTimeout(() => {

                    console.log("saving data ---")
                   
                    router.push('/uikit/users/profile/')
              }, 3000);
            })

        } catch (error) {
            console.log(error)

        }



        console.log(formState.formValues)

    }


    return (
        <div>
             <Toast ref={toast} />     

            <div className="card ">
                <form onSubmit={saveDepressionPhq9} >
                    <h5>Depression PHQ-9 questionnaire </h5>
                    <p>Now I am asking you some of the problems that may have experienced in the past TWO weeks. Please tell me how often you have been bothered by the following problems.</p>
                   
                    <div className="card">
                   

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    1. Little interest or pleasure in doing things??
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="interest_pleasure" name="interest_pleasure" value='Not at all' 
                                    checked={radioValue1 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.interest_pleasure = e.target.value
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="ingredient1" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="interest_pleasure" name="interest_pleasure" value="Several days" 
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.interest_pleasure = e.target.value
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === 'Several days'} />
                                <label htmlFor="interest_pleasure" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="interest_pleasure" name="interest_pleasure" value="More than half the days" 
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.interest_pleasure = e.target.value
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === 'More than half the days'} />
                                <label htmlFor="interest_pleasure" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="interest_pleasure" name="interest_pleasure" value="Nearly every day" 
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.interest_pleasure = e.target.value
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === 'Nearly every day'} />
                                <label htmlFor="interest_pleasure" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>2. Feeling down, depressed, or hopeless?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_depressed" name="feeling_depressed" value='Not at all' 
                                    checked={radioValue2 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue2(e.value);
                                        formState.formValues.feeling_depressed = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                />
                                <label htmlFor="feeling_depressed" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_depressed" name="feeling_depressed" value="Several days" 
                                    onChange={(e) => {
                                        setRadioValue2(e.value);
                                        formState.formValues.feeling_depressed = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue2 === 'Several days'}
                                />
                                <label htmlFor="feeling_depressed" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_depressed" name="feeling_depressed" value="More than half the days" 
                                    onChange={(e) => {
                                        setRadioValue2(e.value);
                                        formState.formValues.feeling_depressed = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue2 === 'More than half the days'}
                                />
                                <label htmlFor="feeling_depressed" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_depressed" name="feeling_depressed" value="Nearly every day" 
                                    onChange={(e) => {
                                        setRadioValue2(e.value);
                                        formState.formValues.feeling_depressed = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue2 === 'Nearly every day'}
                                />
                                <label htmlFor="feeling_depressed" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>
                    </div>



                    <div className="card">


                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>3. Troubled falling asleep, staying asleep, or sleeping too much?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value='Not at all'
                                    checked={radioValue3 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue3(e.value);
                                        formState.formValues.trouble_sleeping = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                />
                                <label htmlFor="trouble_sleeping" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue3(e.value);
                                        formState.formValues.trouble_sleeping = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue3 === 'Several days'}
                                />
                                <label htmlFor="trouble_sleeping" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue3(e.value);
                                        formState.formValues.trouble_sleeping = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue3 === 'More than half the days'}
                                />
                                <label htmlFor="trouble_sleeping" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue3(e.value);
                                        formState.formValues.trouble_sleeping = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue3 === 'Nearly every day'}
                                />
                                <label htmlFor="trouble_sleeping" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>4. Feeling tired or having little energy?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_tired" name="feeling_tired" value='Not at all'
                                    checked={radioValue4 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue4(e.value);
                                        formState.formValues.feeling_tired = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                />
                                <label htmlFor="feeling_tired" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_tired" name="feeling_tired" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue4(e.value);
                                        formState.formValues.feeling_tired = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue4 === 'Several days'}
                                />
                                <label htmlFor="feeling_tired" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_tired" name="feeling_tired" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue4(e.value);
                                        formState.formValues.feeling_tired = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue4 === 'More than half the days'}
                                />
                                <label htmlFor="feeling_tired" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_tired" name="feeling_tired" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue4(e.value);
                                        formState.formValues.feeling_tired = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue4 === 'Nearly every day'}
                                />
                                <label htmlFor="feeling_tired" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>5. Poor appetite or overeating?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="poor_appetite" name="poor_appetite" value='Not at all'
                                    checked={radioValue5 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue5(e.value);
                                        formState.formValues.poor_appetite = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                />
                                <label htmlFor="poor_appetite" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="poor_appetite" name="poor_appetite" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue5(e.value);
                                        formState.formValues.poor_appetite = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue5 === 'Several days'}
                                />
                                <label htmlFor="poor_appetite" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="poor_appetite" name="poor_appetite" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue5(e.value);
                                        formState.formValues.poor_appetite = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue5 === 'More than half the days'}
                                />
                                <label htmlFor="poor_appetite" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="poor_appetite" name="poor_appetite" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue5(e.value);
                                        formState.formValues.poor_appetite = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue5 === 'Nearly every day'}
                                />
                                <label htmlFor="poor_appetite" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>6. Feeling bad about yourself - or that you’re a failure or have let yourself or your family down ?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_bad_about_yourself" name="feeling_bad_about_yourself" value='Not at all'
                                    checked={radioValue6 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue6(e.value);
                                        formState.formValues.feeling_bad_about_yourself = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                />
                                <label htmlFor="feeling_bad_about_yourself" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_bad_about_yourself" name="feeling_bad_about_yourself" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue6(e.value);
                                        formState.formValues.feeling_bad_about_yourself = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue6 === 'Several days'}
                                />
                                <label htmlFor="feeling_bad_about_yourself" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_bad_about_yourself" name="feeling_bad_about_yourself" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue6(e.value);
                                        formState.formValues.feeling_bad_about_yourself = e.target.value;
                                        console.log(formState);
                                        severityRanking(formState.formValues,scores)
                                    }}
                                    checked={radioValue6 === 'More than half the days'}
                                />
                                <label htmlFor="feeling_bad_about_yourself" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="feeling_bad_about_yourself" name="feeling_bad_about_yourself" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue6(e.value);
                                        formState.formValues.feeling_bad_about_yourself = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue6 === 'Nearly every day'}
                                />
                                <label htmlFor="feeling_bad_about_yourself" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>7. Trouble concentrating on things, such as reading the newspaper or watching television??</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_concentrating" name="trouble_concentrating" value='Not at all'
                                    checked={radioValue7 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue7(e.value);
                                        formState.formValues.trouble_concentrating = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                />
                                <label htmlFor="trouble_concentrating" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_concentrating" name="trouble_concentrating" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue7(e.value);
                                        formState.formValues.trouble_concentrating = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue7 === 'Several days'}
                                />
                                <label htmlFor="trouble_concentrating" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_concentrating" name="trouble_concentrating" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue7(e.value);
                                        formState.formValues.trouble_concentrating = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue7 === 'More than half the days'}
                                />
                                <label htmlFor="trouble_concentrating" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="trouble_concentrating" name="trouble_concentrating" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue7(e.value);
                                        formState.formValues.trouble_concentrating = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue7 === 'Nearly every day'}
                                />
                                <label htmlFor="trouble_concentrating" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>8. Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="slow_or_restless" name="slow_or_restless" value='Not at all'
                                    checked={radioValue8 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue8(e.value);
                                        formState.formValues.slow_or_restless = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                />
                                <label htmlFor="slow_or_restless" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="slow_or_restless" name="slow_or_restless" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue8(e.value);
                                        formState.formValues.slow_or_restless = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue8 === 'Several days'}
                                />
                                <label htmlFor="slow_or_restless" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="slow_or_restless" name="slow_or_restless" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue8(e.value);
                                        formState.formValues.slow_or_restless = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue8 === 'More than half the days'}
                                />
                                <label htmlFor="slow_or_restless" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="slow_or_restless" name="slow_or_restless" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue8(e.value);
                                        formState.formValues.slow_or_restless = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue8 === 'Nearly every day'}
                                />
                                <label htmlFor="slow_or_restless" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <div className="card">

                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>9. Thoughts that you would be better off dead or of hurting yourself in some way?</i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="thoughts_of_harming_yourself" name="thoughts_of_harming_yourself" value='Not at all'
                                    checked={radioValue9 === 'Not at all'}
                                    onChange={(e) => {
                                        setRadioValue9(e.value);
                                        formState.formValues.thoughts_of_harming_yourself = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                />
                                <label htmlFor="thoughts_of_harming_yourself" className="ml-2">Not at all</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="thoughts_of_harming_yourself" name="thoughts_of_harming_yourself" value="Several days"
                                    onChange={(e) => {
                                        setRadioValue9(e.value);
                                        formState.formValues.thoughts_of_harming_yourself = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue9 === 'Several days'}
                                />
                                <label htmlFor="thoughts_of_harming_yourself" className="ml-2">Several days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="thoughts_of_harming_yourself" name="thoughts_of_harming_yourself" value="More than half the days"
                                    onChange={(e) => {
                                        setRadioValue9(e.value);
                                        formState.formValues.thoughts_of_harming_yourself = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue9 === 'More than half the days'}
                                />
                                <label htmlFor="thoughts_of_harming_yourself" className="ml-2">More than half the days</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="thoughts_of_harming_yourself" name="thoughts_of_harming_yourself" value="Nearly every day"
                                    onChange={(e) => {
                                        setRadioValue9(e.value);
                                        formState.formValues.thoughts_of_harming_yourself = e.target.value;
                                        severityRanking(formState.formValues,scores)
                                        console.log(formState);
                                    }}
                                    checked={radioValue9 === 'Nearly every day'}
                                />
                                <label htmlFor="thoughts_of_harming_yourself" className="ml-2">Nearly every day</label>
                            </div>
                        </div>
                        <br></br>

                    </div>

                    <div >
                    <span id="label_status">{severity}</span>
                    <ProgressBar color={colorCode} value={Math.ceil(progressBarValue ) } style={{ height: '15px' }}></ProgressBar>
                    <br></br>

                    
                    </div>

                   
                    <div className="grid">
                    <Button label="Save" icon="pi pi-save" type="submit"  outlined/>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default DepressionPhq9

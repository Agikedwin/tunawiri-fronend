"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import type { Demo, Page } from "@/types";
import api from "@/app/api/api";



const HarvardTrauma: Page = () => {
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
    const [radioValue25, setRadioValue25] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState("")




    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            thoughts_memories: "",
            feeling_as_though_event_happening_again: "",
            recurrent_nightmares: "",
            feeling_detached_withdrawn: "",
            unable_to_feel_emotions: "",
            feeling_jumpy_easily_startled: "",
            difficulty_concentrating: "",
            trouble_sleeping: "",
            feeling_on_guard: "",
            feeling_irritable_or_angry: "",
            avoiding_activities_remind_of_event: "",
             less_interest_in_daily_activities: "",
            feeling_no_future: "",
            sudden_emotional_physical_reaction: "",
            avoiding_thoughts_feelings_associated_with_event: "",
            feeling_world_is_dangerous_place: "",
            feeling_you_are_bad_person: "",
            blaming_yourself_for_traumatic_event: "",
            strong_feeling_of_fear_horror_anger_guilt_shame: "",
            difficulty_feeling_love_or_happiness: "",
            taking_risks_that_may_harm_yourself_or_others: "",
            feeling_damaged_by_traumatic_vent: "",
            feeling_something_reminds_you_of_trauma_like_a_dream: "",
            feeling_people_or_objects_around_you_are_strange_or_not_real: "",
            user_id: "",
        }
    });
    // Define the score for each choice
    const scoreMapping = {
        '0 days in past week': 0,
        '1, 2, or 3 days in past week': 1,
        '4 or 5 days in the past week': 2,
        'Every day of past week or 6 days': 3,
    };

    // Calculate total score
    let totalScore = 0;
    /* totalScore += scoreMapping[radioValue1];
    totalScore += scoreMapping[radioValue2];
    totalScore += scoreMapping[radioValue3];
    totalScore += scoreMapping[radioValue4];
    totalScore += scoreMapping[radioValue5];
    totalScore += scoreMapping[radioValue6];
    totalScore += scoreMapping[radioValue7];
    totalScore += scoreMapping[radioValue8];
    totalScore += scoreMapping[radioValue9];
    totalScore += scoreMapping[radioValue10];
    totalScore += scoreMapping[radioValue11];
    totalScore += scoreMapping[radioValue12];
    totalScore += scoreMapping[radioValue13];
    totalScore += scoreMapping[radioValue14];
    totalScore += scoreMapping[radioValue15];
    totalScore += scoreMapping[radioValue16];
    totalScore += scoreMapping[radioValue17];
    totalScore += scoreMapping[radioValue18];
    totalScore += scoreMapping[radioValue19];
    totalScore += scoreMapping[radioValue20];
    totalScore += scoreMapping[radioValue21];
    totalScore += scoreMapping[radioValue22];
    totalScore += scoreMapping[radioValue23];
    totalScore += scoreMapping[radioValue24];
    totalScore += scoreMapping[radioValue25]; */

    // Calculate final score
    const finalScore = totalScore / 25;

    // Determine color based on final score
    const color = finalScore <= 2.5 ? '#90ee90' : 'red';

    const handleChange = () => {

    }
    // Determine severity based on final score
    let severity;
    if (finalScore <= 2.5) {
        severity = 'Negative PTSD';
    } else {
        severity = 'Positive PTSD';
    }

    const saveHarvardTrauma = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("harvardTrauma", formState.formValues, "3").then((data: any) => {
                console.log(data)
            })

        } catch (error) {
            console.log(error)

        }




        console.log(formState.formValues)

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)
    })

    return (
        <div>

            <div className="card ">
                <form onSubmit={saveHarvardTrauma} >
                    <h5>Harvard Trauma questionnaires </h5>
                    
                    <p>
                        I am going to read a set of statements, please decide how much the symptoms bothered you in the PAST WEEK
                        </p>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                1. Have you had many thoughts or memories of the most hurtful or terrifying events?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_memories" name="thoughts_memories" value='0 days in past week'
                                checked={radioValue1 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.thoughts_memories = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_memories" name="thoughts_memories" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.thoughts_memories = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue1 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="thoughts_memories" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_memories" name="thoughts_memories" value='4 or 5 days in the past week'
                                checked={radioValue1 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.thoughts_memories = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="thoughts_memories" name="thoughts_memories" value='Every day of past week or 6 days'
                                checked={radioValue1 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue1(e.value)
                                    formState.formValues.thoughts_memories = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                2. Feeling as though the event is happening again?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_as_though_event_happening_again" name="feeling_as_though_event_happening_again" value='0 days in past week'
                                checked={radioValue2 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.feeling_as_though_event_happening_again = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_as_though_event_happening_again" name="feeling_as_though_event_happening_again" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.feeling_as_though_event_happening_again = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue2 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_as_though_event_happening_again" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_as_though_event_happening_again" name="feeling_as_though_event_happening_again" value='4 or 5 days in the past week'
                                checked={radioValue2 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.feeling_as_though_event_happening_again = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_as_though_event_happening_again" name="feeling_as_though_event_happening_again" value='Every day of past week or 6 days'
                                checked={radioValue2 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue2(e.value)
                                    formState.formValues.feeling_as_though_event_happening_again = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                3. Recurrent nightmares?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="recurrent_nightmares" name="recurrent_nightmares" value='0 days in past week'
                                checked={radioValue3 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.recurrent_nightmares = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="recurrent_nightmares" name="recurrent_nightmares" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.recurrent_nightmares = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue3 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="recurrent_nightmares" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="recurrent_nightmares" name="recurrent_nightmares" value='4 or 5 days in the past week'
                                checked={radioValue3 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.recurrent_nightmares = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="recurrent_nightmares" name="recurrent_nightmares" value='Every day of past week or 6 days'
                                checked={radioValue3 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue3(e.value)
                                    formState.formValues.recurrent_nightmares = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                4. Feeling detached or withdrawn from people?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_detached_withdrawn" name="feeling_detached_withdrawn" value='0 days in past week'
                                checked={radioValue4 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.feeling_detached_withdrawn = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_detached_withdrawn" name="feeling_detached_withdrawn" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.feeling_detached_withdrawn = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue4 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_detached_withdrawn" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_detached_withdrawn" name="feeling_detached_withdrawn" value='4 or 5 days in the past week'
                                checked={radioValue4 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.feeling_detached_withdrawn = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_detached_withdrawn" name="feeling_detached_withdrawn" value='Every day of past week or 6 days'
                                checked={radioValue4 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue4(e.value)
                                    formState.formValues.feeling_detached_withdrawn = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                5. Unable to feel emotions?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="unable_to_feel_emotions" name="unable_to_feel_emotions" value='0 days in past week'
                                checked={radioValue5 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.unable_to_feel_emotions = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="unable_to_feel_emotions" name="unable_to_feel_emotions" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.unable_to_feel_emotions = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue5 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="unable_to_feel_emotions" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="unable_to_feel_emotions" name="unable_to_feel_emotions" value='4 or 5 days in the past week'
                                checked={radioValue5 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.unable_to_feel_emotions = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="unable_to_feel_emotions" name="unable_to_feel_emotions" value='Every day of past week or 6 days'
                                checked={radioValue5 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue5(e.value)
                                    formState.formValues.unable_to_feel_emotions = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                    </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                6. Feeling jumpy, easily startled?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_jumpy_easily_startled" name="feeling_jumpy_easily_startled" value='0 days in past week'
                                checked={radioValue6 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.feeling_jumpy_easily_startled = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_jumpy_easily_startled" name="feeling_jumpy_easily_startled" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.feeling_jumpy_easily_startled = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue6 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_jumpy_easily_startled" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_jumpy_easily_startled" name="feeling_jumpy_easily_startled" value='4 or 6 days in the past week'
                                checked={radioValue6 === '4 or 6 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.feeling_jumpy_easily_startled = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_jumpy_easily_startled" name="feeling_jumpy_easily_startled" value='Every day of past week or 6 days'
                                checked={radioValue6 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue6(e.value)
                                    formState.formValues.feeling_jumpy_easily_startled = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                7. Difficulty concentrating?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_concentrating" name="difficulty_concentrating" value='0 days in past week'
                                checked={radioValue7 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.difficulty_concentrating = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_concentrating" name="difficulty_concentrating" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.difficulty_concentrating = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue7 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="difficulty_concentrating" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_concentrating" name="difficulty_concentrating" value='4 or 7 days in the past week'
                                checked={radioValue7 === '4 or 7 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.difficulty_concentrating = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_concentrating" name="difficulty_concentrating" value='Every day of past week or 7 days'
                                checked={radioValue7 === 'Every day of past week or 7 days'}
                                onChange={(e) => {
                                    setRadioValue7(e.value)
                                    formState.formValues.difficulty_concentrating = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                8. Trouble sleeping?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value='0 days in past week'
                                checked={radioValue8 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.trouble_sleeping = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.trouble_sleeping = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue8 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="trouble_sleeping" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value='4 or 8 days in the past week'
                                checked={radioValue8 === '4 or 8 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.trouble_sleeping = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="trouble_sleeping" name="trouble_sleeping" value='Every day of past week or 8 days'
                                checked={radioValue8 === 'Every day of past week or 8 days'}
                                onChange={(e) => {
                                    setRadioValue8(e.value)
                                    formState.formValues.trouble_sleeping = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                9. Trouble sleeping?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_on_guard" name="feeling_on_guard" value='0 days in past week'
                                checked={radioValue9 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.feeling_on_guard = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_on_guard" name="feeling_on_guard" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.feeling_on_guard = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue9 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_on_guard" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_on_guard" name="feeling_on_guard" value='4 or 9 days in the past week'
                                checked={radioValue9 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.feeling_on_guard = e.target.value
                                    console.log(formState)
                                }
                                } />
                                <label htmlFor="feeling_on_guard" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_on_guard" name="feeling_on_guard" value='Every day of past week or 6 days'
                                checked={radioValue9 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue9(e.value)
                                    formState.formValues.feeling_on_guard = e.target.value
                                    console.log(formState)
                                }
                                } />
                                <label htmlFor="feeling_on_guard" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                10. Feeling irritable or having outbursts of anger?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_irritable_or_angry" name="feeling_irritable_or_angry" value='0 days in past week'
                                checked={radioValue10 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.feeling_irritable_or_angry = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_irritable_or_angry" name="feeling_irritable_or_angry" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.feeling_irritable_or_angry = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue10 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_irritable_or_angry" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_irritable_or_angry" name="feeling_irritable_or_angry" value='4 or 10 days in the past week'
                                checked={radioValue10 === '4 or 10 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.feeling_irritable_or_angry = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_irritable_or_angry" name="feeling_irritable_or_angry" value='Every day of past week or 6 days'
                                checked={radioValue10 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue10(e.value)
                                    formState.formValues.feeling_irritable_or_angry = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                11. Avoiding activities that remind you of the traumatic or hurtful event?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='0 days in past week'
                                checked={radioValue11 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue11(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue11(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue11 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="avoiding_activities_remind_of_event" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='4 or 5 days in the past week'
                                checked={radioValue11 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue11(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='Every day of past week or 6 days'
                                checked={radioValue11 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue11(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                12. Inability to remember parts of the most traumatic or hurtful events?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='0 days in past week'
                                checked={radioValue12 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue12(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue12(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue12 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="avoiding_activities_remind_of_event" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='4 or 5 days in the past week'
                                checked={radioValue12 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue12(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_activities_remind_of_event" name="avoiding_activities_remind_of_event" value='Every day of past week or 6 days'
                                checked={radioValue12 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue12(e.value)
                                    formState.formValues.avoiding_activities_remind_of_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                13. Inability to remember parts of the most traumatic or hurtful events?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="less_interest_in_daily_activities" name="less_interest_in_daily_activities" value='0 days in past week'
                                checked={radioValue13 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue13(e.value)
                                    formState.formValues.less_interest_in_daily_activities = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="less_interest_in_daily_activities" name="less_interest_in_daily_activities" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue13(e.value)
                                    formState.formValues.less_interest_in_daily_activities = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue13 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="less_interest_in_daily_activities" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="less_interest_in_daily_activities" name="less_interest_in_daily_activities" value='4 or 5 days in the past week'
                                checked={radioValue13 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue13(e.value)
                                    formState.formValues.less_interest_in_daily_activities = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="less_interest_in_daily_activities" name="less_interest_in_daily_activities" value='Every day of past week or 6 days'
                                checked={radioValue13 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue13(e.value)
                                    formState.formValues.less_interest_in_daily_activities = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                14. Feeling as if you don't have a future?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_no_future" name="feeling_no_future" value='0 days in past week'
                                checked={radioValue14 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue14(e.value)
                                    formState.formValues.feeling_no_future = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_no_future" name="feeling_no_future" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue14(e.value)
                                    formState.formValues.feeling_no_future = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue14 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_no_future" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_no_future" name="feeling_no_future" value='4 or 5 days in the past week'
                                checked={radioValue14 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue14(e.value)
                                    formState.formValues.feeling_no_future = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_no_future" name="feeling_no_future" value='Every day of past week or 6 days'
                                checked={radioValue14 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue14(e.value)
                                    formState.formValues.feeling_no_future = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                15.Had a sudden emotional or physical reaction when reminded of the most traumatic or hurtful events ?

                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sudden_emotional_physical_reaction" name="sudden_emotional_physical_reaction" value='0 days in past week'
                                checked={radioValue15 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue15(e.value)
                                    formState.formValues.sudden_emotional_physical_reaction = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sudden_emotional_physical_reaction" name="sudden_emotional_physical_reaction" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue15(e.value)
                                    formState.formValues.sudden_emotional_physical_reaction = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue15 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="sudden_emotional_physical_reaction" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sudden_emotional_physical_reaction" name="sudden_emotional_physical_reaction" value='4 or 5 days in the past week'
                                checked={radioValue15 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue15(e.value)
                                    formState.formValues.sudden_emotional_physical_reaction = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="sudden_emotional_physical_reaction" name="sudden_emotional_physical_reaction" value='Every day of past week or 6 days'
                                checked={radioValue15 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue15(e.value)
                                    formState.formValues.sudden_emotional_physical_reaction = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                16.Avoiding thoughts or feelings associated with the traumatic or hurtful experiences ?
                                ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_thoughts_feelings_associated_with_event" name="avoiding_thoughts_feelings_associated_with_event" value='0 days in past week'
                                checked={radioValue16 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue16(e.value)
                                    formState.formValues.avoiding_thoughts_feelings_associated_with_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_thoughts_feelings_associated_with_event" name="avoiding_thoughts_feelings_associated_with_event" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue16(e.value)
                                    formState.formValues.avoiding_thoughts_feelings_associated_with_event = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue16 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="avoiding_thoughts_feelings_associated_with_event" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_thoughts_feelings_associated_with_event" name="avoiding_thoughts_feelings_associated_with_event" value='4 or 5 days in the past week'
                                checked={radioValue16 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue16(e.value)
                                    formState.formValues.avoiding_thoughts_feelings_associated_with_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="avoiding_thoughts_feelings_associated_with_event" name="avoiding_thoughts_feelings_associated_with_event" value='Every day of past week or 6 days'
                                checked={radioValue16 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue16(e.value)
                                    formState.formValues.avoiding_thoughts_feelings_associated_with_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                17.Feeling that the world is a very dangerous place ?
                                ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_world_is_dangerous_place" name="feeling_world_is_dangerous_place" value='0 days in past week'
                                checked={radioValue17 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue17(e.value)
                                    formState.formValues.feeling_world_is_dangerous_place = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_world_is_dangerous_place" name="feeling_world_is_dangerous_place" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue17(e.value)
                                    formState.formValues.feeling_world_is_dangerous_place = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue17 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_world_is_dangerous_place" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_world_is_dangerous_place" name="feeling_world_is_dangerous_place" value='4 or 5 days in the past week'
                                checked={radioValue17 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue17(e.value)
                                    formState.formValues.feeling_world_is_dangerous_place = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_world_is_dangerous_place" name="feeling_world_is_dangerous_place" value='Every day of past week or 6 days'
                                checked={radioValue17 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue17(e.value)
                                    formState.formValues.feeling_world_is_dangerous_place = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                18.Feeling that you are a bad person ?
                                ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_you_are_bad_person" name="feeling_you_are_bad_person" value='0 days in past week'
                                checked={radioValue18 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue18(e.value)
                                    formState.formValues.feeling_you_are_bad_person = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_you_are_bad_person" name="feeling_you_are_bad_person" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue18(e.value)
                                    formState.formValues.feeling_you_are_bad_person = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue18 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_you_are_bad_person" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_you_are_bad_person" name="feeling_you_are_bad_person" value='4 or 5 days in the past week'
                                checked={radioValue18 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue18(e.value)
                                    formState.formValues.feeling_you_are_bad_person = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_you_are_bad_person" name="feeling_you_are_bad_person" value='Every day of past week or 6 days'
                                checked={radioValue18 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue18(e.value)
                                    formState.formValues.feeling_you_are_bad_person = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                19.Blaming yourself for the traumatic event ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="blaming_yourself_for_traumatic_event" name="blaming_yourself_for_traumatic_event" value='0 days in past week'
                                checked={radioValue19 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue19(e.value)
                                    formState.formValues.blaming_yourself_for_traumatic_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="blaming_yourself_for_traumatic_event" name="blaming_yourself_for_traumatic_event" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue19(e.value)
                                    formState.formValues.blaming_yourself_for_traumatic_event = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue19 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="blaming_yourself_for_traumatic_event" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="blaming_yourself_for_traumatic_event" name="blaming_yourself_for_traumatic_event" value='4 or 5 days in the past week'
                                checked={radioValue19 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue19(e.value)
                                    formState.formValues.blaming_yourself_for_traumatic_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="blaming_yourself_for_traumatic_event" name="blaming_yourself_for_traumatic_event" value='Every day of past week or 6 days'
                                checked={radioValue19 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue19(e.value)
                                    formState.formValues.blaming_yourself_for_traumatic_event = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                20.Strong feeling of fear, horror, anger, guilt or shame when thinking about the traumatic event ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="strong_feeling_of_fear_horror_anger_guilt_shame" name="strong_feeling_of_fear_horror_anger_guilt_shame" value='0 days in past week'
                                checked={radioValue20 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue20(e.value)
                                    formState.formValues.strong_feeling_of_fear_horror_anger_guilt_shame = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="strong_feeling_of_fear_horror_anger_guilt_shame" name="strong_feeling_of_fear_horror_anger_guilt_shame" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue20(e.value)
                                    formState.formValues.strong_feeling_of_fear_horror_anger_guilt_shame = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue20 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="strong_feeling_of_fear_horror_anger_guilt_shame" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="strong_feeling_of_fear_horror_anger_guilt_shame" name="strong_feeling_of_fear_horror_anger_guilt_shame" value='4 or 5 days in the past week'
                                checked={radioValue20 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue20(e.value)
                                    formState.formValues.strong_feeling_of_fear_horror_anger_guilt_shame = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="strong_feeling_of_fear_horror_anger_guilt_shame" name="strong_feeling_of_fear_horror_anger_guilt_shame" value='Every day of past week or 6 days'
                                checked={radioValue20 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue20(e.value)
                                    formState.formValues.strong_feeling_of_fear_horror_anger_guilt_shame = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                21.Difficulty feeling love or happiness ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_feeling_love_or_happiness" name="difficulty_feeling_love_or_happiness" value='0 days in past week'
                                checked={radioValue21 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue21(e.value)
                                    formState.formValues.difficulty_feeling_love_or_happiness = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_feeling_love_or_happiness" name="difficulty_feeling_love_or_happiness" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue21(e.value)
                                    formState.formValues.difficulty_feeling_love_or_happiness = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue21 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="difficulty_feeling_love_or_happiness" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_feeling_love_or_happiness" name="difficulty_feeling_love_or_happiness" value='4 or 5 days in the past week'
                                checked={radioValue21 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue21(e.value)
                                    formState.formValues.difficulty_feeling_love_or_happiness = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="difficulty_feeling_love_or_happiness" name="difficulty_feeling_love_or_happiness" value='Every day of past week or 6 days'
                                checked={radioValue21 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue21(e.value)
                                    formState.formValues.difficulty_feeling_love_or_happiness = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                22.Taking risks that may harm yourself or others ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="taking_risks_that_may_harm_yourself_or_others" name="taking_risks_that_may_harm_yourself_or_others" value='0 days in past week'
                                checked={radioValue22 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue22(e.value)
                                    formState.formValues.taking_risks_that_may_harm_yourself_or_others = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="taking_risks_that_may_harm_yourself_or_others" name="taking_risks_that_may_harm_yourself_or_others" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue22(e.value)
                                    formState.formValues.taking_risks_that_may_harm_yourself_or_others = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue22 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="taking_risks_that_may_harm_yourself_or_others" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="taking_risks_that_may_harm_yourself_or_others" name="taking_risks_that_may_harm_yourself_or_others" value='4 or 5 days in the past week'
                                checked={radioValue22 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue22(e.value)
                                    formState.formValues.taking_risks_that_may_harm_yourself_or_others = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="taking_risks_that_may_harm_yourself_or_others" name="taking_risks_that_may_harm_yourself_or_others" value='Every day of past week or 6 days'
                                checked={radioValue22 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue22(e.value)
                                    formState.formValues.taking_risks_that_may_harm_yourself_or_others = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                23.Feeling like you have been damaged as a person by the traumatic event ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_damaged_by_traumatic_vent" name="feeling_damaged_by_traumatic_vent" value='0 days in past week'
                                checked={radioValue23 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue23(e.value)
                                    formState.formValues.feeling_damaged_by_traumatic_vent = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_damaged_by_traumatic_vent" name="feeling_damaged_by_traumatic_vent" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue23(e.value)
                                    formState.formValues.feeling_damaged_by_traumatic_vent = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue23 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_damaged_by_traumatic_vent" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_damaged_by_traumatic_vent" name="feeling_damaged_by_traumatic_vent" value='4 or 5 days in the past week'
                                checked={radioValue23 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue23(e.value)
                                    formState.formValues.feeling_damaged_by_traumatic_vent = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_damaged_by_traumatic_vent" name="feeling_damaged_by_traumatic_vent" value='Every day of past week or 6 days'
                                checked={radioValue23 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue23(e.value)
                                    formState.formValues.feeling_damaged_by_traumatic_vent = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                24.Feeling as if something reminds you of the trauma but it feels like a dream, that it is not happening to you, and/or that it is not real ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_something_reminds_you_of_trauma_like_a_dream" name="feeling_something_reminds_you_of_trauma_like_a_dream" value='0 days in past week'
                                checked={radioValue24 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue24(e.value)
                                    formState.formValues.feeling_something_reminds_you_of_trauma_like_a_dream = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_something_reminds_you_of_trauma_like_a_dream" name="feeling_something_reminds_you_of_trauma_like_a_dream" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue24(e.value)
                                    formState.formValues.feeling_something_reminds_you_of_trauma_like_a_dream = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue24 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_something_reminds_you_of_trauma_like_a_dream" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_something_reminds_you_of_trauma_like_a_dream" name="feeling_something_reminds_you_of_trauma_like_a_dream" value='4 or 5 days in the past week'
                                checked={radioValue24 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue24(e.value)
                                    formState.formValues.feeling_something_reminds_you_of_trauma_like_a_dream = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_something_reminds_you_of_trauma_like_a_dream" name="feeling_something_reminds_you_of_trauma_like_a_dream" value='Every day of past week or 6 days'
                                checked={radioValue24 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue24(e.value)
                                    formState.formValues.feeling_something_reminds_you_of_trauma_like_a_dream = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
            <br></br>
            <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                25.Feeling people or objects around you are strange or not real ?
                            </i> </h6>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_people_or_objects_around_you_are_strange_or_not_real" name="feeling_people_or_objects_around_you_are_strange_or_not_real" value='0 days in past week'
                                checked={radioValue25 === '0 days in past week'}
                                onChange={(e) => {
                                    setRadioValue25(e.value)
                                    formState.formValues.feeling_people_or_objects_around_you_are_strange_or_not_real = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">0 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_people_or_objects_around_you_are_strange_or_not_real" name="feeling_people_or_objects_around_you_are_strange_or_not_real" value="1, 2, or 3 days in past week"
                                onChange={(e) => {
                                    setRadioValue25(e.value)
                                    formState.formValues.feeling_people_or_objects_around_you_are_strange_or_not_real = e.target.value
                                    console.log(formState)
                                }
                                }
                                checked={radioValue25 === '1, 2, or 3 days in past week'} />
                            <label htmlFor="feeling_people_or_objects_around_you_are_strange_or_not_real" className="ml-2">1, 2, or 3 days in past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_people_or_objects_around_you_are_strange_or_not_real" name="feeling_people_or_objects_around_you_are_strange_or_not_real" value='4 or 5 days in the past week'
                                checked={radioValue25 === '4 or 5 days in the past week'}
                                onChange={(e) => {
                                    setRadioValue25(e.value)
                                    formState.formValues.feeling_people_or_objects_around_you_are_strange_or_not_real = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">4 or 5 days in the past week</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="feeling_people_or_objects_around_you_are_strange_or_not_real" name="feeling_people_or_objects_around_you_are_strange_or_not_real" value='Every day of past week or 6 days'
                                checked={radioValue25 === 'Every day of past week or 6 days'}
                                onChange={(e) => {
                                    setRadioValue25(e.value)
                                    formState.formValues.feeling_people_or_objects_around_you_are_strange_or_not_real = e.target.value
                                    console.log(formState)
                                }
                                } />
                            <label htmlFor="ingredient1" className="ml-2">Every day of past week or 6 days</label>
                        </div>

                </div>
                    </div>
                    <br></br>
                    <div className='card' style={{ backgroundColor: color }}>
                        <p>Total Score: {finalScore}</p>
                        <p>Severity: {severity}</p>
                    </div>

                    <Button label="Save" icon="pi pi-save" type="submit" />

               </form>
            </div >
            </div>
        
    )
}
export default HarvardTrauma

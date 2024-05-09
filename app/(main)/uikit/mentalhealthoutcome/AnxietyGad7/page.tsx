"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";





import type { Demo, Page } from "@/types";


const AnxietyGad7: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [radioValue1, setRadioValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);
    const [gad7totalScore, setgad7totalScore] = useState(0); // Total score

    const [selectedUserId, setSelectedUserId] = useState("")





    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
             feeling_nervous_anxious: "",
             not_able_to_stop_worrying: "",
             worrying_too_much: "",
             trouble_relaxing: "",
             restless_difficulty_sitting_still: "",
             easily_annoyed_irritable: "",
             feeling_afraid_something_awful_might_happen: "",
             user_id: "",
        }
    });

    const handleChange = () => {

    }

    const saveAnxietyGad7 =  async (event: any)=>{
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("gad7Scale", formState.formValues, "3").then((data: any) => {
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
        <form onSubmit={saveAnxietyGad7} >
        <h5>Anxiety Gad 7 scale </h5>
        <h6>The next questions are about feelings and events that may have occurred in the past TWO WEEKS.
                        Over the last two weeks, how often have you been bothered by the following problems?</h6>
                    <div className="card">
        <div className="flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                      <h6><i>1. Feeling nervous, anxious, or on edge?</i></h6>
                  </div>
                  <div className="flex align-items-center">
                      <RadioButton inputId="feeling_nervous_anxious" name="feeling_nervous_anxious" value='Not at all'
                          checked={radioValue1 === 'Not at all'}
                          onChange={(e) => {
                              setRadioValue1(e.value);
                              formState.formValues.feeling_nervous_anxious = e.target.value;
                              console.log(formState);
                          }}
                      />
                      <label htmlFor="feeling_nervous_anxious" className="ml-2">Not at all</label>
                  </div>
                  <div className="flex align-items-center">
                      <RadioButton inputId="feeling_nervous_anxious" name="feeling_nervous_anxious" value="Several days"
                          onChange={(e) => {
                              setRadioValue1(e.value);
                              formState.formValues.feeling_nervous_anxious = e.target.value;
                              console.log(formState);
                          }}
                          checked={radioValue1 === 'Several days'}
                      />
                      <label htmlFor="feeling_nervous_anxious" className="ml-2">Several days</label>
                  </div>
                  <div className="flex align-items-center">
                      <RadioButton inputId="feeling_nervous_anxious" name="feeling_nervous_anxious" value="More than half the days"
                          onChange={(e) => {
                              setRadioValue1(e.value);
                              formState.formValues.feeling_nervous_anxious = e.target.value;
                              console.log(formState);
                          }}
                          checked={radioValue1 === 'More than half the days'}
                      />
                      <label htmlFor="feeling_nervous_anxious" className="ml-2">More than half the days</label>
                  </div>
                  <div className="flex align-items-center">
                      <RadioButton inputId="feeling_nervous_anxious" name="feeling_nervous_anxious" value="Nearly every day"
                          onChange={(e) => {
                              setRadioValue1(e.value);
                              formState.formValues.feeling_nervous_anxious = e.target.value;
                              console.log(formState);
                          }}
                          checked={radioValue1 === 'Nearly every day'}
                      />
                      <label htmlFor="feeling_nervous_anxious" className="ml-2">Nearly every day</label>
                  </div>
                        </div>
              </div>
                    <br></br>
                    <div className="card">
     <div className="flex flex-wrap gap-3">
               <div className="flex align-items-center">
                   <h6><i>2. Not being able to stop or control worrying?</i></h6>
               </div>
               <div className="flex align-items-center">
                   <RadioButton inputId="not_able_to_stop_worrying" name="not_able_to_stop_worrying" value='Not at all'
                       checked={radioValue2 === 'Not at all'}
                       onChange={(e) => {
                           setRadioValue2(e.value);
                           formState.formValues.not_able_to_stop_worrying = e.target.value;
                           console.log(formState);
                       }}
                   />
                   <label htmlFor="not_able_to_stop_worrying" className="ml-2">Not at all</label>
               </div>
               <div className="flex align-items-center">
                   <RadioButton inputId="not_able_to_stop_worrying" name="not_able_to_stop_worrying" value="Several days"
                       onChange={(e) => {
                           setRadioValue2(e.value);
                           formState.formValues.not_able_to_stop_worrying = e.target.value;
                           console.log(formState);
                       }}
                       checked={radioValue2 === 'Several days'}
                   />
                   <label htmlFor="not_able_to_stop_worrying" className="ml-2">Several days</label>
               </div>
               <div className="flex align-items-center">
                   <RadioButton inputId="not_able_to_stop_worrying" name="not_able_to_stop_worrying" value="More than half the days"
                       onChange={(e) => {
                           setRadioValue2(e.value);
                           formState.formValues.not_able_to_stop_worrying = e.target.value;
                           console.log(formState);
                       }}
                       checked={radioValue2 === 'More than half the days'}
                   />
                   <label htmlFor="not_able_to_stop_worrying" className="ml-2">More than half the days</label>
               </div>
               <div className="flex align-items-center">
                   <RadioButton inputId="not_able_to_stop_worrying" name="not_able_to_stop_worrying" value="Nearly every day"
                       onChange={(e) => {
                           setRadioValue2(e.value);
                           formState.formValues.not_able_to_stop_worrying = e.target.value;
                           console.log(formState);
                       }}
                       checked={radioValue2 === 'Nearly every day'}
                   />
                   <label htmlFor="not_able_to_stop_worrying" className="ml-2">Nearly every day</label>
               </div>
                        </div>
           </div>
                    <br></br>
                    <div className="card">
      <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <h6><i>3. Worrying too much about different things?</i></h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="worrying_too_much" name="worrying_too_much" value='Not at all'
                        checked={radioValue3 === 'Not at all'}
                        onChange={(e) => {
                            setRadioValue3(e.value);
                            formState.formValues.worrying_too_much = e.target.value;
                            console.log(formState);
                        }}
                    />
                    <label htmlFor="worrying_too_much" className="ml-3">Not at all</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="worrying_too_much" name="worrying_too_much" value="Several days"
                        onChange={(e) => {
                            setRadioValue3(e.value);
                            formState.formValues.worrying_too_much = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue3 === 'Several days'}
                    />
                    <label htmlFor="worrying_too_much" className="ml-3">Several days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="worrying_too_much" name="worrying_too_much" value="More than half the days"
                        onChange={(e) => {
                            setRadioValue3(e.value);
                            formState.formValues.worrying_too_much = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue3 === 'More than half the days'}
                    />
                    <label htmlFor="worrying_too_much" className="ml-3">More than half the days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="worrying_too_much" name="worrying_too_much" value="Nearly every day"
                        onChange={(e) => {
                            setRadioValue3(e.value);
                            formState.formValues.worrying_too_much = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue3 === 'Nearly every day'}
                    />
                    <label htmlFor="worrying_too_much" className="ml-3">Nearly every day</label>
                </div>
                        </div>
            </div>
            <br></br>
                    <div className="card">
       <div className="flex flex-wrap gap-4">
                 <div className="flex align-items-center">
                     <h6><i>4. Trouble relaxing?</i></h6>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="trouble_relaxing" name="trouble_relaxing" value='Not at all'
                         checked={radioValue4 === 'Not at all'}
                         onChange={(e) => {
                             setRadioValue4(e.value);
                             formState.formValues.trouble_relaxing = e.target.value;
                             console.log(formState);
                         }}
                     />
                     <label htmlFor="trouble_relaxing" className="ml-4">Not at all</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="trouble_relaxing" name="trouble_relaxing" value="Several days"
                         onChange={(e) => {
                             setRadioValue4(e.value);
                             formState.formValues.trouble_relaxing = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue4 === 'Several days'}
                     />
                     <label htmlFor="trouble_relaxing" className="ml-4">Several days</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="trouble_relaxing" name="trouble_relaxing" value="More than half the days"
                         onChange={(e) => {
                             setRadioValue4(e.value);
                             formState.formValues.trouble_relaxing = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue4 === 'More than half the days'}
                     />
                     <label htmlFor="trouble_relaxing" className="ml-4">More than half the days</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="trouble_relaxing" name="trouble_relaxing" value="Nearly every day"
                         onChange={(e) => {
                             setRadioValue4(e.value);
                             formState.formValues.trouble_relaxing = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue4 === 'Nearly every day'}
                     />
                     <label htmlFor="trouble_relaxing" className="ml-4">Nearly every day</label>
                 </div>
                        </div>
             </div>
                    <br></br>
                    <div className="card">
      <div className="flex flex-wrap gap-5">
                <div className="flex align-items-center">
                    <h6><i>5. Being so restless that it is hard to sit still?</i></h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="restless_difficulty_sitting_still" name="restless_difficulty_sitting_still" value='Not at all'
                        checked={radioValue5 === 'Not at all'}
                        onChange={(e) => {
                            setRadioValue5(e.value);
                            formState.formValues.restless_difficulty_sitting_still = e.target.value;
                            console.log(formState);
                        }}
                    />
                    <label htmlFor="restless_difficulty_sitting_still" className="ml-5">Not at all</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="restless_difficulty_sitting_still" name="restless_difficulty_sitting_still" value="Several days"
                        onChange={(e) => {
                            setRadioValue5(e.value);
                            formState.formValues.restless_difficulty_sitting_still = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue5 === 'Several days'}
                    />
                    <label htmlFor="restless_difficulty_sitting_still" className="ml-5">Several days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="restless_difficulty_sitting_still" name="restless_difficulty_sitting_still" value="More than half the days"
                        onChange={(e) => {
                            setRadioValue5(e.value);
                            formState.formValues.restless_difficulty_sitting_still = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue5 === 'More than half the days'}
                    />
                    <label htmlFor="restless_difficulty_sitting_still" className="ml-5">More than half the days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="restless_difficulty_sitting_still" name="restless_difficulty_sitting_still" value="Nearly every day"
                        onChange={(e) => {
                            setRadioValue5(e.value);
                            formState.formValues.restless_difficulty_sitting_still = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue5 === 'Nearly every day'}
                    />
                    <label htmlFor="restless_difficulty_sitting_still" className="ml-5">Nearly every day</label>
                </div>
                        </div>
            </div>
            <br></br>
                    <div className="card">
       <div className="flex flex-wrap gap-6">
                 <div className="flex align-items-center">
                     <h6><i>6. Becoming easily annoyed or irritable?</i></h6>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="easily_annoyed_irritable" name="easily_annoyed_irritable" value='Not at all'
                         checked={radioValue6 === 'Not at all'}
                         onChange={(e) => {
                             setRadioValue6(e.value);
                             formState.formValues.easily_annoyed_irritable = e.target.value;
                             console.log(formState);
                         }}
                     />
                     <label htmlFor="easily_annoyed_irritable" className="ml-6">Not at all</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="easily_annoyed_irritable" name="easily_annoyed_irritable" value="Several days"
                         onChange={(e) => {
                             setRadioValue6(e.value);
                             formState.formValues.easily_annoyed_irritable = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue6 === 'Several days'}
                     />
                     <label htmlFor="easily_annoyed_irritable" className="ml-6">Several days</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="easily_annoyed_irritable" name="easily_annoyed_irritable" value="More than half the days"
                         onChange={(e) => {
                             setRadioValue6(e.value);
                             formState.formValues.easily_annoyed_irritable = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue6 === 'More than half the days'}
                     />
                     <label htmlFor="easily_annoyed_irritable" className="ml-6">More than half the days</label>
                 </div>
                 <div className="flex align-items-center">
                     <RadioButton inputId="easily_annoyed_irritable" name="easily_annoyed_irritable" value="Nearly every day"
                         onChange={(e) => {
                             setRadioValue6(e.value);
                             formState.formValues.easily_annoyed_irritable = e.target.value;
                             console.log(formState);
                         }}
                         checked={radioValue6 === 'Nearly every day'}
                     />
                     <label htmlFor="easily_annoyed_irritable" className="ml-6">Nearly every day</label>
                 </div>
                        </div>
             </div>
             <br></br>
                    <div className="card">
      <div className="flex flex-wrap gap-7">
                <div className="flex align-items-center">
                    <h6><i>7. Feeling afraid, as if something awful might happen?</i></h6>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="feeling_afraid_something_awful_might_happen" name="feeling_afraid_something_awful_might_happen" value='Not at all'
                        checked={radioValue7 === 'Not at all'}
                        onChange={(e) => {
                            setRadioValue7(e.value);
                            formState.formValues.feeling_afraid_something_awful_might_happen = e.target.value;
                            console.log(formState);
                        }}
                    />
                    <label htmlFor="feeling_afraid_something_awful_might_happen" className="ml-7">Not at all</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="feeling_afraid_something_awful_might_happen" name="feeling_afraid_something_awful_might_happen" value="Several days"
                        onChange={(e) => {
                            setRadioValue7(e.value);
                            formState.formValues.feeling_afraid_something_awful_might_happen = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue7 === 'Several days'}
                    />
                    <label htmlFor="feeling_afraid_something_awful_might_happen" className="ml-7">Several days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="feeling_afraid_something_awful_might_happen" name="feeling_afraid_something_awful_might_happen" value="More than half the days"
                        onChange={(e) => {
                            setRadioValue7(e.value);
                            formState.formValues.feeling_afraid_something_awful_might_happen = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue7 === 'More than half the days'}
                    />
                    <label htmlFor="feeling_afraid_something_awful_might_happen" className="ml-7">More than half the days</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="feeling_afraid_something_awful_might_happen" name="feeling_afraid_something_awful_might_happen" value="Nearly every day"
                        onChange={(e) => {
                            setRadioValue7(e.value);
                            formState.formValues.feeling_afraid_something_awful_might_happen = e.target.value;
                            console.log(formState);
                        }}
                        checked={radioValue7 === 'Nearly every day'}
                    />
                    <label htmlFor="feeling_afraid_something_awful_might_happen" className="ml-7">Nearly every day</label>
                </div>
                        </div>
                        
            </div>
                    
                    
                    <Button label="Save" icon="pi pi-save" type="submit" />
                </form>

      </div>
     </div>
     )
     }
export default AnxietyGad7

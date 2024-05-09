"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import api from "@/app/api/api";





import type { Demo, Page } from "@/types";


const Generalhealth: Page = () => {
    const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
    const [InputValue1, setInputValue1] = useState(null);
    const [radioValue2, setRadioValue2] = useState(null);
    const [radioValue3, setRadioValue3] = useState(null);
    const [radioValue4, setRadioValue4] = useState(null);
    const [radioValue5, setRadioValue5] = useState(null);
    const [radioValue6, setRadioValue6] = useState(null);
    const [radioValue7, setRadioValue7] = useState(null);

    const [selectedUserId, setSelectedUserId] = useState(null)




    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({
        isValid: false,

        touched: {},
        errors: {},
        formValues: {
            pregnancy_count: "",
            user_id: ""
            // parity_count: "",
            // living_children_count: "",
            // birth_control_method: "",
            // feelings_before_pregnancy: "",
            // pre_pregnancy_state: "",
            // partner_feelings_before_pregnancy: "",
        }
    });

    const handleChange = () => {

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser'))
        let { _id } = localData
        setSelectedUserId(_id)
    })

    const saveGeneralhealth = async (event: any) => {
        event.preventDefault();

        formState.formValues.user_id = selectedUserId
        console.log(formState.formValues);

        try {
            await api.addEntry("mentalhealth", formState.formValues, "3").then((data: any) => {
                console.log(data)
            })

        } catch (error) {
            console.log(error)

        }



        console.log(formState.formValues)

    }

    return (
        <div>
            <div className="card">
                <form onSubmit={saveGeneralhealth}>
                    <h5>General Health</h5>
                    <p>The next few questions about your experience in antenatal care.</p>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    1. How many times have you been pregnant?
                                </i></h6>
                            </div>
                            <div className="flex align-items-center">
                                <input
                                    type="text"
                                    id="pregnancy_count"
                                    name="pregnancy_count"
                                    value={formState.formValues.pregnancy_count}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setFormState(prevState => ({
                                            ...prevState,
                                            formValues: {
                                                ...prevState.formValues,
                                                pregnancy_count: value
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <Button type="submit" label="Save" />
                    {/*}
                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        2. How many times have you given birth (Parity)?
                                    </i></h6>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="number" id="parity_count" name="parity_count"
                                        value={formState.formValues.parity_count}
                                        onChange={(e) => {
                                            formState.formValues.parity_count = e.target.value
                                            console.log(formState)
                                        }
                                        } />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        3. How many living children do you have?
                                    </i></h6>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="number" id="living_children_count" name="living_children_count"
                                        value={formState.formValues.living_children_count}
                                        onChange={(e) => {
                                            formState.formValues.living_children_count = e.target.value
                                            console.log(formState)
                                        }
                                        } />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        4. What method of birth control, if any, were you using when you got pregnant? Check ALL that apply
                                    </i></h6>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="birth_control_pills" name="birth_control_pills"
                                        value="Birth control pills"
                                        checked={formState.formValues.birth_control_method.includes("Birth control pills")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Birth control pills");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Birth control pills");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="birth_control_pills" className="ml-2">Birth control pills</label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="condoms" name="condoms"
                                        value="Condoms"
                                        checked={formState.formValues.birth_control_method.includes("Condoms")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Condoms");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Condoms");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="condoms" className="ml-2">Condoms</label>
                                </div>
                                {/* Repeat similar code blocks for other birth control methods 
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="condoms" name="Shots or Injections (Depo-Provera®) "
                                        value="Shots or Injections (Depo-Provera®) "
                                        checked={formState.formValues.birth_control_method.includes("Shots or Injections (Depo-Provera®) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Shots or Injections (Depo-Provera®) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Shots or Injections (Depo-Provera®) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Shots or Injections (Depo-Provera®) " className="ml-2">Shots or Injections (Depo-Provera®) </label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="Contraceptive implant in the arm (Nexplanon® or Implanon®) " name="Contraceptive implant in the arm (Nexplanon® or Implanon®) "
                                        value="Contraceptive implant in the arm (Nexplanon® or Implanon®) "
                                        checked={formState.formValues.birth_control_method.includes("Contraceptive implant in the arm (Nexplanon® or Implanon®) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Contraceptive implant in the arm (Nexplanon® or Implanon®) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Contraceptive implant in the arm (Nexplanon® or Implanon®) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Contraceptive implant in the arm (Nexplanon® or Implanon®) " className="ml-2">Condoms</label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) " id="Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) " name="Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) "
                                        value="Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) "
                                        checked={formState.formValues.birth_control_method.includes("Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) " className="ml-2">Contraceptive patch (OrthoEvra®) or vaginal ring (NuvaRing®) </label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="condoms" name="Shots or Injections (Depo-Provera®) "
                                        value="Shots or Injections (Depo-Provera®) "
                                        checked={formState.formValues.birth_control_method.includes("Shots or Injections (Depo-Provera®) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Shots or Injections (Depo-Provera®) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Shots or Injections (Depo-Provera®) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Shots or Injections (Depo-Provera®) " className="ml-2">Shots or Injections (Depo-Provera®) </label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="Natural family planning (including rhythm method) " name="Natural family planning (including rhythm method) "
                                        value="Natural family planning (including rhythm method) "
                                        checked={formState.formValues.birth_control_method.includes("Natural family planning (including rhythm method) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Natural family planning (including rhythm method) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Natural family planning (including rhythm method) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Natural family planning (including rhythm method) " className="ml-2">Natural family planning (including rhythm method) </label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="Withdrawal" name="Withdrawal"
                                        value="Withdrawal"
                                        checked={formState.formValues.birth_control_method.includes("Withdrawal (pulling out) ")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("Withdrawal (pulling out) ");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "Withdrawal (pulling out) ");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="Withdrawal (pulling out) " className="ml-2">Withdrawal (pulling out) </label>
                                </div>
                                <div className="flex align-items-center">
                                    <input type="checkbox" id="none" name="none"
                                        value="none"
                                        checked={formState.formValues.birth_control_method.includes("none")}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                                formState.formValues.birth_control_method.push("none");
                                            } else {
                                                formState.formValues.birth_control_method = formState.formValues.birth_control_method.filter((method: string) => method !== "none");
                                            }
                                            console.log(formState);
                                        }} />
                                    <label htmlFor="none" className="ml-2">None</label>
                                </div>

                            </div>
                        </div>
                        <br></br>

                        <br></br>
                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        5.	Thinking back to just before you got pregnant, how did you feel about becoming pregnant? Check ONE answer?

                                    </i> </h6>
                                </div>

                                <div className="flex align-items-center">
                                    <RadioButton inputId="scareIntimidate" name="feelings_before_pregnancy" value="I wanted to be pregnant later " onChange={(e) => setRadioValue5(e.value)} checked={radioValue5 === 'I wanted to be pregnant later '} />
                                    <label htmlFor="ingredient1" className="ml-2">I wanted to be pregnant later</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient2" name="feelings_before_pregnancy" value="I wanted to be pregnant sooner " onChange={(e) => setRadioValue5(e.value)} checked={radioValue5 === 'I wanted to be pregnant sooner '} />
                                    <label htmlFor="ingredient2" className="ml-2">I wanted to be pregnant sooner </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient3" name="feelings_before_pregnancy" value="I wanted to be pregnant then " onChange={(e) => setRadioValue5(e.value)} checked={radioValue5 === 'I wanted to be pregnant then '} />
                                    <label htmlFor="ingredient3" className="ml-2">I wanted to be pregnant then </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient4" name="feelings_before_pregnancy" value="I didn’t want to be pregnant then or at any time in the future " onChange={(e) => setRadioValue5(e.value)} checked={radioValue5 === 'I didn’t want to be pregnant then or at any time in the future '} />
                                    <label htmlFor="ingredient4" className="ml-2">I didn’t want to be pregnant then or at any time in the future </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient4" name="feelings_before_pregnancy" value="I wasn’t sure what I wanted " onChange={(e) => setRadioValue5(e.value)} checked={radioValue5 === 'I wasn’t sure what I wanted '} />
                                    <label htmlFor="ingredient4" className="ml-2">I wasn’t sure what I wanted </label>
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        6.	Which of the following statements best describes you during the 3 months before you got pregnant??

                                    </i> </h6>
                                </div>

                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient1" name="pre_pregnancy_state" value="I was trying to get pregnant  " onChange={(e) => setRadioValue6(e.value)} checked={radioValue6 === 'I was trying to get pregnant  '} />
                                    <label htmlFor="ingredient1" className="ml-2">I was trying to get pregnant </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient2" name="pre_pregnancy_state" value="I was trying to keep from getting pregnant but was not trying very hard  " onChange={(e) => setRadioValue6(e.value)} checked={radioValue6 === 'I was trying to keep from getting pregnant but was not trying very hard  '} />
                                    <label htmlFor="ingredient2" className="ml-2">I was trying to keep from getting pregnant but was not trying very hard  </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient3" name="pre_pregnancy_state" value="I was trying hard to keep from getting pregnant " onChange={(e) => setRadioValue6(e.value)} checked={radioValue6 === 'I was trying hard to keep from getting pregnant'} />
                                    <label htmlFor="ingredient3" className="ml-2">I was trying hard to keep from getting pregnant </label>
                                </div>

                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <h6><i>
                                        5.	Thinking back to just before you got pregnant, how did you feel about becoming pregnant? Check ONE answer?

                                    </i> </h6>
                                </div>

                                <div className="flex align-items-center">
                                    <RadioButton inputId="scareIntimidate" name="partner_feelings_before_pregnancy" value="Wanted me to be pregnant later  " onChange={(e) => setRadioValue7(e.value)} checked={radioValue7 === 'Wanted me to be pregnant later '} />
                                    <label htmlFor="ingredient1" className="ml-2">Wanted me to be pregnant later </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient2" name="partner_feelings_before_pregnancy" value="Wanted me to be pregnant then  " onChange={(e) => setRadioValue7(e.value)} checked={radioValue7 === 'Wanted me to be pregnant then  '} />
                                    <label htmlFor="ingredient2" className="ml-2">Wanted me to be pregnant then  </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient3" name="partner_feelings_before_pregnancy" value="Didn’t want me to be pregnant then or at any time in the future  " onChange={(e) => setRadioValue7(e.value)} checked={radioValue7 === 'Didn’t want me to be pregnant then or at any time in the future  '} />
                                    <label htmlFor="ingredient3" className="ml-2">Didn’t want me to be pregnant then or at any time in the future  </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient4" name="partner_feelings_before_pregnancy" value="I don’t know  " onChange={(e) => setRadioValue7(e.value)} checked={radioValue7 === 'I don’t know  '} />
                                    <label htmlFor="ingredient4" className="ml-2">I don’t know  </label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="ingredient4" name="partner_feelings_before_pregnancy" value="I didn’t have a husband or partner  " onChange={(e) => setRadioValue7(e.value)} checked={radioValue7 === 'I didn’t have a husband or partner '} />
                                    <label htmlFor="ingredient4" className="ml-2">I didn’t have a husband or partner  </label>
                                </div>
                            </div>
                        </div>*/}



                </form>
            </div>
        </div>


    )
}
export default Generalhealth

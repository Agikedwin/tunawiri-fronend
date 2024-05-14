"use client"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import api from "@/app/api/api";

import { Toast } from "primereact/toast";
import { useRouter } from 'next/navigation';





import type { Demo, Page } from "@/types";


const SocialSupport: Page = () => {
    const router = useRouter();

    const toast = useRef<Toast>(null);
    const [cd4RadioValue, setCd4RadioValue] = useState(null);
    const [vlRadioValue, setVlRadioValue] = useState(null);
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

    const [selectedUserId, setSelectedUserId] = useState("")



    const [formState, setFormState] = useState({
        isValid: false,


        touched: {},
        errors: {},
        formValues: {
            user_id: "",
            insulted_feelings: "",
            belittled_humiliated: "",
            scare_intimidate: "",
            threw_out_house: "",
            confined_locked: "",
            threatened_hurt: "",
            slapped_thrown: "",
            pushed_dhoved: "",
            hit_with_fist: "",
            kicked_dragged: "",
            choked_burnt: "",
            threatened_used_weapon: "",
            forced_sexual_Intercourse: "",
            agreed_unwanted_Intercourse: "",
            forced_other_sexual_act: "",
            tried_keep_from_friends: "",
            tried_restrict_family_contact: "",
            insisted_knowing_location: "",
            jealous_angry_with_men: "",
            suspicious_unfaithful: "",
            took_earnings_savings: "",
            refused_money_for_household: "",
            tried_convince_crazy: "",
            blamed_for_violent_behavior: ""
        }
    });

    const handleChange = () => {

    }

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 4000
        });       
    };

    const saveSocialSupport = async (event: any) => {
        event.preventDefault();
        formState.formValues.user_id = selectedUserId

        try {
            await api.addEntry("socialsupport", formState.formValues, 3).then((data:any) => {
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
        console.log(formState.formValues)

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setSelectedUserId(_id)

    })


    return (
        <div>
            <Toast ref={toast} />  

            <div className="card ">
                <form onSubmit={saveSocialSupport} >
                    <h5>Social support ee </h5>
                    <p>I am now going to ask you about some situations that are true for many women. Thinking about
                        your current or most recent husband/partner, how many times in the past six months has he
                        I am now going to ask you about some situations that are true for many women. Thinking about
                        your current or most recent husband/partner, how many times in the past six months has he
</p>
                    <h5>Intimate Partner Violence WHO Instrument</h5>
                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    1. Insulted you or made you feel bad about yourself?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="ingredient1" name="insulted_feelings" value='Never'
                                    checked={radioValue1 === 'Never'}
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.insulted_feelings = e.target.value
                                        console.log(formState)
                                    }
                                    } />
                                <label htmlFor="ingredient1" className="ml-2">Never</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="ingredient2" name="insulted_feelings" value="Once"
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.insulted_feelings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === 'Once'} />
                                <label htmlFor="ingredient2" className="ml-2">Once</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="ingredient3" name="insulted_feelings" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.insulted_feelings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === '2-3 Times'} />
                                <label htmlFor="ingredient3" className="ml-2">2-3 Times</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="ingredient4" name="insulted_feelings" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue1(e.value)
                                        formState.formValues.insulted_feelings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue1 === '4 or more times'} />
                                <label htmlFor="ingredient4" className="ml-2">4 or more times</label>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <div className="card">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center">
                                <h6><i>
                                    2.  Belittled or humiliated you in front of other people?
                                </i> </h6>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="belittled_humiliated" name="belittled_humiliated" value="Never"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.belittled_humiliated = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'Never'} />
                                <label htmlFor="belittled_humiliated" className="ml-2">Never</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="belittled_humiliated" name="belittled_humiliated" value="Once"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.belittled_humiliated = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === 'Once'} />
                                <label htmlFor="belittled_humiliated" className="ml-2">Once</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="belittled_humiliated" name="belittled_humiliated" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.belittled_humiliated = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === '2-3 Times'} />
                                <label htmlFor="belittled_humiliated" className="ml-2">2-3 Times</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="belittled_humiliated" name="belittled_humiliated" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.belittled_humiliated = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue2 === '4 or more times'} />
                                <label htmlFor="belittled_humiliated" className="ml-2">4 or more times</label>
                            </div>
                        </div>
                        <br></br>
                    </div>




                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                3. Done things to scare or intimidate you on purpose <br></br>(e.g. by the way he looked at you, by shouting and smashing things)?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="scare_intimidate" value="Never"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.scare_intimidate = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue3 === 'Never'} />
                            <label htmlFor="scare_intimidate" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="scare_intimidate" value="Once"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.scare_intimidate = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue3 === 'Once'} />
                            <label htmlFor="scare_intimidate" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="scare_intimidate" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.scare_intimidate = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue3 === '2-3 Times'} />
                            <label htmlFor="scare_intimidate" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="scare_intimidate" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue3(e.value)
                                        formState.formValues.scare_intimidate = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                        checked={radioValue3 === '4 or more times'} />
                            <label htmlFor="scare_intimidate" className="ml-2">4 or more times</label>
                        </div>
                    </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                4. Threw you out of the house or made you find a new place to stay?
                            </i> </h6>
                        </div>



                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="threw_out_house" value="Never"
                                    onChange={(e) => {
                                        setRadioValue4(e.value)
                                        formState.formValues.threw_out_house = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue4 === 'Never'} />
                            <label htmlFor="scare_intimidate" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient2" name="threw_out_house" value="Once"
                                    onChange={(e) => {
                                        setRadioValue4(e.value)
                                        formState.formValues.threw_out_house = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue4 === 'Once'} />
                            <label htmlFor="ingredient2" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient3" name="threw_out_house" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue4(e.value)
                                        formState.formValues.threw_out_house = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue4 === '2-3 Times'} />
                            <label htmlFor="ingredient3" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient4" name="threw_out_house" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue4(e.value)
                                        formState.formValues.threw_out_house = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue4 === '4 or more times'} />
                            <label htmlFor="ingredient4" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>


                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                5. Confined or locked you in a room or other space?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="scare_intimidate" name="confined_locked" value="Never"
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.confined_locked = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue5 === 'Never'} />
                            <label htmlFor="ingredient1" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient2" name="confined_locked" value="Once"
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.confined_locked = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue5 === 'Once'} />
                            <label htmlFor="ingredient2" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient3" name="confined_locked" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.confined_locked = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue5 === '2-3 Times'} />
                            <label htmlFor="ingredient3" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient4" name="confined_locked" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue5(e.value)
                                        formState.formValues.confined_locked = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue5 === '4 or more times'} />
                            <label htmlFor="ingredient4" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                6. Threatened to hurt you or someone you care about?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_hurt" name="threatened_hurt" value="Never"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.threatened_hurt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue6 === 'Never'} />
                            <label htmlFor="threatened_hurt" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_hurt" name="threatened_hurt" value="Once"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.threatened_hurt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue6 === 'Once'} />
                            <label htmlFor="threatened_hurt" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_hurt" name="threatened_hurt" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.threatened_hurt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue6 === '2-3 Times'} />
                            <label htmlFor="threatened_hurt" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_hurt" name="threatened_hurt" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue6(e.value)
                                        formState.formValues.threatened_hurt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue6 === '4 or more times'} />
                            <label htmlFor="threatened_hurt" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                7. Slapped you or thrown something at you that could hurt you?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="slapped_thrown" name="slapped_thrown" value="Never"
                                    onChange={(e) => {
                                        setRadioValue7(e.value)
                                        formState.formValues.slapped_thrown = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue7 === 'Never'} />
                            <label htmlFor="slapped_thrown" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="slapped_thrown" name="slapped_thrown" value="Once"
                                    onChange={(e) => {
                                        setRadioValue7(e.value)
                                        formState.formValues.slapped_thrown = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue7 === 'Once'} />
                            <label htmlFor="slapped_thrown" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="slapped_thrown" name="slapped_thrown" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue7(e.value)
                                        formState.formValues.slapped_thrown = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue7 === '2-3 Times'} />
                            <label htmlFor="threatened_hurt" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="slapped_thrown" name="slapped_thrown" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue7(e.value)
                                        formState.formValues.slapped_thrown = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue7 === '4 or more times'} />
                            <label htmlFor="slapped_thrown" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                8. Pushed you or shoved you or pulled your hair?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="pushed_dhoved" name="pushed_dhoved" value="Never"
                                    onChange={(e) => {
                                        setRadioValue8(e.value)
                                        formState.formValues.pushed_dhoved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue8 === 'Never'} />
                            <label htmlFor="pushed_dhoved" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="pushed_dhoved" name="pushed_dhoved" value="Once"
                                    onChange={(e) => {
                                        setRadioValue8(e.value)
                                        formState.formValues.pushed_dhoved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue8 === 'Once'} />
                            <label htmlFor="pushed_dhoved" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="pushed_dhoved" name="pushed_dhoved" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue8(e.value)
                                        formState.formValues.pushed_dhoved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue8 === '2-3 Times'} />
                            <label htmlFor="pushed_dhoved" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="pushed_dhoved" name="pushed_dhoved" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue8(e.value)
                                        formState.formValues.pushed_dhoved = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue8 === '4 or more times'} />
                            <label htmlFor="pushed_dhoved" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                9. Hit you with his fist or with something else that could hurt you?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient1" name="hit_with_fist" value="Never"
                                    onChange={(e) => {
                                        setRadioValue9(e.value)
                                        formState.formValues.hit_with_fist = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue9 === 'Never'} />
                            <label htmlFor="hit_with_fist" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="hit_with_fist" name="hit_with_fist" value="Once"
                                    onChange={(e) => {
                                        setRadioValue9(e.value)
                                        formState.formValues.hit_with_fist = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue9 === 'Once'} />
                            <label htmlFor="hit_with_fist" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="hit_with_fist" name="hit_with_fist" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue9(e.value)
                                        formState.formValues.hit_with_fist = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue9 === '2-3 Times'} />
                            <label htmlFor="hit_with_fist" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="hit_with_fist" name="hit_with_fist" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue9(e.value)
                                        formState.formValues.hit_with_fist = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue9 === '4 or more times'} />
                            <label htmlFor="hit_with_fist" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                10. Kicked you, dragged you or beaten you up?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="kicked_dragged" name="kicked_dragged" value="Never"
                                    onChange={(e) => {
                                        setRadioValue10(e.value)
                                        formState.formValues.kicked_dragged = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue10 === 'Never'} />
                            <label htmlFor="kicked_dragged" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="kicked_dragged" name="kicked_dragged" value="Once"
                                    onChange={(e) => {
                                        setRadioValue10(e.value)
                                        formState.formValues.kicked_dragged = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue10 === 'Once'} />
                            <label htmlFor="kicked_dragged" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="kicked_dragged" name="kicked_dragged" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue10(e.value)
                                        formState.formValues.kicked_dragged = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue10 === '2-3 Times'} />
                            <label htmlFor="kicked_dragged" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="kicked_dragged" name="kicked_dragged" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue10(e.value)
                                        formState.formValues.kicked_dragged = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue10 === '4 or more times'} />
                            <label htmlFor="kicked_dragged" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                11. Choked or burnt you on purpose?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="ingredient1" name="choked_burnt" value="Never"
                                    onChange={(e) => {
                                        setRadioValue11(e.value)
                                        formState.formValues.choked_burnt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue11 === 'Never'} />
                            <label htmlFor="choked_burnt" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="choked_burnt" name="choked_burnt" value="Once"
                                    onChange={(e) => {
                                        setRadioValue11(e.value)
                                        formState.formValues.choked_burnt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue11 === 'Once'} />
                            <label htmlFor="choked_burnt" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="choked_burnt" name="choked_burnt" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue11(e.value)
                                        formState.formValues.choked_burnt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue11 === '2-3 Times'} />
                            <label htmlFor="choked_burnt" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="choked_burnt" name="choked_burnt" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue11(e.value)
                                        formState.formValues.choked_burnt = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue11 === '4 or more times'} />
                            <label htmlFor="choked_burnt" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                12. Threatened to use or actually used a gun, knife or other weapon against you?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_used_weapon" name="threatened_used_weapon" value="Never"
                                    onChange={(e) => {
                                        setRadioValue12(e.value)
                                        formState.formValues.threatened_used_weapon = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue12 === 'Never'} />
                            <label htmlFor="threatened_used_weapon" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_used_weapon" name="threatened_used_weapon" value="Once"
                                    onChange={(e) => {
                                        setRadioValue12(e.value)
                                        formState.formValues.threatened_used_weapon = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue12 === 'Once'} />
                            <label htmlFor="threatened_used_weapon" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_used_weapon" name="threatened_used_weapon" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue12(e.value)
                                        formState.formValues.threatened_used_weapon = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue12 === '2-3 Times'} />
                            <label htmlFor="threatened_used_weapon" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="threatened_used_weapon" name="threatened_used_weapon" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue12(e.value)
                                        formState.formValues.threatened_used_weapon = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue12 === '4 or more times'} />
                            <label htmlFor="threatened_used_weapon" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                13. Force you to have sexual intercourse by threatening you, holding you down or hurting you in some way?


                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_sexual_Intercourse" name="forced_sexual_Intercourse" value="Never"
                                    onChange={(e) => {
                                        setRadioValue13(e.value)
                                        formState.formValues.forced_sexual_Intercourse = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue13 === 'Never'} />
                            <label htmlFor="forced_sexual_Intercourse" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_sexual_Intercourse" name="forced_sexual_Intercourse" value="Once"
                                    onChange={(e) => {
                                        setRadioValue13(e.value)
                                        formState.formValues.forced_sexual_Intercourse = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue13 === 'Once'} />
                            <label htmlFor="forced_sexual_Intercourse" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_sexual_Intercourse" name="forced_sexual_Intercourse" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue13(e.value)
                                        formState.formValues.forced_sexual_Intercourse = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue13 === '2-3 Times'} />
                            <label htmlFor="forced_sexual_Intercourse" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_sexual_Intercourse" name="forced_sexual_Intercourse" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue13(e.value)
                                        formState.formValues.forced_sexual_Intercourse = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue13 === '4 or more times'} />
                            <label htmlFor="forced_sexual_Intercourse" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                14. Did you ever agree to have intercourse when you did not want to because you were afraid of what your husband/partner might do if you refused?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="agreed_unwanted_Intercourse" name="agreed_unwanted_Intercourse"
                                    value="Never"
                                    onChange={(e) => {
                                        setRadioValue14(e.value)
                                        formState.formValues.agreed_unwanted_Intercourse = e.target.value
                                    }

                                    }
                                    checked={radioValue14 === 'Never'} />
                            <label htmlFor="agreed_unwanted_Intercourse" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="agreed_unwanted_Intercourse" name="agreed_unwanted_Intercourse" value="Once"
                                    onChange={(e) => {
                                        setRadioValue14(e.value)
                                        formState.formValues.agreed_unwanted_Intercourse = e.target.value
                                    }

                                    }
                                    checked={radioValue14 === 'Once'} />
                            <label htmlFor="agreed_unwanted_Intercourse" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="agreed_unwanted_Intercourse" name="agreed_unwanted_Intercourse" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue14(e.value)
                                        formState.formValues.agreed_unwanted_Intercourse = e.target.value
                                    }

                                    }
                                    checked={radioValue14 === '2-3 Times'} />
                            <label htmlFor="agreed_unwanted_Intercourse" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="agreed_unwanted_Intercourse" name="agreed_unwanted_Intercourse" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue14(e.value)
                                        formState.formValues.agreed_unwanted_Intercourse = e.target.value
                                    }

                                    }
                                    checked={radioValue14 === '4 or more times'} />
                            <label htmlFor="agreed_unwanted_Intercourse" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                15. Force you to do something sexual (besides vaginal intercourse) that you did not want to do?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_other_sexual_act" name="forced_other_sexual_act" value="Never"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue15 === 'Never'} />
                            <label htmlFor="forced_other_sexual_act" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_other_sexual_act" name="forced_other_sexual_act" value="Once"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue15 === 'Once'} />
                            <label htmlFor="forced_other_sexual_act" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_other_sexual_act" name="forced_other_sexual_act" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue15 === '2-3 Times'} />
                            <label htmlFor="forced_other_sexual_act" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="forced_other_sexual_act" name="forced_other_sexual_act" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue2(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue15 === '4 or more times'} />
                            <label htmlFor="forced_other_sexual_act" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                16. Tried to keep you from seeing your friends?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_keep_from_friends" name="tried_keep_from_friends" value="Never"
                                    onChange={(e) => {
                                        setRadioValue16(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue16 === 'Never'} />
                            <label htmlFor="tried_keep_from_friends" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_keep_from_friends" name="tried_keep_from_friends" value="Once"
                                    onChange={(e) => {
                                        setRadioValue16(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue16 === 'Once'} />
                            <label htmlFor="tried_keep_from_friends" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_keep_from_friends" name="tried_keep_from_friends" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue16(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue16 === '2-3 Times'} />
                            <label htmlFor="tried_keep_from_friends" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_keep_from_friends" name="tried_keep_from_friends" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue16(e.value)
                                        formState.formValues.forced_other_sexual_act = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue16 === '4 or more times'} />
                            <label htmlFor="tried_keep_from_friends" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                17. Tried to restrict contact with your family of birth?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_restrict_family_contact" name="tried_restrict_family_contact" value="Never"
                                    onChange={(e) => {
                                        setRadioValue17(e.value)
                                        formState.formValues.tried_restrict_family_contact = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue17 === 'Never'} />
                            <label htmlFor="tried_restrict_family_contact" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_restrict_family_contact" name="tried_restrict_family_contact" value="Once"
                                    onChange={(e) => {
                                        setRadioValue17(e.value)
                                        formState.formValues.tried_restrict_family_contact = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue17 === 'Once'} />
                            <label htmlFor="tried_restrict_family_contact" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_restrict_family_contact" name="tried_restrict_family_contact" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue17(e.value)
                                        formState.formValues.tried_restrict_family_contact = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue17 === '2-3 Times'} />
                            <label htmlFor="tried_restrict_family_contact" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_restrict_family_contact" name="tried_restrict_family_contact" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue17(e.value)
                                        formState.formValues.tried_restrict_family_contact = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue17 === '4 or more times'} />
                            <label htmlFor="tried_restrict_family_contact" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                18. Insisted on knowing where you are at all times?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="insisted_knowing_location" name="insisted_knowing_location" value="Never"
                                    onChange={(e) => {
                                        setRadioValue18(e.value)
                                        formState.formValues.insisted_knowing_location = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue18 === 'Never'} />
                            <label htmlFor="insisted_knowing_location" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="insisted_knowing_location" name="insisted_knowing_location" value="Once"
                                    onChange={(e) => {
                                        setRadioValue18(e.value)
                                        formState.formValues.insisted_knowing_location = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue18 === 'Once'} />
                            <label htmlFor="insisted_knowing_location" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="insisted_knowing_location" name="insisted_knowing_location" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue18(e.value)
                                        formState.formValues.insisted_knowing_location = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue18 === '2-3 Times'} />
                            <label htmlFor="insisted_knowing_location" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="insisted_knowing_location" name="insisted_knowing_location" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue18(e.value)
                                        formState.formValues.insisted_knowing_location = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue18 === '4 or more times'} />
                            <label htmlFor="insisted_knowing_location" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                19. Been jealous or angry if you spoke with other men?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="jealous_angry_with_men" name="jealous_angry_with_men" value="Never"
                                    onChange={(e) => {
                                        setRadioValue19(e.value)
                                        formState.formValues.jealous_angry_with_men = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue19 === 'Never'} />
                            <label htmlFor="jealous_angry_with_men" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="jealous_angry_with_men" name="jealous_angry_with_men" value="Once"
                                    onChange={(e) => {
                                        setRadioValue19(e.value)
                                        formState.formValues.jealous_angry_with_men = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue19 === 'Once'} />
                            <label htmlFor="jealous_angry_with_men" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="jealous_angry_with_men" name="jealous_angry_with_men" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue19(e.value)
                                        formState.formValues.jealous_angry_with_men = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue19 === '2-3 Times'} />
                            <label htmlFor="jealous_angry_with_men" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="jealous_angry_with_men" name="jealous_angry_with_men" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue19(e.value)
                                        formState.formValues.jealous_angry_with_men = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue19 === '4 or more times'} />
                            <label htmlFor="ingrediejealous_angry_with_mennt4" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                20. Was suspicious that you were unfaithful even when you were being faithful?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="suspicious_unfaithful" name="suspicious_unfaithful" value="Never"
                                    onChange={(e) => {
                                        setRadioValue20(e.value)
                                        formState.formValues.suspicious_unfaithful = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue20 === 'Never'} />
                            <label htmlFor="suspicious_unfaithful" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="suspicious_unfaithful" name="suspicious_unfaithful" value="Once"
                                    onChange={(e) => {
                                        setRadioValue20(e.value)
                                        formState.formValues.suspicious_unfaithful = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue20 === 'Once'} />
                            <label htmlFor="suspicious_unfaithful" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="suspicious_unfaithful" name="suspicious_unfaithful" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue20(e.value)
                                        formState.formValues.suspicious_unfaithful = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue20 === '2-3 Times'} />
                            <label htmlFor="suspicious_unfaithful" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="suspicious_unfaithful" name="suspicious_unfaithful" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue20(e.value)
                                        formState.formValues.suspicious_unfaithful = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue20 === '4 or more times'} />
                            <label htmlFor="suspicious_unfaithful" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>
            

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                21. Took your earnings or savings against your will?

                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="took_earnings_savings" name="took_earnings_savings" value="Never"
                                    onChange={(e) => {
                                        setRadioValue21(e.value)
                                        formState.formValues.took_earnings_savings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue21 === 'Never'} />
                            <label htmlFor="took_earnings_savings" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="took_earnings_savings" name="took_earnings_savings" value="Once"
                                    onChange={(e) => {
                                        setRadioValue21(e.value)
                                        formState.formValues.took_earnings_savings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue21 === 'Once'} />
                            <label htmlFor="took_earnings_savings" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="took_earnings_savings" name="took_earnings_savings" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue21(e.value)
                                        formState.formValues.took_earnings_savings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue21 === '2-3 Times'} />
                            <label htmlFor="took_earnings_savings" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="took_earnings_savings" name="took_earnings_savings" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue21(e.value)
                                        formState.formValues.took_earnings_savings = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue21 === '4 or more times'} />
                            <label htmlFor="took_earnings_savings" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                22. Refused to give money for household even when he has money for other things?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="refused_money_for_household" name="refused_money_for_household" value="Never"
                                    onChange={(e) => {
                                        setRadioValue22(e.value)
                                        formState.formValues.refused_money_for_household = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue22 === 'Never'} />
                            <label htmlFor="refused_money_for_household" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="refused_money_for_household" name="refused_money_for_household" value="Once"
                                    onChange={(e) => {
                                        setRadioValue22(e.value)
                                        formState.formValues.refused_money_for_household = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue22 === 'Once'} />
                            <label htmlFor="refused_money_for_household" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="refused_money_for_household" name="refused_money_for_household" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue22(e.value)
                                        formState.formValues.refused_money_for_household = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue22 === '2-3 Times'} />
                            <label htmlFor="refused_money_for_household" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="refused_money_for_household" name="refused_money_for_household" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue22(e.value)
                                        formState.formValues.refused_money_for_household = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue22 === '4 or more times'} />
                            <label htmlFor="refused_money_for_household" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                23. Tried to convince your family, children or friends that you are crazy or tried to turn them against you?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_convince_crazy" name="tried_convince_crazy" value="Never"
                                    onChange={(e) => {
                                        setRadioValue23(e.value)
                                        formState.formValues.tried_convince_crazy = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue23 === 'Never'} />
                            <label htmlFor="tried_convince_crazy" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_convince_crazy" name="tried_convince_crazy" value="Once"
                                    onChange={(e) => {
                                        setRadioValue23(e.value)
                                        formState.formValues.tried_convince_crazy = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue23 === 'Once'} />
                            <label htmlFor="tried_convince_crazy" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_convince_crazy" name="tried_convince_crazy" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue23(e.value)
                                        formState.formValues.tried_convince_crazy = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue23 === '2-3 Times'} />
                            <label htmlFor="tried_convince_crazy" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="tried_convince_crazy" name="tried_convince_crazy" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue23(e.value)
                                        formState.formValues.tried_convince_crazy = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue23 === '4 or more times'} />
                            <label htmlFor="tried_convince_crazy" className="ml-2">4 or more times</label>
                        </div>
                        </div>
                    </div>

                    <div className="card">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <h6><i>
                                24. Blamed you for causing their violent behaviour?
                            </i> </h6>
                        </div>

                        <div className="flex align-items-center">
                                <RadioButton inputId="blamed_for_violent_behavior" name="blamed_for_violent_behavior" value="Never"
                                    onChange={(e) => {
                                        setRadioValue24(e.value)
                                        formState.formValues.blamed_for_violent_behavior = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue24 === 'Never'} />
                            <label htmlFor="blamed_for_violent_behavior" className="ml-2">Never</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="blamed_for_violent_behavior" name="blamed_for_violent_behavior" value="Once"
                                    onChange={(e) => {
                                        setRadioValue24(e.value)
                                        formState.formValues.blamed_for_violent_behavior = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue24 === 'Once'} />
                            <label htmlFor="blamed_for_violent_behavior" className="ml-2">Once</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="blamed_for_violent_behavior" name="blamed_for_violent_behavior" value="2-3 Times"
                                    onChange={(e) => {
                                        setRadioValue24(e.value)
                                        formState.formValues.blamed_for_violent_behavior = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue24 === '2-3 Times'} />
                            <label htmlFor="blamed_for_violent_behavior" className="ml-2">2-3 Times</label>
                        </div>
                        <div className="flex align-items-center">
                                <RadioButton inputId="blamed_for_violent_behavior" name="blamed_for_violent_behavior" value="4 or more times"
                                    onChange={(e) => {
                                        setRadioValue24(e.value)
                                        formState.formValues.blamed_for_violent_behavior = e.target.value
                                        console.log(formState)
                                    }
                                    }
                                    checked={radioValue24 === '4 or more times'} />
                            <label htmlFor="blamed_for_violent_behavior" className="ml-2">4 or more times</label>
                        </div>
                    </div>

                    <div className="field col-12 md:col-6">
                        <label htmlFor="otherNames">..</label>
                        <Button label="Save" icon="pi pi-save" type="submit"  outlined/>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default SocialSupport

"use client"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"

import api from "@/app/api/api";
import { useRouter } from 'next/navigation';
import { Accordion, AccordionTab } from "primereact/accordion"
import { Avatar } from "primereact/avatar"
import { Badge } from "primereact/badge"
import { Menu } from "primereact/menu"


const MentalHealthOutcomeView = () => {
    const router = useRouter();

    const [phq9view, setPhq9view] = useState({
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
            phq9_score: ""
    })

    const [traumaExposure, setTraumaExposure] = useState({
        witnessed_murder_of_family_or_friend: "",
            witnessed_murder_of_stranger_or_known_person: "",
            witnessed_armed_attack_on_someone: "",
            left_country_due_to_war_conflict_poverty: "",
            sexually_assaulted_or_raped: "",
            experienced_torture: "",
            robbed_at_gun_point_or_knife_point: "",
            kidnapped: "",
            felt_close_to_death: "",
            witnessed_someone_being_raped: "",
            user_id:"",
    })

    const [gad7View, setGad7View] = useState({
        feeling_nervous_anxious: "",
             not_able_to_stop_worrying: "",
             worrying_too_much: "",
             trouble_relaxing: "",
             restless_difficulty_sitting_still: "",
             easily_annoyed_irritable: "",
             feeling_afraid_something_awful_might_happen: "",
             user_id: "",
    })

    const [havard, setHarvard] = useState({
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
    })

    const [suicidal, setSuicidal] = useState({
        wished_dead_or_to_sleep: "",
            thoughts_about_killing_yourself: "",
            thinking_about_how_to_kill_Yourself: "",
            thoughtsWithIntentionOfActing: "",
            worked_out_details_of_killing_yourself: "",
            done_anything_to_end_your_life_3month: "",
            done_anything_to_end_your_life_lifetime: "",
            suicidality_screener_score: "",
            study_id:"",

    })
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({ first_name: "", other_names: "" })



    const fetchphq9view = async (userId: any) => {

        try {
            await api.getEntry("phq9", userId, "3").then((data: any) => {

                setPhq9view(data)
            })

        } catch (error) {

        }

    }

    const fetchtraumaExposure = async (userId: any) => {

        try {
            await api.getEntry("traumaScale", userId, "3").then((data: any) => {

                setTraumaExposure(data)
            })

        } catch (error) {

        }

    }

    const fetchgad7View = async (userId: any) => {

        try {
            await api.getEntry("gad7Scale", userId, "3").then((data: any) => {

                setGad7View(data)
            })

        } catch (error) {

        }

    }

    const fetchHavard = async (userId: any) => {

        try {
            await api.getEntry("harvardTrauma", userId, "3").then((data: any) => {

                setHarvard(data)
            })

        } catch (error) {

        }

    }

    const fetchSuicidal = async (userId: any) => {

        try {
            await api.getEntry("suicidal", userId, "3").then((data: any) => {

                setSuicidal(data)
            })

        } catch (error) {

        }

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setUserId(_id)
        setUserName(localData)

        console.log("THE DATA ++++++++", localData.dob)

    }, [])

    useEffect(() => {
        if (userId != null) {
            fetchphq9view(userId)
            fetchtraumaExposure(userId)
            fetchgad7View(userId)
            fetchHavard(userId)
            fetchSuicidal(userId)

        }

        console.log(userId)

    }, [userId])

    const onSelectedIntervention = () => {
        router.push('/uikit/phq9view/view/')
    }



    return (
        <>
            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
                            <span className="font-bold white-space-nowrap">Depression PHQ9</span>
                            <span>| Score:</span>
                            <Badge value={phq9view.phq9_score} className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                       
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                1. Little interest or pleasure in doing things?

                                    <span className="text-blue-500">{ }  {phq9view.interest_pleasure}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                2. Feeling down, depressed, or hopeless?


                                    <span className="text-blue-500">{ }  {phq9view.feeling_depressed}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Little interest or pleasure in doing things?

                                    <span className="text-blue-500">{ }  {phq9view.interest_pleasure}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                3. Troubled falling asleep, staying asleep, or sleeping too much?


                                    <span className="text-blue-500">{ }  {phq9view.trouble_sleeping}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                4. Feeling tired or having little energy?

                                    <span className="text-blue-500">{ }  {phq9view.feeling_tired}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                5. Poor appetite or overeating?

                                    <span className="text-blue-500">{ }  {phq9view.poor_appetite}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                6. Feeling bad about yourself - or that you’re a failure or have let yourself or your family down ?


                                    <span className="text-blue-500">{ }  {phq9view.feeling_bad_about_yourself}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                7. Trouble concentrating on things, such as reading the newspaper or watching television??


                                    <span className="text-blue-500">{ }  {phq9view.trouble_concentrating}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                8. Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?



                                    <span className="text-blue-500">{ }  {phq9view.slow_or_restless}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                9. Thoughts that you would be better off dead or of hurting yourself in some way?



                                    <span className="text-blue-500">{ }  {phq9view.thoughts_of_harming_yourself}</span>
                                </span>
                            </li>                     



                        </ul>

                        


                    </div>
                </AccordionTab>


                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
                            <span className="font-bold white-space-nowrap">Anxiety Gad 7 Scale</span>
                            <Badge value={phq9view.phq9_score} className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                       
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                1. Feeling nervous, anxious, or on edge?

                                    <span className="text-blue-500">{ }  {gad7View.feeling_nervous_anxious}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                2. Not being able to stop or control worrying?



                                    <span className="text-blue-500">{ }  {gad7View.not_able_to_stop_worrying}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                3. Worrying too much about different things?


                                    <span className="text-blue-500">{ }  {gad7View.worrying_too_much}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                4. Trouble relaxing?



                                    <span className="text-blue-500">{ }  {gad7View.trouble_relaxing}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                5. Being so restless that it is hard to sit still?


                                    <span className="text-blue-500">{ }  {gad7View.restless_difficulty_sitting_still}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                6. Becoming easily annoyed or irritable?

                                    <span className="text-blue-500">{ }  {gad7View.easily_annoyed_irritable}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                7. Feeling afraid, as if something awful might happen?


                                    <span className="text-blue-500">{ }  {gad7View.feeling_afraid_something_awful_might_happen}</span>
                                </span>
                            </li>
                                            



                        </ul>

                        


                    </div>
                </AccordionTab>


                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
                            <span className="font-bold white-space-nowrap">Trauma Exposure</span>
                            <Badge value={phq9view.phq9_score} className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                       
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                1. I witnessed a murder of family or friend??

                                    <span className="text-blue-500">{ }  {traumaExposure.witnessed_murder_of_family_or_friend}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                2. I witnessed the murder of a stranger or someone I knew?


                                    <span className="text-blue-500">{ }  {traumaExposure.witnessed_murder_of_stranger_or_known_person}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                3. I witnessed any other armed attack on someone?

                                    <span className="text-blue-500">{ }  {traumaExposure.witnessed_armed_attack_on_someone}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                4. I had to leave my country due to war, conflict, or poverty?


                                    <span className="text-blue-500">{ }  {traumaExposure.left_country_due_to_war_conflict_poverty}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                5. I was sexually assaulted or raped?

                                    <span className="text-blue-500">{ }  {traumaExposure.sexually_assaulted_or_raped}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                6. I witnessed the murder of a stranger or someone I knew?

                                    <span className="text-blue-500">{ }  {traumaExposure.witnessed_murder_of_stranger_or_known_person}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                7. I was robbed at gunpoint or knifepoint?


                                    <span className="text-blue-500">{ }  {traumaExposure.robbed_at_gun_point_or_knife_point}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                8. I was kidnapped?


                                    <span className="text-blue-500">{ }  {traumaExposure.kidnapped}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                9. I felt that I was close to death?



                                    <span className="text-blue-500">{ }  {traumaExposure.felt_close_to_death}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                10. I witnessed someone being raped?



                                    <span className="text-blue-500">{ }  {traumaExposure.witnessed_someone_being_raped}</span>
                                </span>
                            </li>   

                                                 
                  



                        </ul>

                        


                    </div>
                </AccordionTab>



                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
                            <span className="font-bold white-space-nowrap">Harvard Trauma Questionnaire</span>
                            <Badge value={phq9view.phq9_score} className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                       
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                1. Have you had many thoughts or memories of the most hurtful or terrifying events?

                                    <span className="text-blue-500">{ }  {havard.thoughts_memories}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                2. Feeling as though the event is happening again?


                                    <span className="text-blue-500">{ }  {havard.feeling_as_though_event_happening_again}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                3. Recurrent nightmares?

                                    <span className="text-blue-500">{ }  {havard.recurrent_nightmares}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                3. Troubled falling asleep, staying asleep, or sleeping too much?


                                    <span className="text-blue-500">{ }  {havard.trouble_sleeping}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                4. Feeling detached or withdrawn from people?

                                    <span className="text-blue-500">{ }  {havard.feeling_detached_withdrawn}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                5. Unable to feel emotions?

                                    <span className="text-blue-500">{ }  {havard.unable_to_feel_emotions}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                6. Feeling jumpy, easily startled?


                                    <span className="text-blue-500">{ }  {havard.feeling_jumpy_easily_startled}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                7. Difficulty concentrating?


                                    <span className="text-blue-500">{ }  {havard.difficulty_concentrating}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                8. Trouble sleeping?



                                    <span className="text-blue-500">{ }  {havard.trouble_sleeping}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                9. Trouble sleeping?



                                    <span className="text-blue-500">{ }  {havard.trouble_sleeping}</span>
                                </span>
                            </li> 

                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                10. Feeling irritable or having outbursts of anger?



                                    <span className="text-blue-500">{ }  {havard.feeling_irritable_or_angry}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                11. Avoiding activities that remind you of the traumatic or hurtful event?



                                    <span className="text-blue-500">{ }  {havard.avoiding_activities_remind_of_event}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                12. Inability to remember parts of the most traumatic or hurtful events?



                                    <span className="text-blue-500">{ }  {havard.trouble_sleeping}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                13. Inability to remember parts of the most traumatic or hurtful events?



                                    <span className="text-blue-500">{ }  {havard.trouble_sleeping}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                14. Feeling as if you don't have a future?



                                    <span className="text-blue-500">{ }  {havard.feeling_no_future}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                15.Had a sudden emotional or physical reaction when reminded of the most traumatic or hurtful events ?



                                    <span className="text-blue-500">{ }  {havard.sudden_emotional_physical_reaction}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                16.Avoiding thoughts or feelings associated with the traumatic or hurtful experiences ? ?



                                    <span className="text-blue-500">{ }  {havard.avoiding_thoughts_feelings_associated_with_event}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                17.Feeling that the world is a very dangerous place ? ?



                                    <span className="text-blue-500">{ }  {havard.feeling_world_is_dangerous_place}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                18.Feeling that you are a bad person ? ?



                                    <span className="text-blue-500">{ }  {havard.feeling_you_are_bad_person}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                19.Blaming yourself for the traumatic event ?



                                    <span className="text-blue-500">{ }  {havard.blaming_yourself_for_traumatic_event}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                20.Strong feeling of fear, horror, anger, guilt or shame when thinking about the traumatic event ?



                                    <span className="text-blue-500">{ }  {havard.strong_feeling_of_fear_horror_anger_guilt_shame}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                21.Difficulty feeling love or happiness ?



                                    <span className="text-blue-500">{ }  {havard.difficulty_feeling_love_or_happiness}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                22.Taking risks that may harm yourself or others ?



                                    <span className="text-blue-500">{ }  {havard.taking_risks_that_may_harm_yourself_or_others}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                23.Feeling like you have been damaged as a person by the traumatic event ?



                                    <span className="text-blue-500">{ }  {havard.feeling_damaged_by_traumatic_vent}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                24.Feeling as if something reminds you of the trauma but it feels like a dream, that it is not happening to you, and/or that it is not real ?



                                    <span className="text-blue-500">{ }  {havard.feeling_something_reminds_you_of_trauma_like_a_dream}</span>
                                </span>
                            </li>   
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                25.Feeling people or objects around you are strange or not real ?



                                    <span className="text-blue-500">{ }  {havard.feeling_people_or_objects_around_you_are_strange_or_not_real}</span>
                                </span>
                            </li>                       



                        </ul>

                        


                    </div>
                </AccordionTab>


                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
                            <span className="font-bold white-space-nowrap">Suicidality Screener</span>
                            <Badge value={phq9view.phq9_score} className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                       
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                1. Have you wished you were dead or wished you could go to sleep and not wake up?

                                    <span className="text-blue-500">{ }  {suicidal.wished_dead_or_to_sleep}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                2. Have you actually had any thoughts about killing yourself?


                                    <span className="text-blue-500">{ }  {suicidal.thoughts_about_killing_yourself}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                4. Have you had these thoughts and had some intention of acting on them?

                                    <span className="text-blue-500">{ }  {suicidal.thoughtsWithIntentionOfActing}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                5. Have you started to work out or worked out the details of how to kill yourself? Did you intend to carry out this plan?


                                    <span className="text-blue-500">{ }  {suicidal.worked_out_details_of_killing_yourself}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                6. Have you done anything, started to do anything, or prepared to do anything to end your life? If YES, was this within the past 3 months?

                                    <span className="text-blue-500">{ }  {suicidal.done_anything_to_end_your_life_3month}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                7. Have you done anything, started to do anything, or prepared to do anything to end your life?

                                    <span className="text-blue-500">{ }  {suicidal.done_anything_to_end_your_life_lifetime}</span>
                                </span>
                            </li>
                            


                        </ul>

                        


                    </div>
                </AccordionTab>
               
            </Accordion>

        </>
    )




}

export default MentalHealthOutcomeView
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


const GeneralHealthView = () => {
    const router = useRouter();

    const [artAdherence, setArtAdherence] = useState([{
        missed_doses: "",
        medicines_taking_quality: "",
        medicine_frequency: "",
        user_id:"",
        created_at: ''
    }])

    const [mentalTreatment, setMentalTreatment] = useState([{
        mental_health_disorder: '',
        community_care: '',
        visit_hospital_clinic: '',
        treatment: '',
        other_treatments: '',
        medicine: '',
        taking_as_prescribed: '',
        user_id: '',
        created_at: ''
    }])

    const [intervention, setIntervention] = useState([{
        involved_in_tunawiri: "", // Will be set to either "Yes" or "No"
        sessions_attended: "", // Will be a number
        session_leader: "", // Will be set to one of the options
        othersession_leader: "", // Will be set to one of the options
        average_meeting_length: "", // Will be a number
        still_involved: "", // Will be set to either "Yes" or "No"
        program_helpfulness: "", // Will be set to one of the options
        user_id:"",
        created_at: ''
    }])
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({ first_name: "", other_names: "" })



    const fetchArtAdherence = async (userId: any) => {

        try {
            await api.getEntry("artAdherence", userId, "3").then((data: any) => {

                setArtAdherence(data)
                console.log('art ', data)
            })

        } catch (error) {

        }

    }

    const fetchMentalTreatment = async (userId: any) => {

        try {
            await api.getEntry("mental", userId, "3").then((data: any) => {

                setMentalTreatment(data)
                console.log('treat ', data)
            })

        } catch (error) {

        }

    }

    const fetchInterventions = async (userId: any) => {

        try {
            await api.getEntry("interventions", userId, "3").then((data: any) => {
                console.log('art ', data)

                setIntervention(data)
            })

        } catch (error) {

        }

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        let { _id } = localData
        setUserId(_id)
        setUserName(localData)


    }, [])

    useEffect(() => {
        if (userId != null) {
            fetchArtAdherence(userId)
            fetchMentalTreatment(userId)
            fetchInterventions(userId)

        }

        console.log(userId)

    }, [userId])

    const onSelectedIntervention = () => {
        router.push('/uikit/pregnancyCount/view/')
    }



    return (
        <>
            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">{userName && userName.first_name} {userName && userName.other_names}</span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">

                        {artAdherence && artAdherence.map((data: any, index: any) => (
                            <div>
                                <span className="block text-600 font-medium mb-3">General Health   <span className="text-green-500">  ({data.created_at && data.created_at.slice(0, -7)})</span></span>

                                <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            In the last 30 days, on how many days did you miss at least one dose of any of your HIV medicines?

                                            <span className="text-blue-500">{} {data.missed_doses}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                             In the last 30 days, how good a job did you do at taking your HIV medicines in the way you were supposed to?

                                            <span className="text-blue-500">{} {data.medicines_taking_quality}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            In the last 30 days, how often did you take your HIV medicines in the way you were supposed to?

                                            <span className="text-blue-500">{} {data.medicine_frequency}</span>
                                        </span>
                                    </li>


                                </ul>
                            </div>

                        ))}
                    </div>

                    <div className="card">

                        {intervention && intervention.map((data: any, index: any) => (
                            <div>
                                <span className="block text-600 font-medium mb-3">Tunawiri Intervention   <span
                                    className="text-green-500">  ({data.created_at && data.created_at.slice(0, -7)})</span></span>


                                <ul className="p-0 m-0 list-none">
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                           For help with mental health in the past THREE months, have you been involved in the Tunawiri Program ?

                                            <span className="text-blue-500">{} {data.involved_in_tunawiri}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            How many sessions have you attended with a mentor mother or other provider related to your mental health in the past 3 months?

                                            <span
                                                className="text-blue-500">{} {data.sessions_attended}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            Who led the session ?

                                            <span
                                                className="text-blue-500">{} {data.session_leader ? data.session_leader : data.othersession_leader}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                             How long were the meetings on average? (minutes)

                                            <span
                                                className="text-blue-500">{} {data.average_meeting_length}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            Are you still involved with the program/meetings ?

                                            <span
                                                className="text-blue-500">{} {data.still_involved}</span>
                                        </span>
                                    </li>

                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            How much did the Programme/sessions help you ?

                                            <span
                                                className="text-blue-500">{} {data.program_helpfulness}</span>
                                        </span>
                                    </li>


                                </ul>
                            </div>

                        ))}

                    </div>

                    <div className="card">

                        {mentalTreatment && mentalTreatment.map((data: any, index: any) => (

                            <div>
                                <span className="block text-600 font-medium mb-3">Mental Health Treatment   <span
                                    className="text-green-500">  ({data.created_at && data.created_at.slice(0, -7)})</span></span>

                                <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            Are you aware that you were identified as having a common mental health disorder (such as stress, distress, depression, or anxiety)?


                                            <span className="text-blue-500">{} {data.mental_health_disorder}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                           What care did you seek for this common mental disorder from your community?

                                            <span className="text-blue-500">{} {data.community_care}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            Did you visit a hospital or clinic for this common mental health disorder?

                                            <span className="text-blue-500">{} {data.visit_hospital_clinic}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            What treatment did you receive for this common mental health disorder?

                                            <span className="text-blue-500">{} {data.treatment}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            What other treatments did you receive for this common health disorder?

                                            <span className="text-blue-500">{} {data.other_treatments}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                           What medicine did you take?

                                            <span className="text-blue-500">{} {data.medicine}</span>
                                        </span>
                                    </li>
                                    <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                        <span className="text-900 line-height-3">
                                            n the past ONE MONTH, have you been taking the drug as prescribed?


                                            <span className="text-blue-500">{} {data.taking_as_prescribed}</span>
                                        </span>
                                    </li>


                                </ul>
                            </div>

                        ))}


                    </div>

                </AccordionTab>

            </Accordion>

        </>
    )


}

export default GeneralHealthView

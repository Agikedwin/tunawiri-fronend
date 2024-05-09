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

    const [pregnancyCount, setPregnancyCount] = useState({
        user_id: '',
        pregnancy_count: ''
    })

    const [antenatal, setAntenatal] = useState({
        user_id: "",
        gestational_age_weeks: "",
        months_pregnancy_antenatal_care: ""
    })

    const [postnatal, setpostnatal] = useState({
        user_id: "",
        pregnancy_end_duration: "",
        pregnancy_end_method: "",
        place_of_birth: "",
        infant_alive: "",
        infant_passing_age: ""
    })
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({ first_name: "", other_names: "" })



    const fetchpregnancyCount = async (userId: any) => {

        try {
            await api.getEntry("generalhealth", userId, "3").then((data: any) => {

                setPregnancyCount(data)
            })

        } catch (error) {

        }

    }

    const fetchAntenatal = async (userId: any) => {

        try {
            await api.getEntry("antenatal", userId, "3").then((data: any) => {

                setAntenatal(data)
            })

        } catch (error) {

        }

    }

    const fetchPostnatal = async (userId: any) => {

        try {
            await api.getEntry("postnatal", userId, "3").then((data: any) => {

                setpostnatal(data)
            })

        } catch (error) {

        }

    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser'))
        let { _id } = localData
        setUserId(_id)
        setUserName(localData)

        console.log("THE DATA ++++++++", localData.dob)

    }, [])

    useEffect(() => {
        if (userId != null) {
            fetchpregnancyCount(userId)
            fetchAntenatal(userId)
            fetchPostnatal(userId)

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

                        <span className="block text-600 font-medium mb-3">General Health</span>
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    How many times have you been pregnant?:

                                    <span className="text-blue-500">{ }  {pregnancyCount.pregnancy_count}</span>
                                </span>
                            </li>



                        </ul>

                        <span className="block text-600 font-medium mb-3">Antenatal</span>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    What's your current gestational age in weeks?:

                                    <span className="text-blue-500">{ }  {antenatal.gestational_age_weeks}</span>
                                </span>
                            </li>

                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    How many months were you into the pregnancy when you first went to the clinic for antenatal care

                                    <span className="text-blue-500">{ }  {antenatal.months_pregnancy_antenatal_care}</span>
                                </span>
                            </li>


                        </ul>

                        <span className="block text-600 font-medium mb-3">Postnatal</span>
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    How long ago did your pregnancy end?
                                    :

                                    <span className="text-blue-500">{ }  {postnatal.pregnancy_end_duration}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    How did the pregnancy end ?
                                    :

                                    <span className="text-blue-500">{ }  {postnatal.pregnancy_end_method}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    Where did you give birth?:

                                    <span className="text-blue-500">{ }  {postnatal.place_of_birth}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    Is your infant still alive ?:

                                    <span className="text-blue-500">{ }  {postnatal.infant_alive}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    If no, how old was your infant when he/she passed ?
                                    :

                                    <span className="text-blue-500">{ }  {postnatal.infant_passing_age}</span>
                                </span>
                            </li>


                        </ul>
                    </div>
                </AccordionTab>
               
            </Accordion>

        </>
    )




}

export default GeneralHealthView
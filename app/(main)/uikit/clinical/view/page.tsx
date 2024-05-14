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


const UserEntryForms = () => {
    const router = useRouter();

    const [clinical, setClinical] = useState([{
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
        other_regimen_name: '',   
        created_at : ''
    }])
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({ first_name: "", other_names: "" })



    const fetchClinical = async (userId: any) => {

        try {
            await api.getEntry("clinical", userId, "3").then((data: any) => {
                console.log("Get user clinicals::  ", data)

                setClinical(data)
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
            fetchClinical(userId)

        }

        console.log(userId)

    }, [userId])

    const onSelectedIntervention = () => {
        router.push('/uikit/clinical/view/')
    }



    return (
        <>

            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">{userName && userName.first_name} {userName && userName.other_names}</span>
                            <Badge value="active" severity="success" className="ml-auto" />
                        </span>
                    }
                >
                    {clinical.map((data: any, index: any) => (

                        <div className="card">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <h5>Clinical Intervention </h5> <span> {data.created_at.slice(0, -7)}</span>

                            </div>

                            <span className="block text-600 font-medium mb-3">CD4 COUNT</span>
                            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Most recent CD4 count:

                                        <span className="text-blue-500">{ }  {data.cd4_known}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Date of Collection (CD4 count):

                                        <span className="text-blue-500">{ }  {data.cd4_count_date}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        CD4 count (cells/µL)

                                        <span className="text-blue-500">{ }  {data.known_cd4_count}</span>
                                    </span>
                                </li>

                            </ul>

                            <span className="block text-600 font-medium mb-3">Viral Load</span>
                            <ul className="p-0 m-0 list-none">
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Recent VL Known:

                                        <span className="text-blue-500">{ }  {data.viral_load_known}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Viral load (copies/ml):

                                        <span className="text-blue-500">{ }  {data.known_viral_load}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Date of Collection (viral load):

                                        <span className="text-blue-500">{ }  {data.viral_load_date}</span>
                                    </span>
                                </li>


                            </ul>

                            <span className="block text-600 font-medium mb-3">Others</span>
                            <ul className="p-0 m-0 list-none">
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        ART Start date:

                                        <span className="text-blue-500">{ }  {data.art_start_date}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Current ART regimen:

                                        <span className="text-blue-500">{ }  {data.current_art_regimen == "Other" ? data.other_regimen_name : data.current_art_regimen}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Date of most recent HIV visit:

                                        <span className="text-blue-500">{ }  {data.last_hiv_visit_date}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Has the woman missed any clinic visit in the past 14 days:

                                        <span className="text-blue-500">{ }  {data.ever_missed_visit}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        If yes, approximately how many missed visits in the past 14 days:

                                        <span className="text-blue-500">{ }  {data.ever_missed_visit}</span>
                                    </span>
                                </li>


                            </ul>
                        </div>

                    ))}



                </AccordionTab>


            </Accordion>




        </>
    )




}

export default UserEntryForms
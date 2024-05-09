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

    const [clinical, setClinical] = useState({
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
    })
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({first_name: "", other_names:""})



    const fetchClinical = async (userId: any) => {

        try {
            await api.getEntry("clinical", userId, "3").then((data: any) => {
                
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

    },[])

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
                            <Badge value="3" className="ml-auto" />
                        </span>
                    }
                >
                    <div className="card">
                        <div className="flex align-items-center justify-content-between mb-4">
                            <h5>Clinical Interventions</h5>

                        </div>

                        <span className="block text-600 font-medium mb-3">CD4 COUNT</span>
                        <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    Most recent CD4 count:

                                    <span className="text-blue-500">{ }  {clinical.cd4_known}</span>
                                </span>
                            </li>

                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    Date of Collection (CD4 count):

                                    <span className="text-blue-500">{ }  {clinical.cd4_count_date}</span>
                                </span>
                            </li>

                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                CD4 count (cells/µL)

                                    <span className="text-blue-500">{ }  {clinical.known_cd4_count}</span>
                                </span>
                            </li>

                        </ul>

                        <span className="block text-600 font-medium mb-3">Viral Load</span>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                    Recent VL Known:

                                    <span className="text-blue-500">{ }  {clinical.viral_load_known}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Viral load (copies/ml):

                                    <span className="text-blue-500">{ }  {clinical.known_viral_load}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Date of Collection (viral load):

                                    <span className="text-blue-500">{ }  {clinical.viral_load_date}</span>
                                </span>
                            </li>
                           

                        </ul>

                        <span className="block text-600 font-medium mb-3">Others</span>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                ART Start date:

                                    <span className="text-blue-500">{ }  {clinical.art_start_date}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Current ART regimen:

                                    <span className="text-blue-500">{ }  {clinical.current_art_regimen == "Other" ? clinical.other_regimen_name: clinical.current_art_regimen}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Date of most recent HIV visit:

                                    <span className="text-blue-500">{ }  {clinical.last_hiv_visit_date}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                Has the woman missed any clinic visit in the past 14 days:

                                    <span className="text-blue-500">{ }  {clinical.ever_missed_visit}</span>
                                </span>
                            </li>
                            <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                <span className="text-900 line-height-3">
                                If yes, approximately how many missed visits in the past 14 days:

                                    <span className="text-blue-500">{ }  {clinical.ever_missed_visit}</span>
                                </span>
                            </li>
                           

                        </ul>
                    </div>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Onyama Limba</span>
                            <Badge value="4" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                            <Badge value="2" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
            {/* {clinical && (
            <DataTable value={clinical} tableStyle={{ minWidth: '50rem' }}>
                <Column field="cd4_known" header="Recent CD4 Known"></Column>
                <Column field="cd4_count_date" header="CD4 Count"></Column>
                <Column field="cd4_count_date" header="Date of Collection (CD4 count)"></Column>
                <Column field="viral_load_known" header="Recent VL Known"></Column>
                <Column field="known_viral_load" header="Viral load (copies/ml)"></Column>
                <Column field="viral_load_date" header="Date of Collection (viral load)"></Column>
                <Column field="art_start_date" header="ART Start date"></Column>
                <Column field="current_art_regimen" header="Current ART regimen"></Column>
                <Column field="other_regimen_name" header="Other Regimen"></Column>
                <Column field="last_hiv_visit_date" header="Recent Visit date"></Column>

                <Column field="ever_missed_visit" header="Ever Missed Clinic"></Column>
                <Column field="ever_missed_visit" header="Missed Clinc Count"></Column>

                <Column
                            header="Entry"
                            style={{ width: '5%' }}
                            body={(rowData) => (
                                
                                    <Button icon="pi pi-eye" text onClick={() => {onSelectedIntervention(rowData)}} outlined/>
                            )}                            
                            
                        />
            </DataTable>
        )
    } */}
        </>
    )




}

export default UserEntryForms
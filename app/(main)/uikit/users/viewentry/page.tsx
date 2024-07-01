"use client"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useRouter } from 'next/navigation';
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { useEffect, useState } from "react";

import GloabalUserProfile from '../globalprofile/page'



const UserEntryForms = () => {
    const router = useRouter();

    const [selectedUser, setSelectedUser] = useState({mch_number:"", first_name: "", other_names: ""})


    const studyInterventions = [
        {
            name: "Clinical Interventions",
            count: 2,
            link: "/uikit/clinical/view/",
            updated: "2024-05-08"
        },
        {
            name: "Social Support ",
            count: 2,
            link: "/uikit/socialsupport/whointimatepartnerviolence/view/",
            updated: "2024-05-08"
        },
        {
            name: "Maternal and Infant Health ",
            count: 2,
            link: "/uikit/maternalandinfanthealth/view/",
            updated: "2024-05-08"
        },

        {
            name: "Mental Health Outcome ",
            count: 2,
            link: "/uikit/mentalhealthoutcome/view/",
            updated: "2024-05-08"
        },

        {
            name: "Health Utilization",
            count: 4,
            link: "/uikit/healthutilization/view/",
            updated: "2024-05-08"
        },

    ]

    const onSelectedIntervention = (data: any)=>{
        router.push(data.link)

    }
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        setSelectedUser(localData)
        console.log(" The selected user :: ", localData.mch_number)

    }, []);

    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <span className="text-teal-500 align-items-center" >{selectedUser.first_name +"   "+  selectedUser.other_names +" | "+ selectedUser.mch_number}</span>
            <Button icon="pi pi-arrow-left" text onClick={() => {
                console.log('clicked')
                router.push('/uikit/users/view/')
            }
            } />

        </div>
    );

   



    return (
        <>
       {/*  <Card header={cardHeader}></Card> */}
       <GloabalUserProfile  user={selectedUser}/>
       
            <DataTable value={studyInterventions} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Intervention Name"></Column>
                <Column field="count" header="Number of entries"></Column>
                <Column field="link" header="Redirect link"></Column>
                <Column field="updated" header="Last Updated"></Column>
                <Column
                            header="Entry"
                            style={{ width: '5%' }}
                            body={(rowData) => (

                                    <Button icon="pi pi-eye" text onClick={() => {onSelectedIntervention(rowData)}} outlined/>
                            )}

                        />
            </DataTable>
        </>
    )




}

export default UserEntryForms

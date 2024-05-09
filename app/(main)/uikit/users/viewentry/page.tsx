"use client"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useRouter } from 'next/navigation';



const UserEntryForms = () => {
    const router = useRouter();


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
            name: "Mental and Infant Health ",
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
            name: "Mental Utilization ",
            count: 2,
            link: "/clinical",
            updated: "2024-05-08"
        },

    ]

    const onSelectedIntervention = (data: any)=>{
        router.push(data.link)

    }



    return (
        <>
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
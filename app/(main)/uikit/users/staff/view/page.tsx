'use client';

import api from "@/app/api/api";
import { useRouter } from 'next/navigation';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Column, ColumnFilterApplyTemplateOptions, ColumnFilterClearTemplateOptions } from "primereact/column";
import { DataTable, DataTableSelectEvent } from "primereact/datatable";
import { Toast } from "primereact/toast";
import React, { Key } from "react";
import { useEffect, useRef, useState } from "react";

interface userValues {
    id: object
    //mch_number: String
    //ccc_number: String
    first_name: String
    other_names: String
    dob: String
    marital_status: String
    education_level: String
    //reading_ability: String
    religion: String
    //home_language: String//
    study_id: String
}

const ViewUsers = () => {

    const toast = useRef<Toast>(null);
    const router = useRouter();

    const [users, setUsers] = useState([])
    const [selectedTableUser, setSelectedTableUser] = useState<userValues | null>(null);

    const showSuccess = () => {
        toast.current?.show({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message Detail',
            life: 3000
        });
    };




    const fetchUsers = async () => {
        try {
            await api.getEntries("user", "8").then((data:any) => {
                setUsers(data.filter((user: any) => user?.registration_level === "Staff"))
                //setUsers(data)
            })
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const addNewUser = () => {
        console.log("selected new user here ")
    }

    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Tunawiri Staff</h5>
            <Button icon="pi pi-plus" label="Enroll" text onClick={() => {
                console.log('clicked')
                router.push('/uikit/users/staff/register/')
            }
            } />

        </div>
    );

    const onSelectionChange = (e: any): void => {
        setSelectedTableUser(e.value as userValues);
    };

    const onUserSelect = (data: any) => {


        localStorage.setItem('selectedTunawiriUser', JSON.stringify(data));
        router.push('/uikit/staffs/profile/')

        toast.current?.show({
            severity: 'info',
            summary: 'Product Selected',
            detail: "",
            life: 3000
        });
        //router.push('/uikit/cqicycle/')

    };

    const selectedUserColumn = (data:any) =>{
        localStorage.setItem('selectedTunawiriUser', JSON.stringify(data));
        router.push('/uikit/staffs/viewentry/')
        console.log(data)
    }


    const filterClearTemplate = (options: ColumnFilterClearTemplateOptions) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options: ColumnFilterApplyTemplateOptions) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };
    return (
        <>
            <Card header={cardHeader}>


                {/*                 <DataTable value={products} selection={selectedProduct || undefined} onSelectionChange={onSelectionChange} selectionMode="single" responsiveLayout="scroll" paginator rows={5} onRowSelect={onProductSelect}>
            */}
                {users.length > 0 ? (

                    <DataTable
                        value={users}
                        dataKey="_id"
                        selection={selectedTableUser || undefined}
                        onSelectionChange={onSelectionChange}
                        selectionMode="single"
                        responsiveLayout="scroll"
                        paginator rows={15}
                        //onRowSelect={onUserSelect}
                        tableStyle={{ maxWidth: '110rem' }} >


                        <Column field="first_name" header="First Name" sortable />
                        <Column field="other_names" header="Other Names" />
                        <Column field="dob" header="Age" />
                        <Column field="religion" header="Religion" />
                        <Column field="education_level" header="Education Level" />
                        <Column field="reading_ability" header="Reading Ability" />






                    </DataTable>
                ) : "Loading..."

                }

            </Card>
        </>
    )

}

export default ViewUsers

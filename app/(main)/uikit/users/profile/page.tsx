
'use client';
import React, { useState, useEffect } from 'react';
import { Tree, TreeCheckboxSelectionKeys, TreeMultipleSelectionKeys } from 'primereact/tree';
import { TreeTable, TreeTableSelectionKeysType } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../../../../../demo/service/NodeService';
import { TreeNode } from 'primereact/treenode';
import { useRouter } from 'next/navigation';

import GloabalUserProfile from '../globalprofile/page';

const userProfile = () =>{
    const router = useRouter();

    const [files, setFiles] = useState<TreeNode[]>([]);
    const [files2, setFiles2] = useState<TreeNode[]>([]);
    const [selectedFileKeys, setSelectedFileKeys] = useState<string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null>(null);
    const [selectedFileKeys2, setSelectedFileKeys2] = useState<TreeTableSelectionKeysType | null>(null);
    const [selectedUser, setSelectedUser] = useState({mch_number:"", first_name: "", other_names: ""})

    useEffect(() => {
        NodeService.getFiles().then((files) => setFiles(files));
        NodeService.getTunawiriForms().then((files) => setFiles2(files));
    }, []);

    const onSelectionTree = (e:any) => {
        console.log(e.data.type)
        router.push(e.data.type)
    }

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        setSelectedUser(localData)
        console.log(" The selected user :: ", localData.mch_number)

    }, []);

    return (
        <div className="grid">
           
            <div className="col-12">
                <span><GloabalUserProfile  /></span>
                <div className="card">                    
                    <TreeTable value={files2} selectionMode="checkbox" selectionKeys={selectedFileKeys2} 
                    onSelect={(e) => onSelectionTree(e.node)} >
                        <Column field="name" header="Form Name" expander />
                        <Column field="size" header="State" />
                        <Column field="type" header="url" />
                    </TreeTable>
                </div>
            </div>
        </div>
    );

}

export default userProfile
"use client"
import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

interface PageProps {
    user: object
  }
const GloabalUserProfile = () => {
    const router = useRouter()
    const [user, setUser] = useState({first_name: "", other_names:"", mch_number:""})

    useEffect(() =>{
        let localData = JSON.parse(localStorage.getItem('selectedTunawiriUser')!)
        setUser(localData)
        console.log(" The selected user :: ", localData.mch_number)

    },[])

 


    return (
        <>
            {user && (
                <div className="grid">
                    <div className="col">
                        <div className="text-center p-5 border-round-sm font-bold"></div>
                    </div>
                    <div className="col">
                        <div className="text-teal-500 text-center p-5 border-round-sm  font-bold ">{user.first_name + " " + user.other_names + " | " + user.mch_number}</div>
                    </div>
                    <div className="col">
                        <div className="text-teal-500 text-left p-2  ">
                            <Button icon="pi pi-arrow-left" text onClick={() => {
                                router.push('/uikit/users/view/')
                            }
                            } />
                        </div>
                    </div>
                </div>
            )}

        </>
    )

}
export default GloabalUserProfile
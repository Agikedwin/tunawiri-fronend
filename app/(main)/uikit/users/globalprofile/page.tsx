import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { Props } from "next/script";


const GloabalUserProfile = ({ ...user }) => {
    const router = useRouter();

    useEffect(()=>{
        console.log("The props --- :: ", user.user.mch_number)
    })



    return (
        <>
            {user && (
                <div className="grid">
                    <div className="col">
                        <div className="text-center p-5 border-round-sm font-bold"></div>
                    </div>
                    <div className="col">
                        <div className="text-teal-500 text-center p-5 border-round-sm  font-bold ">{user.user.first_name + " " + user.user.other_names + " | " + user.user.mch_number}</div>
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
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


const SocialSupportView = () => {
    const router = useRouter();

    const [socialSupport, setSocialSupport] = useState([{
        user_id: "",
        insulted_feelings: "",
        belittled_humiliated: "",
        scare_intimidate: "",
        threw_out_house: "",
        confined_locked: "",
        threatened_hurt: "",
        slapped_thrown: "",
        pushed_dhoved: "",
        hit_with_fist: "",
        kicked_dragged: "",
        choked_burnt: "",
        threatened_used_weapon: "",
        forced_sexual_Intercourse: "",
        agreed_unwanted_Intercourse: "",
        forced_other_sexual_act: "",
        tried_keep_from_friends: "",
        tried_restrict_family_contact: "",
        insisted_knowing_location: "",
        jealous_angry_with_men: "",
        suspicious_unfaithful: "",
        took_earnings_savings: "",
        refused_money_for_household: "",
        tried_convince_crazy: "",
        blamed_for_violent_behavior: "",
        created_at: ""
    }])
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState({ first_name: "", other_names: "" })



    const fetchsocialSupport = async (userId: any) => {

        try {
            await api.getEntry("socialsupport", userId, "3").then((data: any) => {

                setSocialSupport(data)
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
            fetchsocialSupport(userId)

        }

        console.log(userId)

    }, [userId])

    const onSelectedIntervention = () => {
        router.push('/uikit/socialsupport/view/')
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
                    {socialSupport.map((data: any, index: any) => (

                        <div className="card">
                            <div className="flex align-items-center justify-content-between mb-4">
                                <h5>Social Support  </h5> <span  className="text-green-500">  {data.created_at && data.created_at.slice(0, -7)}</span>

                            </div>

                            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        1. Insulted you or made you feel bad about yourself:

                                        <span className="text-blue-500">{ }  {data.insulted_feelings}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        2. Belittled or humiliated you in front of other people:

                                        <span className="text-blue-500">{ }  {data.belittled_humiliated}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        3.  Done things to scare or intimidate you on purpose
                                        (e.g. by the way he looked at you, by shouting and smashing things)?

                                        <span className="text-blue-500">{ }  {data.scare_intimidate}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        4. Threw you out of the house or made you find a new place to stay?

                                        <span className="text-blue-500">{ }  {data.threw_out_house}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        5. Done things to scare or intimidate you on purpose
                                        (e.g. by the way he looked at you, by shouting and smashing things)?

                                        <span className="text-blue-500">{ }  {data.confined_locked}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        6. Confined or locked you in a room or other space?

                                        <span className="text-blue-500">{ }  {data.confined_locked}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        Threatened to hurt you or someone you care about?


                                        <span className="text-blue-500">{ }  {data.threatened_hurt}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        7. Slapped you or thrown something at you that could hurt you?

                                        <span className="text-blue-500">{ }  {data.slapped_thrown}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        8. Pushed you or shoved you or pulled your hair?
                                        <span className="text-blue-500">{ }  {data.pushed_dhoved}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        9. Hit you with his fist or with something else that could hurt you?

                                        <span className="text-blue-500">{ }  {data.hit_with_fist}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        10. Kicked you, dragged you or beaten you up?


                                        <span className="text-blue-500">{ }  {data.kicked_dragged}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        11. Choked or burnt you on purpose?

                                        <span className="text-blue-500">{ }  {data.choked_burnt}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        12. Threatened to use or actually used a gun, knife or other weapon against you?

                                        <span className="text-blue-500">{ }  {data.threatened_used_weapon}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        13. Force you to have sexual intercourse by threatening you, holding you down or hurting you in some way?

                                        <span className="text-blue-500">{ }  {data.forced_sexual_Intercourse}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        14. Did you ever agree to have intercourse when you did not want to because you were afraid of what your husband/partner might do if you refused?

                                        <span className="text-blue-500">{ }  {data.agreed_unwanted_Intercourse}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        15. Force you to do something sexual (besides vaginal intercourse) that you did not want to do?

                                        <span className="text-blue-500">{ }  {data.forced_other_sexual_act}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        13. Force you to have sexual intercourse by threatening you, holding you down or hurting you in some way?

                                        <span className="text-blue-500">{ }  {data.tried_keep_from_friends}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        16. Tried to keep you from seeing your friends?

                                        <span className="text-blue-500">{ }  {data.tried_restrict_family_contact}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        17. Tried to restrict contact with your family of birth?

                                        <span className="text-blue-500">{ }  {data.insisted_knowing_location}</span>
                                    </span>
                                </li>

                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        18. Insisted on knowing where you are at all times?

                                        <span className="text-blue-500">{ }  {data.insisted_knowing_location}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        19. Been jealous or angry if you spoke with other men?

                                        <span className="text-blue-500">{ }  {data.tried_restrict_family_contact}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        13. 20. Was suspicious that you were unfaithful even when you were being faithful?
                                        you to have sexual intercourse by threatening you, holding you down or hurting you in some way?

                                        <span className="text-blue-500">{ }  {data.suspicious_unfaithful}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        21. Took your earnings or savings against your will?

                                        <span className="text-blue-500">{ }  {data.took_earnings_savings}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        22. Refused to give money for household even when he has money for other things?

                                        <span className="text-blue-500">{ }  {data.suspicious_unfaithful}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        23. Tried to convince your family, children or friends that you are crazy or tried to turn them against you?

                                        <span className="text-blue-500">{ }  {data.took_earnings_savings}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        13. Force you to have sexual intercourse by threatening you, holding you down or hurting you in some way?

                                        <span className="text-blue-500">{ }  {data.refused_money_for_household}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        13. Force you to have sexual intercourse by threatening you, holding you down or hurting you in some way?

                                        <span className="text-blue-500">{ }  {data.tried_convince_crazy}</span>
                                    </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">

                                    <span className="text-900 line-height-3">
                                        24. Blamed you for causing their violent behaviour?

                                        <span className="text-blue-500">{ }  {data.blamed_for_violent_behavior}</span>
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

export default SocialSupportView
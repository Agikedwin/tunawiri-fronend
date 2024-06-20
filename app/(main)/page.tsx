/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const LandingRedirect = () => {
    

    const router = useRouter();

    useEffect(()=>{
        router.push('/auth/login')
    },[])

}

export default LandingRedirect
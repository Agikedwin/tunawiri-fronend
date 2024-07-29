/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';

import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';

import UserSeverity from '../users/severity/page'

import api from "@/app/api/api";


const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Green Score',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Yellow Score',
            data: [21, 28, 32, 34, 16, 49, 42],
            fill: false,
            backgroundColor: '#f4d30e',
            borderColor: '#f4d30e',
            tension: 0.4
        },
        {
            label: 'Amber Score',
            data: [38, 45, 60, 65, 35, 44, 24],
            fill: false,
            backgroundColor: '#ffbf00',
            borderColor: '#ffbf00',
            tension: 0.4
        },
        {
            label: 'Red Score',
            data: [16, 24, 13, 7, 64, 34, 48],
            fill: false,
            backgroundColor: '#ff0000',
            borderColor: '#ff0000',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);

    const [phq9Dash, setPhq9Dash] = useState({ 'Low': 0, 'Mild': 0, 'Moderate': 0, 'Severe': 0 })
    const [gad7Dash, setGadDash] = useState({ 'Low': 0, 'Mild': 0, 'Moderate': 0, 'Severe': 0 })
    const [harvardDash, setHarvardDash] = useState({ 'Low': 0, 'Mild': 0, 'Moderate': 0, 'Severe': 0 })
    const [suicidalDash, setSuicidalDash] = useState({ 'Low': 0, 'Mild': 0, 'Moderate': 0, 'Severe': 0 })
    const [traumaDash, setTraumaDash] = useState({ 'Low': 0, 'Mild': 0, 'Moderate': 0, 'Severe': 0 })
    const [userSeverity, setUserSeverity] = useState([])

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };


    useEffect(() => {
        fetchDashboard()
        //ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);



    const fetchDashboard = async () => {
        await api.getEntries("dashboard", 3).then((data: any) => {
            console.log(data[0])
            setPhq9Dash(data[0][0].phq9[0])
            setGadDash(data[0][1].gad7[0])
            setHarvardDash(data[0][2].harvard[0])
            setSuicidalDash(data[0][3].suicidal[0])
            setTraumaDash(data[0][4].trauma[0])


        })

    }

    const obSeverityClicked = async (severity: any) => {
        console.log("test here  ", severity.join(','))
        await api.getEntry('user/severity', severity, 3).then((data: any) => {

            setUserSeverity(data)

            console.log(" The severity is ::: ", userSeverity)

        })
    }
    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'lightgreen' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">None Count</span>
                            <div className="text-900 font-medium text-xl">
                                {phq9Dash.Low + gad7Dash.Low + harvardDash.Low + traumaDash.Low + suicidalDash.Low}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                            style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman"
                                style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    {/* <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span> */}
                </div>
            </div>


            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'yellow' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Mild Count</span>
                            <div className="text-900 font-medium text-xl">
                                {phq9Dash.Mild + gad7Dash.Mild + harvardDash.Mild + traumaDash.Mild + suicidalDash.Mild}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                            style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman"
                                style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    {/* <span className="text-green-500 font-medium">20 </span>
                    <span className="text-500">since last week</span> */}
                </div>
            </div>


            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'orange' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Moderate Count</span>
                            <div className="text-900 font-medium text-xl">
                                {phq9Dash.Mild + gad7Dash.Mild + harvardDash.Mild + traumaDash.Mild + suicidalDash.Mild}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                            style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman"
                                style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    {/* <span className="text-green-500 font-medium">20 </span>
                    <span className="text-500">since last week</span> */}
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'red' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Severe Count</span>
                            <div className="text-900 font-medium text-xl">
                                {phq9Dash.Severe + gad7Dash.Severe + harvardDash.Severe + traumaDash.Severe + suicidalDash.Severe}
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                            style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman"
                                style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    {/* <span className="text-green-500 font-medium">5 </span>
                    <span className="text-500">reffered</span> */}
                </div>
            </div>

            <div className="col-12 xl:col-12">

                <div className="card">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <h5>Mental Health Outcome</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain"
                                onClick={(event) => menu1.current?.toggle(event)} />
                            <Menu
                                ref={menu1}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                            />
                        </div>
                    </div>
                    <ul className="list-Low p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0" style={{ width: '20%' }}>Depression PHQ9</span>
                            </div>
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Count</span>
                                <span
                                    className="mt-1 text-600">{phq9Dash.Moderate + phq9Dash.Mild + phq9Dash.Severe}</span>
                            </div>
                            <div>

                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthPhq9', 'Low'])}>
                                    <span className="text-green-500 font-medium mr-2 mb-1 md:mb-0">None</span>
                                    <span className="mt-1 text-green-500" >
                                        {phq9Dash.Low}
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthPhq9', 'Mild'])}>
                                    <span className="text-yellow-500 font-medium mr-2 mb-1 md:mb-0">Mild</span>
                                    <span className="mt-1 text-yellow-500" >
                                        {phq9Dash.Mild}
                                    </span>
                                </Link>
                            </div>

                            <div>

                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthPhq9', 'Moderate'])}>
                                    <span className="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Moderate </span>
                                    <span className="mt-1 text-orange-500" >
                                        {phq9Dash.Moderate}
                                    </span>
                                </Link>
                            </div>

                            <div>

                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthPhq9', 'Severe'])}>
                                    <span className="text-red-500 font-medium mr-2 mb-1 md:mb-0">Severe </span>
                                    <span className="mt-1 text-600" >
                                        {phq9Dash.Severe}
                                    </span>
                                </Link>
                            </div>



                            {/*  <div className="mt-2 md:mt-0 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                     style={{ height: '8px' }}>
                                    <div className="bg-red-500 h-full" style={{ width: phq9Dash.Severe }} />
                                </div>
                                <span className="text-red-500 ml-3 font-medium">{phq9Dash.Severe}</span>
                            </div> */}
                        </li>


                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0" style={{ width: '20%' }}>Anxiety Gad 7 Scale</span>
                            </div>

                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Count</span>
                                <span
                                    className="mt-1 text-600">{gad7Dash.Moderate + gad7Dash.Mild + gad7Dash.Severe}</span>
                            </div>


                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthGad7Scale', 'Low'])}>
                                    <span className="text-green-500 font-medium mr-2 mb-1 md:mb-0">None</span>
                                    <span className="mt-1 text-green-500">{gad7Dash.Low}</span>
                                </Link>

                            </div>

                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthGad7Scale', 'Mild'])}>
                                    <span className="text-yellow-500 font-medium mr-2 mb-1 md:mb-0">Mild</span>
                                    <span className="mt-1 text-yellow-500">{gad7Dash.Mild}</span>
                                </Link>

                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthGad7Scale', 'Moderate'])}>

                                    <span className="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Moderate</span>
                                    <span className="mt-1 text-orange-500">{gad7Dash.Moderate}</span>
                                </Link>
                            </div>



                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthGad7Scale', 'Severe'])}>

                                    <span className="text-red-500 font-medium mr-2 mb-1 md:mb-0">Severe</span>
                                    <span className="mt-1 text-red-500">{gad7Dash.Severe}</span>
                                </Link>
                            </div>

                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0" style={{ width: '20%' }}>Trauma Exposure</span>
                            </div>
                            <div>

                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Count</span>
                                <span
                                    className="mt-1 text-600">{traumaDash.Moderate + traumaDash.Mild + traumaDash.Severe}</span>

                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthTraumaScale', 'Low'])}>
                                    <span className="text-green-500 font-medium mr-2 mb-1 md:mb-0">None</span>
                                    <span className="mt-1 text-green-500">{traumaDash.Low}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthTraumaScale', 'Mild'])}>
                                    <span className="text-yellow-500 font-medium mr-2 mb-1 md:mb-0">Mild</span>
                                    <span className="mt-1 text-yellow-500">{traumaDash.Mild}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthTraumaScale', 'Moderate'])}>
                                    <span className="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Moderate</span>
                                    <span className="mt-1 text-orange-500">{traumaDash.Moderate}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthTraumaScale', 'Severe'])}>
                                    <span className="text-red-500 font-medium mr-2 mb-1 md:mb-0">Severe</span>
                                    <span className="mt-1 text-red-500">{traumaDash.Severe}</span>
                                </Link>
                            </div>

                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0" style={{ width: '20%' }}>Harvard Trauma </span>
                            </div>

                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Count</span>
                                <span
                                    className="mt-1 text-600">{traumaDash.Moderate + traumaDash.Mild + traumaDash.Severe}</span>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthHarvardTrauma', 'Low'])}>
                                    <span className="text-green-400 font-medium mr-2 mb-1 md:mb-0">Low</span>
                                    <span className="mt-1 text-green-500">{traumaDash.Low}</span>
                                </Link>
                            </div>

                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthHarvardTrauma', 'Mild'])}>
                                    <span className="text-yellow-400 font-medium mr-2 mb-1 md:mb-0">Mild</span>
                                    <span className="mt-1 text-yellow-500">{traumaDash.Mild}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthHarvardTrauma', 'Moderate'])}>
                                    <span className="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Moderate</span>
                                    <span className="mt-1 text-orange-500"> {traumaDash.Moderate}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthHarvardTrauma', 'Severe'])}>
                                    <span className="text-red-500 font-medium mr-2 mb-1 md:mb-0">Severe</span>
                                    <span className="mt-1 text-red-500">{traumaDash.Severe}</span>
                                </Link>
                            </div>

                        </li>

                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Suicidality Screener</span>
                            </div>
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Count</span>
                                <span
                                    className="mt-1 text-600">{suicidalDash.Moderate + suicidalDash.Mild + suicidalDash.Severe}</span>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthSuicidal', 'Low'])}>
                                    <span className="text-green-500 font-medium mr-2 mb-1 md:mb-0">None</span>
                                    <span className="mt-1 text-green-500">{suicidalDash.Low}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthSuicidal', 'Mild'])}>
                                    <span className="text-yellow-500 font-medium mr-2 mb-1 md:mb-0">Mild</span>
                                    <span className="mt-1 text-yellow-500">{suicidalDash.Mild}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthSuicidal', 'Moderate'])}>
                                    <span className="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Moderate</span>
                                    <span className="mt-1 text-orange-500">{suicidalDash.Moderate}</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="#" onClick={() => obSeverityClicked(['mentalhealthSuicidal', 'Severe'])}>
                                    <span className="text-red-500 font-medium mr-2 mb-1 md:mb-0">Severe</span>
                                    <span className="mt-1 text-red-500">{suicidalDash.Severe}</span>
                                </Link>
                            </div>

                        </li>


                    </ul>
                </div>

                {
                    userSeverity.length > 0 ? <UserSeverity userSeverity={userSeverity}  ></UserSeverity> : ''
                }


            </div>


        </div>
    );
};

export default Dashboard;

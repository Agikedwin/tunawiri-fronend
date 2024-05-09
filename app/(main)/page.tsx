/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';

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
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'lightgreen' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Participant Score</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman" style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{backgroundColor: 'yellow'}}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Participant Score </span>
                            <div className="text-900 font-medium text-xl">200</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman" style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">2+ </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'orange' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Participant Score</span>
                            <div className="text-900 font-medium text-xl">41</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman" style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">20 </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0" style={{ backgroundColor: 'red' }}>
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Participant Score</span>
                            <div className="text-900 font-medium text-xl">15 Needs Refferal</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span role="img" aria-label="woman" style={{ fontSize: '24px' }}>&#128105;&#127996;&#8205;&#9792;&#65039;</span>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">5 </span>
                    <span className="text-500">reffered</span>
                </div>
            </div>

            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>Participants Not Yet Reffered 2</h5>
                    <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                        <Column header="PTID" body={(data) => <img className="shadow-2" src={`/demo/images/product/%{data.image}`} alt={data.image} width="50" />} />
                        <Column field="Name" header="Name" sortable style={{ width: '35%' }} />
                        <Column field="Score" header="Participant Score" sortable style={{ width: '35%' }} body={(data) => formatCurrency(data.price)} />
                        <Column
                            header="View"
                            style={{ width: '15%' }}
                            body={() => (
                                <>
                                    <Button icon="pi pi-search" text />
                                </>
                            )}
                        />
                    </DataTable>
                </div>
                <div className="card">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <h5>Overall Participant Score</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain" onClick={(event) => menu1.current?.toggle(event)} />
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
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Participants Scoring:</span>
                                <div className="mt-1 text-600">Red</div>
                            </div>
                            <div className="mt-2 md:mt-0 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-red-500 h-full" style={{ width: '50%' }} />
                                </div>
                                <span className="text-red-500 ml-3 font-medium">%50</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Participants Scoring:</span>
                                <div className="mt-1 text-600">Amber</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-orange-500 h-full" style={{ width: '16%' }} />
                                </div>
                                <span className="text-orange-500 ml-3 font-medium">%16</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Participants Scoring:</span>
                                <div className="mt-1 text-600">Yellow</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-yellow-500 h-full" style={{ width: '67%' }} />
                                </div>
                                <span className="text-yellow-500 ml-3 font-medium">%67</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Participants Scoring:</span>
                                <div className="mt-1 text-600">Green</div>
                            </div>
                           /* <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-green-500 h-full" style={{ width: '35%' }} />
                                </div>
                                <span className="text-green-500 ml-3 font-medium">%35</span>
                            </div>
                        </li>
                       
                       
                    </ul>
                </div>
            </div>

            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>Participant Overview</h5>
                    <Chart type="line" data={lineData} options={lineOptions} />
                </div>

                <div className="card">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <h5>Notifications</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain" onClick={(event) => menu2.current?.toggle(event)} />
                            <Menu
                                ref={menu2}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                            />
                        </div>
                    </div>

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-human text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                               Participant XYZ
                                <span className="text-700">
                                    {' '}
                                    scored red and urgently needs to be reffered  <span className="text-blue-500"></span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-exit text-xl text-orange-500" />
                            </div>
                            <span className="text-700 line-height-3">
                                300 participants enrolled into the study so far  <span className="text-blue-500 font-medium">25</span> have been reffered.
                            </span>
                        </li>
                    </ul>

                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-entry text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Participant xyd
                                <span className="text-700">
                                    {' '}
                                    has dropped out of the study <span className="text-blue-500"></span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Particiapnt
                                <span className="text-700"> has taken x number of days since scoring red and hasnt been refferd .</span>
                            </span>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Dashboard;

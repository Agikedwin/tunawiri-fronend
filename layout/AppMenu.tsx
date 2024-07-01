/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
         {
            label: 'Home',
            items: [{ label: 'Dashboard ', icon: 'pi pi-fw pi-home', to: '/uikit/dashboard' }]
        }, 
        {
            label: 'Tunawiri Study',
            items: [
                { label: 'Participants', icon: 'pi pi-fw pi-user', to: '/uikit/users/view' },

               /*  { label: 'Add New User', icon: 'pi pi-fw pi-check-square', to: '/uikit/users' },
                { label: 'Profile', icon: 'pi pi-fw pi-check-square', to: '/uikit/users/profile' },
                { label: 'Clinical', icon: 'pi pi-fw pi-check-square', to: '/uikit/clinical' },
                { label: 'Social Support', icon: 'pi pi-fw pi-check-square', to: '/uikit/socialsupport' },
                { label: 'Physical Health Outcome', icon: 'pi pi-fw pi-check-square', to: '/uikit/physicalhealthoutcome' },



                { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
                { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
                { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
                { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
                { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
                { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
                { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
                { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
                { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
                { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
                { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
                { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
                { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' },  */


            ]
        },
        /* {
            label: 'Social Support',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'WHO Intimate Partner Violence',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/socialsupport/whointimatepartnerviolence'
                },

            ]
        },
        {
            label: 'Maternal and Infant Health',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'General Health',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/maternalandinfanthealth/generalhealth'
                },
                {
                    label: 'Antenatal ',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/maternalandinfanthealth/antenatal'
                },
                {
                    label: 'Postnatal',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/maternalandinfanthealth/postnatal'
                },
               
            ]
        },
     
        {
            label: 'Mental Health Outcome',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'Depression PHQ9',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/mentalhealthoutcome/phq9'
                },
                {
                    label: 'Anxiety Gad 7 Scale ',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/mentalhealthoutcome/AnxietyGad7'
                },
                {
                    label: 'Trauma Exposure',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/mentalhealthoutcome/traumaexposure'
                },
                {
                    label: 'Harvard Trauma Questionnaire',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/mentalhealthoutcome/harvardtrauma'
                },
                {
                    label: 'Suicidality Screener',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/mentalhealthoutcome/suicidalityscreener'
                },
                
            ]
        },
        {
            label: 'Health Utilization',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'Mental Health Treatment',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/healthutilization/mentalhealthtreatment'
                },
                {
                    label: 'Tunawiri Intervention ',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/healthutilization/tunawiriintervention'
                },
                {
                    label: 'ART Adhearence',
                    icon: 'pi pi-fw pi-globe',
                    to: '/uikit/healthutilization/artadhearence'
                },
               
            ]
        }, */
       
      
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                {/* <Link href="https://blocks.primereact.org" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link> */}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;

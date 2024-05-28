/* eslint-disable @next/next/no-img-element */

import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './layoutcontext';
import {Link, useForm} from "@inertiajs/react";

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));


    const { post } = useForm();

    const handleLogout = (e) => {
        
        post(route('logout'));
       
        //window.location.href = route('welcome')
    };

    return (
        <div className="layout-topbar">
        <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
            <i className="pi pi-bars" />
        </button>
        <span style={{ paddingLeft: '9px',fontWeight: 'bold',fontSize:'18px' }}>SIMP</span>

        <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
            <i className="pi pi-user" />
        </button>

        <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
            <Link href={route('profile.edit')} className="p-link layout-topbar-button">
                <i className="pi pi-user"></i>
                <span>Perfil</span>
            </Link>

    

            {/* <form onSubmit={handleLogout}>
                <button type="submit" className="p-link layout-topbar-button">
                    <i className="pi pi-lock"></i>
                    <span>Salir</span>
                </button>
            </form> */}
            <a href={route('logout')} className="p-link layout-topbar-button">
                <i className="pi pi-lock"></i>
                <span>Salir</span>
            </a>
        </div>
    </div>

    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;

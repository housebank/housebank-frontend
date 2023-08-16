import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {Header} from "antd/lib/layout/layout";

const menuItems : MenuProps['items'] = [
    {
        label: (
            <a href="/" rel="noopener noreferrer">
                Home
            </a>
        ),
        key: 'home',
        icon: null,
    },
    {
        label: 'About us',
        key: 'about',
        icon: null,
    },
    {
        label: 'Services',
        key: 'service',
        icon: null,
    },
    {
        label: (
            <a href="healthcheck" rel="noopener noreferrer">
                API Health check
            </a>
        ),
        key: 'healthcheck',
        icon: null,
    },
    {
        label: 'Login',
        key: 'login',
        icon: null,
    },
    {
        label: 'Get Started',
        key: 'register',
        icon: null,
    }
];
const AppHeader = ()=>{
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        // @ts-ignore
        e.preventDefault();
        console.log('click ', e.key);
        setCurrent(e.key);
    };

    console.log("Current", current)
    return(
    <Header className="flex items-center bg-white">
        <div className="w-fit bg-transparent text-xl font-extrabold" >Housebank</div>
        <Menu onClick={onClick} data-testid="menu" selectedKeys={[current]} mode="horizontal" items={menuItems}
              className="w-full pl-[5em]"/>
    </Header>
    )
}

export default AppHeader;
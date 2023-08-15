import React, {useState} from 'react';
import {Badge, Button, List} from "antd";

interface IServicesStatus {
    properties: boolean;
    users: boolean;
    transactions: boolean;
    property_reviews: boolean;
    payments: boolean;
}

const data = [
    'properties',
    'users',
    'transactions',
    'property_reviews',
    'payments',
];

const DEFAULT_STATUS = {
    properties: false,
    users: false,
    transactions: false,
    property_reviews: false,
    payments: false,
}

const HealthcheckPage=()=>{
    const [servicesStatus,setServicesStatus]
        = useState<IServicesStatus>(DEFAULT_STATUS)

    const _handleClickCheck = ()=>{
        let newStatus = {...servicesStatus};
        for (const newStatusKey in newStatus) {
            // @ts-ignore
            newStatus[newStatusKey] = true;
        }
        setServicesStatus(newStatus);
    }

   return(
       <>
           <List
               size="small"
               header={<div className={`font-bold`}>Housbank Backend Services</div>}
               footer={null}
               bordered
               dataSource={data}
               renderItem={(item) => {
                   // @ts-ignore
                   let statusOfService = servicesStatus[`${item}`];
                   return(
                       <List.Item>{`${item.toUpperCase()} Endpoint`}<Badge
                           status={ statusOfService ? "success" : "default" } className={`m-[5px]`}/>
                           <p>{ statusOfService ? "OK" : "OFFLINE" }</p></List.Item>
                   )
               }}
               className={`ml-[2em] w-[50%]`}
           />
           <Button type="primary" onClick={_handleClickCheck} data-testid="health-check-button" size="large" className={`border-[1px] font-medium text-white w-[25%]
                   border-blue bg-blue rounded-[10px] py-[0.5rem] px-[2rem] hover:bg-white hover:text-blue
                   mt-[2em] ml-[2em]`}>Check Now</Button>
       </>
   )
}

export default HealthcheckPage;
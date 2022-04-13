import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'
const Services = () => {

    const [servises, setServises] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])


    return (
        <div className='services-title' >
            <h1>Our Servises </h1>
            <div className="services-container">
                {
                    servises.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }</div>

        </div>
    );
};

export default Services; 
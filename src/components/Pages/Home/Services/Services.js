import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

    const [servises, setServises] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])


    return (
        <div className="container">
            <div id='services' className='services-title row' >
                <h1>Our Servises </h1>
                <div className="services-container">
                    {
                        servises.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }</div>

            </div>
        </div>
    );
};

export default Services; 
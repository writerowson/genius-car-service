import React from 'react';

import sleepng from '../../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className="text-primary text-center">Pages are not founded</h2>
            <img className='w-100' src={sleepng} alt="" />
        </div>
    );
};

export default NotFound;
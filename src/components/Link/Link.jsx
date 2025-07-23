import React from 'react';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <div className='hover:bg-blue-700 w-20 mx-auto py-2 rounded-lg'>
            <li><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;
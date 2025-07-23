import React from 'react';


const PriceOption = ({ option }) => {
    const {name,price,percentage} = option;
    return (
        <div className='border border-slate-200 shadow-xl text-center py-10 rounded-lg space-y-2'>
            <h1 className='text-xl font-semibold text-gray-400'>{name}</h1>
            <p className='text-4xl font-bold'>$ {price}</p>
            <p className='text-md text-blue-400'>{percentage}</p>
        </div>
    );
};

export default PriceOption;
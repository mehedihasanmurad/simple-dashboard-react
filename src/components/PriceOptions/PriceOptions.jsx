import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            id: 1,
            name: "Starter",
            price: 299,
            percentage: "5%",
            features: [
                "Single User Access",
                "Basic Analytics",
                "Email Support",
                "1 GB Storage"
            ]
        },
        {
            id: 2,
            name: "Growth",
            price: 799,
            percentage: "5%",
            features: [
                "Up to 5 Users",
                "Advanced Analytics",
                "Priority Email Support",
                "10 GB Storage"
            ]
        },
        {
            id: 3,
            name: "Pro",
            price: 1499,
            percentage: "Open",
            features: [
                "Up to 20 Users",
                "Custom Reports",
                "Chat Support",
                "100 GB Storage",
                "Integration with 3rd Party Tools"
            ]
        },
        {
            id: 4,
            name: "Business",
            price: 2499,
            percentage: "New",
            features: [
                "Unlimited Users",
                "Dedicated Account Manager",
                "24/7 Phone & Chat Support",
                "500 GB Storage",
                "Custom Branding"
            ]
        },
    ];

    return (
        <div>
            <h1 className='text-xl font-mono font-semibold mb-3'>Overview</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
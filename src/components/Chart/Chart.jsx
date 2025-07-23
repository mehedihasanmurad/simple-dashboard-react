import React from 'react';
import LineCharts from '../LineCharts/LineCharts';
import BarCharts from '../BarCharts/BarCharts';

const Chart = () => {
    return (
        <div>
            <h1>Hello chart how are you</h1>
            <div className='flex gap-4'>
                <div className='w-[49%] border'>
                    <LineCharts></LineCharts>
                </div>
                <div className='w-[49%] border'>
                    <BarCharts></BarCharts>
                </div>
            </div>
        </div>
    );
};

export default Chart;
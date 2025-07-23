import React from 'react';
import LineCharts from '../LineCharts/LineCharts';
import BarCharts from '../BarCharts/BarCharts';

const Chart = () => {
    return (
        <div className='my-10'>
            <div className='flex gap-4'>
                <div className='w-[49%] border border-slate-200 rounded-lg shadow-xl'>
                    <LineCharts></LineCharts>
                </div>
                <div className='w-[49%] border border-slate-200 rounded-lg shadow-xl'>
                    <BarCharts></BarCharts>
                </div>
            </div>
        </div>
    );
};

export default Chart;
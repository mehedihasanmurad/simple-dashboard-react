import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = () => {
    const weeklyData = [
        { day: "Monday", value: 120 },
        { day: "Tuesday", value: 150 },
        { day: "Wednesday", value: 100 },
        { day: "Thursday", value: 180 },
        { day: "Friday", value: 130 },
        { day: "Saturday", value: 90 },
        { day: "Sunday", value: 70 }
    ];
    return (
        <div className='px-3'>
            <div className='flex justify-between p-2 border-b'>
                <h1 className='text-xl font-semibold font-mono'>Bar Chart Examples</h1>
                <p className='text-green-500 font-semibold'>More Charts</p>
            </div>
            <div className='my-4 flex justify-end'>
                <div className='border border-slate-300 flex  items-center gap-3 px-2 py-1 rounded-lg'>
                    <button>This Week</button>
                    <IoIosArrowDown></IoIosArrowDown>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-center mb-2'>Chart.js Line Chart Examples</h1>
                <BarChart width={500} height={400} data={weeklyData}>
                    <Bar dataKey={"value"} fill='green'></Bar>
                    <XAxis dataKey={"day"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                </BarChart>
            </div>
        </div>
    );
};

export default BarCharts;
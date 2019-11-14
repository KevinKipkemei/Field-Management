import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
    {
      name: 'Page A', uv: 40, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 30, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 20, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 27, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 10, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 23, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 34, pv: 4300, amt: 2100,
    },
  ];

const Charts  = () => 
{
return(
    <div>
   <AreaChart width={650} height={330} data={data}>
   <Area type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
   <XAxis/>
   <YAxis/>
  </AreaChart>
    </div> 
)
}

export default Charts

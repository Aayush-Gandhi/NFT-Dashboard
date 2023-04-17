import React from 'react'
import {Bar} from 'react-chartjs-2'; 
import {Chart as ChartJS} from 'chart.js/auto'

export default function Graph({chartData}) {
  return (
    <div>
      <Bar 
      data={chartData}
    //   height={400}
    //   width={600}
      />
    </div>
  )
}
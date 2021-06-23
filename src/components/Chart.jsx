import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

/**
 * Dit functie toont de backtracking chart waar informatie word gegeven over backtracking
 * @return  {LineChart}   chart met data die aangegeven is hier beneden
 */
function LineChart () {
  const data = {
    /**Hier zijn de labels van dit grafiek */
    labels: ["0 minuten", "1 minuten", "2 minuten", "3 minuten", "4 minuten"],
    /** Hier staan de data van de grafiek opgeslagen */
    datasets: [
      {
        label: 'Backtracking',
        data: [0, 79, 153, 244, 324],
        fill: false,
        backgroundColor:"#0F1935",
        pointBorderWidth:5,
        borderColor: '#0F1935',
        pointRadius:2,
        tension: 0.4
      },
    ],
  };

  return <Line data={data}/>
}

/**
 * Dit functie toont de vergelijkbare algoritmes en wat de vergelijkingen zijn tegen backtracking
 * @return  {Barchart}   chart met data die aangegeven is hier beneden
 */
function Barchart () {
  const data = {
    /**Hier zijn de labels van dit grafiek */
    labels: ["Algoritmes", "Crooks algorithm", "Hybrid backtracking"],

    /** Hier staan de data van de grafiek opgeslagen */
    datasets: [
      {
        label: 'Backtracking',
        data: [324, 0],
        backgroundColor:"#0F1935",
        barThickness: 30,
        borderColor: '#0F1935',
      },
      {
        label: 'Crooks algorithm',
        data: [0, 300],
        backgroundColor:"#BD4444",
        barThickness: 30,
        borderColor: '#BD4444',
      },
      {
        label: 'Hybrid backtracking',
        data: [0, 0, 320],
        backgroundColor:"#29A27E",
        barThickness: 30,
        borderColor: '#29A27E',
      },
    ],
  };

  return <Bar data={data}/>
}

export {
  LineChart,
  Barchart
}
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ActivityFile = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [{
          label: 'Activity',
          data: [5, 10, 5, 2, 20, 30, 45, 30, 25, 15, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default ActivityFile;

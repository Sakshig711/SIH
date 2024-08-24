import React from 'react';
import '../App.css'; // Ensure this is present
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfileChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'No. of Research Papers',
        data: [4, 3, 2, 8, 6, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'No. of Activities',
        data: [3, 2, 4, 7, 8, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow resizing
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="profile-chart-box">
      <h3>Dashboard</h3>
      <div style={{ position: 'relative', height: '400px', width: '100%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfileChart;

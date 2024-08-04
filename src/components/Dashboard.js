import React from 'react';
import Header from './Header';
import StaticCard from './StaticCards';
import ActivityFile from './ActivityFile';
import RecentOrders from './Recentorders';
import CustomerFeedback from './CustomerFeed';
//dashboard
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="stats-cards">
        <StaticCard title="Total Orders" count="75" growth="3%" icon="🛒" />
        <StaticCard title="Total Delivered" count="70" growth="3%" icon="📦" />
        <StaticCard title="Total Cancelled" count="05" growth="3%" icon="❌" />
        <StaticCard title="Total Revenue" count="$12k" growth="3%" icon="💰" />
      </div>
      <div className="main-content">
        <ActivityFile />
        <div className="side-content">
          <div className="net-profit">
            <h3>Net Profit</h3>
            <p>$6759.25</p>
            <p>70% of sales goal</p>
          </div>
          <div className="other-links">
            <a href="#">Goals</a>
            <a href="#">Popular Dishes</a>
            <a href="#">Menus</a>
          </div>
        </div>
      </div>
      <div className="orders-feedback">
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </div>
  );
}

export default Dashboard;

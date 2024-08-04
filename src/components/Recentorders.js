import React from 'react';

const RecentOrders = () => {
  const orders = [
    { customer: 'Joseph', orderNo: '15487856', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane', orderNo: '48696786', amount: '$305.02', status: 'Delivered' },
    { customer: 'Hawkins', orderNo: '78598215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Watson', orderNo: '209695732', amount: '$65.00', status: 'Pending' },
    { customer: 'Agasthya', orderNo: '957151620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Aditya', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderNo}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;

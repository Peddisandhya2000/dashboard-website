import React from 'react';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      rating: 5
    },
    {
      name: 'Dianne Russell',
      feedback: 'We enjoyed the Eggs Benedict served on homemade  bread and hot coffee. Perfect service.',
      rating: 5
    },
    {
      name: 'Devon Lane',
      feedback: 'Normally I am not a wings fan, but theirs are lean meat and tender and flavorful. The "side" salad was a real salad, not just a couple of leaves of lettuce. Excellent service too!',
      rating: 5
    },
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer’s Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <h4>{feedback.name}</h4>
          <p>{'⭐'.repeat(feedback.rating)}</p>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerFeedback;

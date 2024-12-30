import React, { useState } from 'react';

const ReviewsModal = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    onSubmit(review);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Add Review</button>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsModal;

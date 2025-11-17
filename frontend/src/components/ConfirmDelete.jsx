import React from 'react';

export default function ConfirmDelete({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <p>{message || "Are you sure you want to delete?"}</p>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={onConfirm} style={{ marginRight: '1rem', background: 'red', color: 'white' }}>
            Delete
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// Basic inline styles for modal
const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '400px',
  textAlign: 'center',
};

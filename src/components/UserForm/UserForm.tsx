import React from 'react';

export const UserForm: React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor='item-number-input'>Item Number:</label>
        <input id='item-number-input'></input>
      </form>
    </div>
  );
}
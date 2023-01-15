import React from 'react';
import Vector3 from 'components/atoms/Vector3';
import { FormWrapper } from './Form.styles';

const Form = () => {
  return (
    <FormWrapper>
      <div className='check-wrapper'>
        <div>
          <label htmlFor=''>CHECK IN</label>
          <Vector3 />
        </div>
        <div>
          <label htmlFor=''>CHECK OUT</label>
          <Vector3 />
        </div>
      </div>
      <button>BOOK ROOM</button>
    </FormWrapper>
  );
};

export default Form;

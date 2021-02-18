/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default () => {
  const [phone, setValue] = useState('+ 375 ()');
  const [classInput, setClass] = useState('form default');
  function typePhone(event) {
    setValue(event);
  }
  return (
    <>
      <div className="take-number">
        <h2>Заказать обратный звонок</h2>
        <div className={classInput}>
          <div className={phone === '+ 375 ()' ? 'react-tel-input' : 'react-tel-input checked'}>
            <PhoneInput
              disableSearchIcon
              className="number-input"
              disableDropdown
              id="typed"
              country="by"
              value={phone}
              onChange={(event) => typePhone(event)}
            />
          </div>
          <input className="submit-button" type="submit" value="Перезвоните мне" />
        </div>
      </div>
    </>
  );
};

/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default () => {
  const [isInvalid, setInvalid] = useState(false);
  const [phone, setValue] = useState('+ 375 ()');
  const [classInput, setClass] = useState('form default');
  const [status, setStatus] = useState('');
  let isValid = false;
  function typePhone(event) {
    isValid = /^375[0-9]{9}$/.test(`${event}`);
    if (isValid) {
      setValue(event);
      if (isValid) setClass('form valid');
      if (!isValid) setClass('form invalid');
    } else {
      setValue('375');
      setClass('form invalid');
    }
    console.log(isValid);
  }

  function submitForm(ev) {
    ev.preventDefault();
    console.log('запуск форумы ', isValid);
    if (/^375[0-9]{9}$/.test(`${phone}`)) {
      setInvalid(false);
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus('SUCCESS');
        } else {
          setStatus('ERROR');
        }
      };
      xhr.send(data);
    } else {
      setInvalid(true);
    }
  }

  return (
    <>
      <div className="take-number">
        <h2>Заказать обратный звонок</h2>
        <div className={classInput}>
          <form
            onSubmit={(ev) => submitForm(ev)}
            action="https://formspree.io/f/moqpzpww"
            method="POST"
          >
            <div className={phone === '+ 375 ()' ? 'react-tel-input' : 'react-tel-input checked'}>
              {status === 'SUCCESS' && !isInvalid && <p className="succes">Спасибо, ваша заявка отправлена!</p>}
              {isInvalid && <p className="error">Введите Ваш номер телефона!</p>}
              <PhoneInput
                disableSearchIcon
                disableDropdown
                country="by"
                placeholder="+ 375 (__) ___-__-__"
                onChange={(event) => typePhone(event)}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
              />
            </div>
            <input className="submit-button" type="submit" value="Перезвоните мне" />
          </form>
        </div>
      </div>
    </>
  );
};

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from 'reactstrap';

export default ({ array, index, isEdit, setData }) => {
  const [isInvalid, setInvalid] = useState(false);
  const newArray = [...array];
  function handleChange(event, i) {
    newArray[index][i] = event.target.value;
    console.log('newArr ', newArray);
  }
  return (
    isEdit ? (
      <>
        <tr>
          {array[index].map((item, i) => (
            <td>
              <textarea
                defaultValue={item}
                onChange={(event) => handleChange(event, i)}
                rows="1"
              />
            </td>
          ))}
        </tr>
      </>
    )
      : (
        <>
          <tr>
            {array[index].map((item, i) => (i === 0 ? (
              <td>
                <pre>
                  {item.replace(/<br \/>/gi, '\n')}
                  {' '}
                  м
                  <sup>3</sup>
                </pre>
              </td>
            ) : <td><pre>{item.replace(/<br \/>/gi, '\n')}</pre></td>))}
          </tr>
        </>
      )
  );
};

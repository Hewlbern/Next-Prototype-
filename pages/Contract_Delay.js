import React from 'react';
import clsx from 'clsx';
import RadioButtonsGroup from '../components/RadioButtonsGroup';
import TextFieldMargins from '../components/TextFieldMargins';

export default function ContractDelay() {
  return (
    <div>
    <RadioButtonsGroup/>
    <TextFieldMargins/>
      <p>This is the Contract Delay</p>
    </div>
  );
}

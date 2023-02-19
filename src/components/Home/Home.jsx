import React, { useState } from 'react';
import { ValidationLine } from '../ValidationLine/ValidationLine';
import './style.css';

export default function Home() {
  const [focus, setFocus] = useState(false);
  const [password, setPassword] = useState('');

  const atLeastOneLetter = /[a-z]/g;
  const atLeastOneNumeric = /[0-9]/g;
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g;
  const eightCharsOrMore = /.{8,}/g;

  const passwordTracker = {
    letter: password.match(atLeastOneLetter),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const onInputChange = (e) => {
    setPassword(e.target.value.toLowerCase());
  };

  return (
    <div className="wrapper-input">
      <div className="container-input">
        <h1>Password validation</h1>

        <form className="form-container">
          <input
            onFocus={() => setFocus(true)}
            onChange={onInputChange}
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
          />
        </form>

        {focus && (
          <ValidationLine
            passwordTracker={passwordTracker}
            password={password}
          />
        )}
      </div>
    </div>
  );
}

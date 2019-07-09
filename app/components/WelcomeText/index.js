/**
*
* WelcomeText
*
*/

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const H2 = styled.h2`
font-size: 16px;
margin-top:30px;
color: #b9b9b9;
font-weight: 400;
`;

function WelcomeText() {
  return (
    <div>
      <H1>Welcome to <b>Metta Creative Wallet</b> <br />To begin, create or restore Ethereum wallet<br /></H1>
      <H2>
        <b>मेत्ता (mettā):</b>  loving kindness; benevolence.
        Our mission is to connect and inspire a mettā-driven community to live more sustainably through collaborative arts experiences.<br />
        Metta Creative Wallet is a non coustodial client application which works on ethereum via infura. <br />
        Keystore is encrypted using the password. When the wallet is locked, you can only view balances. <br />
        All keys are saved inside the users browser and never sent. Users can also connect to their local ethereum client.

      </H2>
    </div>
  );
}

WelcomeText.propTypes = {

};

export default WelcomeText;

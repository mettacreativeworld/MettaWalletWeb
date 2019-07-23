/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #a9bed233;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'Metta Creative - '}
          <a href={github} target="_blank" rel="noopener">
            Collaborate and create the future
          </a>       
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            <a href="#" target="_blank" rel="noopener">
              Made with ❤ from Mettacreative.world
            </a>
          </Col>
        </Span>

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;

import styled from '@emotion/styled';
import { vars } from 'variables/variables';

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: ${vars.footerColor};
`;

import styled from '@emotion/styled';
import { vars } from 'variables/variables';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;

  .listTitle {
    color: ${vars.titleColor};
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;

    letter-spacing: 0.03em;
    font-size: 30px;
    line-height: 1.17;
  }
`;

export const Main = styled.main`
  position: relative;
  z-index: 1;
  padding-bottom: 40px;
  padding-top: 80px;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${vars.mainShadow};
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    border: none;
    width: 150px;
    height: 100%;
    background-color: transparent;
    color: ${vars.darkShadow};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    &:hover {
      color: ${vars.hoverColor};
    }
    &:disabled {
      color: ${vars.focusShadow};
      cursor: default;
    }
  }
`;

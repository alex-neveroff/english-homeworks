import styled from '@emotion/styled';
import { vars } from 'variables/variables';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: square;
  padding-left: 15%;

  .list-link {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.19;
    &:hover {
      color: ${vars.hoverColor};
    }
  }
`;

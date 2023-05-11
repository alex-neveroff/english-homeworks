import styled from '@emotion/styled';
import { vars } from 'variables/variables';

export const TopicWrap = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;

  .topic-title {
    color: ${vars.titleColor};
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;

    letter-spacing: 0.03em;
    font-size: 26px;
    line-height: 1.17;
  }

  .main-text {
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

import styled from 'styled-components';

export const MainContainer = styled.div`
      padding-top: 50px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 30px;
`

export const Header = styled.h2`
      margin: 0;
      padding: 0;
      color: #788197;

      border-left: 8px solid #e4e6e9;
      height: 50px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20px;

      ::after {
            content: '';
            width: 100%;
            border-top: 1px solid #e4e6e9;
            margin-left: 1%;
      }
`
import styled from 'styled-components';

export const ActionContainer = styled.div`
      width: 100%;

      background-color: white;

      margin-top: 40px;
      padding: 20px;

      h2 {
            margin-bottom: 15px;
      }
`

export const InvoicesContainer = styled.div`
      margin-top: 40px;
      background-color: white;
      width: 100%;
      padding: 20px;

      color: #788197

      table {
            width: 100%;
            height: 500px;
      }

      table thead {
            background-color: #f1f3f6;
      }
      
      table th {
            width: 10%;
            height: 60px;
            padding-left: 20px;
      } 

      table tbody th {
            border-bottom: 1px solid rgb(241, 241, 241);
      }

      .action-th {
            display: flex;
            align-items: center;
            justify-content: flex-end;
      }

      .last-th {
            width: 4%;
            text-align: end;
            padding-right: 9px;
      }

`
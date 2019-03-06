import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button, Input, Icon, DatePicker} from 'antd';

export const LinkButton = styled(Link)`
      text-decoration: none;
`

export const StyledButton = styled(Button)`
      margin-left: 2px;
      margin-right: 2px;
`

export const FieldContainer = styled.div`
      width: ${props => props.width || '49%'};
      margin-right: 10px;
      margin-top: 25px;
      display: flex;
      flex-direction: column;
`

export const FormLabel = styled.span`

`

export const StyledInput = styled(Input)`
      margin-top: 1px;
`

export const StyledDatePicker = styled(DatePicker)`
      width: 100%;
`

export const StyledTextarea = styled.textarea`
      height: 50px;
      border: 1px solid rgb(236, 236, 236);
      border-radius: 5px;
`
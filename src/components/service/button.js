import React from 'react';
import {LinkButton, StyledButton} from './styles';

const OwnButton = (props) => {
      const {type, linkTo, action, title, color, disabled} = props;
      let template = '';
      
      switch(type){
            case "button": 
                  template = (<StyledButton disabled={disabled} className="button" type={color ? color : "primary"} onClick={() => action()}>{title}</StyledButton>)
                  break;
            case "link":
                  template = (<StyledButton disabled={disabled} className="button" type="primary"><LinkButton to={linkTo}>{title}</LinkButton></StyledButton>)
                  break;
            default: 
                  template = '';
      }

      return (
            template     
      );
}

export default OwnButton;

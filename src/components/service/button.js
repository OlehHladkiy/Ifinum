import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import './index.css';

const OwnButton = (props) => {
      const {type, linkTo, action, title, color} = props;
      let template = '';
      
      switch(type){
            case "button": 
                  template = (<Button className="button" type={color ? color : "primary"} onClick={() => action()}>{title}</Button>)
                  break;
            case "link":
                  template = (<Button className="button" type="primary"><Link className="link-btn" to={linkTo}>{title}</Link></Button>)
                  break;
            default: 
                  template = '';
      }

      return (
            template     
      );
}

export default OwnButton;
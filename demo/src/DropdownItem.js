
import React, {useState, useEffect, useRef} from 'react';

function DropdownItem(props){
    if (props.checkmark) {
      return(
        <li className = 'dropdownItem'>
            <i class="gg-check"></i>
            <a> {props.text} </a>
        </li>
      );
    } else {
      return(
        <li className = 'dropdownItem'>
            <i class="no-gg-check"></i>
            <a> {props.text} </a>
        </li>
      );
    }
  }

  export default DropdownItem;
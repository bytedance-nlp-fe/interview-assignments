import React, {useState, useEffect, useRef} from 'react';
import DropdownItem from "./DropdownItem"

function App() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <div class="center">
              <div class="option-text"><p>Options</p><i class="gg-chevron-down"></i></div>
            </div>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem text = {"New Tab"}/>
            <DropdownItem text = {"New Window"}/>
            <div class="end-section"></div>
            <DropdownItem text = {"Favorites"}/>
            <DropdownItem text = {"Download"}/>
            <div class="end-section"></div>
            <DropdownItem checkmark = {true} text = {"Show Toolbars"}/>
            <DropdownItem text = {"Show Full URLs"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
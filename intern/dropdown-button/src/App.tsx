import './App.css';
import DropdownButton from './components/DropdownButton';
import { button, menuList } from './demo/UserSetup';

function App() {
  return (
    <div className="App">
      <DropdownButton title={'Options'}>{menuList}</DropdownButton>
    </div>
  );
}

export default App;

import './App.css';
import DropdownButton from './components/DropdownButton';
import { button, menuList } from './demo/UserSetup';

function App() {
  return (
    <div className="App">
      <DropdownButton button={button}>{menuList}</DropdownButton>
    </div>
  );
}

export default App;

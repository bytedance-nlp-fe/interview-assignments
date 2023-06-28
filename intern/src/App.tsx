import './App.css'
import Option from './components/Option';
import { ItemProps } from './components/Option/item';
import DropDownIcon from './assets/dropdown.svg?component';

function App() {

  const items: ItemProps[] = [
    {
      label: 'New Tab',
      key: '1',
    },
    {
      label: 'New Window',
      key: '2',
    },
    {
      label: 'Favorites',
      key: '3',
      children: [
        {
          label: 'GitHub',
          icon: <DropDownIcon />,
          key: '3-1',
        },
        {
          label: 'Google',
          key: '3-2',
          icon: <DropDownIcon />,
        },
        {
          label: 'Twitter',
          key: '3-3',
          icon: <DropDownIcon />,
        }
      ]
    },
    {
      label: 'Downloads',
      key: '4'
    },
    {
      label: 'Show Toolbar',
      key: '5',
      checked: true,
    },
    {
      label: 'Show Full URLs',
      key: '6',
      checked: true,
    }
  ]

  return (
    <div className='dashboard'>
      <Option items={items}>Option</Option>
    </div>
  )
}

export default App

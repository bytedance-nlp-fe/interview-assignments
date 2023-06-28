import './App.css'
import Option from './components/Option';
import { ItemProps } from './components/Option/item';
import DropDownIcon from './assets/dropdown.svg?component';
import GitHub from './assets/github.svg?component';
import Google from './assets/google.svg?component';
import Twitter from './assets/twitter.svg?component';

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
          icon: <GitHub />,
          key: '3-1',
        },
        {
          label: 'Google',
          key: '3-2',
          icon: <Google />,
        },
        {
          label: 'Twitter',
          key: '3-3',
          icon: <Twitter />,
        }
      ]
    },
    {
      label: 'Downloads',
      key: '4',
      children: [
        {
          label: 'Videos',
          icon: <DropDownIcon />,
          key: '4-1',
        },
        {
          label: 'Audios',
          key: '4-2',
          icon: <DropDownIcon />,
        }
      ]
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

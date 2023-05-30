// This is a demo page for the Menu component
import styles from "./App.module.css";
import { Menu } from "./components/menu/menu.tsx";

function App() {
  return <div className={styles.container}>
    <div className={styles.card}>
      <Menu>
        <Menu.Button className={styles.button}>Options</Menu.Button>
        <Menu.Items className={styles.items}>
          <>
            <Menu.Item className={styles.item}>
              New Tab
            </Menu.Item>
            <Menu.Item className={styles.item}>
              New Window
            </Menu.Item>
            <Menu.Item className={styles.item}>
              Favorites
            </Menu.Item>
            <Menu.Item className={styles.item}>
              <Menu>
                <Menu.Hover className={styles.item}>
                  Downloads
                </Menu.Hover>
                <Menu.Items className={styles.items}>
                  <Menu.Item className={styles.item}>
                    GitHub
                  </Menu.Item>
                  <Menu.Item className={styles.item}>
                    Stitches
                  </Menu.Item>
                  <Menu.Item className={styles.item}>
                    Twitter
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </Menu.Item>
            <Menu.Item className={styles.item}>
              Show Toolbar
            </Menu.Item>
            <Menu.Item className={styles.item}>
              Show Full URLs
            </Menu.Item>
          </>
        </Menu.Items>
      </Menu>
    </div>
  </div>;
}

export default App;

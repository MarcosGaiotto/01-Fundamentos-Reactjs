import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post avatar="https://github.com/MarcosGaiotto.png" name="Marcos Gaiotto"/>
          <Post avatar="https://github.com/diego3g.png" name="Diego Fernandes"/>
        </main>
      </div>
    </div> 
  )
}


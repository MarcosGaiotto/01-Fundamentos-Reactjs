import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MarcosGaiotto.png",
      name: "Marcos Gaiotto",
      role: "React Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: '                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-04-17 09:53:32')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋' },
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      {type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design' }
    ],
    publishedAt: new Date('2024-04-17 09:58:37')
  }
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div> 
  )
}


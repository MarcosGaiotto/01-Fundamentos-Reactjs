import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
            <dir className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <dir className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='16 de Abril às 17:14h' dateTime='2024-04-16 17:14:00'>Cerca de 1h atrás</time>
                        </dir>
                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </dir>
        </div>
    )
}
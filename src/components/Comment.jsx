import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" />
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
                    <p>Muito bom Marcos, parabéns!! 👏👏</p>
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
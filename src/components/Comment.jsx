import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

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
                        <button 
                        onClick={handleDeleteComment}
                        title='Deletar Comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </dir>
        </div>
    )
}
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, content, publishedAt}) {

    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix:true})

    function handleCreateNewComment(e) {
        e.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
        e.target.publishComment.blur()
    }

    function handleNewCommentChange(e) {
        setNewCommentText(e.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line =>{
                    
                    if (line.type == 'paragraph') {
                        return (
                            <p key={line.content}>{line.content}</p>
                        )
                    } else if (line.type == 'link') {
                        return (
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                    }
                    
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />
                <footer>
                    <button name='publishComment' type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                        key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}
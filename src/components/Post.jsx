import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={props.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{props.name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="13 de Abril às 08:28h" dateTime='2024-04-13 08:28:25'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a>{' '} 
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}
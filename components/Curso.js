import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
    const {titulo, descripcion,imagen} = curso
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>

            <div className={styles.contenido
            }>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <a href="#" className={styles.enlace}>Mas informacion</a>
            </div>
            
          

            </div>
            {/* solo aplicar css de esta forma cuando tiene que aplica css al las variables */}
            <style jsx>{`
                section {
                    background-image: url(${imagen.url}), linear-gradient(to right, rgba( 0, 0, 0 , .65), rgba(0, 0, 0, 7));
                    background-size:cover;
                    background-position:center;
                }

            `}</style>
        </section>    
    )
}

export default Curso
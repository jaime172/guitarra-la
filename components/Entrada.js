import Link from 'next/link'
import Image from 'next/image'
import {formatoFecha} from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
const {titulo, resumen, imagen, published_at, id, url} = entrada

  return (
    <article>
        <Image
          priority='true'
          layout='responsive'
          width={600}
          height={400}
          src={imagen.url}
          alt={`imagen entrada ${titulo}`}
        />
        <div className={styles.contenido}>
        <h2>{titulo}</h2>
        <p className={styles.fecha}>{formatoFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          {/* se agrega una etiqueta a para los estilos  anidada en Link  */}
         <a className={styles.enlace}> Leer Entrada</a>
        </Link>

        </div>
    </article>
  )
}

export default Entrada
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitarra.module.css"

const Guitarra = ({guitarra}) => {
   const {titulo, resumen ,imagen, precio, url} = guitarra
   
  return (
    <div  className={styles.guitarra}>
        <Image
            layout="responsive"
            width={170}
            height={380}
            src={imagen.url}
            alt={` guitarra ${titulo}`}
        />

        <div className={styles.contenido}>
            <h2 >{titulo}</h2>
            <p className={styles.descripcion}>{resumen}</p>
            <p className={styles.precio}>{precio}</p>
            <Link href={`/guitarras/${url}`}>

              <a className={styles.enlace}>
              Ver Producto
              </a>
            </Link>
        </div>
    </div>
  )
}

export default Guitarra
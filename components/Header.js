
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import {useRouter} from 'next/router'

const Header = ({guitarra}) => {

  const router = useRouter()

 
  return (
    <header className={styles.header}>
       <div className='contenedor'>
        <div className={styles.barra}>
            <Link href="/">
              {/* cuando se encuetre una imagen dentro  de un Link para solucionar errores de consola tenemos que agregar una etiqueta a para anidar adentro la Image */}
              <a>
            <Image 
            width={700}
            height={200}
            src="/img/logo.svg"
            alt='logo guitarra'
            />

              </a>
            </Link>
        

        <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href='/Carrito'>
                <a>
                  <Image 
                    layout='fixed'
                    width={50}
                    height={40}
                    src='/img/carrito.png'
                    alt='imagen carrito'
                    />
                </a>
            </Link>
        </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h2>Marca: {guitarra.titulo}</h2>
            <p>{guitarra.resumen}</p>
            <p className={styles.precio}>{guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
                <a className={styles.enlace}>
                  Ver Producto
                </a>
            </Link>
          </div>
        )}
       </div>

       {router.pathname === '/' && (
         <div  className={styles.guitarra}>
          <Image layout='fixed' width={600}
          height={1900} src="/img/header_guitarra.png"  alt="imagen guitarra"/>
          </div>
       )}
    </header>
  )
}

export default Header
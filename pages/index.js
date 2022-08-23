
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

import Layout from '../components/Layout'
export default function Home({guitarras,curso, entradas}) {

   console.log(entradas)
  return (
    
      <Layout
       pagina="/"
       guitarra={guitarras[7]}
      >
        <main className="contenedor">
        <h1  className='heading'>Nuestra colection</h1>
        <Listado
           guitarras={guitarras}
        />
        </main>

        <Curso
          curso={curso}
        />

        <ListadoBlog
          entradas={entradas}
        />
      </Layout>
      
    
  )
}

export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras`

  const urlCursos = `${process.env.API_URL}/cursos`

  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [respGuitarras,respCursos,respBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras,curso,entradas] = await Promise.all([
    respGuitarras.json(),
    respCursos.json(),
    respBlog.json()
  ])

  
  
  return {
    props: {
        guitarras,
        curso,
        entradas
    }
  }
}
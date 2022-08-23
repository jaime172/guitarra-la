
import Layout from '../components/layout'
import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {

  return (
    <Layout   pagina="Blog">

      <main className='contenedor'>
        <ListadoBlog
          entradas={entradas}

          />
      </main>
   
    </Layout>
  )
}
export async function getStaticProps() {
  // en strapi tenemos cleado el contenedor de blog pero se guarda como blogs por eso en la url se pone como blogs
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
 
  const resp = await fetch(url)
  const entradas = await resp.json()
  
  return {
    props: {
       entradas
    }
  }
}

export default Blog
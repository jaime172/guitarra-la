import Layout from '../components/layout'
import Listado from '../components/Listado';

const Tienda = ({guitarras}) => {
  
  return (
    <Layout pagina="Tienda Virtual">
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>

          <Listado
             guitarras={guitarras}
          />
        </main>

    </Layout>
  )
}

export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras`

  const resp = await fetch(url)
  const guitarras = await resp.json()
  
  return {
    props: {
        guitarras
    }
  }
}

export default Tienda
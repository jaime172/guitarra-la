import Link from "next/Link";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css"
import Layout from "../components/Layout";
const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>

          <Image
          layout="responsive"
          width={600}
          height={400}
          src="/img/nosotros.jpg" 
          alt="imagen nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
              pulvinar felis. Etiam in mi at ipsum molestie eleifend ac
              hendrerit risus. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Aenean vel enim sapien. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
              Suspendisse viverra, magna lobortis viverra elementum, nibh augue
              elementum libero, nec interdum est purus vitae nulla. Nunc
              fringilla, nibh eget malesuada varius, tellus arcu consectetur
              massa, elementum tincidunt nisl ex sit amet nunc. Sed commodo,
              metus vitae finibus molestie, sapien enim facilisis lorem, eget
              faucibus sem nisi at turpis.  
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;

import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoEncontrada.module.css";
const NoEncontrado = () => {
  return (
    <div>
     
        <div className={styles.noEncontrada}>
          <h1 className="heading">no encontrada</h1>
          <Link href={"/"}>Volver al inicio</Link>
        </div>
     
    </div>
  );
};

export default NoEncontrado;

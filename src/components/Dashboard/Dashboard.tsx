import Image from "next/image";
import Link from "next/link";

import { Car, Hammer } from "lucide-react";

import styles from "../../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <Image
        src="/images/LtLogo.png"
        alt="LT Estética Vehicular"
        width={180}
        height={180}
        className={styles.logo}
        priority
      />

      <h1 className={styles.title}>Sistema de Cotizaciones</h1>

      <p className={styles.subtitle}>
        Seleccioná el tipo de documento que querés crear.
      </p>

      <div className={styles.cards}>
        <Link href="/estetica" className={styles.card}>
          <Car className={styles.icon} strokeWidth={2} />
          <span className={styles.cardTitle}>Estética Vehicular</span>
        </Link>

        <Link href="/sacabollos" className={styles.card}>
          <Hammer className={styles.icon} strokeWidth={2} />
          <span className={styles.cardTitle}>Sacabollos</span>
        </Link>
      </div>
    </main>
  );
}

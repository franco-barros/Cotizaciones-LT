"use client";

import Image from "next/image";

import { CotizacionData } from "../../types/types";

import styles from "../../styles/preview/EsteticaPreview.module.css";

interface Props {
  data: CotizacionData;
}

export default function EsteticaPreview({ data }: Readonly<Props>) {
  return (
    <div className={styles.wrapper}>
      <div id="estetica-preview" className={styles.page}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/LtLogo.png"
              alt="LT Estética Vehicular"
              width={140}
              height={65}
              priority
            />
          </div>

          <div className={styles.headerText}>
            <h1>LT Estética Vehicular</h1>
            <h2>COTIZACIÓN</h2>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.row}>
            <span>Fecha:</span>
            <span>{data.fecha || "__/__/____"}</span>
          </div>

          <div className={styles.row}>
            <span>Cliente:</span>
            <span>{data.nombre || "Nombre del cliente"}</span>
          </div>

          <div className={styles.row}>
            <span>Teléfono:</span>
            <span>{data.telefono || "-"}</span>
          </div>
        </section>

        <section className={styles.section}>
          <h3>Vehículo</h3>

          <div className={styles.grid}>
            <p>
              <strong>Vehículo:</strong> {data.vehiculo || "-"}
            </p>

            <p>
              <strong>Modelo:</strong> {data.modelo || "-"}
            </p>

            <p>
              <strong>Color:</strong> {data.color || "-"}
            </p>

            <p>
              <strong>Patente:</strong> {data.patente || "-"}
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h3>Servicio</h3>

          <p>{data.servicio || "-"}</p>

          <div className={styles.description}>
            {data.descripcion ||
              "Aquí aparecerá la descripción del trabajo realizado."}
          </div>
        </section>

        <section className={styles.section}>
          <h3>Presupuesto</h3>

          <div className={styles.total}>
            <span>Total</span>
            <span>{data.valor ? `$${data.valor}` : "$0"}</span>
          </div>
        </section>

        {/* ================= TURNO ================= */}

        <section className={styles.section}>
          <h3>Turno</h3>

          <div className={styles.rowPlain}>
            <span>Fecha del turno:</span>
            <span>{data.fechaTurno || "__/__/____"}</span>
          </div>

          <div className={styles.rowPlain}>
            <span>Horario:</span>
            <span>{data.horario || "--:--"}</span>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.signature}>
            <Image
              src="/images/FirmaLauti1.png"
              alt="Firma"
              width={140}
              height={65}
              className={styles.signatureImage}
            />

            <span className={styles.signatureName}>
              Lautaro Tello Gutierrez
            </span>
          </div>

          <p className={styles.disclaimer}>
            <strong>
              LT Estética Vehicular • Documento no válido como factura{" "}
            </strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

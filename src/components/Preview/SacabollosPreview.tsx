"use client";

import Image from "next/image";

import { SacabollosData } from "../../types/types";
import VehicleDamageSelector from "../VehicleDamageSelector/VehicleDamageSelector";

import styles from "../../styles/preview/SacabollosPreview.module.css";

interface Props {
  data: SacabollosData;
}

export default function SacabollosPreview({ data }: Readonly<Props>) {
  const vehicleImages =
    data.vehiculo === "Camioneta"
      ? {
          derecho: "/images/HiluxDerecho.png",
          izquierdo: "/images/HiluxIzquierdo.png",
          superior: "/images/HiluxTecho.png",
        }
      : {
          derecho: "/images/BmwDerecho.png",
          izquierdo: "/images/BmwIzquierdo.png",
          superior: "/images/BmwTecho.png",
        };

  const vehicleType = data.vehiculo === "Camioneta" ? "Camioneta" : "Auto";

  return (
    <div className={styles.wrapper}>
      {/* ==========================
          PAGINA 1
      ========================== */}

      <div id="sacabollos-preview-page1" data-pdf-page className={styles.page}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/LtLogo.png"
              alt="LT Estética Vehicular"
              width={180}
              height={70}
              className={styles.logo}
              priority
            />
          </div>

          <div className={styles.headerInfo}>
            <h1>SACABOLLOS</h1>

            <p>Presupuesto de Reparación</p>
          </div>
        </header>

        {/* CLIENTE */}

        <section className={styles.section}>
          <div className={styles.row}>
            <span>Fecha de emisión</span>

            <span>{data.fechaEmision || "__/__/____"}</span>
          </div>

          <div className={styles.row}>
            <span>Cliente</span>

            <span>{data.nombre || "Nombre del cliente"}</span>
          </div>

          <div className={styles.row}>
            <span>Domicilio</span>

            <span>{data.domicilio || "-"}</span>
          </div>

          <div className={styles.row}>
            <span>Teléfono</span>

            <span>{data.telefono || "-"}</span>
          </div>
        </section>

        {/* VEHICULO */}

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

        {/* OBSERVACIONES */}

        <section className={styles.section}>
          <h3>Observaciones</h3>

          <div className={styles.description}>
            {data.observaciones ||
              "Aquí aparecerán las observaciones del trabajo realizado."}
          </div>
        </section>

        {/* DAÑO VEHICULO */}

        <section className={styles.damageSection}>
          <div className={styles.damageHeader}>
            <h2>Zona del daño</h2>
          </div>

          <VehicleDamageSelector
            vehiculo={vehicleType}
            derecho={vehicleImages.derecho}
            izquierdo={vehicleImages.izquierdo}
            superior={vehicleImages.superior}
          />
        </section>
      </div>

      {/* ==========================
          PAGINA 2
      ========================== */}

      <div id="sacabollos-preview-page2" data-pdf-page className={styles.page}>
        {/* PRESUPUESTO */}

        <section className={styles.section}>
          <div className={styles.total}>
            <span>Valor Total</span>

            <span>{data.valor ? `$${data.valor}` : "$0"}</span>
          </div>

          <div className={styles.total}>
            <span>Seña</span>

            <span>{data.sena ? `$${data.sena}` : "$0"}</span>
          </div>
        </section>

        {/* TURNO */}

        <section className={styles.section}>
          <div className={styles.rowPlain}>
            <span>Fecha del turno</span>

            <span>{data.fecha || "__/__/____"}</span>
          </div>

          <div className={styles.rowPlain}>
            <span>Horario</span>

            <span>{data.horario || "--:--"}</span>
          </div>
        </section>

        {/* GARANTIA */}

        <section className={styles.warranty}>
          <h3>Garantía y Vigencia</h3>

          <p>
            La vigencia del presente presupuesto se extiende por un plazo de
            <strong> 10 (diez) días corridos</strong> contados desde la fecha de
            emisión del mismo. Transcurrido dicho período, LT Estética Vehicular
            se reserva el derecho de modificar los valores presupuestados de
            acuerdo con las condiciones vigentes al momento de su aceptación.
          </p>
        </section>

        {/* CONDICIONES */}

        <section className={styles.infoBox}>
          <h3>Condiciones del servicio</h3>

          <ul>
            <li>
              El vehículo deberá encontrarse limpio al momento del ingreso.
            </li>

            <li>
              El tiempo de reparación puede variar según la complejidad del
              daño.
            </li>

            <li>
              Todo trabajo adicional será informado previamente al cliente.
            </li>
          </ul>
        </section>

        {/* PROCESO */}

        <section className={styles.infoBox}>
          <h3>Proceso de reparación</h3>

          <ol>
            <li>Evaluación técnica del daño.</li>

            <li>Preparación del área afectada.</li>

            <li>Reparación mediante técnica de sacabollos sin pintura.</li>

            <li>Control final y entrega del vehículo.</li>
          </ol>
        </section>

        {/* RECOMENDACIONES */}

        <section className={styles.infoBox}>
          <h3>Cuidados posteriores al trabajo</h3>

          <p>
            Para conservar el resultado obtenido se recomienda evitar golpes o
            presiones sobre la zona reparada durante los primeros días. No
            utilizar productos abrasivos ni realizar tratamientos sobre el área
            intervenida sin previa consulta con LT Estética Vehicular.
          </p>
        </section>

        {/* FIRMA EMPRESA */}

        <section className={styles.signature}>
          <span className={styles.signatureCompany}>LT Estética Vehicular</span>

          <Image
            src="/images/FirmaLauti1.png"
            alt="Firma"
            width={160}
            height={90}
            className={styles.signatureImage}
          />

          <span className={styles.signatureName}>Lautaro Tello Gutierrez</span>
        </section>

        <footer className={styles.footer}>
          LT Estética Vehicular • Documento no válido como factura
        </footer>
      </div>
    </div>
  );
}

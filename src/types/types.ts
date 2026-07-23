// Estética
export interface CotizacionData {
  nombre: string;
  telefono: string;
  vehiculo: string;
  patente: string;
  modelo: string;
  color: string;
  servicio: string;
  descripcion: string;
  valor: string;
  fecha: string;
  fechaTurno: string;
  horario: string;
}

// Sacabollos
export interface SacabollosData {
  nombre: string;
  domicilio: string;
  telefono: string;
  vehiculo: string;
  patente: string;
  modelo: string;
  color: string;
  fechaEmision: string;
  observaciones: string;
  valor: string;
  sena: string;
  fecha: string;
  horario: string;
}

export type FormChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

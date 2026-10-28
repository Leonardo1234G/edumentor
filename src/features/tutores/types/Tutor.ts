export interface Tutor {
    id: number;
    numeroDocumento: string;
    nombreCompleto: string;
    email: string;
    telefono: string | null;
    especialidad: string | null;
    activo: boolean;
}
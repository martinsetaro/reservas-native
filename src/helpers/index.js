export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year:'2-digit',
        month: '2-digit',
        day:'2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones) // formatear fecha
}
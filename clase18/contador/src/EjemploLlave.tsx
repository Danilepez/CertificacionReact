export default function EjemploLlave() {
    const suma = (a: number, b: number): number => {
      return a + b
    }
    const resultado = suma(3, 4)
    const mensaje: string = El resultado de la suma es: ${resultado}   
  return (
    <section>
        <h1>Ejemplo de uso de llaves en JSX</h1>
        <p> 3 + 4 = {resultado}</p>
        <p>{mensaje}</p>    
    </section>
  )
}
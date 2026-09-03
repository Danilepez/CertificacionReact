document.addEventListener('DOMContentLoaded', () => {
    const tablero = document.querySelector<HTMLTableElement>('.cuadricula');
    if (!tablero) return;

    let juegoTerminado = false;

    tablero.addEventListener('click', (evento: MouseEvent) => {
        if (juegoTerminado) return;

        const celda = evento.target as HTMLElement;

        if (celda.tagName !== 'TD') return;

        const esBomba = celda.textContent?.trim() === '💣';

        if (esBomba) {
            juegoTerminado = true;
            
            tablero.querySelectorAll('td').forEach(c => {
                if (c.textContent?.trim() !== '💣') {
                    c.textContent = '❌';
                }
                c.style.color = 'black';
            });
        } else {
            celda.style.color = 'black';
        }
    });
});
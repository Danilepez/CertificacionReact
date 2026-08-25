"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const tablero = document.querySelector('.cuadricula');
    if (!tablero)
        return;
    let juegoTerminado = false;
    tablero.addEventListener('click', (evento) => {
        if (juegoTerminado)
            return;
        const celda = evento.target;
        if (celda.tagName !== 'TD')
            return;
        const esBomba = celda.textContent?.trim() === '💣';
        if (esBomba) {
            juegoTerminado = true;
            tablero.querySelectorAll('td').forEach(c => {
                if (c.textContent?.trim() !== '💣') {
                    c.textContent = '❌';
                }
                c.style.color = 'black';
            });
        }
        else {
            celda.style.color = 'black';
        }
    });
});

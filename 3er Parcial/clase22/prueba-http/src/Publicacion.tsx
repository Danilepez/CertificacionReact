import { useEffect, useState } from "react";
import { API_URL } from "./ListaPublicaciones";
import type { Publicacion } from "./ListaPublicaciones";

export default function Publicacion() {
    const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

    useEffect(() => {
        async function cargarDatos(): Promise<void> {
            const response = await fetch(`${API_URL}/posts`);
            const datos: Publicacion[] = await response.json();
            setPublicaciones(datos);
        }

        void cargarDatos();
    }, []);

    return (
        <ul>
            {publicaciones.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

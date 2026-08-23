import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu } from '../menu';

export default function Dashboard() {
    const [busqueda, setBusqueda] = useState('');

    const menuFiltrado = menu.filter(({ label }) =>
        label.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <main>
            <h1>Centro de Control</h1>
            <p>Bienvenido al panel principal de la aplicación.</p>

            <input
                type="text"
                placeholder="Buscar opción..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
<button onClick={() => setBusqueda('')}>
    Limpiar búsqueda
</button>

{busqueda !== '' && (
    <p>
        Resultados encontrados: {menuFiltrado.length}
    </p>
)}
            <div>
                {menuFiltrado.map(({ to, label }) => (
                    <Link key={to} to={to}>
                        <button>{label}</button>
                    </Link>
                ))}
            </div>

            {menuFiltrado.length === 0 && (
                <p>No se encontraron opciones.</p>
            )}
        </main>
    );
}
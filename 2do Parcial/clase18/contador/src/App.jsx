import {createRoot} from 'react-dom/client';
import TresEnRaya from './tres-en-raya.jsx';
import EjemploLlave from './ejemploLlave.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EjemploLlave />);
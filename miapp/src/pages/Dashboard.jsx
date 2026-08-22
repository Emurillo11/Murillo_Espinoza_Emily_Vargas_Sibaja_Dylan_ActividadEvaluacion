import { Link } from 'react-router-dom';
import { menu } from '../menu';

export default function Dashboard(){
    return (
        <main>
            <h1>Dashbboard</h1>
            {menu.map(({ to, label}) => (
                <Link key={to} to={to}><button>{labe}</button></Link>))}
        </main>
    )
}
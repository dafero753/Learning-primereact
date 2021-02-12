import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './style.css';

export default function Elevation () {
        let cols = [];

        for (let i = 1; i < 25; i++) {
            let col = (
                <div key={i} className="p-col">
                    <div className={`box p-shadow-${i} size`}>
                        p-shadow-{i}
                    </div>
                </div>
            );

            cols.push(col);
        }

        return (
            <div className="container">
                <div className="p-grid">
                    {cols}
                </div>
            </div>
        );
}
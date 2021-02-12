import 'primeflex/primeflex.css';
import './style.css';

export default function Icons () {
    return (
        <div className="container">
            <div className="card">
                <i className="border pi pi-check p-mr-2"></i>
                <i className="border pi pi-times"></i>
                <i className="border pi pi-check"></i>
                <i className="border pi pi-check" style={{'fontSize': '2em'}}></i>
                <i className="border pi pi-spin pi-spinner" style={{'fontSize': '2em'}}></i>
            </div>
        </div>
    )
}
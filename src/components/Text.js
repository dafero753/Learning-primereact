import 'primeflex/primeflex.css';
import './style.css';

export default function Text () {
    return (
        <div className="container">
            <div className="card">
                <h5>Alignment</h5>
                <div className="p-mb-3 border p-text-left">Left</div>
                <div className="p-mb-3 p-text-center border">Center</div>
                <div className="p-text-right border">Right</div>

                <h5>Wrap</h5>
                <div className="p-mb-3 border demo-container" style={{width: '10rem'}}>Long text wraps and does not overlow.</div>
                <div className="p-mb-3 border demo-container p-text-nowrap" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
                <div className="p-mb-3 border demo-container p-text-nowrap p-text-truncate" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>

                <h5>Transform</h5>
                <div className="p-mb-3 border p-text-lowercase">LOWERCASE</div>
                <div className="p-mb-3 border p-text-uppercase">uppercase</div>
                <div className="p-text-capitalize border">capitalize</div>

                <h5>Style</h5>
                <div className="p-mb-3 border p-text-bold">Bold</div>
                <div className="p-mb-3 border p-text-normal">Normal</div>
                <div className="p-mb-3 border p-text-light">Light</div>
                <div className="p-mb-3 border p-text-italic">Italic</div>
            </div>
        </div>
    )
}
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './style.css';

export default function Flexbox () {

        return (
            <div className="container">
                <div className="card">
                    <div className="p-d-flex box p-shadow-1 border">Flex Container</div>
                </div>
                <div className="card">
                    <div className="p-d-inline-flex box p-shadow-1 border">Inline Flex Container</div>
                </div>
                <div className="card">
                    <div className="p-d-flex">
                        <div className="p-mr-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 2</div>
                        <div className="box p-shadow-1 border">Item 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-inline-flex p-flex-column">
                        <div className="p-mb-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mb-2 box p-shadow-1 border">Item 2</div>
                        <div className="box p-shadow-1 border">Item 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-inline-flex p-flex-column p-flex-md-row">
                        <div className="p-mb-2 p-mr-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mb-2 p-mr-2 box p-shadow-1 border">Item 2</div>
                        <div className="p-mb-2 p-mr-2 box p-shadow-1 border">Item 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex">
                        <div className="p-mr-2 box p-shadow-1 border p-order-3">Item 1</div>
                        <div className="p-mr-2 box p-shadow-1 border p-order-1">Item 2</div>
                        <div className="box p-shadow-1 border p-order-2">Item 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex">
                        <div className="p-mr-2 box p-shadow-1 border p-order-3 p-order-md-2">Item 1</div>
                        <div className="p-mr-2 box p-shadow-1 border p-order-1 p-order-md-3">Item 2</div>
                        <div className="box p-shadow-1 border p-order-2 p-order-md-1">Item 3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex">
                        <div className="p-mr-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 2</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 3</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 4</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 5</div>
                        <div className="p-mr-2 box p-shadow-1 border">Item 6</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-flex-wrap">
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 2</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 3</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 4</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 5</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 6</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-flex-wrap-reverse">
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 1</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 2</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 3</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 4</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 5</div>
                        <div className="p-mr-2 p-mb-2 box p-shadow-1 border">Item 6</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-jc-between">
                        <div className="box p-shadow-1 border">Item 1</div>
                        <div className="box p-shadow-1 border">Item 2</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-jc-center">
                        <div className="box p-shadow-1 border">Item 1</div>
                        <div className="box p-shadow-1 border">Item 2</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-ai-start">
                        <div className="p-mr-2 box p-shadow-1 border" style={{height: '100px'}}>Item 1</div>
                        <div className="box p-shadow-1 border" style={{height: '50px'}}>Item 2</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-ai-center">
                        <div className="p-mr-2 box p-shadow-1 border" style={{height: '100px'}}>Item 1</div>
                        <div className="box p-shadow-1 border" style={{height: '50px'}}>Item 2</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex" style={{height: '150px'}}>
                        <div className="p-mr-2 p-as-start box p-shadow-1 border">Start</div>
                        <div className="p-mr-2 p-as-center box p-shadow-1 border">Center</div>
                        <div className="p-mr-2 p-as-end box p-shadow-1 border">End</div>
                        <div className="p-mr-2 p-as-stretch box p-shadow-1 border">Stretch</div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-d-flex p-flex-column" style={{height: '200px'}}>
                        <div className="box p-shadow-1 border">Item 1</div>
                        <div className="p-mt-auto box p-shadow-1 border">Item 2</div>
                    </div>
                </div>
            </div>
        );
}
import Display from './components/Display';
import Elevation from './components/Elevation';
import Flexbox from './components/Flexbox';
import FormLayout from './components/FormLayout';
import GridSystem from './components/GridSystem';
import Spacing from './components/Spacing';
import Text from './components/Text';
import Icons from './components/Icons';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>PrimerReact components and tools</h1>
      <Display />
      <Elevation />
      <Flexbox />
      <FormLayout />
      <GridSystem />
      <Spacing />
      <Text />
      <Icons />
    </div>
  );
}

export default App;

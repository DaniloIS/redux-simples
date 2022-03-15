import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title='Card 01' red>X</Card>
        <Card title='Card 02' green>X</Card>
      </div>
      <div className='linha'>
        <Card title='Card 03' blue>Y</Card>
        <Card title='Card 04' purple>Y</Card>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import useRandomColor from './useRandomColor';
import useQuery from './useQuery';

function App() {
  const { color, changeColor } = useRandomColor();

  const { res } = useQuery(
    fetch('https://foodish-api.herokuapp.com/api/')
  )

  const styles = {
    width: '100vw', height: '100vh', background: '#' + color, display: 'flex',
    flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'
  }

  return (
    <div className="App" style={styles}>
      <button onClick={changeColor}>Change Color</button>
      <img src={res.image} alt="" style={{ height: '50px', width: '50px' }} />
    </div>
  );
}

export default App;

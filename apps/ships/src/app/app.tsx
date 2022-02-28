// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import StarShips from './pages/StarShips';
import { Button } from 'react-bootstrap';

export function App() {
  return (
    <>
      <div className="navbar">
        <h2 className="navbar__title">Wellcome to the Starship paradise!</h2>
        {/* <Button className='navbar__about'>About</Button> */}
      </div>
      {/* Main component that loads the table with the API information*/}
      <StarShips></StarShips>
    </>
  );
}

export default App;
import Navbar from './components/Navbar';

import './styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Icon from './components/Icon';
import Cards from './components/Cards';




function App() {
 
  return (
    
    <div className='app'>
    <Navbar /> 
    <div className='Heading'>
    <span  >BANG FOOD <Icon /></span>   
    </div>
    <div className="container" >
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
   

  )
}

export default App;

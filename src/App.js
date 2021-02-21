
import './App.css';
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Homepage from './components/Homepage'
import Card from './components/Card'
import Dashboard from './components/Dashboard'
import axios from 'axios'

function App() {



  return (
    <Router>
      <div>
        <Homepage/>
      </div>
      <Route path="/" exact component={Card} />
      <Route path="/dashboard"  component={Dashboard} />
    </Router>
    );
}

export default App;
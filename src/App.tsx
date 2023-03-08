import RealTimeSearch from './components/RealTimeSearch';
import RealTimeSearchResults from './components/RealTimeSearchResults';

import './App.css'

/* 
 * Available endpoints
 * http://localhost:8000/api/tags - to return all tags in
 * http://localhost:8000/api/tags?tag=ferrari - to return matching tags
 * http://localhost:8000/api/cars - to return all cars
 * http://localhost:8000/api/cars?tag=ferrari - to return matching cars
 */

function App() {

  return (
    <div className="App">
      <h1>Motorway UI challenge</h1>
      <RealTimeSearch />
      <RealTimeSearchResults />
    </div>
  )
}

export default App

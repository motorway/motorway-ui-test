import RealTimeSearch from './components/RealTimeSearch';
import RealTimeSearchResults from './components/RealTimeSearchResults';

import './App.css'

/*
 * Available endpoints
 * /api/tags - to return all tags in
 * /api/tags?tag=fe - to return matching tags
 * /api/cars - to return all cars
 * /api/cars?tag=ferrari - to return matching cars
 */

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Motorway UI challenge</h1>
      <RealTimeSearch />
      <RealTimeSearchResults />
    </div>
  )
}

export default App

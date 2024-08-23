import './App.css';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner';
import RowPosters from './components/RowPosters/RowPosters'
import { originals, action, comedy, romance, horror, documentary } from './components/Urls/Urls'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <RowPosters title="Netflix Origins" url={originals} />
      <RowPosters title="Action" isSmall url={action} />
      <RowPosters title="Comedy" isSmall url={comedy} />
      <RowPosters title="Romance" isSmall url={romance} />
      <RowPosters title="Horror" isSmall url={horror} />
      <RowPosters title="Documentaries" isSmall url={documentary} />
    </div>
  );
}

export default App;

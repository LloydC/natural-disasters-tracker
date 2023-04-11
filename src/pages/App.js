import { useState, useEffect} from 'react';
import Map from '../components/Map'
import LoadingAnimation from '../components/LoadingAnimation'

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      const filterByDate = events.map(event => event.geometry[0].date)
      console.log(filterByDate);
      
      setEventData(events);
      setLoading(false);
    }
    fetchEvents()
  }, [])

  return (
    <div className="App">
      {loading ? <LoadingAnimation/> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;

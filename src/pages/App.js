import { useState, useEffect} from 'react';
import Map from '../components/Map'
import LoadingAnimation from '../components/LoadingAnimation'

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    }
    fetchEvents()
  }, [])

  return (
    <div className="App">
      {!loading ? <Map eventData={eventData} /> : <LoadingAnimation/>}
    </div>
  );
}

export default App;

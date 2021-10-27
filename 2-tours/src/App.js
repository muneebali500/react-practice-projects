import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  let [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  function deleteTour(id) {
    tours = tours.filter((tour) => id !== tour.id);
    setTours(tours);
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;

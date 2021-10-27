import Tour from "./Tour";

export default function Tours({ tours, deleteTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour {...tour} deleteTour={deleteTour} key={tour.id} />
        ))}
      </div>
    </section>
  );
}

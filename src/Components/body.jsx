import "./body.css";
import plane from "../assets/plane2.png";
import MoveToTopButton from "./button"

function Body() {
  return (
    <div className="contain">
      <div className="body">
        <div className="eight">
          <h1>800+</h1>
          More than Eight hundred people use our Services. There are different
          things which make then interested in our services more especially the
          timely services and other activities which make then like to work with
          us many times. All the people who use our services are not only
          Rwandans, some foreigners also use our services.
        </div>
        <div className="flight">
          <h1>Flight</h1>
          You can book flights whenever you want because we always have
          available flights all the time. We provide timely services on flights
          and the more you work with the lower the services will be familiar
          with you. We give the clients the guiders so it will be very good to
          work with you.
        </div>
      </div>
      <div className="hotel">
        <div className="hotels">
          <h1>Hotels</h1>
          We also have hotel services for the people for far. Like for those who
          think that the flight may leave them back when they are late, you can
          also book for the hotel room in one of our hotel. We provide you will
          necessary services and on time. We have enough rooms and you will get
          every thing you need.
        </div>
      </div>
      <div className="ending">
        <h1 className="airline">AirLines.</h1>
        <p>
          We have cooperation with different airlines which make our service
          efficient as we are having different ways to satisfy our clients. Some
          of them are Airbus from Europe, Emirates from Dubai, Qatar Air ways
          from Qatar and others.
        </p>
        <img src={plane} alt="Aeroplane" className="plane2" />
        <MoveToTopButton />
      </div>
    </div>
  );
}

export default Body;

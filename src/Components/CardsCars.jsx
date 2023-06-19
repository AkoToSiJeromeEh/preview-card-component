import "../Style/Style.css";
import React from "react";
function CardComp() {
  const [hoverCar, setHoverCar] = React.useState(false);
  const [hoverCar2, setHoverCar2] = React.useState(false);
  const [hoverCar3, setHoverCar3] = React.useState(false);
  function handleOnHover() {
    setHoverCar(true);
  }
  function handleLeaveHover() {
    setHoverCar(false);
  }
  function handleOnHover2() {
    setHoverCar2(true);
  }
  function handleLeaveHover2() {
    setHoverCar2(false);
  }
  function handleOnHover3() {
    setHoverCar3(true);
  }
  function handleLeaveHover3() {
    setHoverCar3(false);
  }

  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle((preval) => !preval);
  }
  const [toggle1, setToggle1] = React.useState(false);

  function handleToggle1() {
    setToggle1((preval) => !preval);
  }
  const [toggle2, setToggle2] = React.useState(false);

  function handleToggle2() {
    setToggle2((preval) => !preval);
  }
  return (
    <div className="Card-Wrapper">
      <div
        className={hoverCar ? "Card-Sedan Cars-Bg" : "Card-Sedan"}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleLeaveHover}
      >
        <img src={"icon-sedans.svg"} alt="" />
        <h2>SEDANS</h2>
        {
          toggle ? 
          <ul>
            <li>
            Comfortable Seating and Interior Space: Sedans generally offer comfortable seating for both the driver and passengers.
            </li>
            <li>
            Fuel Efficiency and Engine Options: Sedans typically prioritize fuel efficiency, making them an economical choice for daily commuting and long-distance driving.
            </li>
          </ul>
         : 
          <p>
          Choose a <strong>SEDAN</strong> for its affordability and excellent
          fuel economy. Ideal for cruising in the city or on your next road
          trip.
         </p>
        }
        <button onClick={handleToggle}>
          <a href="#">{toggle ? "Hide Spec" : "Show Spec"}</a>
        </button>
      </div>
      <div
        className={hoverCar2 ? "Card-Suvs Cars-Bg-2" : "Card-Suvs"}
        onMouseEnter={handleOnHover2}
        onMouseLeave={handleLeaveHover2}
      >
        <img src={"icon-suvs.svg"} alt="" />
        <h2>SUVS</h2>
        {
          toggle1 ? 
  
           <ul>
                <li>
                Size and Spaciousness: SUVs are known for their larger size and spacious interiors
                </li>
                <li>
                Versatility and Utility: SUVs are designed to be versatile and cater to different needs.
                </li>
           </ul>
          :
          <p>
          Take an <strong>SUV</strong> for its spacious interior, power, and
          versatility. Perfect for your next family vacation and off-road
          adventures.
        </p>
        }
        <button onClick={handleToggle1}>
          <a href="#">{toggle1 ? "Hide Spec" : "Show Spec"}</a>
        </button>
      </div>
      <div
        className={hoverCar3 ? "Card-Luxary Cars-Bg-3" : "Card-Luxary"}
        onMouseEnter={handleOnHover3}
        onMouseLeave={handleLeaveHover3}
      >
        <img src={"icon-luxury.svg"} alt="" />
        <h2>LUXURY</h2>
        {toggle2 ? (
          <ul>
            <li>Exquisite Interior: Luxury cars often feature premium materials like fine leather upholstery, wood trim, and high-quality soft-touch surfaces.</li>
            <li>Powerful Performance: Luxury cars often boast powerful engines that deliver impressive performance. </li>
          </ul>
        ) : (
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a <strong>LUXURY</strong> rental and arrive in
            style.
          </p>
        )}
        <button onClick={handleToggle2}>
          <a href="#">{toggle2 ? "Hide Spec" : "Show Spec"}</a>
        </button>
      </div>
    </div>
  );
}

export default CardComp;

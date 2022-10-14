import React from "react";

//create your first component
const Home = (props) => {
  let numeros = props.tiempo.toString();
  return (
    <div className="text-center d-flex justify-content-center mx-5">
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        <i class="fas fa-stopwatch"></i>
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 6] ? numeros[numeros.length - 6] : "0"}
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 5] ? numeros[numeros.length - 5] : "0"}
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 4] ? numeros[numeros.length - 4] : "0"}
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 3] ? numeros[numeros.length - 3] : "0"}
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 2] ? numeros[numeros.length - 2] : "0"}
      </div>
      <div className="my-4 mx-3 px-4" style={{ backgroundColor: "pink" }}>
        {numeros[numeros.length - 1] ? numeros[numeros.length - 1] : "0"}
      </div>
    </div>
  );
};

export default Home;
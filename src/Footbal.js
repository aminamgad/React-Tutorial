 function Football() {
    const shoot = () =>{
        alert("Great Shot");
    }
    return(
        <button className="btn" onClick={shoot}>Take the shot</button>
    )
}

export default Football;

// function Garage(props) {
//     const cars = props.cars;
//     return (
//       <>
//         <h1>Garage</h1>
//         {cars.length > 0 &&
//           <h2>
//             You have {cars.length} cars in your garage.
//           </h2>
//         }
//       </>
//     );
//   }
  
//   const cars = ['Ford', 'BMW', 'Audi'];
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage cars={cars} />);

import './App.css';
import Countryies from "./Components/Countryies/Countryies";


function App() {

  return (
    <div className="App">
      <Countryies></Countryies>
    </div>
  );
}
// function Loadcountryies() {
//   const [countryes, setCountryes] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountryes(data))
//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Country of the world</h1>
//       <h3>country this here: {countryes.length}</h3>
//       {
//         countryes.map(country => <Country name={country.name.common} population={country.population} continents={country.continents} flags={country.flags.png}></Country>)
//       }

//       {/* {
//         countryes.map(country => <Country key={country.name.common} country={country} ></Country>)
//       } */}

//     </div>
//   )
// };
// // function Country({ country }) {
// function Country(props) {

//   // console.log(key)
//   return (
//     <div>
//       <h1>Name: {props.name.common}</h1>
//       <h2>Population: {props.population}</h2>
//       <h3>continents: {props.continents}</h3>
//       <img src={props.flags} alt='' />
//     </div>
//   )
// };
export default App;

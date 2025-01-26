import './App.css';
import Photos from "./Components/Photos";


export default function App() {
  // const createArray = Array.from({ length: 4 }, (_, i) => 7 - 3 + i).filter(
  //   (i) => i > 0
  // );

  return (
    <div className="App">
      <Photos />
    </div>
  );
}

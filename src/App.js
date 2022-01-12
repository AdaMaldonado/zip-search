import "./App.css";

export default function App() {
  return (
    <div className="App">
        <header>
            <h1>Zip Code Search</h1>
        </header>

        <body id="body-el">
            <label>Zip Code:</label>
            <input placeholder="Try 10016"></input>
            <p>No Results</p>
        </body>
    </div>
  );
}
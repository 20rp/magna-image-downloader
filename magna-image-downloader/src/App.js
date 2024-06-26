import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Magna Image Downloader</h1>
      <form method="POST">
        <label>Enter URL:</label>
        <input type="text" />
        <input type="submit" />
      </form>
      <form method="GET" id="imageDashboard">
        <label>Image Dashboard</label>
      </form>
    </div>
  );
}

export default App;

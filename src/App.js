import "./App.css";
import Videofile from "./mypublic/back.MP4";

function App() {
  return (
    <div>
      <div className="main-header">
        <h1>This is main header</h1>
      </div>
      <div className="container">
        <video autoPlay loop muted className="video-background">
          <source src={Videofile} type="video/mp4" />
        </video>
        <div>
          <h1 className="AlvinsName">This is Alvin Dewan</h1>
        </div>
      </div>
      <div className="main-footer">
        <h1>This is main footer</h1>
      </div>
    </div>
  );
}

export default App;

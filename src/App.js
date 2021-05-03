import './App.css';
import img1 from "./imageInSrc.jpg";
import vid1 from './MOVING FORWARD TOGETHER - TOMMY HILFIGER.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="titlered">Your name here</h1>

<br />

<img src={img1} alt=""/>

<br />

<img src="/imageInPublic.jpg" alt="" />

</div>

<video width={320} height={240} controls>

<source src={vid1} type="video/mp4" />

</video>
    </div>
  );
}

export default App;

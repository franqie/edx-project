import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/style.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Reset from "./Reset";
import { FaRegComment } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <div className="ribbon"></div>
      <div className="app__container">
        <Router>
          <Header />
          <div>
            <div className="app__content">
              <Navbar />
              <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/reset" element={<Reset />}/>
              </Routes>
            </div>
          </div>
        </Router>
      </div>
      <div className="help">
        <FaRegComment />
        <span>Help</span>
      </div>
    </div>
  );
}

{/* <div>
  <svg class="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
    <g transform="skewX(171.6)">
      <rect x="0" y="0" height="100%" width="100%"></rect>
    </g>
  </svg>
</div> */}
{/* <div className="svg">
<svg width="300" height="300" viewBox="-150 -150 400 400" style="fill:rgb(0,255,255)">
    <polygon points="0 0, 0 -200, 200 -200"  mydatadeg="0" />	
</svg>
</div> */}

export default App;

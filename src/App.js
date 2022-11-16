import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {Helmet} from "react-helmet";


function App() {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>BuyNow</title>
                <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
        <BrowserRouter>
        <Header />

        <div className="App">
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/cart" exact element={<Cart />}/>
        </Routes>

        </div>
        </BrowserRouter>
    </>
      
  );
}

export default App;
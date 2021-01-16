import "./App.css";
import "./bemModerators.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Register from "./Register";
import Success from "./Success";
import WhyUs from "./WhyUs";

function App() {
    return (
        <div className="app">
            <Header />

            <Main />

            <WhyUs />

            <Success />

            <Register />

            <Footer />
            <div className="credit">
                <p>
                    All rights reserved to the <a href="#">Mudarris.Net.</a>
                </p>
            </div>
        </div>
    );
}

export default App;

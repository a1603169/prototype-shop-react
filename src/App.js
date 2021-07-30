import Header from "./components/Header"
import Prototypes from "./components/Prototypes"
import Footer from "./components/Footer"
import Orders from "./components/Orders"



function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Prototypes />
      <Orders />
      <Footer />
    </div>
    </>
  );
}

export default App;

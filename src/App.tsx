import Footer from "./components/Footer";
import InteractRating from "./components/InteractRating";

function App() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center">
      <InteractRating />
      <Footer />
    </div>
  );
}

export default App;

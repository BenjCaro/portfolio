import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <Footer />
    </>
  )
}

export default App;

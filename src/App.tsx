import Checkbox from '@mui/material/Checkbox';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PersonalInformation } from './components/PersonalInformation';
import { Service } from './components/Service';
import { PaymentMethod } from './components/PaymentMethod';

function App() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col formContainer">
        <Header />
        <div className="content">
          <PersonalInformation />
          <div className="selectedService">Selected service</div>
          <Service />
          <div className="inputBlock">
            <div className="mt-10 text-3xl font-semibold">
              Enter your location
            </div>
            <input className="input" placeholder="Enter address" />
          </div>
          <div className="inputBlock">
            <div className="mt-10 text-3xl font-semibold">Note (optional)</div>
            <input className="input" placeholder="Enter address" />
          </div>
          <PaymentMethod />
          <div className="checkbox flex">
            <Checkbox />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{' '}
              <span>do eiusmod</span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

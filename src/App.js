import './App.css';

import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'
import Random from './Components/Random'
import BoxColor from './Components/BoxColor'
import CreditCard from './Components/CreditCard'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Simpson'
        firstName='Homer'
        gender='male'
        height={180}
        birth={new Date("1968-04-17")}
        picture="https://anniversaire-celebrite.com/upload/250x333/homer-simpson-250.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    <div className="creditCards">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
    </div>
  );
}

export default App;

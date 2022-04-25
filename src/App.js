import './App.css';

import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import Dice from './Components/Dice';
import Carousel from './Components/Carousel';
import NumbersTable from './Components/NumbersTable';
import FaceBook from './Components/FaceBook';
import SignupPage from './Components/SignupPage';
import RGBColorPicker from './Components/RGVBColorPicker';

function App() {
  return (
    ////////////////////////////////// ITERATION 1 - IDCARDS /////////////////////////////////////////
    <div className="App">
      <IdCard
        lastName='Simpson'
        firstName='Homer'
        gender='male'
        height={180}
        birth={new Date("1968-04-17")}
        picture="https://anniversaire-celebrite.com/upload/250x333/homer-simpson-250.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      {/* //////////////////////////////////// ITERATION 2 - GREETINGS ///////////////////////////////////////// */}

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* //////////////////////////////////// ITERATION 3 - RANDOM ///////////////////////////////////////// */}

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* ///////////////////////////////// ITERATION 4 - BOXCOLOR ////////////////////////////////////// */}

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* ///////////////////////////////// ITERATION 5 - IDCARDS ////////////////////////////////////// */}

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

      {/* ///////////////////////////////// ITERATION 6 - RATINGS ////////////////////////////////////// */}

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* ///////////////////////////////// ITERATION 7 - DRIVERCARDS ////////////////////////////////////// */}

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      {/* ///////////////////////////////// ITERATION 8 - LIKEBUTTON ////////////////////////////////////// */}

      <LikeButton />
      <LikeButton />
      <LikeButton />

      {/* ///////////////////////////////// ITERATION 9 - CLICKABLEPICTURE ////////////////////////////////////// */}

      <ClickablePicture
        img='/maxence.png'
        imgClicked='/maxence-glasses.png'
      />

      {/* ///////////////////////////////// ITERATION 10 - DICE ////////////////////////////////////// */}

      <Dice />

      {/* ///////////////////////////////// ITERATION 11 - CAROUSEL ////////////////////////////////////// */}

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      {/* ///////////////////////////////// ITERATION 12 - NUMBERSTABLE ////////////////////////////////////// */}

      <NumbersTable limit={12} />

      {/* ///////////////////////////////// ITERATION 13 AND 14 - FACEBOOK ////////////////////////////////////// */}

      <FaceBook />

      {/* ///////////////////////////////// ITERATION 15 - SIGNUPPAGE ////////////////////////////////////// */}

      <SignupPage />

      {/* ///////////////////////////////// ITERATION 16 - RGBCOLORPICKER ////////////////////////////////////// */}

      <RGBColorPicker />

    </div>
  );
}

export default App;

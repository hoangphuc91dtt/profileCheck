import { useState } from "react";
import "./App.css";
import ProfileSuper from "./components/ProfileSuper/ProfileSuper";
import Gallery from "./components/Gallery/Gallery";
import PackingList from "./components/PackingList/PackingList";
import List from "./components/List/List";
import Signup from "./components/Signup/Signup";
import StateComponent from "./components/State/StateComponent";
import RedPoin from "./components/RedPoin/RedPoin";
import Form1 from "./components/Form/Form1/Form1";
import Form2 from "./components/Form/Form2/Form2";

function App() {
  return (
    <>
      {/* <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <div>
        {" "}
        <MyProfile />
      </div>
      <div>
        <MyProduct />
      </div>
      <div>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
      <div>
        <Game />
      </div> */}
      {/* <div>
        <AppSandbox />
      </div> */}
      {/* <ProfileSuper />
      <Gallery /> */}
      {/* <PackingList /> */}
      {/* <List /> */}
      {/* <StateComponent /> */}
      <Form2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form1 />
    </>
  );
}

export default App;

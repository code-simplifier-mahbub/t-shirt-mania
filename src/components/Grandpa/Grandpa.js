import { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const HouseContext = createContext(7);

const Grandpa = () => {
  const [house, setHouse] = useState([1]);

  return (
    <div className="grandpa">
      <HouseContext.Provider value={[house, setHouse]}>
        <h2>grandpa : </h2>
        <section>
          <Father></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </HouseContext.Provider>
    </div>
  );
};

export default Grandpa;

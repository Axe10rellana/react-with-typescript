//importaciones
import { useState, useRef, useEffect } from "react";

//interfaces de tipos
import { Sub } from "./types";

//services
import { getAllSubs } from "./services/getAllSubs";

//componentes
import List from "./components/List";
import Form from "./components/Form";

//interfaces de estados
export interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

//variables de estado inicial
/* const INITIAL_STATE = [
    {
      nick: "dapelu",
      subMonths: 3,
      avatar: "https://i.pravatar.cc/150?u=dapelu",
      description: "Dapelu hace de moderador aveces",
    },
    {
      nick: "sergio_serrano",
      subMonths: 7,
      avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    },
  ]; */

const App = () => {
  //variables de estado
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  //useEffect
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  //funciones
  const handleNewSubs = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div ref={divRef}>
      <h1>Subs de Midudev</h1>
      <List subs={subs} />
      <h1>New Subs: {newSubsNumber}</h1>
      <Form onNewSub={handleNewSubs} />
    </div>
  );
};

export default App;

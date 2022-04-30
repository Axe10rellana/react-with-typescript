//importaciones
import { useReducer } from "react";

//interfaces de tipos
import { Sub } from "../types";

//interfaces
interface FormState {
  inputValues: Sub;
}

//variables iniciales
const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

//actions
type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

//reducer
const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;
    default:
      return state;
  }
};

//customHook
const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

//export
export default useNewSubForm;

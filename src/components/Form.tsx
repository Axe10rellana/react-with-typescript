//importaciones
import useNewSubForm from "../hooks/useNewSubForm";

//interfaces de tipos
import { Sub } from "../types";

//interfaces
interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  //variables de estado
  //const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE);

  //variables del customHook
  const [inputValues, dispatch] = useNewSubForm();

  //funciones
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };
  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nick"
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="SubMonths"
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
          autoComplete="off"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="Description"
          autoComplete="off"
        />
        <button onClick={handleClear} className="btn btn-clear" type="button">
          Clear the form
        </button>
        <button className="btn btn-submit" type="submit">
          Save name sub
        </button>
      </form>
    </div>
  );
};

export default Form;

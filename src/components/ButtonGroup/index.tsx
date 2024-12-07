import classes from "./style.module.css";

import { useId } from "react";
import { SelectedOption } from "../../types/selectedOptions";

type Props = {
  options: string[];
  selectHandler: React.Dispatch<React.SetStateAction<SelectedOption[]>>;
  selectedOptions: SelectedOption[];
};

const checkIfChecked = (
  currentOption: string,
  currentId: string,
  optionList: SelectedOption[]
) => {
  return optionList.some(
    (option) => option.body === currentOption && option.id === currentId
  );
};

const ButtonGroup = ({ options, selectHandler, selectedOptions }: Props) => {
  const randomId = useId();

  const optionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectHandler((state) => {
      const exists = state?.some((option) => option.id === randomId);

      if (exists) {
        return state.map((option) => {
          if (option.id === randomId) {
            return { ...option, body: e.target.value };
          }
          return option;
        });
      }
      return [...state, { id: randomId, body: e.target.value }];
    });
  };

  return (
    <div className={classes.optionContainer}>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={checkIfChecked(option, randomId, selectedOptions)}
              onChange={optionChangeHandler}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
};

export default ButtonGroup;

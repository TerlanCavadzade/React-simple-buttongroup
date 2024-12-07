import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import "./styles.css";
import { SelectedOption } from "./types/selectedOptions";

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

  return (
    <div className="App">
      <h2>Current Selected Options List</h2>
      <ul>
        {selectedOptions.map((option) => {
          return <li key={option.id}>{option.body}</li>;
        })}
      </ul>

      <ButtonGroup
        options={["test1", "test2"]}
        selectHandler={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
      <ButtonGroup
        options={["test3", "test4", "test5"]}
        selectHandler={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
      <ButtonGroup
        options={["test6", "test7"]}
        selectHandler={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

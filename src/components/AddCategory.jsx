import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    //   console.log(event.target.value);
    console.log(setInputValue);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);\
    setInputValue("");
    onNewCategory(inputValue.trim());
    
    // console.log(inputValue);
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //   onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Spiderman"]);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);
    // console.log(newCategory)
    if (categories.includes(newCategory)) return; //Si existe no lo agrega

    setCategories([newCategory, ...categories]);
    // setCategories(cat =>[...cat,'Valorant']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input  */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado de Gif's */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item  */}
    </>
  );
};

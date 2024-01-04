import { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const [cat, setCat] = useState("");
  const { setSearchText } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchText(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          id=""
          placeholder="cat"
          className="form-input search-input"
          onChange={(e) => setCat(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

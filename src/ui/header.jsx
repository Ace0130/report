import "./css/header.css";
const Header = () => {
  return (
    <div className="hWrapper">
      <div className="Logo">Blog</div>
      <input
        type="search"
        className="Searchbar"
        placeholder="검색어를 입력하시오"
      ></input>
      <div className="List">List</div>
    </div>
  );
};

export default Header;

import { SerachIcon } from '../components/common/Icon';

const SearchBar = ({ data, setSearchData }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchOnChange = (e) => {
    if (!e.target.value) return setSearchData(data);

    const resultsArry = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchData(resultsArry);
  }
  return (
    <div className='searchBar'>
      <form className='search' onClick={handleSubmit}>
        <input
          className='searchInput'
          id='search'
          type='text'
          onChange={handleSearchOnChange}
        />
        <button className='searchButton'><SerachIcon /></button>
      </form>
    </div>
  )
}

export default SearchBar
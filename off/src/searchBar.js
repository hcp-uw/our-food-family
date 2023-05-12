import React, {useState} from 'react'

const searchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const restaurants = [
    {name: "Snowy Village", rating: "5/5"},
    {name: "Aladdins", rating: "4/5"}
 ];

 const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      countries.filter((restaurant) => {
      return restaurants.name.match(searchInput);
  });
  }

  return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>Restaurant</th>
    <th>Rating</th>
  </tr>

{restaurants.map((restaurant, 0) => {

<div>
  <tr>
    <td>{restaurant.name}</td>
    <td>{restaurant.continent}</td>
  </tr>
</div>

}
</table>

</div>

};

export default searchBar;

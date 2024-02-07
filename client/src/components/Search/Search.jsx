import React from "react"
import { recentBoards } from "../../pages/Workspace/Workspace";
import Icons from "../Icon";
import "./Search.css"


export const Search = ({ data, onFilterChange }) => {

    const [filteredData, setFilterData] = React.useState(data);
    const [search, setSearch] = React.useState("");
    const [focused, setFocused] = React.useState(false);


    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
        //console.log(data);
      
        const searchResult = data.filter((item) => 
       // console.log(item )    
        item.name.toLowerCase().includes(search)
        );
        setFilterData(searchResult);
        onFilterChange(searchResult);
    }




    return (
        <div className={`search ${focused ? 'focused' : ''}`}>
                <input 
                placeholder="Search" 
                type="text" 
                onChange={handleSearch} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={search} 
                />
                <ul className="">
                    {focused &&
                        filteredData.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt="" />
                                <a href={item}>{item.name}</a>
                            </li>
                        ))}
                </ul>
        </div>
    );


}
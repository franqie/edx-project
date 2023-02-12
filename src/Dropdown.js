import React, { useEffect, useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { data } from './DataBase';

const Dropdown = () => {
    const [countries, setCountries] = useState(data);
    const [showlist, setShowlist] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        const closeDropdown = () => {
            setShowlist(false);
        };
        window.addEventListener('click', closeDropdown);

        return () => window.removeEventListener('click', closeDropdown);
    }, []);

    // useEffect(() => {
    //     if(value){
    //         setCountries(countries.filter((country) => {
    //             return country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    //         }));
    //     } else {
    //         setCountries(data);
    //     }
    // }, [value, countries]);

    const toggleList = (e) => {
        e.stopPropagation();
        setShowlist(!showlist);
    };

    const handleFocus = (e) => {
        e.stopPropagation();
        setShowlist(true);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        // setCountries(countries.filter((country) => country.name.includes(value)));
    };

    const selectItem = (country) => {
        // setShowlist(false);
        setValue(country.name);
    };

  return (
    <div className="dropdown">
      <input value={value} onChange={handleChange} onClick={handleFocus} type="text" placeholder=" " name="country" id="country" />
      <label htmlFor="country" className="label">
        Country/Rregion
      </label>
      <button 
        type="button"
        className="toggle"
        onClick={toggleList}>
            {showlist ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {showlist && <div className="dropdown-list">
        {countries.filter((country) => {
                return country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
            }).map((country) => {
            const { name } = country;
            return <button key={name} onClick={() => selectItem(country)} type="button" className="select-btn">{ name }</button>
        })}
      </div>}
    </div>
  )
}

export default Dropdown;
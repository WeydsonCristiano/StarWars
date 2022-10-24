import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
  const { handleName, name } = useContext(AppContext);
  return (
    <>
      <h1>Projeto Star Wars - Trybe</h1>
      <div className="inputheader">
        <label htmlFor="fitroname">
          <input
            data-testid="name-filter"
            placeholder="Filtro Planet"
            name="filtroname"
            value={ name }
            onChange={ handleName }
            type="text"
          />
        </label>
      </div>
    </>
  );
}
export default Header;

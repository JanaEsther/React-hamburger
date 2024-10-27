import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleClick = () => {
    setMenuOpened((prevState) => !prevState);
  };

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  };

  return (
    <>
      <header>
        <div className={`menu ${menuOpened ? '' : 'menu--closed '}`}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className={`menu__items ${menuOpened ? '' : 'menu--closed  '}`}>
            <MenuItem text="Domů" onSelect={() => handleSelectItem('Domů')} />
            <MenuItem text="Naše nabídka"onSelect={() => handleSelectItem('Naše nabídka')}/>
            <MenuItem text="Náš tým"onSelect={() => handleSelectItem('Náš tým')}/>
            <MenuItem text="Blog" onSelect={() => handleSelectItem('Blog')} />
            <MenuItem text="Kontakt"onSelect={() => handleSelectItem('Kontakt')}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

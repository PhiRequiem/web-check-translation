import React, { useEffect } from 'react';
// import styled from 'styled-components';
import { useTranslation } from 'react-i18next';




const Menu = (): JSX.Element => {
    const { i18n, t } = useTranslation();
  
    // Cambiar el idioma y guardar la selección en localStorage
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);  // Guardar idioma en localStorage
  };

  // Al montar el componente, cargar el idioma almacenado en localStorage (si existe)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);  // Cambiar el idioma a lo guardado en localStorage
    }
  }, [i18n]);
  
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container py-1 d-flex align-items-center">
                <div className="text-start">
                <a className="navbar-brand fw-bold fs-3 me-0" href="https://chequea.la">
                <i className="bi bi-search-heart pe-2 d-inline-block rotate"></i>{t('navbar.brand')}
                </a>
                <form className="form-inline d-inline-flex form-select-xs">
                  <select className='form-control form-control-sm' onChange={changeLanguage} value={i18n.language}>
                    <option value="en">en</option>
                    <option value="es">es</option>
                  </select>
                </form>
                
                </div>
                <span className="navbar-text d-none d-md-block">
                {t('navbar.description')}
                </span>
            </div>
            </nav>

    );
  };
  
  export default Menu;

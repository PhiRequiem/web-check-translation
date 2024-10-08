import styled from 'styled-components';

import { StyledCard } from 'components/Form/Card';
// import Heading from 'components/Form/Heading';
import { ReactNode } from 'react';

// import { useTranslation } from 'react-i18next';

const Header = styled(StyledCard)`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  width: 100%;
`;

const Nav = (props: { children?: ReactNode}) => {
  // const { t } = useTranslation();
  return (
    <Header as="header" className='card border-light'>
    {/* <Heading>
    <i className="bi bi-search-heart pe-2"></i>{t('home.title')}
    </Heading> */}
      {props.children && props.children}
  </Header>
  );
};

export default Nav;

import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, NavigateOptions } from 'react-router-dom';

import Heading from 'components/Form/Heading';
import Input from 'components/Form/Input'
import Button from 'components/Form/Button';
import Footer from 'components/misc/Footer';

// import docs from 'utils/docs';
import colors from 'styles/colors';
import { determineAddressType } from 'utils/address-type-checker';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  footer {
    z-index: 1;
  }
`;

const UserInputMain = styled.form`
  background: ${colors.backgroundLighter};
  border-radius: 8px;
  padding: 1rem;
  z-index: 5;
  margin: 1rem;
  width: calc(100% - 2rem);
  max-width: 50rem;
  z-index: 2;
`;

const ErrorMessage = styled.p`
  color: ${colors.danger};
  margin: 0.5rem;
`;

const Home = (): JSX.Element => {
  const defaultPlaceholder = 'e.g. https://chequea.la/';
  const [userInput, setUserInput] = useState('');
  const [errorMsg, setErrMsg] = useState('');
  const [placeholder] = useState(defaultPlaceholder);
  const [inputDisabled] = useState(false);
  const navigate = useNavigate();

  /* Check is valid address, either show err or redirect to results page */
  const submit = () => {
    let address = userInput.endsWith("/") ? userInput.slice(0, -1) : userInput;
    const addressType = determineAddressType(address);
  
    if (addressType === 'empt') {
      setErrMsg('El campo no debe estar vacío');
    } else if (addressType === 'err') {
      setErrMsg('Debe ser una URL válida, IPv4 o IPv6');
    } else {
      // if the addressType is 'url' and address doesn't start with 'http://' or 'https://', prepend 'https://'
      if (addressType === 'url' && !/^https?:\/\//i.test(address)) {
        address = 'https://' + address;
      }
      const resultRouteParams: NavigateOptions = { state: { address, addressType } };
      navigate(`/results/${encodeURIComponent(address)}`, resultRouteParams);
    }
  };
  

  /* Update user input state, and hide error message if field is valid */
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    const isError = ['err', 'empt'].includes(determineAddressType(event.target.value));
    if (!isError) setErrMsg('');
  };

  // const findIpAddress = () => {
  //   setUserInput('');
  //   setPlaceholder('Looking up your IP...');
  //   setInputDisabled(true);
  //   fetch('https://ipapi.co/json/')
  //     .then(function(response) {
  //       response.json().then(jsonData => {
  //         setUserInput(jsonData.ip);
  //         setPlaceholder(defaultPlaceholder);
  //         setInputDisabled(true);
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log('Failed to get IP address :\'(', error)
  //     });
  // };

  const formSubmitEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  }

  return (
    <HomeContainer>
      <UserInputMain onSubmit={formSubmitEvent}>
        <Heading as="h1" size="xLarge" align="center" color={colors.primary}>
          <img width="64" src="/web-check.png" alt="Web Check Icon" />
          Veni OSINT | Chequea.la
        </Heading>
        <Input
          id="user-input"
          value={userInput}
          label="Introduce una URL"
          size="large"
          orientation="vertical"
          placeholder={placeholder}
          disabled={inputDisabled}
          handleChange={inputChange}
        />
        {/* <FindIpButton onClick={findIpAddress}>Or, find my IP</FindIpButton> */}
        { errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <Button styles="width: calc(100% - 1rem);" size="large" onClick={submit}>!Chequea mi web!</Button>
      </UserInputMain>
      <Footer />
    </HomeContainer>
  );
}

export default Home;

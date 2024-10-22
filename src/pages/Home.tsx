import styled from 'styled-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate, NavigateOptions } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

// import docs from 'utils/docs';
import { determineAddressType } from 'utils/address-type-checker';

const HomeContainer = styled.div`
  height: 100%;
`;

const UserInputMain = styled.form`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0.5rem;
`;

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  const defaultPlaceholder = t('home.defaultPlaceholder');
  const [userInput, setUserInput] = useState('');
  const [errorMsg, setErrMsg] = useState('');
  const [placeholder] = useState(defaultPlaceholder);
  const navigate = useNavigate();

  /* Check is valid address, either show err or redirect to results page */
  const submit = () => {
    let address = userInput.endsWith("/") ? userInput.slice(0, -1) : userInput;
    const addressType = determineAddressType(address);
  
    if (addressType === 'empt') {
      setErrMsg(t('home.errorEmptyField'));
    } else if (addressType === 'err') {
      setErrMsg(t('home.errorInvalidUrl'));
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
  //   setUserInput('home.');
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
    <div className='container-fluid green-section'>
      <HomeContainer className='container py-5'>
      <div className="row">
        <div className='col-md-6 offset-md-3'>
          <div className='card border-light text-center mb-5'>
            <div className="card-body px-md-5 py-md-5 text-right">
              <UserInputMain onSubmit={formSubmitEvent}>
              <h1 className="mb-4 display-5 text-center tophead"><i className="bi bi-diagram-3"></i> {t('home.title')}</h1>
              <div className="mb-3">
              <label htmlFor="user-input" className="form-label">{t('home.inputLabel')}</label>
                <input id='user-input' className="form-control form-control-lg" type="text" placeholder={placeholder} aria-label=".form-control-lg example" onChange={inputChange} value={userInput}/>
              </div>

                {/* <FindIpButton onClick={findIpAddress}>Or, find my IP</FindIpButton> */}
                { errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-lg form-btn sexybtn" onClick={submit}>{t('home.submitButton')}</button>
                </div>

              </UserInputMain>
            </div>
          </div>
        </div>
      </div>

        <div className='card border-light px-md-5 py-md-4 text-center'>
          <div className="card-body text-start">
            <h3 className="mb-4 fw-light text-center tophead">{t('home.infotitle')}</h3>
            <p>{t('home.paragraph1')}</p>
            <p>{t('home.paragraph2')}</p>
            <p className='mb-0'>{t('home.paragraph3')}</p>
            <br/>
            <p className='mb-0'>Veni OSINT es una herramienta integral basada en el proyecto de código abierto desarrollado por <a href="https://aliciasykes.com" rel="noreferrer" target="_blank">Alicia Sykes</a></p>
            <p className='mb-0'><a href="about">más sobre Vení OSINT</a></p>

            </div>
        </div>
      </HomeContainer>
    </div>
  );
}

export default Home;

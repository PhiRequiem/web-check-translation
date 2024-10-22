
import styled from 'styled-components';
import { ServerLocation } from 'utils/result-processor';
import { Card } from 'components/Form/Card';
import LocationMap from 'components/misc/LocationMap';
import Flag from 'components/misc/Flag';
import Row, { StyledRow } from 'components/Form/Row';
import { useTranslation } from 'react-i18next'; 

const cardStyles = '';

const SmallText = styled.span`
opacity: 0.5;
text-align: right;
display: block;
`;

const MapRow = styled(StyledRow)`
padding-top: 1rem;
flex-direction: column;
`;

const CountryValue = styled.span`
display: flex;
gap: 0.5rem;
`;

const ServerLocationCard = (props: { data: ServerLocation, title: string, actionButtons: any }): JSX.Element => {
const { t } = useTranslation(); 
const location = props.data;
const {
city, region, country,
postCode, countryCode, coords,
isp, timezone, languages, currency, currencyCode,
} = location;

return (
<Card heading={props.title} actionButtons={props.actionButtons} styles={cardStyles}>
    <Row lbl={t('city')} val={`${postCode}, ${city}, ${region}`} />
    <Row lbl="" val="">
        <b>{t('country')}</b>
        <CountryValue>
            {country}
            { countryCode && <Flag countryCode={countryCode} width={28} /> }
        </CountryValue>
    </Row>
    <Row lbl={t('timezone')} val={timezone} />
    <Row lbl={t('languages')} val={languages} />
    <Row lbl={t('currency')} val={`${currency} (${currencyCode})`} />
    <MapRow>
        <LocationMap lat={coords.latitude} lon={coords.longitude} label={`Server (${isp})`} />
        <SmallText>{t('latitude_longitude', { latitude: coords.latitude, longitude: coords.longitude })}</SmallText>
    </MapRow>
</Card>
);
}

export default ServerLocationCard;
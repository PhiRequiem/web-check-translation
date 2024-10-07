import { useTranslation } from 'react-i18next';

const Footer = ( ): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="container py-3">
      <footer className="container text-center fs-6 fw-bold">
      {t('footer.part1')} <span className="fw-bold"> {t('footer.highlight')}</span>
      {t('footer.part2')} <span className="fw-bold"> {t('footer.highlight')}</span>.
      </footer>
    </div>
  );
}

export default Footer;

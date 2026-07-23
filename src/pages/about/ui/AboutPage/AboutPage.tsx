import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page';

export const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;

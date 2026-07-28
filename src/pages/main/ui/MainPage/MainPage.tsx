import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/counter';
import { Page } from '@/widgets/page';

export const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная')}

            <Counter />
        </Page>
    );
};

export default MainPage;

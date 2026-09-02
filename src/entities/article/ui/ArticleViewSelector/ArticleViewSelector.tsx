import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView, ArticleViewValue } from '../../model/types/article';
import TiledIcon from '@/shared/assets/icons/articles/tiled.svg';
import ListIcon from '@/shared/assets/icons/articles/list.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleViewValue;
    onViewClick: (view: ArticleViewValue) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    return (
        <div className={classNames((cls.articleViewSelector), {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={() => onViewClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});

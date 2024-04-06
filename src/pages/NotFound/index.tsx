import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { memo } from 'react';

export function NotFound() {
    return (
        <div className={classNames({
            [styles.container]: true
        })}>
            <NotFoundImage className={styles.image} />
            <h2>Página não encontrada!</h2>
        </div>
    );
}
export default memo(NotFound)
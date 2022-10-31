import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import styles from './Skeletons.module.scss';

const cx = classNames.bind(styles);

function Skeletons() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Skeleton circle width={56} height={56} />
                <div className={cx('item')}>
                    <div className={cx('head')}>
                        <Skeleton width={410} height={26} />
                        <Skeleton count={3} width={300} height={21} />
                    </div>
                    <Skeleton width={88} height={28} borderRadius={4} style={{ marginTop: '8px' }} />
                </div>
            </div>
            <div className={cx('video')}>
                <Skeleton
                    width={289}
                    height={516}
                    style={{ marginLeft: '75px', marginRight: '20px' }}
                    borderRadius={8}
                />
                <div className={cx('action')}>
                    <Skeleton circle width={48} height={48} />
                    <Skeleton width={36} height={17} />
                    <Skeleton circle width={48} height={48} />
                    <Skeleton width={36} height={17} />
                    <Skeleton circle width={48} height={48} />
                    <Skeleton width={36} height={17} />
                </div>
            </div>
        </div>
    );
}

export default Skeletons;

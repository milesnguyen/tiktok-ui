import classNames from 'classnames/bind';
import { HastagIcon, MusicIcon } from '../Icons';
import styles from './Hastag.module.scss';

const cx = classNames.bind(styles);

function Hastag() {
    const HASTAG = [
        {
            icon: <HastagIcon />,
            title: 'suthatla',
        },
        {
            icon: <HastagIcon />,
            title: 'mackedoi',
        },
        {
            icon: <HastagIcon />,
            title: 'saansngthaydoi',
        },
        {
            icon: <MusicIcon />,
            title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        },
        {
            icon: <MusicIcon />,
            title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        },
        {
            icon: <MusicIcon />,
            title: 'Thiên Thần Tình Yêu - RICKY STAR',
        },
        {
            icon: <HastagIcon />,
            title: '7749hieuung',
        },
        {
            icon: <HastagIcon />,
            title: 'genzlife',
        },
        {
            icon: <MusicIcon />,
            title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        },
        {
            icon: <MusicIcon />,
            title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>Khám phá</p>
            <div className={cx('tag')}>
                {HASTAG.map((item, index) => {
                    return (
                        <a className={cx('link')} key={index}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <p className={cx('tag-text')}>{item.title}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Hastag;

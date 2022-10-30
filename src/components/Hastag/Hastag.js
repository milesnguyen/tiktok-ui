import classNames from 'classnames/bind';
import { HastagIcon, MusicIcon } from '../Icons';
import styles from './Hastag.module.scss';

const cx = classNames.bind(styles);

function Hastag() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header')}>Khám phá</p>
            <div className={cx('tag')}>
                <a className={cx('link')}>
                    <HastagIcon />
                    <p className={cx('tag-text')}>suthatla</p>
                </a>
                <a className={cx('link')}>
                    <HastagIcon />
                    <p className={cx('tag-text')}>mackedoi</p>
                </a>
                <a className={cx('link')}>
                    <HastagIcon />
                    <p className={cx('tag-text')}>sansangthaydoi</p>
                </a>
                <a className={cx('link')}>
                    <MusicIcon />
                    <p className={cx('tag-text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n</p>
                </a>
                <a className={cx('link')}>
                    <MusicIcon />
                    <p className={cx('tag-text')}>
                        Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                    </p>
                </a>
                <a className={cx('link')}>
                    <MusicIcon />
                    <p className={cx('tag-text')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                </a>
                <a className={cx('link')}>
                    <HastagIcon />
                    <p className={cx('tag-text')}>7749hieuung</p>
                </a>
                <a className={cx('link')}>
                    <HastagIcon />
                    <p className={cx('tag-text')}>genzlife</p>
                </a>
                <a className={cx('link')}>
                    <MusicIcon />
                    <p className={cx('tag-text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                </a>
                <a className={cx('link')}>
                    <MusicIcon />
                    <p className={cx('tag-text')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                </a>
            </div>
        </div>
    );
}

export default Hastag;

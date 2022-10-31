import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const FOOTER_NAV_1 = [
        {
            title: 'Giới thiệu',
        },
        {
            title: 'Bảng tin',
        },
        {
            title: 'Liên hệ',
        },
        {
            title: 'Sự nghiệp',
        },
        {
            title: 'ByteDance',
        },
    ];
    const FOOTER_NAV_2 = [
        {
            title: 'TikTok for Good',
        },
        {
            title: 'Quảng cáo',
        },
        {
            title: 'Developers',
        },
        {
            title: 'Transparency',
        },
        {
            title: 'TikTok Rewards',
        },
        {
            title: 'TikTok Browse',
        },
        {
            title: 'TikTok Embeds',
        },
    ];
    const FOOTER_NAV_3 = [
        {
            title: 'Trợ giúp',
        },
        {
            title: 'An toàn',
        },
        {
            title: 'Điều khoản',
        },
        {
            title: 'Quyền riêng tư',
        },
        {
            title: 'Creator Portal',
        },
        {
            title: 'Hướng dẫn Cộng đồng',
        },
    ];
    const FOOTER_NAV_4 = [
        {
            title: 'Thêm',
        },
        {
            title: '© Miles 2022',
        },
    ];
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('item')}>
                {FOOTER_NAV_1.map((item, index) => {
                    return (
                        <a key={index} className={cx('navlink')}>
                            {item.title}
                        </a>
                    );
                })}
            </div>
            <div className={cx('item')}>
                {FOOTER_NAV_2.map((item, index) => {
                    return (
                        <a key={index} className={cx('navlink')}>
                            {item.title}
                        </a>
                    );
                })}
            </div>
            <div className={cx('item')}>
                {FOOTER_NAV_3.map((item, index) => {
                    return (
                        <a key={index} className={cx('navlink')}>
                            {item.title}
                        </a>
                    );
                })}
            </div>
            <div className={cx('item')}>
                {FOOTER_NAV_4.map((item, index) => {
                    return (
                        <a key={index} className={cx('navlink')}>
                            {item.title}
                            <br></br>
                        </a>
                    );
                })}
            </div>
        </footer>
    );
}

export default Footer;

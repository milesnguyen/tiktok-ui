import classNames from 'classnames/bind';
import Button from '../Button';
import {
    AppleIcon,
    FacebookIcon,
    GGicon,
    InsIcon,
    KaKaoIcon,
    LineIcon,
    QRcodeIcon,
    TwitterIcon,
    UserIcon,
    Xicon,
} from '../Icons';
import styles from './Modals.module.scss';

const cx = classNames.bind(styles);

function Modals({ setOpenModal }) {
    const Log_Acc = [
        {
            icon: <QRcodeIcon />,
            title: 'Sử dụng mã QR',
        },
        {
            icon: <UserIcon />,
            title: 'Số điện thoại / Email / TikTok ID',
        },
        {
            icon: <FacebookIcon />,
            title: 'Tiếp tục với Facebook',
        },
        {
            icon: <GGicon />,
            title: 'Tiếp tục với Google',
        },
        {
            icon: <TwitterIcon />,
            title: 'Tiếp tục với Twitter',
        },
        {
            icon: <LineIcon />,
            title: 'Tiếp tục với LINE',
        },
        {
            icon: <KaKaoIcon />,
            title: 'Tiếp tục với KakaoTalk',
        },
        {
            icon: <AppleIcon />,
            title: 'Tiếp tục với Apple',
        },
        {
            icon: <InsIcon />,
            title: 'Tiếp tục với Instagram',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('item')}>
                    <div className={cx('list')}>
                        <h2 className={cx('head')}>Đăng nhập vào TikTok</h2>
                        {Log_Acc.map((item, index) => {
                            return (
                                <div className={cx('list-item')} key={index}>
                                    <span className={cx('icon')}>{item.icon}</span>
                                    <p className={cx('text')}>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('login')}>
                        <p className={cx('bottom-text')}>
                            Bạn không có tài khoản? <span>Đăng ký</span>
                        </p>
                    </div>
                </div>
                <div className={cx('btn')} onClick={() => setOpenModal(false)}>
                    <Xicon />
                </div>
            </div>
        </div>
    );
}

export default Modals;

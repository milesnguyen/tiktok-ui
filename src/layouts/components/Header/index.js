import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import images from 'src/assets/images';
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Menu from 'src/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '../Search';
import config from 'src/config';
import {
    BoxIcon,
    CoinIcon,
    HelpIcon,
    KeyboardIcon,
    LangIcon,
    LiveIcon,
    LogoutIcon,
    MessIcon,
    SettingIcon,
    UserIcon,
} from 'src/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LangIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn Ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'العربية',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@milesnguyen',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <LiveIcon />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>

                {/* SEARCH */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload>
                                <FontAwesomeIcon icon={faPlus} /> Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <BoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload>
                                <FontAwesomeIcon icon={faPlus} /> Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/f5671e0b7becfcbe7d91edffac1e931b~c5_720x720.jpeg?x-expires=1666573200&x-signature=NZ5s%2Fi%2BlTElDQS0mziI22YBzYbY%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

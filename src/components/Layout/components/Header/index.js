import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from 'src/components/Button';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import styles from './Header.module.scss';
import images from 'src/assets/images';
import AccountItem from 'src/components/AccountItem';
import Menu from 'src/components/Popper/Menu';
import Image from 'src/components/Image';

import {
    BoxIcon,
    CoinIcon,
    LiveIcon,
    MessIcon,
    UserIcon,
    SettingIcon,
    HelpIcon,
    KeyboardIcon,
    LangIcon,
    LogoutIcon,
} from 'src/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LangIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Tiếng Việt',
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
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, []);

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
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

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

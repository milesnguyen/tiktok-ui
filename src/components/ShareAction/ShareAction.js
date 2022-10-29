import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    ArrowBottomIcon,
    CoppyIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    RedditIcon,
    PinterestIcon,
    ShareFrIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import styles from './ShareAction.module.scss';
import { Wrapper as PopperWrapper } from 'src/components/Popper';

const cx = classNames.bind(styles);

function ShareAction({ children }) {
    const [open, setOpen] = useState(false);

    const hideMore = () => {
        setOpen(true);
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('wrapper')}>
                        {open
                            ? OPEN_SHARE_MENU.map((item, index) => {
                                  return (
                                      <div className={cx('item')} key={index}>
                                          {item.icon}
                                          <p className={cx('text')}>{item.title}</p>
                                      </div>
                                  );
                              })
                            : SHARE_MENU.map((item, index) => {
                                  return (
                                      <div className={cx('item')} key={index}>
                                          {item.icon}
                                          <p className={cx('text')}>{item.title}</p>
                                      </div>
                                  );
                              })}

                        {!open && (
                            <button className={cx('more-btn')} onClick={hideMore}>
                                <ArrowBottomIcon />
                            </button>
                        )}
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'Nhúng',
        },
        {
            icon: <ShareFrIcon />,
            title: 'Gửi đến bạn bè',
        },
        {
            icon: <FacebookIcon />,
            title: 'Chia sẻ với Facebook',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Chia sẻ với WhatsApp',
        },
        {
            icon: <CoppyIcon />,
            title: 'Sao chép liên kết',
        },
    ];
    const OPEN_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <TwitterIcon />,
            title: 'Chia sẽ với Twitter',
        },
        {
            icon: <LinkedInIcon />,
            title: 'Chia sẽ với LinkedIn',
        },
        {
            icon: <RedditIcon />,
            title: 'Chia sẽ với Reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Chia sẽ với Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Chia sẽ với Email',
        },
        {
            icon: <LineIcon />,
            title: 'Chia sẽ với LINE',
        },
        {
            icon: <PinterestIcon />,
            title: 'Chia sẽ với Pinterest',
        },
    ];

    return (
        <Tippy interactive delay={[800, 1000]} offset={[90, -5]} render={renderPreview} onHide={() => setOpen(false)}>
            {children}
        </Tippy>
    );
}

export default ShareAction;

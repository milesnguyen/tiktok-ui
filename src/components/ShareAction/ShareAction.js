import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import {
    ArrowBottomIcon,
    CoppyIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    PinterestIcon,
    RedditIcon,
    ShareFrIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import styles from './ShareAction.module.scss';

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
            title: 'Nh??ng',
        },
        {
            icon: <ShareFrIcon />,
            title: 'G???i ?????n b???n b??',
        },
        {
            icon: <FacebookIcon />,
            title: 'Chia s??? v???i Facebook',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Chia s??? v???i WhatsApp',
        },
        {
            icon: <CoppyIcon />,
            title: 'Sao ch??p li??n k???t',
        },
    ];
    const OPEN_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <TwitterIcon />,
            title: 'Chia s??? v???i Twitter',
        },
        {
            icon: <LinkedInIcon />,
            title: 'Chia s??? v???i LinkedIn',
        },
        {
            icon: <RedditIcon />,
            title: 'Chia s??? v???i Reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Chia s??? v???i Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Chia s??? v???i Email',
        },
        {
            icon: <LineIcon />,
            title: 'Chia s??? v???i LINE',
        },
        {
            icon: <PinterestIcon />,
            title: 'Chia s??? v???i Pinterest',
        },
    ];

    return (
        <Tippy interactive delay={[800, 1000]} offset={[90, -5]} render={renderPreview} onHide={() => setOpen(false)}>
            {children}
        </Tippy>
    );
}

export default ShareAction;

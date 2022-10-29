import { useEffect, useRef, useState } from 'react';
import { faCommentDots, faHeart, faMusic, faPause, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import Image from '../Image';
import Button from '../Button';
import styles from './Video.module.scss';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import VideoPreview from './VideoPreview/VideoPreview';
import ShareAction from '../ShareAction/ShareAction';

const cx = classNames.bind(styles);

function Video({ data }) {
    const videosRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', playVideoInViewport);
        return () => window.removeEventListener('scroll', playVideoInViewport);
    });

    function playVideoInViewport() {
        var bounding = videosRef.current.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            handlePlay();
        } else {
            handlePause();
        }
    }

    const handlePlay = () => {
        if (isPlaying === false) {
            videosRef.current.play();
            setIsPlaying(true);
        }
    };
    const handlePause = () => {
        if (isPlaying === true) {
            videosRef.current.pause();
            setIsPlaying(false);
        }
    };

    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <VideoPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
            <div className={cx('container')}>
                <header className={cx('head')}>
                    <div className={cx('info')}>
                        <Tippy
                            interactive
                            delay={[800, 0]}
                            render={renderPreview}
                            placement="bottom"
                            offset={[-120, 30]}
                            zIndex="99"
                        >
                            <Link to={`/@${data.user.nickname}`} className={cx('user')}>
                                <p className={cx('nickname')}>{data.user.nickname}</p>
                                <p className={cx('name')}>{`${data.user.last_name} ${data.user.first_name} `}</p>
                            </Link>
                        </Tippy>
                        <div className={cx('description')}>
                            <p className={cx('text')}>{data.description}</p>
                            <div className={cx('hastag')}>
                                <strong>#fyp</strong>
                                <strong>#ChangMie</strong>
                                <strong>#mackedoi</strong>
                                <strong>#suthatla</strong>
                            </div>

                            <div className={cx('audio')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                                <span>{data.music}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <div className={cx('item-video')}>
                            <video className={cx('play-video')} type="video/mp4" src={data.file_url} ref={videosRef} />
                            <div className={cx('control')}>
                                {isPlaying ? (
                                    <div className={cx('pause')} onClick={handlePause}>
                                        <FontAwesomeIcon icon={faPause} />
                                    </div>
                                ) : (
                                    <div className={cx('play')} onClick={handlePlay}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </div>
                                )}
                            </div>
                            <div className={cx('volume')}>
                                <input type="range" min="0" max="100" step="1" orient="vertical" />
                            </div>
                        </div>
                        <div className={cx('item-react')}>
                            <div className={cx('action')}>
                                <Button circle>
                                    <FontAwesomeIcon className={cx('react-icon')} icon={faHeart} />
                                </Button>
                                <span className={cx('count')}>24.1k</span>
                            </div>
                            <div className={cx('action')}>
                                <Button circle>
                                    <FontAwesomeIcon className={cx('react-icon')} icon={faCommentDots} />
                                </Button>
                                <span className={cx('count')}>24.1k</span>
                            </div>

                            <ShareAction>
                                <div className={cx('action')}>
                                    <Button circle>
                                        <FontAwesomeIcon className={cx('react-icon')} icon={faShare} />
                                    </Button>
                                    <span className={cx('count')}>24.1k</span>
                                </div>
                            </ShareAction>
                        </div>
                    </div>
                </div>
            </div>
            <Button outline className={cx('btn')}>
                Follow
            </Button>
        </div>
    );
}

export default Video;

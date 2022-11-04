import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router-dom';
import Button from 'src/components/Button';
import { LockIcon, MenuIcon, ShareIcon, WebIcon } from 'src/components/Icons';
import Image from 'src/components/Image';
import Video from 'src/components/Video';
import VideoPreview from 'src/components/VideoPreview';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const data = location.pathname;

    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.slice(2)}`)
            .then((response) => response.json())
            .then((json) => setProfiles(json.data));
    }, [data.slice(2)]);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    });
    return (
        <div className={cx('wrapper')}>
            {isLoading ? (
                <div className={cx('skeleton')}>
                    <div className={cx('skitem')}>
                        <Skeleton circle width={116} height={116} />
                        <div className={cx('skname')}>
                            <Skeleton width={208} height={30} />
                            <Skeleton width={150} height={22} />
                            <Skeleton width={208} height={36} />
                        </div>
                    </div>
                    <Skeleton width={340} height={24} />
                </div>
            ) : (
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <div className={cx('card')}>
                            <Image className={cx('avatar')} src={profiles.avatar} alt={profiles.nickname} />
                            <div className={cx('name')}>
                                <p>{profiles.nickname}</p>
                                <span>{`${profiles.first_name} ${profiles.last_name}`}</span>
                                <Button primary className={cx('btn')}>
                                    Follow
                                </Button>
                            </div>
                        </div>
                        <div className={cx('action')}>
                            <ShareIcon className={cx('icon')} />
                            <MenuIcon className={cx('icon')} />
                        </div>
                    </div>
                    <div className={cx('count')}>
                        <div className={cx('countInfo')}>
                            <p>{profiles.followings_count}</p>
                            <span>Đang follow</span>
                            <p>{profiles.followers_count}</p>
                            <span>Followers</span>
                            <p>{profiles.likes_count}</p>
                            <span>Thích</span>
                        </div>
                        <div className={cx('bio')}>{profiles.bio}</div>
                        <div className={cx('web')}>
                            <WebIcon />
                            <a href={profiles.website_url} target="_blank">
                                {profiles.website_url}
                            </a>
                        </div>
                    </div>
                    <div className={cx('main')}>
                        <div className={cx('head')}>
                            <span className={cx('video-tab')}>Nội dung</span>
                            <span className={cx('like-tab')}>
                                <LockIcon /> Đã thích
                            </span>
                            <div className={cx('slide')}></div>
                        </div>
                    </div>

                    <div className={cx('videos')}>
                        {[profiles.videos].map((video, index) => {
                            return <VideoPreview data={video} key={index} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;

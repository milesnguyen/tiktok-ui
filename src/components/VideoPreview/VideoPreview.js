import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { LockRelugarIcon, PlayRelugarIcon } from '../Icons';
import styles from './VideoPreview.module.scss';

const cx = classNames.bind(styles);

function VideoPreview({ data }) {
    const videoRef = useRef();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    });

    const MousePlay = () => {
        videoRef.current.play();
    };
    const MousePause = () => {
        videoRef.current.pause();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {!isLoading ? (
                    <div className={cx('content')}>
                        {data?.map((clip) => {
                            return (
                                <div
                                    className={cx('videos')}
                                    key={clip.id}
                                    onMouseEnter={MousePlay}
                                    onMouseOut={MousePause}
                                >
                                    <video ref={videoRef} src={clip.file_url} loop />
                                    <p>{clip.description}</p>
                                    <div className={cx('play')}>
                                        <PlayRelugarIcon />
                                        <span>{clip.views_count}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className={cx('skeleton')}>
                        <Skeleton width={194} height={288} borderRadius={6} />
                        <Skeleton width={194} height={20} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default VideoPreview;

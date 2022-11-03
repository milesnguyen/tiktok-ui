import classNames from 'classnames/bind';
import styles from './VideoPreview.module.scss';
const cx = classNames.bind(styles);

function VideoPreview({ data }) {
    console.log(data.videos);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('video-inner')}>
                        <video />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPreview;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import styles from './vdPreview.module.scss';

const cx = classNames.bind(styles);

function VideoPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-head')}>
                <Image className={cx('avatar')} src={data.user.avatar} alt="" />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{data.user.nickname}</strong>
                    {data.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.user.first_name} ${data.user.last_name}`}</p>
            </div>
            <footer className={cx('item-footer')}>
                <span className={cx('like')}>{data.user.followers_count}</span>
                <span className={cx('text')}>Follower</span>
                <span className={cx('follow')}>{data.user.likes_count}</span>
                <span className={cx('text')}>Thích</span>
            </footer>
            <div className={cx('bio')}>
                <span>{data.user.bio}</span>
            </div>
        </div>
    );
}

export default VideoPreview;

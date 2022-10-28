import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import Image from 'src/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-head')}>
                <Image className={cx('avatar')} src={data.avatar} alt="" />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <footer className={cx('item-footer')}>
                <span className={cx('like')}>{data.followers_count}</span>
                <span className={cx('text')}>Follower</span>
                <span className={cx('follow')}>{data.likes_count}</span>
                <span className={cx('text')}>Thích</span>
            </footer>
        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;

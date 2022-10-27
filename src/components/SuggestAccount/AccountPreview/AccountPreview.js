import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-head')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667005200&x-signature=96th1mAEz8N8%2Bqe4ijWinOhreSE%3D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>
            <footer className={cx('item-footer')}>
                <span className={cx('like')}>7.9M</span>
                <span className={cx('text')}>Follower</span>
                <span className={cx('follow')}>549.9M</span>
                <span className={cx('text')}>Thích</span>
            </footer>
        </div>
    );
}

export default AccountPreview;

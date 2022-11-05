import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Loggin.module.scss';

const cx = classNames.bind(styles);

function Loggin({ onClicks }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2>Đăng nhập Tik Tok</h2>
                <div className={cx('item')}>
                    <div className={cx('form')}>
                        <label>Email</label>
                        <input type="text" id="name" />
                    </div>
                    <div className={cx('form')}>
                        <label>Mật khẩu</label>
                        <input type="text" id="pass" />
                    </div>
                    <Button primary large onClick={onClicks}>
                        Đăng Nhập
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Loggin;

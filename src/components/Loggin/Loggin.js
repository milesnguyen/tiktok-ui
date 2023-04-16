import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Loggin.module.scss';

const cx = classNames.bind(styles);

function Loggin({ onClicks }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2>Đăng nhập</h2>
                <div className={cx('item')}>
                    <div className={cx('login-img')}>
                        <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1681629602~exp=1681630202~hmac=f8740d0c84a88554a6d6bd0bc80d38bca1314c483ed65c331029adf6fb18b048" />
                    </div>
                    <div className={cx('form')}>
                        <input placeholder="Tên Đăng Nhập" type="text" id="name" />
                    </div>
                    <div className={cx('form')}>
                        <input placeholder="Mật Khẩu" type="text" id="pass" />
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

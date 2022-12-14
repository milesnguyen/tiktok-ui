import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from 'src/components/Popper';

import Tippy from '@tippyjs/react/headless';

import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import Image from '../Image';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function Accountitem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                appendTo={document.body}
                hideOnClick="false"
                zIndex={[99]}
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
            >
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
Accountitem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Accountitem;

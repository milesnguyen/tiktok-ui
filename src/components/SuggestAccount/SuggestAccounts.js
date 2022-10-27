import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import Accountitem from './Accountitem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <Accountitem />
            <Accountitem />
            <Accountitem />
            <Accountitem />
            <Accountitem />

            <p className={cx('more-btn')}>Xem tất cả</p>
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;

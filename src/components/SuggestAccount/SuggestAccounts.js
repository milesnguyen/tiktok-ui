import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import Accountitem from './Accountitem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((accounts) => (
                <Accountitem key={accounts.id} data={accounts} />
            ))}
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestAccounts;

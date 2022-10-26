import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu/index';
import config from 'src/config';
import styles from './Sidebar.module.scss';
import {
    UsergrIcon,
    HomeIcon,
    LiveCamIcon,
    HomeSolidIcon,
    UsergrSolidIcon,
    LiveCamSolidIcon,
} from 'src/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeSolidIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UsergrIcon />}
                    activeIcon={<UsergrSolidIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveCamIcon />}
                    activeIcon={<LiveCamSolidIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
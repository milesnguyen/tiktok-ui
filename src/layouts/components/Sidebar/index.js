import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
    HomeIcon,
    HomeSolidIcon,
    LiveCamIcon,
    LiveCamSolidIcon,
    UsergrIcon,
    UsergrSolidIcon,
} from 'src/components/Icons';
import SuggestAccount from 'src/components/SuggestAccount';
import config from 'src/config';
import * as suggestServices from 'src/services/suggestServices';
import Menu, { MenuItem } from './Menu/index';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [aacSuggest, setAccSuggest] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [page, setPage] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await suggestServices.suggest(1, 5);
                setAccSuggest(result);
            } else {
                const result = await suggestServices.suggest(1, 16);
                setAccSuggest(result);
            }
        };

        fetchAPI();
    }, [seeAll]);

    // const handleSeeAll = () => {
    //     setPage(page + 1);
    // };

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
            <SuggestAccount label="Tài khoản được đề xuất" data={aacSuggest} />
            {seeAll ? (
                <div className={cx('more-btn')} onClick={() => setSeeAll(false)}>
                    Ẩn bớt
                </div>
            ) : (
                <div className={cx('more-btn')} onClick={() => setSeeAll(true)}>
                    Xem tất cả
                </div>
            )}

            <SuggestAccount label="Các tài khoản đang follow" />
        </aside>
    );
}

export default Sidebar;

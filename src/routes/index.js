import config from 'src/config';
import { HeaderOnly } from 'src/layouts';

import Following from 'src/pages/Following';
import Home from 'src/pages/Home';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import Profile from 'src/pages/Profile';
import Live from 'src/pages/Live';
import Login from 'src/pages/Login';
import FullSizeLayout from 'src/layouts/FullSizeLayout';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, compoment: Home },
    { path: config.routes.following, compoment: Following },
    { path: config.routes.live, compoment: Live },
    { path: config.routes.login, compoment: Login, layout: HeaderOnly },
    { path: config.routes.profile, compoment: Profile, layout: FullSizeLayout },
    { path: config.routes.upload, compoment: Upload, layout: HeaderOnly },
    { path: config.routes.search, compoment: Search, layout: null },
];
// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

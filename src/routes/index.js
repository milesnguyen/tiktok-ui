import config from 'src/config';
import { HeaderOnly } from 'src/layouts';

import Following from 'src/pages/Following';
import Home from 'src/pages/Home';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import Profile from 'src/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, compoment: Home },
    { path: config.routes.following, compoment: Following },
    { path: config.routes.profile, compoment: Profile },
    { path: config.routes.upload, compoment: Upload, layout: HeaderOnly },
    { path: config.routes.search, compoment: Search, layout: null },
];
// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

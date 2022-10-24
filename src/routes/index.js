import routesConfig from 'src/config/routes';

import { HeaderOnly } from 'src/components/Layout';

import Following from 'src/pages/Following';
import Home from 'src/pages/Home';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import Profile from 'src/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: routesConfig.home, compoment: Home },
    { path: routesConfig.following, compoment: Following },
    { path: routesConfig.profile, compoment: Profile },
    { path: routesConfig.upload, compoment: Upload, layout: HeaderOnly },
    { path: routesConfig.search, compoment: Search, layout: null },
];
// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

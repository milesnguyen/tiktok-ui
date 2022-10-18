import { HeaderOnly } from 'src/components/Layout';

import Following from 'src/pages/Following';
import Home from 'src/pages/Home';
import Upload from 'src/pages/Upload';
import Search from 'src/pages/Search';
import Profile from 'src/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/profile', compoment: Profile },
    { path: '/upload', compoment: Upload, layout: HeaderOnly },
    { path: '/search', compoment: Search, layout: null },
];
// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

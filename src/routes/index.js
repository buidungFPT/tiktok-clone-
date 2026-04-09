import Home from '~/pages/Home';
import Folling from '~/pages/Folling';
import ProFile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/componets/Layout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/folling',
        component: Folling,
    },
    {
        path: '/profile',
        component: ProFile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

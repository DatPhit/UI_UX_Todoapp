import React from 'react';

import Home from '../pages/Home';
import Authen from '../pages/Authen';

interface RouteConfig {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
}

// public routes
const publicRoutes: RouteConfig[] = [
    { path: '/', component: Home },
    { path: '/authen', component: Authen, layout: null },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };

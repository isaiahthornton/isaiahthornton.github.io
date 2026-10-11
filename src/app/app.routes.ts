import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Isaiah Thornton · Full-stack software developer',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    title: 'Projects · Isaiah Thornton',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'about',
    title: 'About · Isaiah Thornton',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    title: 'Contact · Isaiah Thornton',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page not found · Isaiah Thornton',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];

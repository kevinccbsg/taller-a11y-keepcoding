import { createBrowserRouter } from 'react-router-dom';
import InaccessibleHome from './pages/inaccessible/Home/Home';
import AccessibleHome from './pages/accessible/Home/Home';
import InaccessibleBlog from './pages/inaccessible/Blog/Blog';
import Blog from './pages/accessible/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AccessibleHome />
    ),
  },
  {
    path: '/blog',
    element: (
      <Blog />
    ),
  },
  {
    path: '/inaccessible',
    element: (
      <InaccessibleHome />
    ),
  },
  {
    path: '/inaccessible/blog',
    element: (
      <InaccessibleBlog />
    ),
  },
]);

export default router;

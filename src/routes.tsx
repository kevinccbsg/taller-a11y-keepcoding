import { createBrowserRouter } from 'react-router-dom';
import InaccessibleHome from './pages/inaccessible/Home/Home';
import InaccessibleBlog from './pages/inaccessible/Blog/Blog';
import CheckboxPage from './pages/checkbox/Checkbox';

const router = createBrowserRouter([
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
  {
    path: '/checkbox-example',
    element: (
      <CheckboxPage />
    ),
  },
]);

export default router;

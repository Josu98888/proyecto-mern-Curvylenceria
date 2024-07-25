import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css' ;
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
       <RouterProvider router={router} />
  </>
);

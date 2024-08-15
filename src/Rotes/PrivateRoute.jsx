import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

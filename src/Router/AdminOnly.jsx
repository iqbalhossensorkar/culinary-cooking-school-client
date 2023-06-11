/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../providers/AuthProviders'
import Loader from '../Components/Loader'
import useAdmin from '../api/useAdmin'

const AdminOnly = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <Loader></Loader>
  }

  if (user && isAdmin) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default AdminOnly
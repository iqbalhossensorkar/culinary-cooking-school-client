/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import Loader from '../Components/Loader'
import { AuthContext } from '../providers/AuthProviders'
import useInstructor from '../api/useInstructor'

const InstructorOnly = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation()

  if (loading || isInstructorLoading) {
    return <Loader></Loader>
  }

  if (user && isInstructor) {
    return children
  }
  return <Navigate to='/' state={{ from: location }} replace></Navigate>
}

export default InstructorOnly
import React, {ReactNode} from 'react'

const AppLayout = ({ children } : {children: ReactNode}) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AppLayout
import React from 'react'

const Clerklayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-900">
      {children}
    </div>
  )
}

export default Clerklayout
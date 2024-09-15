
import DashboardNav from '@/components/DashboardNav'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function DashboardLayout({ children}: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <DashboardNav />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
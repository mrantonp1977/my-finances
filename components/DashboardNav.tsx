import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardNav() {
  return (
    <div className="p-5 shadow-sm bg-slate-900 border-b border-slate-950 flex justify-between">
      <div>
        Search bar
      </div>
      <div>
        <UserButton afterSwitchSessionUrl='/'/>
      </div>
    </div>
  )
}

export default DashboardNav
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-extrabold text-cyan-500 mb-16 text-start">User Profile</h1>
      <UserProfile routing='hash'/>
    </div>
  )
}

export default SettingsPage
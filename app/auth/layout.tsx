import React from 'react'
import { Outlet } from 'react-router'

export default function layout() {
  return (
   <div>
      <h1>Auth Layout</h1>

      <Outlet />
    </div>
  )
}

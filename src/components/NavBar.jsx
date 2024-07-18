"use client"

import React, { Suspense } from "react"
import NavBarItem from "./NavBarItem"

const NavBar = () => {
  return (
    <div className="p-3 dark:bg-gray-600 bg-amber-300 my-3">
      <div className="flex justify-around mx-auto max-w-6xl lg:text-lg">
        <Suspense fallback={<div>Loading...</div>}>
          <NavBarItem title="Top Trending" params="fetchPopular" />
          <NavBarItem title="Most Popular" params="fetchTopRated" />
        </Suspense>
      </div>
    </div>
  )
}

export default NavBar

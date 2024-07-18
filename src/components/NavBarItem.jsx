"use client"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import React from "react"

const NavBarItem = ({ title, params }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === params
            ? "underline underline-offset-8 decoration-4 decoration-amber-700 rounded-lg"
            : ""
        }`}
        href={`/?genre=${params}`}
      >
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default NavBarItem

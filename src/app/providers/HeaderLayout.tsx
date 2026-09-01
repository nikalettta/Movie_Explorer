import { Header } from "@features/Header/Header"
import { Outlet } from "react-router-dom"

export const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
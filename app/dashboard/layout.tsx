import type { ReactNode } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import ServerStatus from "@/components/server-status"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DashboardSidebar />
      <div className="flex-1">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <ServerStatus />
          </div>
        </div>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

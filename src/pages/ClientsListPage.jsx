import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ClientsList from '../components/client/ClientsList'
const ClientsListPage = () => {
  return (
    <div className="h-screen flex flex-col">
            <div className="fixed top-0 left-64 right-0 z-50">
                <Navbar />
            </div>
            <div className="flex flex-1 pt-[40px]">
                <div className="fixed top-0 left-0 bottom-0 w-64 z-40 border-r bg-white">
                    <Sidebar />
                </div>
                <main className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
                    <ClientsList />
                </main>
            </div>
        </div>
  )
}

export default ClientsListPage
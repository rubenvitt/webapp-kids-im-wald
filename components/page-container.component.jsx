import Image from "next/image";
import React from "react";
import {Navbar} from "./navbar.component";

export const PageContainer = ({title, children}) => {
    return <div className="min-h-screen bg-gray-100">
        <div className="bg-green-700 pb-2">
            <Navbar />
        </div>
        <header className="pt-10 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold text-gray-800">
                    {title}
                </h1>
            </div>
        </header>

        <main className="mt-2">
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                    {children}
                </div>
            </div>
        </main>
    </div>
}
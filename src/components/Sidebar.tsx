'use client'

import React from 'react'
import Link from 'next/link'
import { LayoutDashboard, ArrowRightLeft, HandCoins, Flag } from 'lucide-react'
import { usePathname } from 'next/navigation'



const Sidebar = () => {

    const pathname = usePathname()

    const navItems = [{ href: "/", label: "Overview", icon: LayoutDashboard },
    { href: "/transactions", label: "Transactions", icon: ArrowRightLeft },
    { href: "/budgets", label: "Budgets", icon: HandCoins },
    { href: "/goals", label: "Goals", icon: Flag },
    ]

    return (
        <div className='border-r w-64 h-screen p-7 bg-sidebar text-sidebar-foreground border-sidebar-border' >
            <h1 className='mb-10 font-bold text-2xl text-center'>
                SpendWise
            </h1>
            <nav>
                <ul className='space-y-3'>
                    {navItems.map(item => {
                        const isActive = pathname === item.href

                        return (
                            <li key={item.href}><Link className={`flex items-center gap-5 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" }`} href={item.href}><item.icon className='h-5' />{item.label}</Link></li>
                        )

                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

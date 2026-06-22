import React from 'react'
import Link from 'next/link'
import { LayoutDashboard, ArrowRightLeft, HandCoins, Flag } from 'lucide-react'

const Sidebar = () => {
    const navItems = [{ href: "/", label: "overview", icon: LayoutDashboard },
    { href: "/transactions", label: "transactions", icon: ArrowRightLeft },
    { href: "/budgets", label: "budgets", icon: HandCoins },
    { href: "/goals", label: "goals", icon: Flag },
    ]

    return (
        <div className='border-r w-64 h-screen p-7' >
            <h1 className='mb-10 font-bold text-2xl text-center'>
                SpendWise
            </h1>
            <nav>
                <ul className='space-y-10'>
                    {navItems.map(item => (<li><Link className='flex items-center gap-5' href={item.href}><item.icon/>{item.label}</Link></li>))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  History,
  TrendingUp,
  FileText,
  Settings,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Bell,
  Menu,
  X,
  ShoppingBag,
  Filter,
  Download,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200/60 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2 mb-12">
            <div className="w-32 h-8 relative flex-shrink-0">
              <Image
                src="/fluxprice2.png"
                alt="FluxPriceAI Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-1.5">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem
              icon={<Users size={20} />}
              label="Competitors"
              active
              hasSubmenu
            />
            <NavItem icon={<History size={20} />} label="Pricing History" />
            <NavItem icon={<TrendingUp size={20} />} label="Margins" />
            <NavItem icon={<FileText size={20} />} label="Reports" />
            <NavItem icon={<Settings size={20} />} label="Settings" />
          </nav>

          {/* Bottom Items */}
          <div className="mt-auto space-y-1.5 pt-8 border-t border-slate-100">
            <NavItem icon={<HelpCircle size={20} />} label="Support" />
            <NavItem icon={<Sparkles size={20} />} label="Changelog" />
            <div className="pt-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <h4 className="font-semibold text-sm mb-1 relative z-10">Upgrade to Pro</h4>
                <p className="text-xs text-slate-300 mb-3 relative z-10">Get unlimited access to all features.</p>
                <button className="w-full bg-white/10 hover:bg-white/20 text-xs font-semibold py-2 rounded-lg transition-colors border border-white/10 relative z-10">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200/60 sticky top-0 z-30">
          <div className="px-4 lg:px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-50 rounded-lg"
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
              <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500">
                <span className="hover:text-slate-900 cursor-pointer transition-colors">Competitors</span>
                <span className="text-slate-300">/</span>
                <span className="font-medium text-slate-900">YourBrand</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  placeholder="Search..."
                  className="w-64 h-10 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-lg relative text-slate-500 hover:text-slate-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer hover:opacity-90 transition-opacity">
                CW
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 lg:p-10">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-6 lg:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center text-white font-bold text-3xl tracking-tighter shadow-lg shadow-slate-900/20 ring-4 ring-white">
                    YB
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        YourBrand
                      </h1>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        May 20, 2024 at 10 PM
                      </div>
                      <span className="text-slate-300">•</span>
                      <span>Harmony Theater, Winnipeg, MB</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 active:scale-[0.98] flex items-center gap-2">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <hr className="my-8 border-slate-100" />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <StatItem
                  label="Total Revenue"
                  value="$102,552"
                  change="+3.2%"
                  positive
                />
                <StatItem
                  label="Products Tracked"
                  value="350/500"
                  change="+8.1%"
                  positive
                />
                <StatItem
                  label="Total Pageviews"
                  value="24,300"
                  change="-0.75%"
                  positive={false}
                />
              </div>
            </motion.div>

            {/* Orders Table Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Recent Orders
                </h3>
                <div className="flex gap-3">
                  <button className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden ring-1 ring-slate-900/5">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider py-4 px-6">
                          Order ID
                        </th>
                        <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider py-4 px-6">
                          Date
                        </th>
                        <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider py-4 px-6">
                          Customer
                        </th>
                        <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider py-4 px-6">
                          Status
                        </th>
                        <th className="text-right text-xs font-bold text-slate-500 uppercase tracking-wider py-4 px-6">
                          Amount
                        </th>
                        <th className="w-10"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.map((order, i) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="group hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-4 px-6">
                            <span className="text-sm font-medium text-slate-900">#{order.id}</span>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-500">
                            {order.date}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-600 border border-indigo-200">
                                {order.customer.charAt(0)}
                              </div>
                              <span className="text-sm font-medium text-slate-900">{order.customer}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Completed
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm font-bold text-slate-900 text-right tabular-nums">
                            {order.amount}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Components
function NavItem({
  icon,
  label,
  active = false,
  hasSubmenu = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
        active
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`transition-colors ${active ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}>
          {icon}
        </span>
        {label}
      </div>
      {hasSubmenu && (
        <ChevronLeft className={`w-4 h-4 transition-colors -rotate-90 ${active ? "text-slate-400" : "text-slate-300"}`} />
      )}
    </button>
  );
}

function StatItem({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="group cursor-default">
      <div className="text-sm font-medium text-slate-500 mb-2 group-hover:text-slate-700 transition-colors">{label}</div>
      <div className="text-3xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
        {value}
      </div>
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border transition-colors ${
          positive
            ? "bg-green-50 text-green-700 border-green-100 group-hover:bg-green-100"
            : "bg-red-50 text-red-700 border-red-100 group-hover:bg-red-100"
        }`}
      >
        {positive ? (
          <ArrowUpRight className="w-3.5 h-3.5" />
        ) : (
          <ArrowDownRight className="w-3.5 h-3.5" />
        )}
        {change} <span className="font-medium opacity-80">vs last week</span>
      </div>
    </div>
  );
}

// Data
const orders = [
  {
    id: "3000",
    date: "May 9, 2024",
    customer: "Charles Wilson",
    amount: "US$80.00",
  },
  {
    id: "3003",
    date: "Apr 23, 2024",
    customer: "Lindsay Walton",
    amount: "US$80.00",
  },
  {
    id: "3007",
    date: "Apr 6, 2024",
    customer: "Leonard Krasner",
    amount: "US$80.00",
  },
  {
    id: "3008",
    date: "Apr 3, 2024",
    customer: "Floyd Miles",
    amount: "US$80.00",
  },
  {
    id: "3011",
    date: "Mar 21, 2024",
    customer: "Emma Dorsey",
    amount: "US$80.00",
  },
  {
    id: "3016",
    date: "Feb 28, 2024",
    customer: "Jeffrey Webb",
    amount: "US$80.00",
  },
  {
    id: "3017",
    date: "Feb 23, 2024",
    customer: "Kathryn Murphy",
    amount: "US$80.00",
  },
];

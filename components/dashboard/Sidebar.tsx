'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Sparkles, Home, Users, BookOpen, Calendar, BarChart3,
  MessageCircle, Settings, LogOut, Award, TrendingUp,
  DollarSign, UserPlus, ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  role: 'student' | 'mentor';
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onToggle, role, onClose }: SidebarProps) {
  const pathname = usePathname();

  const studentMenu = [
    { icon: Home, label: 'Dashboard', href: '/dashboard/student' },
    { icon: Users, label: 'My Learning Partners', href: '/dashboard/student/peers' },
    { icon: BookOpen, label: 'Learning Path', href: '/dashboard/student/learning-path' },
    { icon: Calendar, label: 'Sessions', href: '/dashboard/student/sessions' },
    { icon: BarChart3, label: 'Progress Report', href: '/dashboard/student/reports' },
    { icon: MessageCircle, label: 'Messages', href: '/dashboard/student/messages' },
    { icon: Award, label: 'Certificates', href: '/dashboard/student/certificates' },
  ];

  const mentorMenu = [
    { icon: Home, label: 'Dashboard', href: '/dashboard/mentor' },
    { icon: Users, label: 'My Students', href: '/dashboard/mentor/students' },
    { icon: Calendar, label: 'Sessions', href: '/dashboard/mentor/sessions' },
    { icon: DollarSign, label: 'Earnings', href: '/dashboard/mentor/earnings' },
    { icon: TrendingUp, label: 'Performance', href: '/dashboard/mentor/performance' },
    { icon: MessageCircle, label: 'Messages', href: '/dashboard/mentor/messages' },
    { icon: Award, label: 'Credentials', href: '/dashboard/mentor/credentials' },
  ];

  const menuItems = role === 'student' ? studentMenu : mentorMenu;

  return (
    <aside className={`flex flex-col h-full bg-navy-900/95 backdrop-blur-xl border-l border-white/10 transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-20'
    }`}>
      {/* Logo */}
      <div className="p-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-navy-950" />
          </div>
          {isOpen && (
            <span className="text-lg font-bold whitespace-nowrap">
              Smart<span className="text-primary-400">Peer</span>
            </span>
          )}
        </Link>
      </div>

      {/* User Info */}
      {isOpen && (
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-gold-500 flex items-center justify-center font-bold text-lg flex-shrink-0">
              {role === 'student' ? 'SM' : 'AK'}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">
                {role === 'student' ? 'Sarah Miller' : 'Alex Carter'}
              </p>
              <p className="text-xs text-gray-400">
                {role === 'student' ? 'Student' : 'Mentor ⭐'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative ${
                isActive
                  ? 'bg-primary-500/10 text-primary-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary-400' : ''}`} />
              {isOpen && (
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              )}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-400 rounded-full"
                />
              )}
              {!isOpen && (
                <div className="absolute right-full mr-4 px-3 py-2 bg-navy-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          onClick={onClose}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {isOpen && <span className="text-sm">Settings</span>}
        </Link>
        <button
          onClick={onToggle}
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full"
        >
          <ChevronLeft className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
          {isOpen && <span className="text-sm">Close Menu</span>}
        </button>
      </div>
    </aside>
  );
}
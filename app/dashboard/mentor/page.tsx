'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, Calendar, TrendingUp, DollarSign, Star,
  Zap, Award, Clock, CheckCircle2, MessageCircle,
  BarChart3, UserPlus, BookOpen, Target
} from 'lucide-react';

export default function MentorDashboard() {
  const stats = [
    { icon: Users, label: 'Active Students', value: '12', change: '+3 this month', color: 'from-blue-500 to-cyan-500' },
    { icon: Calendar, label: 'Sessions This Week', value: '8', change: '3 today', color: 'from-purple-500 to-pink-500' },
    { icon: DollarSign, label: 'Monthly Earnings', value: '4.5M', change: '+20%', color: 'from-green-500 to-teal-500' },
    { icon: Star, label: 'Rating', value: '4.8', change: 'out of 5', color: 'from-gold-400 to-gold-600' },
  ];

  const activeStudents = [
    { name: 'Sarah Miller', skill: 'React', progress: 75, sessions: 8, avatar: 'SM', status: 'online' },
    { name: 'Mary Adams', skill: 'UI/UX', progress: 60, sessions: 5, avatar: 'MA', status: 'online' },
    { name: 'Ryan Carter', skill: 'Python', progress: 90, sessions: 12, avatar: 'RK', status: 'offline' },
    { name: 'Zara Hassan', skill: 'Vue.js', progress: 40, sessions: 3, avatar: 'ZH', status: 'online' },
  ];

  const todaySessions = [
    { time: '10:00', student: 'Sarah Miller', topic: 'React Hooks Advanced', status: 'upcoming' },
    { time: '14:00', student: 'Mary Adams', topic: 'UI Design with Figma', status: 'upcoming' },
    { time: '16:00', student: 'Ryan Carter', topic: 'Django REST Framework', status: 'upcoming' },
  ];

  const recentEarnings = [
    { month: 'July', amount: '4,500,000', sessions: '15' },
    { month: 'June', amount: '3,800,000', sessions: '12' },
    { month: 'May', amount: '4,200,000', sessions: '14' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 md:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-gold-500/10 to-transparent" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black mb-2">
              Hi Alex! ⭐
            </h1>
            <p className="text-gray-400">
              You have 3 mentoring sessions today. Your students are waiting!
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/mentor/students" className="btn-outline flex items-center gap-2">
              <Users className="w-5 h-5" />
              Students
            </Link>
            <Link href="/dashboard/mentor/sessions" className="btn-primary flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today’s Sessions
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-black mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
            <div className="text-xs text-green-400 mt-2">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Students */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-primary-400" />
              Active Students
            </h2>
            <Link href="/dashboard/mentor/students" className="text-sm text-primary-400 hover:underline">
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-right py-3 px-4 text-sm text-gray-400">Student</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-400">Skill</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-400">Progress</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-400">Sessions</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeStudents.map((student) => (
                  <tr key={student.name} className="border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-gold-500 flex items-center justify-center font-bold text-sm">
                          {student.avatar}
                        </div>
                        <span className="font-medium">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="badge-primary text-xs">{student.skill}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary-400 rounded-full" style={{ width: `${student.progress}%` }} />
                        </div>
                        <span className="text-xs text-gray-400">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">{student.sessions} sessions</td>
                    <td className="py-3 px-4">
                      <div className={`w-3 h-3 rounded-full ${
                        student.status === 'online' ? 'bg-green-400' : 'bg-gray-500'
                      }`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Today Sessions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-primary-400" />
            Today’s Sessions
          </h2>

          <div className="space-y-4">
            {todaySessions.map((session, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <div className="text-center flex-shrink-0">
                  <div className="text-lg font-bold text-primary-400">{session.time}</div>
                  <div className="text-xs text-gray-500">Time</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{session.topic}</h3>
                  <p className="text-xs text-gray-400">with {session.student}</p>
                </div>
                <Link href="#" className="btn-primary text-xs py-2 px-3">
                  Start
                </Link>
              </div>
            ))}
          </div>

          <Link href="/dashboard/mentor/sessions" className="block text-center text-sm text-primary-400 hover:underline mt-4">
            View All Sessions
          </Link>
        </motion.div>
      </div>

      {/* Earnings Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-400" />
            Earnings
          </h2>
          <Link href="/dashboard/mentor/earnings" className="text-sm text-primary-400 hover:underline">
            Full Report
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {recentEarnings.map((earning) => (
            <div key={earning.month} className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-sm text-gray-400 mb-2">{earning.month}</div>
              <div className="text-xl font-bold text-green-400 mb-1">{earning.amount} USD</div>
              <div className="text-xs text-gray-500">{earning.sessions} sessions</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Calendar, label: 'Session Management', href: '/dashboard/mentor/sessions', color: 'from-blue-500 to-purple-500' },
          { icon: UserPlus, label: 'New Student', href: '/smart-match', color: 'from-green-500 to-teal-500' },
          { icon: MessageCircle, label: 'Messages', href: '/dashboard/mentor/messages', color: 'from-orange-500 to-red-500' },
          { icon: BarChart3, label: 'Performance', href: '/dashboard/mentor/reports', color: 'from-purple-500 to-pink-500' },
        ].map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Link
              href={action.href}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all block group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium">{action.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
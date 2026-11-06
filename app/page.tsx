// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, Users, Brain, Target, Zap, Star, TrendingUp, 
  Video, Award, Shield, ChevronLeft, Menu, X, ArrowLeft,
  BarChart3, MessageCircle, CheckCircle2, Globe, Code2,
  Palette, Database, Smartphone, Cpu, Search
} from 'lucide-react';
import SmartMatchingDemo from '@/components/landing/SmartMatchingDemo';
import { cn } from '@/lib/utils';


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <SmartMatchingSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
      <Footer />
    </div>
  );
}

// Navbar
function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (v: boolean) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-gold-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-navy-950" />
            </div>
            <span className="text-xl font-bold">
              Smart<span className="text-primary-400">Peer</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#features', label: 'Features' },
              { href: '#smart-matching', label: 'Smart Matching' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#pricing', label: 'Pricing' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="btn-ghost">Log in</Link>
            <Link href="/register" className="btn-primary text-sm">Get Started for Free</Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            {['Features', 'Smart Matching', 'How It Works', 'Pricing'].map((item) => (
              <Link key={item} href={`#${item}`} className="block text-gray-300 hover:text-white py-2">{item}</Link>
            ))}
            <Link href="/login" className="block text-gray-300 hover:text-white py-2">Log in</Link>
            <Link href="/register" className="btn-primary block text-center">Get Started for Free</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300">🚀 Next-Generation Smart Learning Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">Your Learning Partner</span>
              <br />
              Find your match and learn
              <br />
              faster
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              SmartPeer Powered by advanced AI, SmartPeer finds the best peer and mentor based on 
              based on your skills, learning style, and goals. Make learning a shared experience.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/register" className="btn-primary text-lg flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Smart Learning
              </Link>
              <Link href="#smart-matching" className="btn-outline text-lg flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Smart Matching Demo
              </Link>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['S', 'A', 'M', 'R'].map((letter, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-gold-500 border-2 border-navy-950 flex items-center justify-center text-sm font-bold">
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">+10,000 users</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
                <span className="text-sm text-gray-400 mr-1">4.9</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass-card p-8 animate-glow">
              <SmartMatchingDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Trusted By
function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8">Trusted by leading organizations and universities</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          {['University of Tehran', 'Sharif University of Technology', 'Maktabkhooneh', 'Faradars', 'Quera', 'CodeCademy'].map((name) => (
            <span key={name} className="text-gray-400 font-bold text-lg">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features
function FeaturesSection() {
  const features = [
    { icon: Brain, title: 'AI-Powered Matching', desc: 'An advanced algorithm analyzes 20+ factors to recommend the best peers and mentors', gradient: 'from-blue-500 to-purple-500', color: 'blue' },
    { icon: Target, title: 'Personalized Learning Path', desc: 'A personalized path built around your skills, interests, and learning pace', gradient: 'from-primary-500 to-gold-500', color: 'gold' },
    { icon: Users, title: 'Collaborative Learning', desc: 'Build real-world projects with peers and learn together', gradient: 'from-purple-500 to-pink-500', color: 'purple' },
    { icon: TrendingUp, title: 'Progress Analytics', desc: 'Interactive analytics dashboards help you track your progress', gradient: 'from-green-500 to-teal-500', color: 'green' },
    { icon: Video, title: 'Online Sessions', desc: 'HD mentoring and peer-learning sessions with recording', gradient: 'from-orange-500 to-red-500', color: 'orange' },
    { icon: Award, title: 'Verified Digital Certificates', desc: 'Validate your skills with verifiable digital certificates', gradient: 'from-yellow-500 to-gold-600', color: 'yellow' },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why <span className="gradient-text">SmartPeer</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We turn learning from a passive activity into an interactive, intelligent, and enjoyable experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Smart Matching Section
function SmartMatchingSection() {
  return (
    <section id="smart-matching" className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-gold-500/20 border border-primary-500/30 rounded-full px-6 py-3 mb-6">
              <Brain className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-semibold">SmartMatch™ AI Matching Engine</span>
            </div>
            <h2 className="text-4xl font-black mb-6">
              AI <span className="gradient-text">your learning partner</span> finds you
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our smart matching system deeply analyzes your profile, skills, learning style, and even 
              your time zone to find the best match for effective learning
            </p>

            <div className="space-y-4">
              {[
                { title: 'Analysis of 20+ Factors', desc: 'Skills, level, learning style, interests, time zone, and more', icon: Brain },
                { title: 'Smart Scoring', desc: 'Every match includes a compatibility score and clear reasons', icon: BarChart3 },
                { title: 'Continuous Learning', desc: 'The system improves its recommendations based on your feedback', icon: TrendingUp },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass-card p-8">
              <SmartMatchingDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats
function StatsSection() {
  const stats = [
    { number: '10,000+', label: 'Active Learners', icon: Users },
    { number: '2,500+', label: 'Expert mentor', icon: Star },
    { number: '95%', label: 'Course Completion Rate', icon: TrendingUp },
    { number: '50,000+', label: 'Mentoring Sessions', icon: Video },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-500/5 to-gold-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Sign Up and Complete Your Profile',
      description: 'Add your skills, interests, and learning goals so the system can find your best match.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Learning Style Assessment',
      description: 'Discover your VARK learning style and ideal learning method with a quick 3-minute assessment.',
      icon: Brain,
    },
    {
      step: '03',
      title: 'AI-Powered Matching',
      description: 'SmartPeer AI analyzes 20+ factors to recommend the best peer and mentor for you.',
      icon: Search,
    },
    {
      step: '04',
      title: 'Start Collaborative Learning',
      description: 'Start your personalized path with a new peer and learn through hands-on projects.',
      icon: Zap,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Getting Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            How <span className="gradient-text">does it work?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Just 4 simple steps to start learning smarter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="glass-card p-8 h-full relative z-10">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{step.step}</div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-gold-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-gold-400 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Miller',
      role: 'Developer Front-end',
      text: 'SmartPeer SmartPeer has been my best learning experience. Matching with the right peer helped me learn React three times faster. The system is truly smart!',
      avatar: 'SM',
      rating: 5,
    },
    {
      name: 'Alex Reed',
      role: 'Computer Science Student',
      text: 'The smart matching system is excellent. It recommended a mentor who perfectly fit my needs, and I mastered Node.js in just one month.',
      avatar: 'AR',
      rating: 5,
    },
    {
      name: 'Mary Hassan',
      role: 'UI/UX Designer',
      text: 'The personalized learning path helped me make progress without confusion. Now I am building a real project with my new peer.',
      avatar: 'MH',
      rating: 5,
    },
    {
      name: 'Ryan Carter',
      role: 'Developer Python',
      text: 'It was the best educational decision I have made. Collaborative learning with SmartPeer really works. I highly recommend trying it.',
      avatar: 'RK',
      rating: 4,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Learners <span className="gradient-text">say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real SmartPeer users share their smart learning experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-gold-500 flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Preview Section
function PricingPreview() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'Forever',
      description: 'For getting started',
      features: [
        'Basic skill profile',
        '3 matches per month',
        'Basic learning path',
        'Community access',
      ],
      highlighted: false,
      cta: 'Get Started for Free',
      href: '/register',
    },
    {
      name: 'Pro',
      price: '149',
      period: 'Monthly',
      description: 'For committed learners',
      features: [
        'Unlimited smart matching',
        'Advanced learning path',
        '4 hours of mentoring sessions',
        'Collaborative hands-on projects',
        'Verified digital certificates',
        'Weekly progress analytics',
      ],
      highlighted: true,
      cta: 'Start Pro Plan',
      href: '/register?plan=pro',
    },
    {
      name: 'Enterprise',
      price: 'Contact',
      period: 'Custom',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Dedicated organization mentor',
        'Team progress reports',
        'Dedicated API',
        '24/7 support',
      ],
      highlighted: false,
      cta: 'Contact Us',
      href: '/contact',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Which plan <span className="gradient-text">is right for you</span> ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start for free and upgrade whenever you’re ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`glass-card p-8 relative ${plan.highlighted ? 'border-primary-400/30 shadow-xl shadow-primary-500/10' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-primary-500 to-gold-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-black gradient-text">{plan.price}</span>
                <span className="text-gray-400 text-sm mr-2">USD / {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10" />
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-500/10 rounded-full filter blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-gold-400" />
              <span className="text-white font-semibold">Get started today!</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Ready to make smart learning a part of your journey?{' '}
              <span className="gradient-text"></span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 10,000+ learners and harness the power of AI to 
              find your ideal learning partner
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started for Free
              </Link>
              <Link href="/smart-match" className="btn-outline text-lg px-8 py-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Try Smart Matching
              </Link>
            </div>
            
            <p className="text-gray-500 text-sm mt-6">
              No credit card required • 14-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/10 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-gold-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-navy-950" />
              </div>
              <span className="text-xl font-bold">
                Smart<span className="text-primary-400">Peer</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              An AI-powered peer learning platform.
              We make learning a shared experience.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, Code2, Palette, Database].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary-500/10 transition-all cursor-pointer">
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link href="#features" className="block hover:text-white transition-colors">Features</Link>
              <Link href="#smart-matching" className="block hover:text-white transition-colors">Smart Matching</Link>
              <Link href="#how-it-works" className="block hover:text-white transition-colors">How It Works</Link>
              <Link href="#pricing" className="block hover:text-white transition-colors">Pricing</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
              <Link href="/docs" className="block hover:text-white transition-colors">Documentation</Link>
              <Link href="/faq" className="block hover:text-white transition-colors">FAQ</Link>
              <Link href="/community" className="block hover:text-white transition-colors">Community</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>info@smartpeer.ir</p>
              <p>021-12345678</p>
              <p>Pardis Technology Park, Tehran</p>
              <p>Saturday–Thursday, 9 AM–6 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 SmartPeer Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
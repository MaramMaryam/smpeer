'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Brain, Search, Zap, Users, Star, 
  ArrowLeft, ArrowRight, Loader2, CheckCircle2,
  Filter, MessageCircle, Calendar, MapPin, Clock,
  Target, Award, TrendingUp, BookOpen, Code2
} from 'lucide-react';

// Types
interface Skill {
  name: string;
  level: number;
  type: 'has' | 'wants';
}

interface MatchResult {
  id: string;
  name: string;
  role: string;
  avatar: string;
  matchPercentage: number;
  skills: string[];
  bio: string;
  rating: number;
  completedProjects: number;
  location: string;
  availability: string;
  type: 'peer' | 'mentor';
  reasons: string[];
}

export default function SmartMatchPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<MatchResult | null>(null);
  
  // Form State
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [learningGoal, setLearningGoal] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [availability, setAvailability] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');

  const totalSteps = 5;

  // Mock Skills Database
  const availableSkills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'Django', 'Flutter', 'React Native', 'Vue.js', 'Angular',
    'UI/UX Design', 'Figma', 'GraphQL', 'Docker', 'AWS',
    'Machine Learning', 'Data Science', 'DevOps', 'Go', 'Rust'
  ];

  const learningStyles = [
    { id: 'visual', icon: '👁️', title: 'Visual', desc: 'Learn with charts, videos, and images' },
    { id: 'auditory', icon: '👂', title: 'Auditory', desc: 'Learn through podcasts and discussions' },
    { id: 'reading', icon: '📖', title: 'Reading', desc: 'Learn through reading, notes, and articles' },
    { id: 'kinesthetic', icon: '🛠️', title: 'Hands-on', desc: 'Learn through projects, exercises, and hands-on practice' },
  ];

  const levels = [
    { id: 'beginner', icon: '🌱', title: 'Beginner', desc: 'Less than 6 months of experience' },
    { id: 'intermediate', icon: '🌿', title: 'Intermediate', desc: '6 months to 2 years of experience' },
    { id: 'advanced', icon: '🌳', title: 'Advanced', desc: 'More than 2 years of experience' },
  ];

  // Mock Results
  const mockResults: MatchResult[] = [
    {
      id: '1',
      name: 'Sarah Miller',
      role: 'Developer Senior Front-end',
      avatar: 'SM',
      matchPercentage: 98,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      bio: '4 years of front-end development experience. Passionate about learning and sharing knowledge.',
      rating: 4.9,
      completedProjects: 23,
      location: 'Tehran, Iran',
      availability: 'Weekends',
      type: 'peer',
      reasons: ['Complementary skills', 'Similar learning styles', 'Shared interests'],
    },
    {
      id: '2',
      name: 'Alex Carter',
      role: 'React Mentor and Instructor',
      avatar: 'AK',
      matchPercentage: 95,
      skills: ['React', 'Node.js', 'System Design', 'GraphQL'],
      bio: '8 years of full-stack development experience. Official mentor at 3 startups.',
      rating: 4.8,
      completedProjects: 45,
      location: 'Shiraz, Iran',
      availability: 'Every other day',
      type: 'mentor',
      reasons: ['Expert mentor', 'Compatible skill levels', 'Availability'],
    },
    {
      id: '3',
      name: 'Mary Adams',
      role: 'Developer Full-stack',
      avatar: 'MA',
      matchPercentage: 92,
      skills: ['React', 'Python', 'Django', 'PostgreSQL'],
      bio: '3 years of full-stack experience. Interested in open-source projects.',
      rating: 4.7,
      completedProjects: 18,
      location: 'Isfahan, Iran',
      availability: 'Evenings',
      type: 'peer',
      reasons: ['Shared interests', 'Nearby location', 'Similar experience level'],
    },
    {
      id: '4',
      name: 'Ryan Miller',
      role: 'UI/UX Specialist',
      avatar: 'RM',
      matchPercentage: 88,
      skills: ['Figma', 'UI Design', 'React', 'User Research'],
      bio: '5 years of product design experience. I can help with UI.',
      rating: 4.6,
      completedProjects: 30,
      location: 'Tehran, Iran',
      availability: 'Mornings',
      type: 'mentor',
      reasons: ['Design skills', 'Extensive experience', 'Same city'],
    },
    {
      id: '5',
      name: 'Zara Hassan',
      role: 'Developer Front-end',
      avatar: 'ZH',
      matchPercentage: 85,
      skills: ['React', 'JavaScript', 'CSS', 'Vue.js'],
      bio: 'New to the field but full of energy! Looking for a practice partner.',
      rating: 4.5,
      completedProjects: 8,
      location: 'Tabriz, Iran',
      availability: 'Evenings',
      type: 'peer',
      reasons: ['Similar beginner level', 'Shared goals', 'Enthusiastic'],
    },
  ];

  const handleToggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : prev.length < 5
        ? [...prev, skill]
        : prev
    );
  };

  const handleSearch = () => {
    setCurrentStep(6);
    setIsSearching(true);
    
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 3000);
  };

  const handleConnect = (match: MatchResult) => {
    // Add peer connection logic here
    alert(`A connection request has been sent to ${match.name}! 🎉`);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedSkills.length > 0;
      case 2: return learningGoal.length > 0;
      case 3: return learningStyle !== '';
      case 4: return skillLevel !== '';
      case 5: return availability !== '';
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-gold-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-navy-950" />
            </div>
            <span className="text-xl font-bold">
              Smart<span className="text-primary-400">Peer</span>
            </span>
          </Link>
          
          {!showResults && (
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary-400" />
              <span className="text-sm text-gray-400">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        {!showResults && currentStep <= totalSteps && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    currentStep > i + 1
                      ? 'bg-gradient-to-r from-primary-400 to-gold-400'
                      : currentStep === i + 1
                      ? 'bg-primary-500'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Select Skills */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">What skill would you like to learn?</h1>
                <p className="text-gray-400">Select up to 5 skills</p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {availableSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleToggleSkill(skill)}
                    className={`px-4 py-2 rounded-xl border-2 transition-all duration-300 ${
                      selectedSkills.includes(skill)
                        ? 'border-primary-400 bg-primary-500/10 text-primary-400'
                        : 'border-white/10 hover:border-white/30 text-gray-300'
                    } ${selectedSkills.length >= 5 && !selectedSkills.includes(skill) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={selectedSkills.length >= 5 && !selectedSkills.includes(skill)}
                  >
                    {skill}
                  </button>
                ))}
              </div>

              {selectedSkills.length > 0 && (
                <div className="bg-white/5 rounded-xl p-4 mb-8">
                  <p className="text-sm text-gray-400 mb-2">Selected skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <span key={skill} className="badge-primary">
                        {skill}
                        <button onClick={() => handleToggleSkill(skill)} className="mr-1">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setCurrentStep(2)}
                disabled={!canProceed()}
                className="btn-primary w-full text-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                Continue
                <ArrowLeft className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Learning Goal */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">What is your learning goal?</h1>
                <p className="text-gray-400">This helps us design the best path for you</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { id: 'job', icon: '💼', title: 'Find a Job', desc: 'I want to prepare for a job opportunity' },
                  { id: 'project', icon: '🚀', title: 'Build a Project', desc: 'I have a personal project or startup idea' },
                  { id: 'skill', icon: '📚', title: 'Improve My Skills', desc: 'I want to deepen my current skills' },
                  { id: 'career', icon: '📈', title: 'Change Careers', desc: 'I want to enter a new field' },
                ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setLearningGoal(goal.id)}
                    className={`w-full p-4 rounded-xl border-2 text-right transition-all ${
                      learningGoal === goal.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{goal.icon}</span>
                      <div>
                        <div className="font-bold">{goal.title}</div>
                        <div className="text-sm text-gray-400">{goal.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setCurrentStep(1)} className="btn-ghost">
                  <ArrowRight className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!canProceed()}
                  className="btn-primary flex-1 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Learning Style */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">What is your learning style?</h1>
                <p className="text-gray-400">Understanding your learning style helps us find a better match</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {learningStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setLearningStyle(style.id)}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      learningStyle === style.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-4xl mb-3">{style.icon}</div>
                    <div className="font-bold mb-1">{style.title}</div>
                    <div className="text-sm text-gray-400">{style.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setCurrentStep(2)} className="btn-ghost">
                  <ArrowRight className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  disabled={!canProceed()}
                  className="btn-primary flex-1 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Skill Level */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">What is your current skill level?</h1>
                <p className="text-gray-400">Knowing where you are in your journey is important</p>
              </div>

              <div className="space-y-4 mb-8">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSkillLevel(level.id)}
                    className={`w-full p-6 rounded-xl border-2 text-right transition-all ${
                      skillLevel === level.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{level.icon}</span>
                      <div>
                        <div className="text-xl font-bold">{level.title}</div>
                        <div className="text-gray-400">{level.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setCurrentStep(3)} className="btn-ghost">
                  <ArrowRight className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  disabled={!canProceed()}
                  className="btn-primary flex-1 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Availability */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">When are you available to learn?</h1>
                <p className="text-gray-400">One last step! This helps us find a partner with a compatible schedule</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { id: 'mornings', icon: '🌅', title: 'Mornings', time: '8 AM – 12 PM' },
                  { id: 'afternoons', icon: '☀️', title: 'Afternoons', time: '12 PM – 5 PM' },
                  { id: 'evenings', icon: '🌆', title: 'Evenings', time: '5 PM – 9 PM' },
                  { id: 'weekends', icon: '🎉', title: 'Weekends', time: 'Thursday and Friday' },
                ].map((time) => (
                  <button
                    key={time.id}
                    onClick={() => setAvailability(time.id)}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      availability === time.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-3xl mb-2">{time.icon}</div>
                    <div className="font-bold">{time.title}</div>
                    <div className="text-sm text-gray-400">{time.time}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setCurrentStep(4)} className="btn-ghost">
                  <ArrowRight className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleSearch}
                  disabled={!canProceed()}
                  className="btn-primary flex-1 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Zap className="w-5 h-5" />
                  Find My Match
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 6: Searching */}
          {currentStep === 6 && isSearching && (
            <motion.div
              key="searching"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-ping" />
                <div className="absolute inset-4 bg-gradient-to-br from-primary-400 to-gold-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-16 h-16 text-white animate-spin" />
                </div>
              </div>
              <h2 className="text-2xl font-black mb-4">Analyzing profiles...</h2>
              <div className="space-y-2 text-gray-400">
                <p className="animate-pulse">🔍 Analyzing skills: {selectedSkills.join(' , ')}</p>
                <p className="animate-pulse delay-200">🧠 Evaluating learning styles</p>
                <p className="animate-pulse delay-500">👥 Finding the best matches</p>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {showResults && !selectedMatch && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-gold-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-black mb-2">
                  <span className="gradient-text">{mockResults.length} learning partner</span> found!
                </h1>
                <p className="text-xl text-gray-400">
                  Based on your skills and learning style
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {mockResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 hover:bg-white/10 transition-all cursor-pointer"
                    onClick={() => setSelectedMatch(result)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-gold-500 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        {result.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{result.name}</h3>
                            <p className="text-sm text-gray-400">{result.role}</p>
                          </div>
                          <span className="badge-primary text-lg font-bold">
                            {result.matchPercentage}%
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">{result.bio}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {result.skills.map((skill) => (
                            <span key={skill} className="badge-gold text-xs">{skill}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-gold-400" />
                            {result.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {result.location}
                          </span>
                          <span>{result.type === 'mentor' ? '⭐ Mentor' : '👥 Peer'}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setShowResults(false);
                    setSelectedSkills([]);
                    setLearningGoal('');
                    setLearningStyle('');
                    setSkillLevel('');
                    setAvailability('');
                  }}
                  className="btn-ghost"
                >
                  New Search
                </button>
              </div>
            </motion.div>
          )}

          {/* Match Detail Modal */}
          {selectedMatch && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 md:p-12"
            >
              <button
                onClick={() => setSelectedMatch(null)}
                className="btn-ghost mb-6"
              >
                <ArrowRight className="w-5 h-5" />
                Back to Results
              </button>

              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-400 to-gold-500 flex items-center justify-center text-4xl font-black mx-auto mb-4">
                  {selectedMatch.avatar}
                </div>
                <h1 className="text-3xl font-black mb-1">{selectedMatch.name}</h1>
                <p className="text-xl text-gray-400 mb-2">{selectedMatch.role}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="badge-primary text-lg font-bold">
                    {selectedMatch.matchPercentage}% match
                  </span>
                  <span className="badge-gold">
                    {selectedMatch.type === 'mentor' ? '⭐ Mentor' : '👥 Peer'}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Why You Match</h3>
                  <div className="space-y-2">
                    {selectedMatch.reasons.map((reason, i) => (
                      <div key={i} className="flex items-center gap-2 text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        {reason}
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-lg mt-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMatch.skills.map((skill) => (
                      <span key={skill} className="badge-primary">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    {selectedMatch.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5 text-gray-400" />
                    {selectedMatch.availability}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-5 h-5 text-gold-400" />
                    Rating {selectedMatch.rating} out of 5
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Award className="w-5 h-5 text-gray-400" />
                    {selectedMatch.completedProjects} completed projects
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">{selectedMatch.bio}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => handleConnect(selectedMatch)}
                  className="btn-primary flex-1 text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect
                </button>
                <button
                  onClick={() => setSelectedMatch(null)}
                  className="btn-outline"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Award, Heart, Brain, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={fadeInUp}>
              <Badge 
                variant="info" 
                className="bg-orange-50 text-orange-600 px-6 py-3 rounded-full border border-orange-200 text-base font-semibold"
              >
                🤖 World's First AI-Powered Pet Healthcare Platform
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              Transform Your Pet's Healthcare from{" "}
              <span className="text-red-600">Reactive</span> to{" "}
              <span className="text-orange-500">Predictive</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              AI monitors your pet's health 24/7, predicts problems before they happen, and connects you with trusted veterinarians. Starting with Persian cats like Fariborz!
            </motion.p>

            {/* Cost Savings Highlight */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">Save $2,000+ Annually</p>
                  <p className="text-gray-600">Through predictive care vs emergency treatments</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button 
                size="xl" 
                className="bg-slate-800 hover:bg-slate-900 text-white shadow-lg"
              >
                🐱 Start Fariborz's AI Health Journey
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50"
              >
                📹 Watch Demo (2 min)
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-6 text-sm text-gray-500"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Vet Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Cat Specialized</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div 
            className="relative"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
          >
            {/* Main Hero Image Container */}
            <motion.div 
              className="relative bg-white rounded-3xl shadow-2xl p-8"
              variants={scaleIn}
            >
              {/* Placeholder for Fariborz image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">🐱</div>
                  <p className="text-lg font-medium">Fariborz</p>
                  <p className="text-sm">Persian Cat Hero</p>
                </div>
              </div>

              {/* AI Health Dashboard Overlay */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Fariborz's AI Health</p>
                    <p className="text-sm text-slate-500">Real-time monitoring</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Health Score</span>
                    <span className="font-bold text-green-600">94/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </div>
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-700 font-medium">
                    🤖 AI Alert: Water intake increased 15% - excellent for kidney health!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-500">98%</p>
                <p className="text-sm text-gray-600">Early Detection Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
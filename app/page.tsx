"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, ArrowRight, Quote, Heart, Globe, Zap, Brain } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#334155]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/signbridge-logo.png" alt="SignBridge Logo" width={40} height={40} className="rounded-full" />
            <span className="font-serif font-semibold text-xl text-white">SignBridge</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#CBD5E1] hover:text-[#06B6D4] smooth-hover">
              Features
            </a>
            <a href="#testimonials" className="text-[#CBD5E1] hover:text-[#06B6D4] smooth-hover">
              Testimonials
            </a>
            <a href="#mission" className="text-[#CBD5E1] hover:text-[#06B6D4] smooth-hover">
              Our Mission
            </a>
            <a href="#creators" className="text-[#CBD5E1] hover:text-[#06B6D4] smooth-hover">
              Creators
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30">100% Free ASL Translation</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Breaking Down Barriers:
              <span className="text-[#06B6D4] block">Free ASL Translation for Everyone</span>
            </h1>
            <p className="text-xl text-[#CBD5E1] mb-8 max-w-2xl mx-auto font-light">
              Empowering communication through free American Sign Language to English translation. Making accessibility
              universal, one conversation at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:from-[#0891B2] hover:to-[#2563EB] text-white smooth-hover px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover Our Service <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-float">
            <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <Image
                src="/signbridge-logo.png"
                alt="SignBridge Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Connecting Communities</h2>
            <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
              Our free ASL translation service breaks down communication barriers and builds inclusive communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI-Powered Technology",
                description:
                  "Highly accurate neural networks deliver 99.5% precision in ASL interpretation with continuous learning capabilities",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Privacy Focused",
                description:
                  "Zero data retention policy ensures your personal conversations remain completely confidential",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Extensive Vocabulary",
                description:
                  "Recognizes thousands of words and complex sentences with advanced pattern recognition technology",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast",
                description:
                  "Sub-second response times powered by optimized cloud infrastructure for seamless conversations",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-[#334155] border-0 shadow-lg hover:shadow-xl smooth-hover hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#06B6D4]/20 to-[#3B82F6]/20 flex items-center justify-center text-[#06B6D4]">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#CBD5E1]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Your Language, Our Passion</h2>
            <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
              Hear from our community about their experiences with SignBridge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SignBridge has transformed how I communicate in professional settings. The fact that it's completely free makes it accessible to everyone in our community.",
                author: "Sarah Chen",
                role: "Marketing Director",
                rating: 5,
              },
              {
                quote:
                  "The real-time translation quality is exceptional, and knowing it's free means I can recommend it to all my students without hesitation.",
                author: "Michael Rodriguez",
                role: "ASL Instructor",
                rating: 5,
              },
              {
                quote:
                  "Finally, a service that respects deaf culture while providing free, professional translation. This is what accessibility should look like!",
                author: "Emma Thompson",
                role: "Accessibility Advocate",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#334155] border-0 shadow-lg hover:shadow-xl smooth-hover">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-[#3B82F6] mb-4" />
                  <p className="text-[#CBD5E1] mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-[#94A3B8]">{testimonial.role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#06B6D4] text-[#06B6D4]" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
              Breaking down communication barriers and building a more inclusive world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Accessibility First",
                description:
                  "We believe communication should be free and accessible to everyone, regardless of hearing ability.",
                stats: "100% Free Forever",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Community Impact",
                description: "Every translation helps build bridges between deaf and hearing communities worldwide.",
                stats: "Growing Daily",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Spreading Awareness",
                description: "Help us reach more people who need ASL translation services by sharing SignBridge.",
                stats: "Share & Help Others",
              },
            ].map((mission, index) => (
              <Card key={index} className="bg-[#334155] border-0 shadow-lg hover:shadow-xl smooth-hover text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] flex items-center justify-center">
                    {mission.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">{mission.title}</h3>
                  <p className="text-[#CBD5E1] mb-6">{mission.description}</p>
                  <Badge className="bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30">{mission.stats}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Meet the Creators</h2>
            <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
              The passionate team behind SignBridge's mission to make ASL translation accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#334155] border-0 shadow-lg hover:shadow-xl smooth-hover">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SG</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Saineel Gutta</h3>
                <p className="text-[#06B6D4] font-semibold mb-4">Co-Creator</p>
                <p className="text-[#CBD5E1]">
                  Passionate about accessibility technology and breaking down communication barriers through innovative
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#334155] border-0 shadow-lg hover:shadow-xl smooth-hover">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AT</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Alwin Thomas</h3>
                <p className="text-[#06B6D4] font-semibold mb-4">Co-Creator</p>
                <p className="text-[#CBD5E1]">
                  Dedicated to creating inclusive technology that empowers communities and makes communication
                  accessible for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0F172A] text-white border-t border-[#334155]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/signbridge-logo.png"
                  alt="SignBridge Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-serif font-semibold text-lg">SignBridge</span>
              </div>
              <p className="text-[#94A3B8]">
                Free ASL to English translation services, connecting communities through accessible communication for
                everyone.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>
                  <a href="#features" className="hover:text-[#06B6D4] smooth-hover">
                    Live Translation
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#06B6D4] smooth-hover">
                    Document Translation
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#06B6D4] smooth-hover">
                    Video Interpretation
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-[#06B6D4] smooth-hover">
                    Community Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>
                  <a href="#mission" className="hover:text-[#06B6D4] smooth-hover">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-[#06B6D4] smooth-hover">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-[#06B6D4] smooth-hover">
                    Community Impact
                  </a>
                </li>
                <li>
                  <a href="#creators" className="hover:text-[#06B6D4] smooth-hover">
                    Creators
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect & Share</h4>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => window.open("https://facebook.com", "_blank")}
                  className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#06B6D4] smooth-hover"
                >
                  <span className="text-sm">f</span>
                </button>
                <button
                  onClick={() => window.open("https://twitter.com", "_blank")}
                  className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#06B6D4] smooth-hover"
                >
                  <span className="text-sm">t</span>
                </button>
                <button
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                  className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#06B6D4] smooth-hover"
                >
                  <span className="text-sm">in</span>
                </button>
              </div>
              <p className="text-sm text-[#64748B]">Help spread awareness by sharing SignBridge!</p>
            </div>
          </div>

          <div className="border-t border-[#334155] mt-8 pt-8 text-center text-[#64748B]">
            <p>&copy; 2024 SignBridge. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

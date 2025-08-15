"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  FileText,
  Palette,
  Hammer,
  Truck,
  Star,
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
} from "lucide-react"

const heroSlides = [
  {
    image: "/luxury-kenyan-bedroom.png",
    headline: "Bespoke Furniture Craftsmanship",
    subtext: "Handcrafted bedroom sets that transform your personal space",
  },
  {
    image: "/kenyan-outdoor-furniture.png",
    headline: "Precision Joinery for Your Home",
    subtext: "Custom kitchen solutions built to last generations",
  },
  {
    image: "/oak-office-desk.png",
    headline: "Custom Solutions for Businesses",
    subtext: "Professional office furniture that commands respect",
  },
]

const categories = [
  { name: "Living Room", image: "/kenyan-living-room-set.png" },
  { name: "Bedroom", image: "/kenyan-wooden-bedroom.png" },
  { name: "Kitchen", image: "/kenyan-kitchen.png" },
  { name: "Office", image: "/kenyan-office-setup.png" },
  { name: "Outdoor", image: "/kenyan-outdoor-furniture.png" },
  { name: "Custom Projects", image: "/kenyan-outdoor-furniture.png" },
]

const processSteps = [
  { icon: Calendar, title: "Consultation", description: "Discuss your vision and requirements", duration: "2-3 days" },
  {
    icon: FileText,
    title: "Design Approval",
    description: "Review and approve detailed blueprints",
    duration: "3-5 days",
  },
  { icon: Palette, title: "Material Selection", description: "Choose premium wood and finishes", duration: "1-2 days" },
  { icon: Hammer, title: "Crafting", description: "Expert artisans bring your vision to life", duration: "2-4 weeks" },
  { icon: Truck, title: "Delivery", description: "Professional installation at your location", duration: "1 day" },
]

const bestsellers = [
  { name: "Mahogany Dining Table", price: "From Ksh 45,000", image: "/maple-kitchen-island.png" },
  { name: "Walnut Bed Frame", price: "From Ksh 65,000", image: "/luxury-kenyan-bedroom.png" },
  { name: "Oak Office Desk", price: "From Ksh 85,000", image: "/oak-office-desk.png" },
  { name: "Teak Outdoor Set", price: "From Ksh 25,000", image: "/kenyan-outdoor-furniture.png" },
  { name: "Custom Entertainment Unit", price: "From Ksh 120,000", image: "/custom-entertainment-unit.png" },
  { name: "Maple Kitchen Island", price: "From Ksh 35,000", image: "/maple-kitchen-island.png" },
]

const reviews = [
  {
    name: "Wanjiku Mwangi",
    rating: 5,
    text: "Exceptional craftsmanship! The dining set exceeded our expectations. The attention to detail is remarkable.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "James Kiprotich",
    rating: 5,
    text: "Professional service from consultation to delivery. Our office furniture is both beautiful and functional.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Grace Achieng",
    rating: 5,
    text: "The bedroom set is absolutely stunning. Quality wood and perfect finishing. Highly recommend Kuze Creatives!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function KuzeCreativesHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/kuze-logo.png" alt="Kuze Creatives" className="h-12 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-80 hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search furniture..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCategories && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Living Room
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Bedroom
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Kitchen
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Office
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Outdoor
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                    Custom Projects
                  </a>
                </div>
              )}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact</Button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Carousel */}
        <section className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.headline}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{slide.headline}</h1>
                  <p className="text-xl md:text-2xl mb-2 opacity-90">{slide.subtext}</p>
                  <p className="text-lg mb-8 opacity-75">Discover furniture crafted to last generations</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                    >
                      Get Custom Quote
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg bg-transparent"
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Header Section */}
        <section className="py-16 px-4 text-center bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-card-foreground">
              Where Kenyan Craftsmanship Meets Modern Design
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Custom furniture handcrafted to your exact specifications
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Start Your Project Today →
            </Button>
          </div>
        </section>

        {/* Category Gallery Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Specialties</h2>
            <p className="text-center text-muted-foreground mb-12">Browse our signature collections</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm">
                        Explore →
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">Our Process</h2>
            <p className="text-center text-muted-foreground mb-12">Our transparent 5-step workflow ensures quality</p>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-8 md:gap-12">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 text-center transition-all duration-300 ${
                        index === currentStep ? "scale-110" : "opacity-70"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors ${
                          index === currentStep
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {index + 1}
                      </Badge>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 max-w-32">{step.description}</p>
                      <p className="text-xs font-medium text-primary">{step.duration}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers Showcase */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Signature Pieces</h2>
            <p className="text-center text-muted-foreground mb-12">Client favorites with proven satisfaction</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestsellers.map((product, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-primary font-bold mb-4">{product.price}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Quick View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews Widget */}
        <section className="py-16 px-4 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
              Client Testimonials
            </h2>
            <p className="text-center text-muted-foreground mb-12">See what our clients say about our work</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="inline-flex items-center gap-2 bg-transparent">
                <img src="/placeholder.svg?height=20&width=20" alt="Google" className="w-5 h-5" />
                View All Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* New CTA section after reviews */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/woodshop-interior.png" alt="Woodshop Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our artisans are ready to craft your perfect piece. Schedule a free design consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg bg-transparent"
              >
                Call +254 XXX XXX XXX
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-amber-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <img src="/kuze-logo.png" alt="Kuze Creatives" className="h-8 w-auto mb-4 brightness-0 invert" />
                <p className="text-amber-200">Kenyan Craftsmanship Since 2015</p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Explore</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Portfolio
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Process
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Living Room
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Bedroom
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Kitchen
                  </a>
                  <a href="#" className="block text-amber-200 hover:text-white transition-colors">
                    Office
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-amber-200">
                  <p>Nairobi Workshop</p>
                  <p>+254 XXX XXX XXX</p>
                  <p>hello@kuzecreatives.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </Button>
        <Button
          size="icon"
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
        >
          <Phone className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  ExternalLink,
  UtensilsCrossed,
  Calendar,
  Users,
  Maximize2,
  ChevronLeft
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Book', href: '#book' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled ? 'text-maroon' : 'text-white'}`}>
            SHREE KRISHNA
          </span>
          <span className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors ${isScrolled ? 'text-leaf' : 'text-haldi'}`}>
            By Maratha Curry
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${isScrolled ? 'text-maroon' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book" 
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              isScrolled ? 'bg-maroon text-white hover:bg-leaf' : 'bg-white text-maroon hover:bg-haldi hover:text-maroon'
            }`}
          >
            Reserve Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? 'text-maroon' : 'text-white'} /> : <Menu className={isScrolled ? 'text-maroon' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-maroon"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-maroon text-white text-center py-4 rounded-xl font-bold"
              >
                BOOK A TABLE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-maroon">
      {/* Background with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-maroon/80 z-10"></div>
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=2000" 
          alt="Authentic Maharashtrian Veg Thali"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 w-full pt-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-left md:w-3/5"
        >
          <span className="inline-block text-haldi font-medium tracking-[0.4em] uppercase text-xs mb-4 border-l-2 border-haldi pl-3">
            Pure Vegetarian Excellence
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-[1.1]">
            Shree Krishna <br /> 
            <span className="text-haldi">Pure Veg</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed italic font-light">
            Savor the soul of Maharashtra with authentic recipes passed down through generations. A premium brand by <span className="text-white font-semibold">Maratha Curry</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.zomato.com" 
              target="_blank"
              className="px-8 py-4 bg-white text-maroon rounded-full font-bold flex items-center gap-2 hover:bg-haldi transition-all hover:scale-105 shadow-xl"
            >
              Order Online <ChevronRight size={18} />
            </a>
            <a 
              href="#book" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Reserve Table
            </a>
          </div>
        </motion.div>

        {/* Right Animated Mosaic of Dishes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex md:w-2/5 h-[500px] justify-center items-center relative"
        >
          {/* Main Dish (Misal Pav) */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <div className="absolute inset-0 bg-haldi/20 blur-3xl rounded-full scale-150"></div>
            <img 
              src="https://images.unsplash.com/photo-1601050690597-df056fb4ce99?auto=format&fit=crop&q=80&w=600" 
              alt="Signature Misal Pav"
              className="w-72 h-72 object-cover rounded-full border-[10px] border-white/10 shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 right-0 bg-haldi text-maroon px-4 py-2 rounded-xl font-bold shadow-lg text-sm z-30">
              Famous Misal
            </div>
          </motion.div>

          {/* Secondary Dish (Thali Preview) */}
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 left-0 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=400" 
              alt="Veg Thali"
              className="w-48 h-48 object-cover rounded-full border-[6px] border-white/10 shadow-xl"
            />
          </motion.div>

          {/* Dessert Dish (Puran Poli / Sweets) */}
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 right-0 z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=400" 
              alt="Puran Poli"
              className="w-40 h-40 object-cover rounded-full border-[6px] border-white/10 shadow-xl"
            />
            <div className="absolute top-0 -left-10 bg-white/90 backdrop-blur-sm text-leaf px-3 py-1 rounded-full font-bold text-[10px] shadow-sm uppercase tracking-widest border border-leaf/10">
              Sweet Heritage
            </div>
          </motion.div>

          {/* Background Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full pointer-events-none animate-spin-slow"></div>
        </motion.div>
      </div>

      {/* Floating Sparkles/Particles (Pure CSS approach via Framer) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-haldi rounded-full opacity-20 pointer-events-none"
          initial={{ 
            width: Math.random() * 6 + 2, 
            height: Math.random() * 6 + 2,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%"
          }}
          animate={{ 
            y: [null, "-10%", "110%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10 
          }}
        />
      ))}

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer flex flex-col items-center"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Discover More</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-texture relative overflow-hidden">
      {/* Decorative Food Element */}
      <motion.img 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=400"
        className="absolute top-0 right-[-50px] w-64 h-64 object-cover rounded-full rotate-45 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-maroon/20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-leaf/20"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 group">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Restaurant Dining"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-maroon/10 group-hover:bg-transparent transition-all"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-leaf font-bold tracking-widest text-sm uppercase block mb-2">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl text-maroon font-serif mb-6 leading-tight">Authentic Taste, <br />Modern Soul.</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Shree Krishna Pure Veg Restaurant, by the acclaimed <span className="font-bold text-maroon">Maratha Curry</span>, is born from a deep-rooted passion for authentic Maharashtrian culinary values. 
            </p>
            <p>
              We believe in the purity of ingredients and the soul of traditional cooking. Our kitchen is a temple of flavors where every dish is prepared with reverence for the heritage of the Maratha lands.
            </p>
            <p className="italic border-l-4 border-haldi pl-4 py-2 bg-haldi/5 text-maroon font-medium">
              "Experience the premium homely atmosphere designed for families and devotees alike."
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 bg-maroon text-white font-bold rounded-xl hover:bg-leaf transition-colors shadow-lg shadow-maroon/20"
          >
            Explore Our Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = [
    { 
      title: 'Maharashtrian Special', 
      image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce99?auto=format&fit=crop&q=80&w=800',
      desc: 'Famous Misal & Vada Pav'
    },
    { 
      title: 'Pure Veg Thali', 
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=800',
      desc: 'Grand Festive Platter'
    },
    { 
      title: 'North Indian Veg', 
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
      desc: 'Rich Creamy Curries'
    },
    { 
      title: 'Traditional Desserts', 
      image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800',
      desc: 'Puran Poli & Basundi'
    },
  ];

  return (
    <section id="menu" className="py-24 bg-maroon text-white relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none rotate-45">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-haldi font-bold tracking-widest text-sm uppercase block mb-2">The Culinary Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Collections</h2>
          <div className="w-24 h-1 bg-haldi mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl border border-white/5"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-haldi text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">{cat.desc}</span>
                <h3 className="text-2xl font-serif group-hover:text-haldi transition-colors mb-2">{cat.title}</h3>
                <div className="w-10 h-1 bg-haldi scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-8 max-w-2xl mx-auto italic font-light text-lg">
            "Only the finest ingredients make it to our kitchen. We specialize in Misal Pav, Puran Poli, and premium Maharashtrian Thalis as featured in our Zomato specials."
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-4 border border-haldi text-haldi font-bold rounded-full hover:bg-haldi hover:text-maroon transition-all flex items-center gap-2 mx-auto"
          >
            VIEW FULL DIGITAL MENU <ExternalLink size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=1200", title: "Premium Maharashtrian Thali" },
    { url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce99?auto=format&fit=crop&q=80&w=1200", title: "Signature Misal Pav" },
    { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200", title: "Elegant Dining Experience" },
    { url: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=1200", title: "Traditional Festive Sweets" },
    { url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1200", title: "Fragrant Vegetable Pulao" },
    { url: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=1200", title: "Authentic Pure Veg Bites" }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-leaf font-bold tracking-widest text-sm uppercase block mb-2">Visual Feast</span>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon">Our Culinary Canvas</h2>
            <p className="text-gray-500 mt-4">A glimpse into the authentic taste and premium ambiance at Shree Krishna.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-maroon/10"></div>
            <div className="w-24 h-1 bg-maroon"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
              onClick={() => setSelectedImage(idx)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-haldi flex items-center justify-center mb-4 scale-0 group-hover:scale-100 transition-transform delay-100 duration-300 shadow-2xl">
                  <Maximize2 size={24} className="text-maroon" />
                </div>
                <h4 className="text-white font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                <p className="text-haldi text-xs uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">Pure Veg Heritage</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white/50 hover:text-white z-10 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={30} />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={30} />
            </button>

            <div className="max-w-6xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-[-80px] left-0 right-0 text-center"
              >
                <h3 className="text-white text-3xl font-serif">{galleryImages[selectedImage].title}</h3>
                <p className="text-haldi uppercase tracking-[0.3em] text-sm mt-3">{selectedImage + 1} / {galleryImages.length}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const OrderOnline = () => {
  return (
    <section className="py-24 bg-texture relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-haldi/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-3 h-full bg-maroon"></div>
          <div className="absolute top-0 right-0 w-3 h-full bg-leaf"></div>
          
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <UtensilsCrossed className="mx-auto text-maroon mb-8" size={64} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-6">Experience it at Home</h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Can't make it to the restaurant? Get our authentic Maharashtrian delicacies delivered hot to your doorstep.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10">
            <motion.a 
              whileHover={{ y: -10 }}
              href="https://www.zomato.com"
              className="flex flex-col items-center gap-4 group/item"
            >
              <div className="w-24 h-24 bg-white shadow-2xl rounded-[2rem] flex items-center justify-center border border-gray-100 group-hover/item:border-maroon transition-all group-hover/item:shadow-maroon/10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="Zomato" className="w-14 h-14 grayscale group-hover/item:grayscale-0 transition-all duration-500" />
              </div>
              <span className="font-bold text-sm uppercase tracking-[0.2em] text-gray-400 group-hover/item:text-maroon transition-colors">Order on Zomato</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -10 }}
              href="https://www.swiggy.com"
              className="flex flex-col items-center gap-4 group/item"
            >
              <div className="w-24 h-24 bg-white shadow-2xl rounded-[2rem] flex items-center justify-center border border-gray-100 group-hover/item:border-orange-500 transition-all group-hover/item:shadow-orange-500/10">
                <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" alt="Swiggy" className="w-14 h-14 grayscale group-hover/item:grayscale-0 transition-all duration-500" />
              </div>
              <span className="font-bold text-sm uppercase tracking-[0.2em] text-gray-400 group-hover/item:text-orange-500 transition-colors">Order on Swiggy</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const items = [
    { name: "Sneha K.", rating: 5, comment: "Authentic taste of Maharashtra. Their Thali is a must-try for any pure veg lover!" },
    { name: "Rahul Deshmukh", rating: 4, comment: "Best Misal in town. The ambiance is very calm and premium. Perfect for family dinner." },
    { name: "Pratik S.", rating: 5, comment: "Service is excellent. The by Maratha Curry quality is evident in every dish." },
  ];

  return (
    <section id="reviews" className="py-24 bg-leaf/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-leaf font-bold tracking-widest text-sm uppercase block mb-2">Guest Voices</span>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon">Stories of Satisfaction</h2>
          <div className="w-20 h-1 bg-leaf/30 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-leaf/40 relative group hover:shadow-2xl transition-all"
            >
              <div className="absolute top-[-20px] left-10 text-leaf/10 group-hover:text-leaf/20 transition-colors">
                <UtensilsCrossed size={80} />
              </div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" className="text-haldi" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed text-lg relative z-10">"{review.comment}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center font-bold text-maroon text-xl border border-maroon/10">
                  {review.name[0]}
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">{review.name}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Verified Diner</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-maroon font-bold tracking-widest text-sm uppercase block mb-2">Reservations</span>
          <h2 className="text-4xl md:text-6xl font-serif text-maroon mb-8 leading-tight">Join Us at Our Table</h2>
          <p className="text-gray-600 text-xl mb-10 leading-relaxed font-light">
            Plan your next family gathering or a special meal with us. We ensure every visit feels like a homecoming to the Maharashtrian heartland.
          </p>
          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-5 text-maroon"
            >
              <div className="w-16 h-16 rounded-2xl bg-maroon text-white flex items-center justify-center shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">Direct Line</p>
                <p className="font-bold text-2xl">+91 98765 43210</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-5 text-leaf"
            >
              <div className="w-16 h-16 rounded-2xl bg-leaf text-white flex items-center justify-center shadow-lg">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">Dine-in Hours</p>
                <p className="font-bold text-2xl">11:00 AM – 11:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-texture p-10 md:p-14 rounded-[3rem] shadow-2xl border border-maroon/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
            <UtensilsCrossed size={200} />
          </div>
          
          <AnimatePresence mode='wait'>
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20 relative z-10"
              >
                <div className="w-24 h-24 bg-leaf text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-leaf/30">
                  <Star size={40} />
                </div>
                <h3 className="text-4xl font-serif text-maroon mb-4">Table Requested!</h3>
                <p className="text-gray-600 text-lg">We'll contact you within 15 minutes to confirm.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-8 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] px-1">Guest Name</label>
                    <input required type="text" placeholder="Full Name" className="w-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-6 py-4 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] px-1">Contact No.</label>
                    <input required type="tel" placeholder="+91 XXXX" className="w-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-6 py-4 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] px-1 flex items-center gap-2"><Calendar size={12}/> Date</label>
                    <input required type="date" className="w-full bg-white border border-gray-100 rounded-2xl px-4 py-4 focus:border-maroon outline-none transition-all shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] px-1 flex items-center gap-2"><Clock size={12}/> Time</label>
                    <select className="w-full bg-white border border-gray-100 rounded-2xl px-4 py-4 focus:border-maroon outline-none transition-all shadow-sm appearance-none">
                      <option>Lunch (12:30 PM)</option>
                      <option>Dinner (07:30 PM)</option>
                      <option>Late Night (09:30 PM)</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] px-1 flex items-center gap-2"><Users size={12}/> Size</label>
                    <select className="w-full bg-white border border-gray-100 rounded-2xl px-4 py-4 focus:border-maroon outline-none transition-all shadow-sm appearance-none">
                      <option>2 Guest</option>
                      <option>4 Guest</option>
                      <option>6+ Guest</option>
                    </select>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-maroon text-white font-bold py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(128,0,0,0.3)] flex items-center justify-center gap-3 text-lg"
                >
                  RESERVE YOUR TABLE <ChevronRight size={20} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-texture border-t border-maroon/10 py-20 relative overflow-hidden">
      {/* Decorative Branding Ring */}
      <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 border-[40px] border-maroon/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h4 className="text-3xl font-serif text-maroon mb-2">SHREE KRISHNA</h4>
            <p className="text-leaf font-bold tracking-[0.3em] uppercase text-xs mb-8">Pure Veg | By Maratha Curry</p>
            <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed">
              Where heritage meets hospitality. Our mission is to keep the authentic pure-veg Maharashtrian culture alive through every meal we serve.
            </p>
            <div className="flex gap-5">
              <motion.a whileHover={{ y: -5 }} href="#" className="w-12 h-12 bg-white shadow-xl border border-gray-100 rounded-2xl flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all"><Instagram size={22} /></motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="w-12 h-12 bg-white shadow-xl border border-gray-100 rounded-2xl flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all"><Facebook size={22} /></motion.a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-maroon uppercase tracking-[0.2em] text-sm mb-8 border-b border-maroon/10 pb-2 inline-block">Visit the Heart</h5>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Sourced Address Road,<br />
              Near the Cultural Square,<br />
              Maharashtra, India
            </p>
            <button className="text-leaf font-bold flex items-center gap-2 hover:gap-3 transition-all">
              GET DIRECTIONS <MapPin size={16} />
            </button>
          </div>

          <div>
            <h5 className="font-bold text-maroon uppercase tracking-[0.2em] text-sm mb-8 border-b border-maroon/10 pb-2 inline-block">Quick Access</h5>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li><a href="#menu" className="hover:text-maroon transition-colors flex items-center gap-2">Menu Highlights <ChevronRight size={14} className="opacity-30" /></a></li>
              <li><a href="#book" className="hover:text-maroon transition-colors flex items-center gap-2">Book Table <ChevronRight size={14} className="opacity-30" /></a></li>
              <li><a href="https://zomato.com" className="hover:text-maroon transition-colors flex items-center gap-2">Order Zomato <ExternalLink size={14} className="opacity-30" /></a></li>
              <li><a href="#" className="hover:text-maroon transition-colors flex items-center gap-2">Our Story <ChevronRight size={14} className="opacity-30" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm tracking-wide">© 2024 Shree Krishna Pure Veg. Authenticity Guaranteed.</p>
          <div className="flex gap-6 items-center">
            <span className="text-xs font-bold text-gray-300 tracking-[0.3em] uppercase">Premium Hospitality</span>
            <div className="w-12 h-px bg-gray-200"></div>
            <span className="text-sm font-serif text-maroon italic">Maratha Curry Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-maroon selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <OrderOnline />
      <Reviews />
      <BookingForm />
      
      {/* Location Map Section Placeholder */}
      <section className="h-[450px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-[2s]">
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10 backdrop-blur-[2px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-maroon text-center max-w-sm"
          >
            <div className="w-16 h-16 bg-maroon/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-maroon" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-maroon mb-2">Find Us</h3>
            <p className="text-gray-600 mb-6">Experience the flavor in person at our central location.</p>
            <button className="bg-maroon text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-leaf transition-all">
              OPEN GOOGLE MAPS
            </button>
          </motion.div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Map Location Landscape" 
          className="w-full h-full object-cover"
        />
      </section>

      <Footer />
    </div>
  );
};

export default App;

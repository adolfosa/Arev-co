"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Play, ShoppingBag, Sparkles, Music, Clock } from "lucide-react"

const products = [
  {
    id: 1,
    name: "BEAT OUD",
    description: "Notas de pachulí con base de beats profundos",
    price: 149,
    image: "/luxury-oud-perfume-bottle-with-gold-accents-on-con.jpg",
    badge: "Limited Edition",
    genre: "NUEVOS",
  },
  {
    id: 2,
    name: "NUEVOS ROYAL",
    description: "Esencia de ámbar con ritmos de la calle",
    price: 169,
    image: "/royal-perfume-bottle-with-urban-neon-lighting.jpg",
    badge: "Nuevo Ritmo",
    genre: "NUEVOS",
  },
  {
    id: 3,
    name: "MÁS VENDIDOS VELVET",
    description: "Vainilla suave con acordes sensuales",
    price: 139,
    image: "/velvet-perfume-bottle-with-smooth-lighting.jpg",
    badge: null,
    genre: "MÁS VENDIDOS",
  },
  {
    id: 4,
    name: "HOMBRE FIRE",
    description: "Cítricos explosivos con calor tropical",
    price: 129,
    image: "/fire-perfume-bottle-with-tropical-vibes.jpg",
    badge: "Limited Edition",
    genre: "HOMBRE",
  },
  {
    id: 5,
    name: "MUJER SOUL",
    description: "Sándalo místico con energía ancestral",
    price: 159,
    image: "/soul-perfume-bottle-with-african-patterns.jpg",
    badge: null,
    genre: "MUJER",
  },
  {
    id: 6,
    name: "DRILL NOIR",
    description: "Cuero oscuro con notas de misterio urbano",
    price: 179,
    image: "/noir-perfume-bottle-with-dark-leather-texture.jpg",
    badge: "Nuevo Ritmo",
    genre: "NUEVOS",
  },
]

const testimonials = [
  {
    name: "MC Fuego",
    quote: "Esta esencia es el soundtrack de mi vida",
    image: "/urban-artist-portrait-album-cover-style.jpg",
  },
  {
    name: "DJ Luna",
    quote: "Cada fragancia cuenta una historia única",
    image: "/female-dj-portrait-album-cover-style.jpg",
  },
  {
    name: "NUEVOS King",
    quote: "El lujo que la calle necesitaba",
    image: "/rapper-portrait-album-cover-style.jpg",
  },
]

const genres = ["TODOS", "NUEVOS", "MÁS VENDIDOS", "HOMBRE", "MUJER"]

export default function RythmeEssence() {
  const [selectedGenre, setSelectedGenre] = useState("TODOS")
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const filteredProducts = selectedGenre === "TODOS" ? products : products.filter((p) => p.genre === selectedGenre)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Sticky Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#FFD700]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-black tracking-tighter"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 215, 0, 0.5)",
                "0 0 20px rgba(255, 215, 0, 0.8)",
                "0 0 10px rgba(255, 215, 0, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-[#FFD700]">AREV</span> & <span className="text-white">CO</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-[#FFD700] transition-colors">
              <Music className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#FFD700] transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2A2A2A] to-black">
          <div className="absolute inset-0 opacity-30">
            <img src="/luxury-perfume-bottles-with-golden-reflections-and.jpg" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          {/* Animated lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                style={{ top: `${20 + i * 15}%`, width: "100%" }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#FFD700]">AREV</span>
            <br />
            <span className="text-white">& CO</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-bold mb-8 text-[#CD7F32]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tu Vibra, Tu Esencia, Tu Ritmo
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <Button
              size="lg"
              className="bg-[#FFD700] text-black hover:bg-[#CD7F32] font-black text-lg px-8 py-6 rounded-none border-2 border-[#FFD700] hover:border-[#CD7F32] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]"
            >
              <Play className="w-5 h-5 mr-2" />
              SENTIR EL RITMO
            </Button> */}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div> */}
        </motion.div>
      </motion.section>

      {/* Genre Filter Section */}
      <section className="py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-12 text-[#FFD700]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SELECCIONA TU VIBRA
          </motion.h2>

          {/* Equalizer-style genre selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {genres.map((genre, index) => (
              <motion.button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-3 font-black text-sm md:text-base transition-all border-2 ${
                  selectedGenre === genre
                    ? "bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                    : "bg-black text-white border-[#FFD700]/30 hover:border-[#FFD700]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {genre}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-black border-2 border-[#2A2A2A] hover:border-[#FFD700] transition-all overflow-hidden relative">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-[#FF00FF] text-white font-black border-0 rotate-3">
                      {product.badge}
                    </Badge>
                  )}

                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#FFD700] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-[#FFD700]" style={{ fontFamily: "monospace" }}>
                        ${product.price}
                      </span>
                      <Button size="sm" className="bg-[#FFD700] text-black hover:bg-[#CD7F32] font-black border-0">
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Glitch effect on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent)",
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-12 text-[#FFD700]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            LA CALLE HABLA
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#2A2A2A] border-2 border-[#FFD700]/30 p-6 hover:border-[#FFD700] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-[#FFD700]"
                    />
                    <div>
                      <h4 className="font-black text-white">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#FFD700]">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Kits Section */}
      <section className="py-16 bg-gradient-to-b from-[#2A2A2A] to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-12 text-[#FFD700]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            STUDIO KITS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-black border-2 border-[#FFD700] p-8 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all">
                <Badge className="absolute top-4 right-4 bg-[#00FFFF] text-black font-black">AHORRA 20%</Badge>
                <h3 className="text-3xl font-black mb-4 text-[#FFD700]">STUDIO KIT</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">3 fragancias esenciales para tu colección</p>
                <div className="text-4xl font-black text-[#FFD700] mb-6" style={{ fontFamily: "monospace" }}>
                  $349
                </div>
                <Button className="w-full bg-[#FFD700] text-black hover:bg-[#CD7F32] font-black text-lg py-6">
                  CONSEGUIR KIT
                </Button>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-black border-2 border-[#FF00FF] p-8 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(255,0,255,0.4)] transition-all">
                <Badge className="absolute top-4 right-4 bg-[#FF00FF] text-white font-black">EXCLUSIVO</Badge>
                <h3 className="text-3xl font-black mb-4 text-[#FF00FF]">TOUR PACK</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Colección completa + estuche de viaje</p>
                <div className="text-4xl font-black text-[#FF00FF] mb-6" style={{ fontFamily: "monospace" }}>
                  $599
                </div>
                <Button className="w-full bg-[#FF00FF] text-white hover:bg-[#FF00FF]/80 font-black text-lg py-6">
                  CONSEGUIR PACK
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Promo */}
      <motion.div
        className="bg-[#FFD700] py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-black text-lg md:text-xl">🚀 ENVÍO GRATIS EN COMPRAS +$100</p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black border-t border-[#FFD700]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black text-[#FFD700] mb-4">RYTHME ESSENCE</h3>
              <p className="text-gray-400 leading-relaxed">La fusión perfecta entre el lujo y la cultura urbana.</p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">TRACKLIST</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Productos</li>
                <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Sobre Nosotros</li>
                <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">SÍGUENOS</h4>
              <div className="flex gap-4">
                {["IG", "TW", "TK"].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 bg-[#2A2A2A] hover:bg-[#FFD700] text-white hover:text-black font-black transition-all border-2 border-[#FFD700]/30 hover:border-[#FFD700]"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            © 2025 Rythme Essence. Tu Vibra, Tu Esencia, Tu Ritmo.
          </div>
        </div>
      </footer>
    </div>
  )
}

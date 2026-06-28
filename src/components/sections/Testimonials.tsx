"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Pre-Medical Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote: "The faculty here is incredibly supportive. The modern labs and practical approach to learning have thoroughly prepared me for medical college.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Computer Science Alumni",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "BFC Wah didn't just teach me how to code; it taught me how to think. The environment here fosters true innovation and critical thinking.",
    rating: 5,
  },
  {
    name: "Dr. Fatima Khan",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    quote: "I have seen a remarkable transformation in my son's confidence and academic performance since he joined. The character-building aspect is unparalleled.",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    role: "Pre-Engineering Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    quote: "The emphasis on conceptual learning rather than rote memorization is what sets this college apart. Highly recommended for aspiring engineers.",
    rating: 4,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              What Our Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ffdf6b]">Says</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-3"
          >
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 py-4">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-full flex flex-col relative group hover:bg-white/15 transition-colors duration-300">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10 group-hover:text-accent/20 transition-colors duration-300" />
                  
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 flex-1">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h4>
                      <p className="text-primary-foreground/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

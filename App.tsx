
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import InteractiveButton from './components/InteractiveButton';
import FeatureCard from './components/FeatureCard';
import { FEATURES, FAQS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30">
      <Background />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-56 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="reveal opacity-0 translate-y-12 transition-all duration-[1200ms] flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
            Premier Web Development Agency
          </div>
          <h1 className="text-6xl md:text-[9.5rem] font-extrabold tracking-tighter mb-10 leading-[0.85] text-shimmer">
            Design. Build. Scale.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mb-14 font-light leading-relaxed">
            We partner with ambitious companies to engineer world-class digital experiences. 
            Crafting the technical foundation for your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl bg-white/5 p-2.5 border border-white/10 rounded-full backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all hover:border-white/20 group">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="w-full sm:flex-1 px-8 py-3 bg-transparent text-white placeholder-neutral-500 focus:outline-none transition-all"
            />
            <InteractiveButton variant="primary" className="w-full sm:w-auto shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:scale-105">
              Start Project <span className="ml-2">→</span>
            </InteractiveButton>
          </div>
          
          <div className="mt-12 flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">Industry Standards</div>
             <div className="flex gap-10 items-center">
                <span className="font-extrabold text-xl tracking-tighter">FORBES</span>
                <span className="font-bold text-xl">stripe</span>
                <span className="font-bold text-xl tracking-tighter">Vercel</span>
             </div>
          </div>
        </div>

        {/* Centered Image Grid - Highly Intentional Motion */}
        <div className="mt-40 w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            <div className="reveal opacity-0 translate-y-12 transition-all duration-[1.5s] delay-300">
               <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" alt="Work 1" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                     <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Enterprise SaaS</span>
                     <h4 className="text-3xl font-extrabold tracking-tight">Data Intelligence Platform</h4>
                  </div>
               </div>
            </div>
            <div className="reveal opacity-0 translate-y-12 transition-all duration-[1.5s] delay-500 md:mt-20">
               <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-neutral-900">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt="Work 2" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                     <span className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-3">E-commerce</span>
                     <h4 className="text-3xl font-extrabold tracking-tight">Luxury Apparel Hub</h4>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="mb-28 reveal opacity-0 translate-y-12 transition-all duration-1000 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
            Our Expertise.
          </h2>
          <p className="text-neutral-400 max-w-2xl text-xl mb-12 font-light leading-relaxed">
            We provide specialized engineering and design services to help your brand dominate the digital landscape.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.6)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {FEATURES.map((feature, i) => (
            <div key={i} className="reveal opacity-0 translate-y-12 transition-all duration-1000" style={{ transitionDelay: `${i * 150}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-48 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32 reveal opacity-0 translate-y-12 transition-all duration-1000">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">Client Stories.</h2>
            <p className="text-neutral-500 text-xl font-light">Join the ranks of high-growth companies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal opacity-0 translate-y-12 transition-all duration-1000 bg-white/[0.02] p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-700 group hover:-translate-y-3 backdrop-blur-xl shadow-2xl" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 transition-all border-2 border-white/10" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] border-2 border-black">✓</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">{t.name}</h4>
                    <p className="text-sm text-blue-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <blockquote className="text-neutral-300 leading-relaxed text-xl italic opacity-70 group-hover:opacity-100 transition-opacity">
                  "{t.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-48 px-6 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-24 text-center tracking-tighter">Deep Dive.</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-white/[0.02] rounded-[2.5rem] border border-white/5 transition-all duration-500 open:bg-white/[0.06] overflow-hidden">
              <summary className="flex items-center justify-between p-12 cursor-pointer list-none select-none">
                <span className="text-2xl font-semibold text-neutral-300 group-hover:text-white transition-colors tracking-tight">{faq.question}</span>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-all group-open:rotate-45">
                   <span className="text-3xl text-neutral-500 group-hover:text-white">+</span>
                </div>
              </summary>
              <div className="px-12 pb-12 text-neutral-400 leading-relaxed text-xl border-t border-white/5 pt-8 animate-in slide-in-from-top-4 duration-500 font-light">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative py-72 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[250px] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 reveal opacity-0 translate-y-12 transition-all duration-1200 max-w-6xl">
          <h2 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter mb-20 leading-[0.8] text-shimmer">
            Build Tomorrow.
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <InteractiveButton variant="primary" className="!px-24 !py-7 !text-2xl shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:scale-105">
              Launch Now
            </InteractiveButton>
            <InteractiveButton variant="outline" className="!px-24 !py-7 !text-2xl backdrop-blur-md hover:bg-white/10">
              Our Methodology
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black/80 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-500">
              <div className="w-6 h-6 border-[4px] border-white rotate-45" />
            </div>
            <span className="font-extrabold text-3xl tracking-tighter uppercase">Lumina Studio</span>
          </div>

          <div className="text-center md:text-right">
             <p className="text-white text-xl font-bold mb-3 hover:text-blue-400 transition-colors cursor-pointer">excellence@luminastudio.com</p>
             <p className="text-xs text-neutral-600 uppercase tracking-[0.4em] font-bold">
                © 2025 Lumina Studio Inc. // Absolute Digital Excellence
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

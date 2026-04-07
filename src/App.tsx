import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail, MapPin, Calendar, Users, Clock, Instagram, Facebook, ChevronRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Sala Bankietowa "Fantazja"';
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className={`text-xs uppercase tracking-[0.3em] font-medium ${isScrolled ? 'text-gold' : 'text-white/80'}`}>Sala Bankietowa</span>
            <span className={`text-2xl font-serif font-bold italic ${isScrolled ? 'text-dark' : 'text-white'}`}>Fantazja</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold ${isScrolled ? 'text-dark' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-dark text-lg font-serif border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/490637435_1251941189696469_5833386580314765790_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2a1932&_nc_ohc=-ah5Y9qJNWoQ7kNvwG6byd8&_nc_oc=Adqt53rzUXrMTUIM61Xcab4Yglbe8CR4GwS2sJnv-KDoru4aUZf-tioqPlxDda_MMXU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=0z9fz3EwvVL7orMXqzdWRg&_nc_ss=7a3a8&oh=00_Af3Xr0jwB5ST7rvwOA2f6PIvnthojYgUM_PCLWGJLxK76g&oe=69D965B1"
          alt="Banquet Hall"
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.5em] font-medium mb-4 block">Witamy w Fantazji</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-white font-serif italic mb-8 leading-tight text-shadow-elegant">
            Twoje Wymarzone <br /> Przyjęcie
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Miejsce, w którym wyjątkowe chwile nabierają eleganckiej oprawy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#oferta" className="bg-gold text-white px-8 sm:px-10 py-4 rounded-full font-bold hover:bg-gold/90 transition-all shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
              Nasza Oferta <ChevronRight size={18} />
            </a>
            <a href="#kontakt" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 sm:px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center text-sm sm:text-base">
              Skontaktuj się
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="o-nas" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium uppercase tracking-widest mb-4 block">O nas</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Elegancja i Tradycja <br /> w Nowoczesnym Wydaniu
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sala Bankietowa Fantazja to miejsce stworzone z pasji do goszczenia. Położona w Konarach koło Kutna, oferuje przestronne, klimatyzowane wnętrza, które dostosowujemy do indywidualnych potrzeb naszych gości.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Naszym priorytetem jest wyśmienita kuchnia, profesjonalna obsługa i dbałość o każdy, nawet najmniejszy detal. Sprawiamy, że każda uroczystość staje się wyjątkowym wydarzeniem, które na długo pozostaje w pamięci.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg text-gold">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Do 150 osób</h4>
                  <p className="text-xs text-gray-500">Komfortowa przestrzeń</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg text-gold">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Wszystkie okazje</h4>
                  <p className="text-xs text-gray-500">Pełna elastyczność</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/511359016_1309801897243731_1962121950422840858_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3HJgrct58E4Q7kNvwE6tTkO&_nc_oc=Adphh6t8VZWnqAfwG4eT7XjW6yr4MAO_uoSvRFjdoSaC4-E0KM6kut2pJiEKD0B7PX0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4tSmvhLD1T8xzgGio4jFYw&_nc_ss=7a3a8&oh=00_Af14Vd6J5dHApkrSQKlwB1XGjZ703njLFNeTljNgafxjXQ&oe=69D98B30"
                alt="Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-gold rounded-2xl -z-0 opacity-20" />
            <div className="absolute -top-6 -left-6 w-1/3 aspect-square border-2 border-gold rounded-2xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Wesela',
      desc: 'Kompleksowa organizacja przyjęć weselnych z dbałością o najmniejszy szczegół.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Komunie i Chrzciny',
      desc: 'Rodzinna atmosfera i menu dostosowane do potrzeb najmłodszych gości.',
      img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Imprezy Okolicznościowe',
      desc: 'Profesjonalne zaplecze dla imprez okolicznościowych, bankietów i integracji.',
      img: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="oferta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest mb-4 block">Nasze Usługi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Co Organizujemy?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif italic">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/548204130_1387305916159995_1295445510341747007_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_ZrgHTDxrJsQ7kNvwF9jt1F&_nc_oc=Adrq39uvWanDYXzaZq1vhIlcHbcpj40l3XhQgxGbvgo8fxxETQ_TLS_RUY9PUo0-JlE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=QllYIHUs0WNJ5MGTqoze-Q&_nc_ss=7a3a8&oh=00_Af3YJm1DzmfzazqasvQMv1L8swe-k8LAs-CODKTMYp9QoA&oe=69D96C65',
    'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/548045181_1387305759493344_3292912561654955635_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vm-zE3_WgwwQ7kNvwFmFXDo&_nc_oc=AdqfrJv_IpRYBWTHYnVytkqnI4IUoltC581aaVpNHp3W-YFZ04ftTJTYWgfyQ_91Hjo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=2sS9IjpKUiZ3hIeBp0Lcvw&_nc_ss=7a3a8&oh=00_Af0eGx_GIyC63X9kC-IeMMRniesG9f_9kOwjnZzjrKb0xg&oe=69D96A13',
    'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/548207977_1387305372826716_7668783282607023527_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ABRwr8EkfY8Q7kNvwF_1quY&_nc_oc=AdqZ-4UDslvpj8sog1w4W_g4PxsnBZwK9N3rTisbxv4LcyadXup3nHRnEOQvK6gn8D8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=gAILqgLg0hbkozeJYyCcIQ&_nc_ss=7a3a8&oh=00_Af38kHZ0JeTRjPgGwcLEhfkloDQt5tQyM3xv00O6TIE2cQ&oe=69D9757A',
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/544915512_1380463676844219_3064465496276638191_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8-pHitBhAsgQ7kNvwHEXc7G&_nc_oc=Adqbu_kH_0A2V0e6QV6c2HYPyigySpcRyQhMVGE_VFfikZXUnacnMfZBqC-zZFyeN9E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RV0oqo2ox6gfBL7BtsSO4Q&_nc_ss=7a3a8&oh=00_Af1RT1x_hEiSRjxgt9pm7pc8lTzNI2r_bgr8H1KNKjuxBA&oe=69D96D51',
    'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/510103639_1310701280487126_3275662957531525945_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=anvGRMaInykQ7kNvwEyUbLw&_nc_oc=AdpPSb397QGMtkVfr2N5YyDFptZXY7WcNqGEk5DbiW5R4cF7BkykkfK9rJs1NsfVUSo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=EFH1qbxNv9XnrSyZ5aNpgA&_nc_ss=7a3a8&oh=00_Af1CHoAlXZR8XAyBzmTuAO_vyfq50S8ymJ613m3O54HHZw&oe=69D96EAC',
    'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/510961913_1309802627243658_5438805143096673911_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IQut_RjmyXwQ7kNvwELvRM0&_nc_oc=Adqk6WeGTpLR8yVrFZspfQIby8nt5d1X-AHqBpmnqVqnmG4-XsBQbFV08iS_P_zEzb0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ETrzi1WOdK1_KayNN6eoEQ&_nc_ss=7a3a8&oh=00_Af3clnI37sSZPN878OVf1VrvQbp2UaN15UqxPj1iztJQDQ&oe=69D979A8',
  ];

  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest mb-4 block">Galeria</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">Zobacz Nasze Wnętrza</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="opinie" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-sm"
          >
            Nasze Referencje
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic mt-4 text-dark"
          >
            Opinie naszych Gości
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
              "Najlepsza sala w okolicy! Jedzenie przepyszne, obsługa na najwyższym poziomie, a wystrój zapiera dech w piersiach. Nasze wesele było dokładnie takie, jak sobie wymarzyliśmy."
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <h4 className="font-bold text-dark">Marta i Tomasz</h4>
                <p className="text-gray-500 text-sm">Wesele, Lipiec 2024</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/SalaBankietowaFantazja/reviews/?id=100046418004395&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 md:px-8 py-4 rounded-full font-bold hover:bg-[#166fe5] transition-all shadow-lg w-full sm:w-auto text-sm md:text-base"
            >
              <Facebook size={20} />
              Zobacz wszystkie opinie na Facebooku
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-[500px] overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSalaBankietowaFantazja%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Plugin"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium uppercase tracking-widest mb-4 block">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8">Zaplanujmy Razem Twoje Wydarzenie</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="bg-gold text-white p-3 sm:p-4 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Telefon</p>
                  <a href="tel:532841084" className="text-lg sm:text-xl font-bold hover:text-gold transition-colors">532 841 084</a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="bg-gold text-white p-3 sm:p-4 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:salabankietowafantazja@gmail.com" className="text-lg md:text-xl font-bold hover:text-gold transition-colors break-all">salabankietowafantazja@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="bg-gold text-white p-3 sm:p-4 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Adres</p>
                  <p className="text-lg sm:text-xl font-bold">Konary 24, Kutno, Polska</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 flex gap-4">
              <a 
                href="https://www.facebook.com/SalaBankietowaFantazja/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 sm:p-4 rounded-full text-dark hover:bg-gold hover:text-white transition-all"
              >
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative"
          >
            {/* Mock Map Placeholder */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover opacity-50 grayscale"
                alt="Map Background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8">
                <MapPin size={48} className="text-gold mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-serif italic mb-2">Znajdź nas w Konarach</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">Tylko 10 minut od centrum Kutna</p>
                <a 
                  href="https://maps.app.goo.gl/4SoqdD3tEoYLTCYp8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gold transition-all text-sm sm:text-base"
                >
                  Otwórz w Mapach Google
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Sala Bankietowa</span>
              <span className="text-3xl font-serif font-bold italic">Fantazja</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Miejsce, gdzie marzenia o idealnym przyjęciu stają się rzeczywistością. Zapraszamy do kontaktu i rezerwacji terminów.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Nawigacja</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#o-nas" className="hover:text-gold transition-colors">O nas</a></li>
              <li><a href="#oferta" className="hover:text-gold transition-colors">Oferta</a></li>
              <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#opinie" className="hover:text-gold transition-colors">Opinie</a></li>
              <li><a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Godziny Kontaktu</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Pon - Pt:</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sobota:</span> <span>10:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Niedziela:</span> <span>Zamknięte</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sala Bankietowa Fantazja. Wszelkie prawa zastrzeżone.</p>
          <p>Projekt i realizacja: Sala Fantazja</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

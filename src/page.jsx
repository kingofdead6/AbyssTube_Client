import { motion } from 'framer-motion';


const Hero = () => {
  const fadeInDown = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  };

  const fadeIn = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
  };

  const boxAnimation = {
    animate: {
      x: [0, 20, -20, 0],
      y: [0, -30, 30, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const stars = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}`, 
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 overflow-hidden">
      <style>{styles}</style>

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl shadow-neon-purple"
          variants={boxAnimation}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl shadow-neon-purple"
          variants={boxAnimation}
          animate="animate"
          transition={{ ...boxAnimation.animate.transition, delay: 2 }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-3/4 h-3/4 border-4 border-purple-500 rounded-lg shadow-2xl transform rotate-1 opacity-30 shadow-neon-purple"
          whileHover={{ scale: 1.02, opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="w-3/4 h-3/4 border-4 border-gray-400 rounded-lg shadow-2xl transform -rotate-1 opacity-30 shadow-neon-purple"
          whileHover={{ scale: 1.02, opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white text-center mb-6 shadow-neon-purple title-hover-effect"
          initial={fadeInDown.initial}
          animate={fadeInDown.animate}
          transition={fadeInDown.transition}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.4, ease: 'easeOut' },
          }}
        >
          <span className="text-purple-500 transition-colors duration-300 hover:text-purple-300">Abyss</span>
          <span className="relative">
            Tube
            <span className="absolute -top-4 -right-4 text-2xl text-purple-500 animate-bounce shadow-neon-purple transition-transform duration-300 hover:scale-125">🎥</span>
            <span className="title-particle" style={{ top: '20%', left: '10%' }}></span>
            <span className="title-particle" style={{ top: '70%', left: '80%' }}></span>
            <span className="title-particle" style={{ bottom: '10%', right: '20%' }}></span>
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 text-center mb-10 max-w-2xl shadow-neon-purple"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
          whileHover={{ scale: 1.03, color: '#fff', transition: { duration: 0.3 } }}
        >
          Download your favorite YouTube videos in a snap - fast, free, and fabulous!
        </motion.p>

        <motion.div
          className="w-full max-w-xl flex flex-col gap-6"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.input
              type="text"
              placeholder="Paste YouTube URL here..."
              className="flex-grow p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-500 shadow-neon-purple text-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
                padding: "1.25rem"
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.input
              type="text"
              placeholder="Enter desired file name..."
              className="flex-grow p-4 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-500 shadow-neon-purple text-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
                padding: "1.25rem"
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.button 
              className="px-8 py-4 text-white font-semibold rounded-lg shadow-neon-purple cursor-pointer download-button text-lg"
              whileHover={{ 
                scale: 1.1, 
                rotate: 3,
                transition: { duration: 0.4 }
              }}
            >
              <span>Download Now</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          {[
            { icon: "⚡", text: "Lightning Fast" },
            { icon: "🎨", text: "Multiple Formats" },
            { icon: "🆓", text: "100% Free" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm shadow-neon-purple"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(107, 114, 128, 0.7)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = `
 .w-3/4 {
      width: 90%;
    }

  .h-3/4 {
    height: 90%;
  }
`;
export default Hero;
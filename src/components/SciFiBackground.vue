<template>
  <div class="sci-fi-bg">
    <!-- Animated grid background -->
    <div class="bg-grid"></div>
    
    <!-- Floating particles -->
    <div class="particles">
      <div v-for="n in 30" :key="n" class="particle" :style="getParticleStyle(n)"></div>
    </div>
    
    <!-- Glowing orbs -->
    <div class="orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    
    <!-- Scan line -->
    <div class="scan-line"></div>
  </div>
</template>

<script setup>
const getParticleStyle = (n) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 10}s`,
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
  }
}
</script>

<style scoped>
.sci-fi-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0f 0%, #0f1119 50%, #0a0a0f 100%);
}

/* Animated Grid */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
  100% { transform: perspective(500px) rotateX(60deg) translateY(60px); }
}

/* Particles */
.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.8), transparent);
  border-radius: 50%;
  animation: floatParticle linear infinite;
  opacity: 0.6;
}

@keyframes floatParticle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

/* Glowing Orbs */
.orbs {
  position: absolute;
  inset: 0;
  filter: blur(100px);
}

.orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: orbFloat 10s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--color-cyan);
  top: 10%;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--color-purple);
  top: 50%;
  right: -50px;
  animation-delay: -3s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: var(--color-blue);
  bottom: 10%;
  left: 30%;
  animation-delay: -6s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -30px) scale(1.1); }
  50% { transform: translate(20px, 30px) scale(0.9); }
  75% { transform: translate(-30px, 20px) scale(1.05); }
}

/* Scan Line */
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-cyan), transparent);
  opacity: 0.3;
  animation: scanScreen 6s linear infinite;
}

@keyframes scanScreen {
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
}
</style>

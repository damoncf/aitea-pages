<template>
  <header class="cyber-header">
    <div class="cyber-container header-inner">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
            <circle cx="20" cy="20" r="8" fill="currentColor"/>
            <path d="M20 2 L20 10 M20 30 L20 38 M2 20 L10 20 M30 20 L38 20" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-brand">国仪量子</span>
          <span class="logo-sub">CIQTEK</span>
        </div>
      </router-link>
      
      <!-- Navigation -->
      <nav class="nav-desktop" :class="{ 'nav-open': mobileMenuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          <span class="nav-bracket">[</span>
          <span class="nav-text">{{ item.name }}</span>
          <span class="nav-bracket">]</span>
        </router-link>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
      </button>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="mobile-overlay" @click="mobileMenuOpen = false"></div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '应用领域', path: '/applications' },
  { name: '关于我们', path: '/about' },
  { name: '新闻动态', path: '/news' },
  { name: '联系我们', path: '/contact' },
]
</script>

<style scoped>
.cyber-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-cyan);
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.logo-icon svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px var(--color-cyan-glow));
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-brand {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.logo-sub {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  letter-spacing: 0.2em;
  color: var(--color-text-secondary);
}

/* Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav-link {
  position: relative;
  padding: var(--space-xs) var(--space-sm);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.nav-bracket {
  color: var(--color-cyan-dim);
  transition: color var(--transition-fast);
}

.nav-text {
  margin: 0 4px;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-cyan);
}

.nav-link:hover .nav-bracket,
.nav-link.active .nav-bracket {
  color: var(--color-cyan);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-cyan);
  transition: all var(--transition-normal);
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-toggle span {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-cyan);
  transition: all var(--transition-normal);
}

.mobile-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle span.open:nth-child(2) {
  opacity: 0;
}

.mobile-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  inset: 80px 0 0 0;
  background: rgba(0, 0, 0, 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-desktop {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: var(--space-lg);
    background: rgba(10, 10, 15, 0.98);
    border-bottom: 1px solid var(--color-cyan-dim);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-normal);
  }
  
  .nav-desktop.nav-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .nav-link {
    padding: var(--space-md);
    font-size: 1rem;
  }
}
</style>

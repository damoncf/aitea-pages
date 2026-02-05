<template>
  <footer class="cyber-footer">
    <div class="cyber-container">
      <!-- Top Section -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
              <circle cx="20" cy="20" r="8" fill="currentColor"/>
              <path d="M20 2 L20 10 M20 30 L20 38 M2 20 L10 20 M30 20 L38 20" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>国仪量子</span>
          </div>
          <p class="footer-tagline">用量子技术感知世界</p>
        </div>
        
        <div class="footer-links">
          <div v-for="(section, idx) in footerSections" :key="idx" class="footer-section">
            <h4>{{ section.title }}</h4>
            <ul>
              <li v-for="link in section.links" :key="link.path">
                <router-link :to="link.path">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="tech-line"></div>
      
      <!-- Bottom Section -->
      <div class="footer-bottom">
        <p class="copyright">© 2024 CIQTEK 国仪量子. All rights reserved.</p>
        <div class="footer-info">
          <span>皖ICP备XXXXXXXX号</span>
          <span class="divider">|</span>
          <span>量子科技 改变世界</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerSections = [
  {
    title: '产品中心',
    links: [
      { name: '自旋共振系列', path: '/products' },
      { name: '电子显微镜系列', path: '/products' },
      { name: '油气勘探系列', path: '/products' },
      { name: '微弱信号测量', path: '/products' },
    ]
  },
  {
    title: '应用领域',
    links: [
      { name: '量子科技', path: '/applications' },
      { name: '材料科学', path: '/applications' },
      { name: '化学化工', path: '/applications' },
      { name: '生物医学', path: '/applications' },
    ]
  },
  {
    title: '关于我们',
    links: [
      { name: '公司介绍', path: '/about' },
      { name: '新闻动态', path: '/news' },
      { name: '加入我们', path: '/contact' },
      { name: '联系方式', path: '/contact' },
    ]
  }
]
</script>

<style scoped>
.cyber-footer {
  position: relative;
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-cyan-dim);
  padding: var(--space-xxl) 0 var(--space-lg);
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-cyan);
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-logo svg {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 10px var(--color-cyan-glow));
}

.footer-tagline {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.footer-section h4 {
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-cyan-dim);
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: var(--space-xs);
}

.footer-section a {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: var(--color-cyan);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-lg);
}

.copyright {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.footer-info .divider {
  color: var(--color-cyan-dim);
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
}
</style>

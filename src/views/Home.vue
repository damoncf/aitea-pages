<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-grid grid-pattern"></div>
      <div class="cyber-container hero-content">
        <div class="hero-text">
          <div class="hero-tag">
            <span class="pulse">●</span>
            量子科技领导者
          </div>
          
          <h1 class="hero-title">
            <span class="gradient-text">用量子技术</span>
            <br />
            <span class="glitch-text" data-text="感知世界">感知世界</span>
          </h1>
          
          <p class="hero-desc">
            国仪量子（CIQTEK）专注于量子精密测量和高端科学仪器，
            <br />
            以量子技术赋能科学探索，助力人类未来发展。
          </p>
          
          <div class="hero-actions">
            <router-link to="/products" class="cyber-btn cyber-btn-primary">
              <span>探索产品</span>
            </router-link>
            <router-link to="/about" class="cyber-btn">
              <span>了解我们</span>
            </router-link>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="quantum-orb">
            <div class="orb-core"></div>
            <div class="orb-ring orb-ring-1"></div>
            <div class="orb-ring orb-ring-2"></div>
            <div class="orb-ring orb-ring-3"></div>
            <div class="orb-particles">
              <div v-for="n in 12" :key="n" class="orb-particle" :style="{ animationDelay: `${n * 0.2}s` }"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-stats">
        <div class="cyber-container stats-grid">
          <div v-for="stat in heroStats" :key="stat.label" class="stat-item">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Products Section -->
    <section class="section products-section">
      <div class="cyber-container">
        <div class="section-header">
          <span class="section-tag">Product Center</span>
          <h2 class="cyber-title">产品中心</h2>
          <p class="section-desc">基于量子技术的精密测量仪器，服务全球科研与工业</p>
        </div>
        
        <div class="cyber-grid cyber-grid-4">
          <div v-for="product in products" :key="product.name" class="cyber-card product-card">
            <div class="product-icon">
              <svg v-if="product.icon === 'atom'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
              </svg>
              <svg v-else-if="product.icon === 'scope'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="8"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="12" x2="15" y2="15"/>
                <line x1="21" y1="21" x2="15.8" y2="15.8"/>
              </svg>
              <svg v-else-if="product.icon === 'oil'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 22h20L12 2z"/>
                <path d="M12 6l-6 12h12L12 6z" fill="currentColor" opacity="0.5"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12h4M18 12h4"/>
                <path d="M12 2v4M12 18v4"/>
                <circle cx="12" cy="12" r="6"/>
                <path d="M12 8v8M8 12h8" opacity="0.5"/>
              </svg>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.desc }}</p>
            <router-link :to="product.path" class="product-link">
              了解更多 →
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Applications Section -->
    <section class="section applications-section">
      <div class="cyber-container">
        <div class="section-header">
          <span class="section-tag">Applications</span>
          <h2 class="cyber-title">应用领域</h2>
          <p class="section-desc">量子技术赋能七大核心领域</p>
        </div>
        
        <div class="apps-grid">
          <div v-for="(app, idx) in applications" :key="app.name" 
               class="app-item" 
               :class="{ 'app-large': idx < 2 }"
               :style="{ backgroundImage: `linear-gradient(135deg, rgba(10,10,15,0.9), rgba(10,10,15,0.7)), ${app.gradient}` }">
            <div class="app-content">
              <div class="app-icon">{{ app.emoji }}</div>
              <h3>{{ app.name }}</h3>
              <p>{{ app.desc }}</p>
            </div>
            <div class="app-glow"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Preview Section -->
    <section class="section about-section">
      <div class="cyber-container">
        <div class="about-grid">
          <div class="about-content">
            <span class="section-tag">About CIQTEK</span>
            <h2 class="cyber-title">关于国仪量子</h2>
            <div class="about-text">
              <p>国仪量子（合肥）技术有限公司，以量子精密测量为核心技术，为全球客户提供先进的科学仪器和解决方案。</p>
              <p>我们致力于<strong>帮助客户更高效推动技术的发展，探索并创造人类的未来</strong>，愿景是成为量子技术应用及科学仪器行业的全球领导者。</p>
            </div>
            
            <div class="tech-tags">
              <span v-for="tech in coreTechs" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            
            <router-link to="/about" class="cyber-btn">
              <span>了解详情</span>
            </router-link>
          </div>
          
          <div class="about-stats">
            <div v-for="stat in aboutStats" :key="stat.label" class="stat-card">
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-desc">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cyber-container">
        <div class="cyber-frame cta-box">
          <div class="cta-content">
            <h2>开启量子科技之旅</h2>
            <p>与国仪量子一起，探索量子技术的无限可能</p>
            <router-link to="/contact" class="cyber-btn cyber-btn-primary">
              <span>联系我们</span>
            </router-link>
          </div>
          <div class="cta-decoration"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const heroStats = [
  { value: '100+', label: '专利数量' },
  { value: '50+', label: '服务国家' },
  { value: '1000+', label: '客户数量' },
  { value: '4', label: '核心技术' },
]

const products = [
  { 
    name: '自旋共振系列', 
    desc: '量子精密测量核心设备，纳米级磁场探测',
    path: '/products',
    icon: 'atom'
  },
  { 
    name: '电子显微镜系列', 
    desc: '高分辨电子显微分析系统',
    path: '/products',
    icon: 'scope'
  },
  { 
    name: '油气勘探系列', 
    desc: '量子传感油气探测解决方案',
    path: '/products',
    icon: 'oil'
  },
  { 
    name: '微弱信号测量', 
    desc: '超灵敏信号检测与分析设备',
    path: '/products',
    icon: 'signal'
  },
]

const applications = [
  { name: '量子科技', emoji: '⚛️', desc: '量子计算与量子通信', gradient: 'linear-gradient(135deg, #00f0ff, #0066ff)' },
  { name: '材料科学', emoji: '🔬', desc: '新材料研发与表征', gradient: 'linear-gradient(135deg, #9d00ff, #ff0066)' },
  { name: '化学化工', emoji: '⚗️', desc: '催化机理研究', gradient: 'linear-gradient(135deg, #00ff88, #00f0ff)' },
  { name: '工业领域', emoji: '🏭', desc: '无损检测与质量控制', gradient: 'linear-gradient(135deg, #ff6b35, #ff0066)' },
  { name: '科学教育', emoji: '🎓', desc: '教学与科研平台', gradient: 'linear-gradient(135deg, #0066ff, #9d00ff)' },
  { name: '能源勘探', emoji: '⛽', desc: '油气资源探测', gradient: 'linear-gradient(135deg, #ffcc00, #ff6b35)' },
  { name: '生物医学', emoji: '🧬', desc: '生命科学研究', gradient: 'linear-gradient(135deg, #00ff88, #00cc66)' },
]

const coreTechs = [
  '高保真量子态调控技术',
  '高灵敏度磁探测技术',
  '微波收发技术',
  '高精度扫描钻石探针技术'
]

const aboutStats = [
  { value: '2016', label: '成立年份' },
  { value: '500+', label: '团队成员' },
  { value: 'A股', label: '上市板块' },
]
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
  padding: var(--space-xxl) 0;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  margin-bottom: var(--space-lg);
}

.hero-tag .pulse {
  color: #00ff88;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
}

.gradient-text {
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glitch-text {
  position: relative;
  color: var(--color-text-primary);
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  color: var(--color-cyan);
  animation: glitch-1 2s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch-text::after {
  color: var(--color-purple);
  animation: glitch-2 2s infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-3px, 2px); }
  94% { transform: translate(3px, -2px); }
  96% { transform: translate(-2px, 0); }
}

@keyframes glitch-2 {
  0%, 90%, 100% { transform: translate(0); }
  91% { transform: translate(2px, -3px); }
  93% { transform: translate(-2px, 3px); }
  95% { transform: translate(3px, 1px); }
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Quantum Orb */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantum-orb {
  position: relative;
  width: 300px;
  height: 300px;
}

.orb-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, var(--color-cyan), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 60px var(--color-cyan-glow);
  animation: pulse-core 2s ease-in-out infinite;
}

@keyframes pulse-core {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.orb-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.orb-ring-1 {
  width: 120px;
  height: 120px;
  border-color: var(--color-cyan-dim);
  animation: rotate-ring 8s linear infinite;
}

.orb-ring-2 {
  width: 180px;
  height: 180px;
  border-color: var(--color-blue-dim);
  border-style: dashed;
  animation: rotate-ring-reverse 12s linear infinite;
}

.orb-ring-3 {
  width: 260px;
  height: 260px;
  border-color: var(--color-purple-dim);
  animation: rotate-ring 16s linear infinite;
}

@keyframes rotate-ring {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes rotate-ring-reverse {
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
}

.orb-particles {
  position: absolute;
  inset: 0;
}

.orb-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: var(--color-cyan);
  border-radius: 50%;
  animation: orbit 4s linear infinite;
}

@keyframes orbit {
  from { 
    transform: rotate(0deg) translateX(130px) rotate(0deg); 
  }
  to { 
    transform: rotate(360deg) translateX(130px) rotate(-360deg); 
  }
}

/* Hero Stats */
.hero-stats {
  position: relative;
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-cyan-dim);
  background: linear-gradient(180deg, transparent, rgba(0, 240, 255, 0.02));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-cyan);
  font-family: var(--font-mono);
  text-shadow: 0 0 20px var(--color-cyan-glow);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-top: var(--space-xs);
}

/* Products Section */
.products-section {
  background: linear-gradient(180deg, var(--color-bg-primary), var(--color-bg-secondary));
}

.product-card {
  text-align: center;
  position: relative;
}

.product-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--space-md);
  background: linear-gradient(135deg, var(--color-cyan-dim), var(--color-blue-dim));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.product-card h3 {
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  font-size: 1.1rem;
}

.product-card p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--space-md);
}

.product-link {
  color: var(--color-cyan);
  font-size: 0.85rem;
  font-family: var(--font-mono);
  transition: all var(--transition-fast);
}

.product-link:hover {
  text-shadow: 0 0 10px var(--color-cyan-glow);
}

/* Applications Section */
.applications-section {
  background: var(--color-bg-secondary);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: var(--space-md);
}

.app-item {
  position: relative;
  padding: var(--space-lg);
  border: 1px solid var(--color-cyan-dim);
  border-radius: 8px;
  overflow: hidden;
  transition: all var(--transition-normal);
  display: flex;
  align-items: flex-end;
}

.app-item.app-large {
  grid-column: span 2;
}

.app-item:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
}

.app-content {
  position: relative;
  z-index: 1;
}

.app-icon {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.app-item h3 {
  color: var(--color-text-primary);
  font-size: 1.2rem;
  margin-bottom: var(--space-xs);
}

.app-item p {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.app-glow {
  position: absolute;
  top: 50%;
  right: -50px;
  width: 150px;
  height: 150px;
  background: var(--color-cyan);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.1;
  transition: opacity var(--transition-normal);
}

.app-item:hover .app-glow {
  opacity: 0.2;
}

/* About Section */
.about-section {
  background: var(--color-bg-primary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxl);
  align-items: center;
}

.about-text p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.8;
}

.about-text strong {
  color: var(--color-cyan);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin: var(--space-lg) 0;
}

.tech-tag {
  padding: var(--space-xs) var(--space-md);
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-cyan);
  font-size: 0.85rem;
  font-family: var(--font-mono);
  border-radius: 4px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.stat-card {
  padding: var(--space-lg);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  text-align: center;
  transition: all var(--transition-normal);
}

.stat-card:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-cyan);
  font-family: var(--font-mono);
}

.stat-desc {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-top: var(--space-xs);
}

/* CTA Section */
.cta-section {
  padding: var(--space-xxl) 0;
  background: linear-gradient(180deg, var(--color-bg-primary), var(--color-bg-secondary));
}

.cta-box {
  padding: var(--space-xxl);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-content p {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  margin-bottom: var(--space-xl);
}

.cta-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.1), transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .quantum-orb {
    width: 200px;
    height: 200px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  
  .app-item.app-large {
    grid-column: span 2;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .apps-grid {
    grid-template-columns: 1fr;
  }
  
  .app-item.app-large {
    grid-column: span 1;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 1.8rem;
  }
}
</style>

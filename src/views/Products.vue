<template>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="cyber-container">
        <div class="page-header">
          <span class="section-tag">Product Center</span>
          <h1 class="cyber-title">产品中心</h1>
          <p class="page-desc">基于量子技术的精密测量仪器，为科学研究和工业应用提供领先的解决方案</p>
        </div>
      </div>
    </section>
    
    <!-- Product Categories -->
    <section class="section">
      <div class="cyber-container">
        <!-- Category: EPR/ESR -->
        <div class="product-category">
          <div class="category-header">
            <div class="category-icon">⚛️</div>
            <div class="category-info">
              <h2>自旋共振系列</h2>
              <p>EPR/ESR 电子顺磁共振波谱仪</p>
            </div>
          </div>
          
          <div class="products-grid">
            <div v-for="product in eprProducts" :key="product.model" class="product-item">
              <div class="product-image">
                <div class="image-placeholder">
                  <div class="placeholder-content">
                    <div class="device-frame">
                      <div class="device-screen">
                        <div class="screen-data">
                          <span class="data-line">{{ product.model }}</span>
                        </div>
                      </div>
                      <div class="device-lights">
                        <span v-for="n in 4" :key="n" class="light"></span>
                      </div>
                    </div>
                  </div>
                  <div class="corner-tl cyber-corner cyber-corner-tl"></div>
                  <div class="corner-tr cyber-corner cyber-corner-tr"></div>
                  <div class="corner-bl cyber-corner cyber-corner-bl"></div>
                  <div class="corner-br cyber-corner cyber-corner-br"></div>
                </div>
              </div>
              
              <div class="product-details">
                <h3>{{ product.name }}</h3>
                <div class="model-tag">{{ product.model }}</div>
                <p>{{ product.description }}</p>
                
                <div class="specs-preview">
                  <div v-for="spec in product.specs" :key="spec.label" class="spec-item">
                    <span class="spec-label">{{ spec.label }}</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
                
                <button class="cyber-btn">
                  <span>查看详情</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category: Electron Microscopy -->
        <div class="product-category">
          <div class="category-header">
            <div class="category-icon">🔬</div>
            <div class="category-info">
              <h2>电子显微镜系列</h2>
              <p>高分辨场发射扫描电子显微镜</p>
            </div>
          </div>
          
          <div class="products-grid">
            <div v-for="product in semProducts" :key="product.model" class="product-item">
              <div class="product-image">
                <div class="image-placeholder sem-style">
                  <div class="placeholder-content">
                    <div class="microscope-icon">🔬</div>
                    <div class="model-badge">{{ product.model }}</div>
                  </div>
                  <div class="corner-tl cyber-corner cyber-corner-tl"></div>
                  <div class="corner-tr cyber-corner cyber-corner-tr"></div>
                  <div class="corner-bl cyber-corner cyber-corner-bl"></div>
                  <div class="corner-br cyber-corner cyber-corner-br"></div>
                </div>
              </div>
              
              <div class="product-details">
                <h3>{{ product.name }}</h3>
                <div class="model-tag">{{ product.model }}</div>
                <p>{{ product.description }}</p>
                
                <div class="specs-preview">
                  <div v-for="spec in product.specs" :key="spec.label" class="spec-item">
                    <span class="spec-label">{{ spec.label }}</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
                
                <button class="cyber-btn">
                  <span>查看详情</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category: Oil & Gas -->
        <div class="product-category">
          <div class="category-header">
            <div class="category-icon">🛢️</div>
            <div class="category-info">
              <h2>油气勘探系列</h2>
              <p>量子精密测量油气勘探解决方案</p>
            </div>
          </div>
          
          <div class="products-grid">
            <div v-for="product in oilProducts" :key="product.model" class="product-item">
              <div class="product-image">
                <div class="image-placeholder oil-style">
                  <div class="placeholder-content">
                    <div class="oil-rig-icon">🛢️</div>
                    <div class="wave-animation">
                      <span v-for="n in 5" :key="n"></span>
                    </div>
                  </div>
                  <div class="corner-tl cyber-corner cyber-corner-tl"></div>
                  <div class="corner-tr cyber-corner cyber-corner-tr"></div>
                  <div class="corner-bl cyber-corner cyber-corner-bl"></div>
                  <div class="corner-br cyber-corner cyber-corner-br"></div>
                </div>
              </div>
              
              <div class="product-details">
                <h3>{{ product.name }}</h3>
                <div class="model-tag">{{ product.model }}</div>
                <p>{{ product.description }}</p>
                
                <div class="specs-preview">
                  <div v-for="spec in product.specs" :key="spec.label" class="spec-item">
                    <span class="spec-label">{{ spec.label }}</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
                
                <button class="cyber-btn">
                  <span>查看详情</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category: Weak Signal -->
        <div class="product-category">
          <div class="category-header">
            <div class="category-icon">📡</div>
            <div class="category-info">
              <h2>微弱信号测量系列</h2>
              <p>超高灵敏度信号检测与分析</p>
            </div>
          </div>
          
          <div class="products-grid">
            <div v-for="product in signalProducts" :key="product.model" class="product-item">
              <div class="product-image">
                <div class="image-placeholder signal-style">
                  <div class="placeholder-content">
                    <div class="signal-waves">
                      <div v-for="n in 3" :key="n" class="wave-ring"></div>
                    </div>
                    <div class="frequency-display">{{ product.model }}</div>
                  </div>
                  <div class="corner-tl cyber-corner cyber-corner-tl"></div>
                  <div class="corner-tr cyber-corner cyber-corner-tr"></div>
                  <div class="corner-bl cyber-corner cyber-corner-bl"></div>
                  <div class="corner-br cyber-corner cyber-corner-br"></div>
                </div>
              </div>
              
              <div class="product-details">
                <h3>{{ product.name }}</h3>
                <div class="model-tag">{{ product.model }}</div>
                <p>{{ product.description }}</p>
                
                <div class="specs-preview">
                  <div v-for="spec in product.specs" :key="spec.label" class="spec-item">
                    <span class="spec-label">{{ spec.label }}</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
                
                <button class="cyber-btn">
                  <span>查看详情</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Tech Features Section -->
    <section class="section tech-features">
      <div class="cyber-container">
        <div class="section-header">
          <span class="section-tag">Core Technology</span>
          <h2 class="cyber-title">核心技术优势</h2>
        </div>
        
        <div class="features-grid">
          <div v-for="feature in techFeatures" :key="feature.title" class="feature-card">
            <div class="feature-number">0{{ feature.id }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
            <div class="feature-line"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const eprProducts = [
  {
    name: 'X波段脉冲式电子顺磁共振谱仪',
    model: 'EPR100',
    description: '高灵敏度脉冲EPR系统，适用于量子计算、催化机理、材料科学等领域的研究。',
    specs: [
      { label: '灵敏度', value: '10⁹ spins/G' },
      { label: '分辨率', value: '≤ 50 mG' },
      { label: '频率', value: '9.2-9.9 GHz' },
    ]
  },
  {
    name: 'X波段连续波电子顺磁共振谱仪',
    model: 'EPR200',
    description: '高性价比连续波EPR系统，适用于常规顺磁性样品检测。',
    specs: [
      { label: '灵敏度', value: '5×10⁹ spins/G' },
      { label: '磁场', value: '0-1.2 T' },
      { label: '温控', value: '4-500 K' },
    ]
  },
  {
    name: '台式电子顺磁共振波谱仪',
    model: 'EPR50',
    description: '紧凑型台式EPR系统，适合教学和常规检测应用。',
    specs: [
      { label: '灵敏度', value: '10¹⁰ spins/G' },
      { label: '尺寸', value: '台式设计' },
      { label: '应用', value: '教学/检测' },
    ]
  },
]

const semProducts = [
  {
    name: '场发射扫描电子显微镜',
    model: 'SEM5000',
    description: '超高分辨场发射电镜，纳米级成像与成分分析一体化解决方案。',
    specs: [
      { label: '分辨率', value: '0.6 nm @ 15kV' },
      { label: '放大倍数', value: '20x - 1,000,000x' },
      { label: '加速电压', value: '20V - 30kV' },
    ]
  },
  {
    name: '钨灯丝扫描电子显微镜',
    model: 'SEM3000',
    description: '经济型高分辨电镜，满足常规材料表征需求。',
    specs: [
      { label: '分辨率', value: '3.0 nm @ 30kV' },
      { label: '放大倍数', value: '6x - 500,000x' },
      { label: '探测器', value: 'SE + BSE' },
    ]
  },
]

const oilProducts = [
  {
    name: '量子精密测量随钻测井系统',
    model: 'QFM-1000',
    description: '基于量子传感技术的随钻测量系统，实现高精度地层评价。',
    specs: [
      { label: '测量深度', value: '5000 m' },
      { label: '精度', value: '±0.1 nT' },
      { label: '耐温', value: '175°C' },
    ]
  },
  {
    name: '量子油气勘探仪',
    model: 'QOG-500',
    description: '地面及井间量子磁探测系统，提升油气勘探成功率。',
    specs: [
      { label: '灵敏度', value: '0.01 pT/√Hz' },
      { label: '带宽', value: 'DC - 1 kHz' },
      { label: '功耗', value: '< 10 W' },
    ]
  },
]

const signalProducts = [
  {
    name: '数字锁相放大器',
    model: 'LIA-100',
    description: '多通道数字锁相放大器，微弱信号检测的利器。',
    specs: [
      { label: '频率范围', value: '1 mHz - 50 MHz' },
      { label: '动态储备', value: '> 100 dB' },
      { label: '相位分辨率', value: '0.01°' },
    ]
  },
  {
    name: '任意波形发生器',
    model: 'AWG-2000',
    description: '高精度多通道任意波形发生器，满足复杂信号产生需求。',
    specs: [
      { label: '采样率', value: '1.25 GSa/s' },
      { label: '分辨率', value: '16 bit' },
      { label: '通道数', value: '2/4' },
    ]
  },
  {
    name: '数据采集系统',
    model: 'DAQ-500',
    description: '高速高精度数据采集模块，多通道同步采集。',
    specs: [
      { label: '采样率', value: '125 MSa/s' },
      { label: '分辨率', value: '16 bit' },
      { label: '通道', value: '8 通道' },
    ]
  },
]

const techFeatures = [
  {
    id: 1,
    title: '高保真量子态调控',
    desc: '精确的量子态制备与操控技术，实现单自旋级别的精密测量。'
  },
  {
    id: 2,
    title: '高灵敏度磁探测',
    desc: '基于NV色心的量子传感技术，达到fT级别的磁场探测灵敏度。'
  },
  {
    id: 3,
    title: '微波收发技术',
    desc: '宽带高功率微波系统，支持复杂脉冲序列的精确产生与接收。'
  },
  {
    id: 4,
    title: '高精度扫描探针',
    desc: '纳米级定位精度，实现单自旋级别的空间分辨探测能力。'
  },
]
</script>

<style scoped>
.page-hero {
  padding: 140px 0 80px;
  background: linear-gradient(180deg, var(--color-bg-secondary), var(--color-bg-primary));
  border-bottom: 1px solid var(--color-cyan-dim);
}

.page-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.page-desc {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  margin-top: var(--space-md);
}

/* Product Category */
.product-category {
  margin-bottom: var(--space-xxl);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-md);
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, var(--color-cyan), transparent) 1;
}

.category-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-cyan-dim);
  border-radius: 12px;
}

.category-info h2 {
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.category-info p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

/* Products Grid */
.products-grid {
  display: grid;
  gap: var(--space-xl);
}

.product-item {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: var(--space-xl);
  padding: var(--space-xl);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  transition: all var(--transition-normal);
}

.product-item:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 10px 40px rgba(0, 240, 255, 0.1);
}

.product-image {
  position: relative;
}

.image-placeholder {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, var(--color-bg-tertiary), rgba(0, 240, 255, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.placeholder-content {
  text-align: center;
}

/* Device Frame Style */
.device-frame {
  width: 160px;
  height: 120px;
  background: linear-gradient(145deg, #1a1a2e, #0f0f1a);
  border: 2px solid var(--color-cyan-dim);
  border-radius: 8px;
  padding: 10px;
  position: relative;
}

.device-screen {
  width: 100%;
  height: 70%;
  background: #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.screen-data {
  font-family: var(--font-mono);
  color: var(--color-cyan);
  font-size: 0.7rem;
}

.data-line {
  display: block;
  animation: data-flicker 2s infinite;
}

@keyframes data-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.device-lights {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  justify-content: center;
}

.device-lights .light {
  width: 8px;
  height: 8px;
  background: var(--color-cyan);
  border-radius: 50%;
  animation: light-blink 1s ease-in-out infinite alternate;
}

.device-lights .light:nth-child(2) { animation-delay: 0.2s; background: var(--color-blue); }
.device-lights .light:nth-child(3) { animation-delay: 0.4s; background: var(--color-purple); }
.device-lights .light:nth-child(4) { animation-delay: 0.6s; background: var(--color-orange); }

@keyframes light-blink {
  from { opacity: 0.3; }
  to { opacity: 1; box-shadow: 0 0 10px currentColor; }
}

/* SEM Style */
.sem-style .microscope-icon {
  font-size: 3rem;
  margin-bottom: var(--space-sm);
}

.model-badge {
  padding: var(--space-xs) var(--space-md);
  background: var(--color-cyan-dim);
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  border-radius: 4px;
}

/* Oil Style */
.oil-style .oil-rig-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.wave-animation {
  display: flex;
  gap: 4px;
  justify-content: center;
  height: 30px;
  align-items: flex-end;
}

.wave-animation span {
  width: 6px;
  background: linear-gradient(to top, var(--color-orange), var(--color-cyan));
  animation: wave 1s ease-in-out infinite alternate;
}

.wave-animation span:nth-child(1) { height: 10px; animation-delay: 0s; }
.wave-animation span:nth-child(2) { height: 20px; animation-delay: 0.1s; }
.wave-animation span:nth-child(3) { height: 30px; animation-delay: 0.2s; }
.wave-animation span:nth-child(4) { height: 20px; animation-delay: 0.3s; }
.wave-animation span:nth-child(5) { height: 10px; animation-delay: 0.4s; }

@keyframes wave {
  from { transform: scaleY(0.5); }
  to { transform: scaleY(1); }
}

/* Signal Style */
.signal-style .signal-waves {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto var(--space-md);
}

.wave-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid var(--color-cyan);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: signal-expand 2s ease-out infinite;
}

.wave-ring:nth-child(1) { animation-delay: 0s; }
.wave-ring:nth-child(2) { animation-delay: 0.6s; }
.wave-ring:nth-child(3) { animation-delay: 1.2s; }

@keyframes signal-expand {
  0% { width: 20px; height: 20px; opacity: 1; }
  100% { width: 100px; height: 100px; opacity: 0; }
}

.frequency-display {
  font-family: var(--font-mono);
  color: var(--color-cyan);
  font-size: 0.9rem;
}

/* Product Details */
.product-details h3 {
  font-size: 1.3rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.model-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  border-radius: 4px;
  margin-bottom: var(--space-md);
}

.product-details > p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.specs-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--color-bg-tertiary);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
}

.spec-item {
  text-align: center;
}

.spec-label {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 4px;
  font-family: var(--font-mono);
}

.spec-value {
  display: block;
  font-size: 0.9rem;
  color: var(--color-cyan);
  font-weight: 600;
}

/* Tech Features */
.tech-features {
  background: var(--color-bg-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.feature-card {
  padding: var(--space-lg);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
  position: relative;
  transition: all var(--transition-normal);
}

.feature-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
}

.feature-number {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(0, 240, 255, 0.1);
  font-family: var(--font-mono);
  line-height: 1;
  margin-bottom: var(--space-md);
}

.feature-card h3 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.feature-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--gradient-cyber);
  transition: width var(--transition-normal);
}

.feature-card:hover .feature-line {
  width: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .product-item {
    grid-template-columns: 1fr;
  }
  
  .product-image {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .specs-preview {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

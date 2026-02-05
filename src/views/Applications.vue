<template>
  <div class="applications-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="cyber-container">
        <div class="page-header">
          <span class="section-tag">Applications</span>
          <h1 class="cyber-title">应用领域</h1>
          <p class="page-desc">量子精密测量技术赋能七大核心领域，推动科学研究与产业变革</p>
        </div>
      </div>
    </section>
    
    <!-- Applications Grid -->
    <section class="section">
      <div class="cyber-container">
        <div class="applications-grid">
          <div v-for="(app, idx) in applications" :key="app.id" 
               class="application-card"
               :class="{ 'featured': app.featured }"
               :style="{ '--accent-color': app.color }"
               @mouseenter="activeApp = app.id"
               @mouseleave="activeApp = null"
          >
            <div class="card-bg">
              <div class="card-gradient"></div>
              <div class="card-pattern"></div>
            </div>
            
            <div class="card-content"
              >
              <div class="card-header">
                <div class="app-icon">{{ app.emoji }}</div>
                <div class="app-number">0{{ idx + 1 }}</div>
              </div>
              
              <h2>{{ app.name }}</h2>
              
              <p class="app-desc">{{ app.description }}</p>
              
              <div class="app-stats">
                <div v-for="stat in app.stats" :key="stat.label" class="app-stat"
                  >
                  <span class="stat-num">{{ stat.value }}</span>
                  <span class="stat-name">{{ stat.label }}</span>
                </div>
              </div>
              
              <div class="app-uses"
                >
                <h4>典型应用</h4>
                <ul>
                  <li v-for="use in app.useCases" :key="use">{{ use }}</li>
                </ul>
              </div>
              
              <div class="card-footer"
              >
                <router-link to="/products" class="app-link"
                  >
                  相关产品
                  <span class="arrow">→</span>
                </router-link>
              </div>
            </div>
            
            <div class="card-effects"
            >
              <div class="effect-line effect-line-h"></div>
              <div class="effect-line effect-line-v"></div>
              <div class="corner-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Case Studies Section -->
    <section class="section cases-section">
      <div class="cyber-container">
        <div class="section-header"
        >
          <span class="section-tag">Success Stories</span>
          <h2 class="cyber-title">成功案例</h2>
        </div>
        
        <div class="cases-slider"
        >
          <div v-for="caseItem in caseStudies" :key="caseItem.id" class="case-card"
            >
            <div class="case-image"
            >
              <div class="case-placeholder">
                <div class="case-icon">{{ caseItem.emoji }}</div>
              </div>
            </div>
            
            <div class="case-content"
            >
              <div class="case-tag">{{ caseItem.field }}</div>
              
              <h3>{{ caseItem.title }}</h3>
              
              <p>{{ caseItem.description }}</p>
              
              <div class="case-meta"
              >
                <span>{{ caseItem.institution }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section cta-section"
    >
      <div class="cyber-container"
      >
        <div class="cyber-frame cta-box"
        >
          <h2>寻找适合您的解决方案？</h2>
          
          <p>我们的技术专家团队将为您提供专业的咨询与方案定制服务</p>
          
          <div class="cta-actions"
          >
            <router-link to="/contact" class="cyber-btn cyber-btn-primary"
              >
              <span>联系咨询</span>
            </router-link>
            
            <router-link to="/products" class="cyber-btn"
              >
              <span>浏览产品</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeApp = ref(null)

const applications = [
  {
    id: 'quantum',
    name: '量子科技',
    emoji: '⚛️',
    color: '#00f0ff',
    featured: true,
    description: '量子计算、量子通信与量子精密测量领域的前沿研究与应用开发。',
    stats: [
      { value: '99.9%', label: '保真度' },
      { value: 'μs', label: '相干时间' },
    ],
    useCases: [
      '量子比特表征与操控',
      '量子纠错研究',
      '量子通信器件测试',
      '量子精密测量基准'
    ]
  },
  {
    id: 'materials',
    name: '材料科学',
    emoji: '🔬',
    color: '#9d00ff',
    featured: true,
    description: '新型材料结构表征、缺陷分析与性能研究，助力材料创新。',
    stats: [
      { value: '0.6nm', label: '分辨率' },
      { value: '1M×', label: '放大倍数' },
    ],
    useCases: [
      '纳米材料形貌分析',
      '材料缺陷检测',
      '催化剂结构研究',
      '电池材料表征'
    ]
  },
  {
    id: 'chemistry',
    name: '化学化工',
    emoji: '⚗️',
    color: '#00ff88',
    description: '催化机理研究、反应动力学分析与化学过程原位监测。',
    stats: [
      { value: '10⁹', label: '检测灵敏度' },
      { value: 'RT-500K', label: '温度范围' },
    ],
    useCases: [
      '催化剂活性位点分析',
      '自由基检测',
      '反应中间体捕获',
      '催化机理研究'
    ]
  },
  {
    id: 'industry',
    name: '工业领域',
    emoji: '🏭',
    color: '#ff6b35',
    description: '工业无损检测、质量控制与失效分析，提升制造品质。',
    stats: [
      { value: '100%', label: '无损检测' },
      { value: 'μm', label: '检测精度' },
    ],
    useCases: [
      '半导体器件检测',
      '金属材料分析',
      '涂层厚度测量',
      '失效分析诊断'
    ]
  },
  {
    id: 'education',
    name: '科学教育',
    emoji: '🎓',
    color: '#0066ff',
    description: '为高校与科研机构提供先进的教学与科研平台。',
    stats: [
      { value: '200+', label: '合作院校' },
      { value: '50+', label: '国家地区' },
    ],
    useCases: [
      '量子力学教学实验',
      '材料表征实训',
      '科研能力培养',
      '创新项目支持'
    ]
  },
  {
    id: 'energy',
    name: '能源勘探',
    emoji: '⛽',
    color: '#ffcc00',
    description: '油气资源勘探与开发，量子传感技术提升勘探效率。',
    stats: [
      { value: '0.01pT', label: '探测精度' },
      { value: '5000m', label: '测量深度' },
    ],
    useCases: [
      '随钻测井测量',
      '井间电磁探测',
      '剩余油分布监测',
      '地质构造成像'
    ]
  },
  {
    id: 'biomedical',
    name: '生物医学与生命科学',
    emoji: '🧬',
    color: '#00cc66',
    description: '生命科学研究、药物开发与医学诊断技术支持。',
    stats: [
      { value: '单细胞', label: '检测水平' },
      { value: '实时', label: '监测能力' },
    ],
    useCases: [
      '细胞内温度测量',
      '生物磁信号检测',
      '药物机理研究',
      '神经科学研究'
    ]
  },
]

const caseStudies = [
  {
    id: 1,
    field: '量子科技',
    emoji: '🔬',
    title: '超导量子比特的高保真表征',
    description: '某顶尖研究机构采用EPR100系统对超导量子比特进行精确表征，实现了99.9%的量子态操控保真度，为量子计算发展提供了关键数据支撑。',
    institution: '中科院量子信息重点实验室'
  },
  {
    id: 2,
    field: '材料科学',
    emoji: '🔍',
    title: '新型催化剂的活性位点研究',
    description: '通过电子顺磁共振技术，成功解析了新型MOF催化剂的活性位点结构，为高效催化剂设计提供了理论依据。',
    institution: '清华大学化学系'
  },
  {
    id: 3,
    field: '能源勘探',
    emoji: '🛢️',
    title: '复杂地质条件下的精准探测',
    description: '应用量子精密测量技术，在复杂地质条件下实现了油气资源的高精度探测，显著提升了勘探成功率。',
    institution: '中石油勘探开发研究院'
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

/* Applications Grid */
.applications-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.application-card {
  position: relative;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  overflow: hidden;
  transition: all var(--transition-normal);
  min-height: 420px;
}

.application-card.featured {
  grid-column: span 2;
  grid-row: span 1;
}

.application-card:hover {
  border-color: var(--accent-color, var(--color-cyan));
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 240, 255, 0.1);
}

.card-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.card-gradient {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--accent-color, var(--color-cyan)) 0%, transparent 70%);
  opacity: 0.05;
  transition: opacity var(--transition-normal);
}

.application-card:hover .card-gradient {
  opacity: 0.1;
}

.card-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 240, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: var(--space-lg);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
}

.app-icon {
  font-size: 2.5rem;
}

.app-number {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(0, 240, 255, 0.1);
  font-family: var(--font-mono);
  line-height: 1;
}

.application-card h2 {
  font-size: 1.4rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.app-desc {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.app-stats {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-md);
  padding: var(--space-md) 0;
  border-top: 1px solid var(--color-cyan-dim);
  border-bottom: 1px solid var(--color-cyan-dim);
}

.app-stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-color, var(--color-cyan));
  font-family: var(--font-mono);
}

.stat-name {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.app-uses {
  flex: 1;
}

.app-uses h4 {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-sm);
}

.app-uses ul {
  list-style: none;
}

.app-uses li {
  position: relative;
  padding-left: 16px;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.app-uses li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--accent-color, var(--color-cyan));
}

.card-footer {
  margin-top: auto;
  padding-top: var(--space-md);
}

.app-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--accent-color, var(--color-cyan));
  font-family: var(--font-mono);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.app-link:hover {
  gap: var(--space-sm);
}

.arrow {
  transition: transform var(--transition-fast);
}

.app-link:hover .arrow {
  transform: translateX(4px);
}

/* Card Effects */
.card-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.application-card:hover .card-effects {
  opacity: 1;
}

.effect-line {
  position: absolute;
  background: var(--accent-color, var(--color-cyan));
}

.effect-line-h {
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  animation: line-h 0.6s ease forwards;
}

.effect-line-v {
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
  animation: line-v 0.6s ease 0.3s forwards;
}

@keyframes line-h {
  to { width: 100%; }
}

@keyframes line-v {
  to { height: 100%; }
}

.corner-glow {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: var(--accent-color, var(--color-cyan));
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.2;
}

/* Cases Section */
.cases-section {
  background: var(--color-bg-secondary);
}

.cases-slider {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.case-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.case-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
}

.case-image {
  height: 160px;
  background: linear-gradient(135deg, var(--color-bg-tertiary), rgba(0, 240, 255, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-icon {
  font-size: 3rem;
}

.case-content {
  padding: var(--space-lg);
}

.case-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-cyan);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  margin-bottom: var(--space-sm);
}

.case-content h3 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.4;
}

.case-content p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.case-meta {
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-cyan-dim);
}

.case-meta span {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(180deg, var(--color-bg-primary), var(--color-bg-secondary));
}

.cta-box {
  padding: var(--space-xxl);
  text-align: center;
}

.cta-box h2 {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.cta-box p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
}

.cta-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 1024px) {
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .application-card.featured {
    grid-column: span 2;
  }
  
  .cases-slider {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .application-card.featured {
    grid-column: span 1;
  }
  
  .app-stats {
    flex-direction: column;
    gap: var(--space-sm);
  }
}
</style>

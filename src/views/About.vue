<template>
  <div class="about-page"
    >
    <!-- Hero Section -->
    <section class="page-hero"
      >
      <div class="cyber-container"
        >
        <div class="page-header"
          >
          <span class="section-tag">About CIQTEK</span>
          
          <h1 class="cyber-title">关于国仪量子</h1>
          
          <p class="page-desc">以量子技术感知世界，成为全球量子技术应用及科学仪器行业的领导者</p>
        </div>
      </div>
    </section>
    
    <!-- Company Intro -->
    <section class="section intro-section"
      >
      <div class="cyber-container"
        >
        <div class="intro-grid"
          >
          <div class="intro-content"
            >
            <h2>公司介绍</h2>
            
            <div class="intro-text"
              >
              <p><strong>国仪量子（合肥）技术有限公司</strong>成立于2016年，是国内首家以量子精密测量为核心技术的国家高新技术企业。</p>
              
              <p>公司源于中国科学技术大学杜江峰院士团队，专注于量子精密测量和高端科学仪器的技术研发与产业化。我们以<span class="highlight">"用量子技术感知世界"</span>为使命，致力于帮助客户更高效推动技术的发展，探索并创造人类的未来。</p>
              
              <p>国仪量子已发展成为量子技术应用及科学仪器领域的领军企业，产品广泛应用于量子科技、材料科学、化学化工、工业检测、能源勘探、生物医学等领域，服务全球50多个国家和地区的上千家客户。</p>
            </div>
            
            <div class="intro-stats"
              >
              <div v-for="stat in companyStats" :key="stat.label" class="intro-stat"
                >
                <div class="stat-icon">{{ stat.emoji }}</div>
                
                <div class="stat-data"
                  >
                  <div class="stat-value">{{ stat.value }}</div>
                  
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="intro-visual"
            >
            <div class="visual-frame"
              >
              <div class="visual-content"
                >
                  <div class="company-logo-large"
                  >
                    <div class="logo-ring"
                    >
                      <div class="ring ring-1"></div>
                      
                      <div class="ring ring-2"></div>
                      
                      <div class="ring ring-3"></div>
                    </div>
                    
                    <div class="logo-core"
                    >CIQTEK</div>
                  </div>
                  
                  <div class="visual-tag"
                  >量子科技领导者</div>
                </div>
                
                <div class="frame-corners"
                  >
                  <div class="corner corner-tl"
                  ></div>
                  
                  <div class="corner corner-tr"
                  ></div>
                  
                  <div class="corner corner-bl"
                  ></div>
                  
                  <div class="corner corner-br"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mission & Vision -->
    <section class="section mission-section"
      >
      <div class="cyber-container"
        >
        <div class="mission-grid"
          >
          <div class="mission-card vision-card"
            >
            <div class="card-icon"
            >🎯</div>
            
            <h3>企业使命</h3>
            
            <p class="mission-quote">"帮助客户更高效推动技术的发展，探索并创造人类的未来"</p>
            
            <p class="mission-desc">我们致力于将量子技术转化为先进的科学仪器和解决方案，赋能科研与工业，让人类对世界的认知更加精准、更加深入。</p>
          </div>
          
          <div class="mission-card"
            >
            <div class="card-icon"
            >🚀</div>
            
            <h3>企业愿景</h3>
            
            <p class="mission-quote"
            >"成为量子技术应用及科学仪器行业的全球领导者"</p>
            
            <p class="mission-desc">以技术创新为驱动，以客户需求为导向，打造世界一流的高端科学仪器品牌，让量子技术服务全人类。</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Core Technologies -->
    <section class="section tech-section"
      >
      <div class="cyber-container"
        >
        <div class="section-header"
          >
          <span class="section-tag">Core Technology</span>
          
          <h2 class="cyber-title">核心技术</h2>
        </div>
        
        <div class="tech-grid"
          >
          <div v-for="tech in coreTechnologies" :key="tech.id" class="tech-card"
            >
            <div class="tech-visual"
              >
              <div class="tech-icon"
            >{{ tech.emoji }}</div>
              
              <div class="tech-particles"
                >
                <div v-for="n in 6" :key="n" class="particle"
                  ></div>
              </div>
            </div>
            
            <div class="tech-content"
              >
              <div class="tech-number">0{{ tech.id }}</div>
              
              <h3>{{ tech.name }}</h3>
              
              <p>{{ tech.description }}</p>
              
              <ul class="tech-features"
                >
                <li v-for="feat in tech.features" :key="feat"
                  >{{ feat }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Milestones -->
    <section class="section milestones-section"
      >
      <div class="cyber-container"
        >
        <div class="section-header"
          >
          <span class="section-tag">Milestones</span>
          
          <h2 class="cyber-title">发展历程</h2>
        </div>
        
        <div class="timeline"
          >
          <div v-for="(milestone, idx) in milestones" :key="milestone.year" 
                 class="timeline-item"
                 :class="{ 'timeline-left': idx % 2 === 0, 'timeline-right': idx % 2 === 1 }"
            >
            <div class="timeline-dot"
            ></div>
            
            <div class="timeline-content"
              >
              <div class="timeline-year"
                >
                  <span>{{ milestone.year }}</span>
                  
                  <div class="year-glow"
                  ></div>
                </div>
              
              <div class="timeline-card"
                >
                <h4>{{ milestone.title }}</h4>
                
                <p>{{ milestone.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-line"
          ></div>
        </div>
      </div>
    </section>
    
    <!-- Honors & Awards -->
    <section class="section honors-section"
      >
      <div class="cyber-container"
        >
        <div class="section-header"
          >
          <span class="section-tag">Honors</span>
          
          <h2 class="cyber-title">荣誉资质</h2>
        </div>
        
        <div class="honors-grid"
          >
          <div v-for="honor in honors" :key="honor.title" class="honor-card"
            >
            <div class="honor-icon"
            >{{ honor.emoji }}</div>
            
            <h4>{{ honor.title }}</h4>
            
            <p>{{ honor.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const companyStats = [
  { emoji: '📅', value: '2016', label: '成立年份' },
  { emoji: '👥', value: '500+', label: '团队成员' },
  { emoji: '📜', value: '100+', label: '授权专利' },
  { emoji: '🌍', value: '50+', label: '服务国家' },
]

const coreTechnologies = [
  {
    id: 1,
    emoji: '⚛️',
    name: '高保真量子态调控技术',
    description: '实现单自旋级别的精确操控，为量子计算和量子精密测量奠定基础。',
    features: [
      '单量子比特操控',
      '高保真量子门',
      '量子纠错支持',
      '多比特扩展能力'
    ]
  },
  {
    id: 2,
    emoji: '🧲',
    name: '高灵敏度磁探测技术',
    description: '基于NV色心等量子体系的超高灵敏度磁场探测，达到fT级灵敏度。',
    features: [
      'fT级灵敏度',
      '室温操作',
      '矢量测量',
      '空间分辨能力'
    ]
  },
  {
    id: 3,
    emoji: '📡',
    name: '微波收发技术',
    description: '宽带高功率微波系统，支持复杂脉冲序列的精确产生与接收。',
    features: [
      '宽带覆盖',
      '高功率输出',
      '相位精确控制',
      '快速切换'
    ]
  },
  {
    id: 4,
    emoji: '💎',
    name: '高精度扫描钻石探针技术',
    description: '纳米级定位精度的扫描探针系统，实现单自旋级别的空间分辨。',
    features: [
      '纳米定位精度',
      '多维度扫描',
      '原子级分辨',
      '稳定可靠'
    ]
  },
]

const milestones = [
  {
    year: '2016',
    title: '国仪量子成立',
    description: '源自中国科学技术大学杜江峰院士团队，专注量子精密测量技术产业化。'
  },
  {
    year: '2018',
    title: '首台商用EPR发布',
    description: '成功发布国内首台商用电子顺磁共振波谱仪，打破国外垄断。'
  },
  {
    year: '2019',
    title: '量子钻石原子力显微镜',
    description: '推出商用量子钻石原子力显微镜，实现单自旋探测。'
  },
  {
    year: '2021',
    title: '扫描电镜系列发布',
    description: '发布高分辨场发射扫描电子显微镜，进军高端电镜市场。'
  },
  {
    year: '2022',
    title: '科创板上市',
    description: '成功登陆科创板，成为量子科技领域首家上市公司。'
  },
  {
    year: '2024',
    title: '全球化布局',
    description: '产品出口50+国家和地区，建立全球销售与服务网络。'
  },
]

const honors = [
  {
    emoji: '🏆',
    title: '国家高新技术企业',
    description: '获得国家高新技术企业认定，技术实力得到权威认可。'
  },
  {
    emoji: '⭐',
    title: '专精特新小巨人',
    description: '入选国家级专精特新"小巨人"企业名单。'
  },
  {
    emoji: '🎖️',
    title: '国家科学技术奖',
    description: '参与项目获得国家自然科学奖二等奖。'
  },
  {
    emoji: '🔬',
    title: '安徽省重点实验室',
    description: '获批建设安徽省量子精密测量重点实验室。'
  },
  {
    emoji: '📜',
    title: '中国专利优秀奖',
    description: '核心专利获得中国专利优秀奖。'
  },
  {
    emoji: '🏅',
    title: '安徽省科学技术奖',
    description: '多次获得安徽省科学技术一等奖。'
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

/* Intro Section */
.intro-section {
  background: var(--color-bg-primary);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxl);
  align-items: center;
}

.intro-content h2 {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.intro-text p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-md);
}

.intro-text strong {
  color: var(--color-text-primary);
}

.highlight {
  color: var(--color-cyan);
  font-weight: 600;
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.intro-stat {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  transition: all var(--transition-normal);
}

.intro-stat:hover {
  border-color: var(--color-cyan);
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-data {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-cyan);
  font-family: var(--font-mono);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

/* Visual Frame */
.visual-frame {
  position: relative;
  padding: var(--space-lg);
}

.visual-content {
  background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-tertiary));
  border: 1px solid var(--color-cyan-dim);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.company-logo-large {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-ring {
  position: absolute;
  inset: 0;
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.ring-1 {
  width: 100%;
  height: 100%;
  border-color: var(--color-cyan);
  animation: rotate 20s linear infinite;
}

.ring-2 {
  width: 75%;
  height: 75%;
  border-color: var(--color-blue);
  border-style: dashed;
  animation: rotate-reverse 15s linear infinite;
}

.ring-3 {
  width: 50%;
  height: 50%;
  border-color: var(--color-purple);
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes rotate-reverse {
  from { transform: translate(-50%, -50%) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(0deg); }
}

.logo-core {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-cyan);
  font-family: var(--font-mono);
  letter-spacing: 0.2em;
  z-index: 1;
}

.visual-tag {
  margin-top: var(--space-lg);
  padding: var(--space-xs) var(--space-md);
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-cyan);
  font-size: 0.85rem;
  font-family: var(--font-mono);
}

.frame-corners {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-cyan);
}

.corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
.corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
.corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
.corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

/* Mission Section */
.mission-section {
  background: var(--color-bg-secondary);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.mission-card {
  padding: var(--space-xl);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
  text-align: center;
  transition: all var(--transition-normal);
}

.mission-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 240, 255, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.mission-card h3 {
  font-size: 1.3rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.mission-quote {
  font-size: 1.1rem;
  color: var(--color-cyan);
  font-style: italic;
  margin-bottom: var(--space-md);
  padding: var(--space-md);
  background: rgba(0, 240, 255, 0.05);
  border-left: 3px solid var(--color-cyan);
}

.mission-desc {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Tech Section */
.tech-section {
  background: var(--color-bg-primary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.tech-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  transition: all var(--transition-normal);
}

.tech-card:hover {
  border-color: var(--color-cyan);
}

.tech-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  font-size: 2.5rem;
  z-index: 1;
}

.tech-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-cyan);
  border-radius: 50%;
  opacity: 0.5;
}

.particle:nth-child(1) { top: 10%; left: 20%; }
.particle:nth-child(2) { top: 30%; right: 15%; }
.particle:nth-child(3) { top: 50%; left: 10%; }
.particle:nth-child(4) { top: 70%; right: 25%; }
.particle:nth-child(5) { bottom: 20%; left: 30%; }
.particle:nth-child(6) { bottom: 10%; right: 10%; }

.tech-content {
  display: flex;
  flex-direction: column;
}

.tech-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(0, 240, 255, 0.1);
  font-family: var(--font-mono);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.tech-content h3 {
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.tech-content p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.tech-features {
  list-style: none;
  margin-top: auto;
}

.tech-features li {
  position: relative;
  padding-left: 16px;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.tech-features li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--color-cyan);
}

/* Milestones Section */
.milestones-section {
  background: var(--color-bg-secondary);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-xl) 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--color-cyan-dim), var(--color-cyan), var(--color-cyan-dim));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-xl);
  display: flex;
  align-items: center;
}

.timeline-item.timeline-left {
  justify-content: flex-start;
  padding-right: 50%;
}

.timeline-item.timeline-right {
  justify-content: flex-end;
  padding-left: 50%;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  width: 16px;
  height: 16px;
  background: var(--color-bg-primary);
  border: 3px solid var(--color-cyan);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 20px var(--color-cyan-glow);
}

.timeline-content {
  width: calc(50% - var(--space-xl));
}

.timeline-left .timeline-content {
  text-align: right;
  padding-right: var(--space-lg);
}

.timeline-right .timeline-content {
  text-align: left;
  padding-left: var(--space-lg);
}

.timeline-year {
  position: relative;
  display: inline-block;
  margin-bottom: var(--space-sm);
}

.timeline-year span {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-cyan);
  font-family: var(--font-mono);
}

.year-glow {
  position: absolute;
  inset: -10px -20px;
  background: var(--color-cyan);
  opacity: 0.1;
  filter: blur(20px);
}

.timeline-card {
  padding: var(--space-md);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
}

.timeline-card h4 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.timeline-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Honors Section */
.honors-section {
  background: var(--color-bg-primary);
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.honor-card {
  padding: var(--space-lg);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  text-align: center;
  transition: all var(--transition-normal);
}

.honor-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
}

.honor-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.honor-card h4 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.honor-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
  
  .intro-visual {
    order: -1;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-card {
    grid-template-columns: 80px 1fr;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .timeline-item.timeline-left,
  .timeline-item.timeline-right {
    justify-content: flex-start;
    padding-left: 60px;
    padding-right: 0;
  }
  
  .timeline-dot {
    left: 20px;
  }
  
  .timeline-content {
    width: 100%;
    text-align: left !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .honors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .intro-stats {
    grid-template-columns: 1fr;
  }
  
  .honors-grid {
    grid-template-columns: 1fr;
  }
}
</style>

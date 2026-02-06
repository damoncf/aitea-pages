<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="cyber-container">
        <div class="page-header">
          <span class="section-tag">About CIQTEK</span>
          <h1 class="cyber-title">关于国仪量子</h1>
          <p class="page-desc">以量子技术感知世界，成为全球量子技术应用及科学仪器行业的领导者</p>
        </div>
      </div>
    </section>
    
    <section class="section intro-section">
      <div class="cyber-container">
        <div class="intro-grid">
          <div class="intro-content">
            <h2>公司介绍</h2>
            <div class="intro-text">
              <p><strong>国仪量子（合肥）技术有限公司</strong>成立于2016年，是国内首家以量子精密测量为核心技术的国家高新技术企业。</p>
              <p>公司源于中国科学技术大学杜江峰院士团队，专注于量子精密测量和高端科学仪器的技术研发与产业化。我们以<span class="highlight">"用量子技术感知世界"</span>为使命，致力于帮助客户更高效推动技术的发展，探索并创造人类的未来。</p>
              <p>国仪量子已发展成为量子技术应用及科学仪器领域的领军企业，产品广泛应用于量子科技、材料科学、化学化工、工业检测、能源勘探、生物医学等领域，服务全球50多个国家和地区的上千家客户。</p>
            </div>
            <div class="intro-stats">
              <div v-for="stat in companyStats" :key="stat.label" class="intro-stat">
                <div class="stat-icon">{{ stat.emoji }}</div>
                <div class="stat-data">
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro-visual">
            <div class="visual-frame">
              <div class="visual-content">
                <div class="company-logo-large">
                  <div class="logo-ring">
                    <div class="ring ring-1"></div>
                    <div class="ring ring-2"></div>
                    <div class="ring ring-3"></div>
                  </div>
                  <div class="logo-core">CIQTEK</div>
                </div>
                <div class="visual-tag">量子科技领导者</div>
              </div>
              <div class="frame-corners">
                <div class="corner corner-tl"></div>
                <div class="corner corner-tr"></div>
                <div class="corner corner-bl"></div>
                <div class="corner corner-br"></div>
              </div>
            </div>
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
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}
.page-hero {
  padding: 140px 0 80px;
  background: linear-gradient(180deg, var(--color-bg-secondary), var(--color-bg-primary));
  border-bottom: 1px solid var(--color-cyan-dim);
}
.page-header {
  text-align: center;
}
.section {
  padding: 5rem 0;
}
.cyber-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.section-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #00f0ff;
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.cyber-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #00f0ff, #0066ff, #9d00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.page-desc {
  color: #a0a0a0;
  font-size: 1.1rem;
  margin-top: 1rem;
}
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.intro-content h2 {
  color: #e8e8e8;
  margin-bottom: 1.5rem;
}
.intro-text {
  color: #a0a0a0;
  line-height: 1.8;
}
.intro-text p {
  margin-bottom: 1rem;
}
.highlight {
  color: #00f0ff;
}
.intro-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
.intro-stat {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 8px;
}
.stat-icon {
  font-size: 1.5rem;
}
.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00f0ff;
  font-family: monospace;
}
.stat-label {
  font-size: 0.85rem;
  color: #a0a0a0;
}
@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
}
</style>

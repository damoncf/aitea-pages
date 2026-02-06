<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="cyber-container">
        <div class="page-header">
          <span class="section-tag">News Center</span>
          
          <h1 class="cyber-title">新闻动态</h1>
          
          <p class="page-desc">了解国仪量子的最新动态、行业资讯与科技创新</p>
        </div>
      </div>
    </section>
    
    <!-- News Filter -->
    <section class="section filter-section">
      <div class="cyber-container">
        <div class="filter-bar">
          <button
              v-for="filter in filters"
              :key="filter.value"
              class="filter-btn"
              :class="{ active: activeFilter === filter.value }"
              @click="activeFilter = filter.value">
              {{ filter.label }}
            </button>
        </div>
      </div>
    </section>
    
    <!-- Featured News -->
    <section v-if="activeFilter === 'all'" class="section featured-section">
      <div class="cyber-container">
        <div class="featured-article">
          <div class="featured-image">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <div class="featured-icon">🏆</div>
              
                <div class="featured-badge">重磅</div>
              </div>
            </div>
          </div>
          
          <div class="featured-content">
            <div class="article-meta">
              <span class="article-category">公司新闻</span>
              
              <span class="article-date">2024-12-15</span>
            </div>
            
            <h2>国仪量子荣获2024年度国家科技进步奖</h2>
            
            <p>国仪量子牵头的"量子精密测量关键技术及应用"项目荣获2024年度国家科技进步二等奖，标志着公司在量子精密测量领域的技术实力获得国家级认可...</p>
            
            <div class="article-actions">
              <button class="cyber-btn">
                  <span>阅读全文</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- News Grid -->
    <section class="section news-grid-section">
      <div class="cyber-container">
        <div class="news-grid">
          <article
              v-for="article in filteredNews"
              :key="article.id"
              class="news-card">
              <div class="card-image">
                <div class="image-placeholder">
                  <span>{{ article.emoji }}</span>
                </div>
                
                <div class="card-category">{{ article.category }}</div>
              </div>
              
              <div class="card-content">
                <div class="card-date">{{ article.date }}</div>
                
                <h3>{{ article.title }}</h3>
                
                <p>{{ article.summary }}</p>
                
                <a href="#" class="read-more">
                  阅读更多
                  <span>→</span>
                </a>
              </div>
            </article>
        </div>
        
        <!-- Load More -->
        <div class="load-more">
          <button class="cyber-btn">
              <span>加载更多</span>
            </button>
        </div>
      </div>
    </section>
    
    <!-- Events Section -->
    <section class="section events-section">
      <div class="cyber-container">
        <div class="section-header">
          <span class="section-tag">Events</span>
          
          <h2 class="cyber-title">展会活动</h2>
        </div>
        
        <div class="events-list">
          <div v-for="event in events" :key="event.id" class="event-item">
              <div class="event-date">
                <div class="date-month">{{ event.month }}</div>
                
                <div class="date-day">{{ event.day }}</div>
              </div>
              
              <div class="event-content">
                <div class="event-tag">{{ event.type }}</div>
                
                <h3>{{ event.title }}</h3>
                
                <p>{{ event.description }}</p>
                
                <div class="event-meta">
                  <span>📍 {{ event.location }}</span>
                </div>
              </div>
              
              <div class="event-status">
                <span :class="['status-badge', event.status]">{{ event.statusText }}</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = [
  { label: '全部', value: 'all' },
  { label: '公司新闻', value: 'company' },
  { label: '行业动态', value: 'industry' },
  { label: '技术文章', value: 'tech' },
]

const newsArticles = [
  {
    id: 1,
    title: '国仪量子发布新一代量子钻石原子力显微镜',
    summary: '全新升级的QDAFM系统实现更高灵敏度和更快成像速度，为单分子探测提供更强大的工具。',
    category: '公司新闻',
    date: '2024-12-10',
    emoji: '🔬',
    type: 'company'
  },
  {
    id: 2,
    title: '量子精密测量技术在医疗领域的突破性应用',
    summary: '国仪量子与多家医疗机构合作，将量子传感技术应用于生物磁信号检测，为疾病诊断提供新手段。',
    category: '行业动态',
    date: '2024-12-05',
    emoji: '🏥',
    type: 'industry'
  },
  {
    id: 3,
    title: 'EPR技术在新材料表征中的应用进展',
    summary: '介绍电子顺磁共振技术在二维材料、催化剂等新材料研究中的最新应用案例。',
    category: '技术文章',
    date: '2024-11-28',
    emoji: '📝',
    type: 'tech'
  },
  {
    id: 4,
    title: '国仪量子中标国家重点研发计划项目',
    summary: '公司牵头承担的量子精密测量仪器研制项目成功获批，获得国家重点研发计划支持。',
    category: '公司新闻',
    date: '2024-11-20',
    emoji: '🎯',
    type: 'company'
  },
  {
    id: 5,
    title: '全球量子传感器市场发展趋势分析',
    summary: '深度解析全球量子传感器市场现状与未来趋势，以及国仪量子的战略布局。',
    category: '行业动态',
    date: '2024-11-15',
    emoji: '📊',
    type: 'industry'
  },
  {
    id: 6,
    title: '扫描电镜在半导体检测中的最佳实践',
    summary: '分享场发射扫描电镜在芯片缺陷分析、截面观察等半导体检测场景的应用技巧。',
    category: '技术文章',
    date: '2024-11-08',
    emoji: '💻',
    type: 'tech'
  },
  {
    id: 7,
    title: '国仪量子与清华大学签署战略合作协议',
    summary: '双方将围绕量子精密测量技术开展深度合作，共建联合实验室。',
    category: '公司新闻',
    date: '2024-11-01',
    emoji: '🤝',
    type: 'company'
  },
  {
    id: 8,
    title: '量子计算时代的新型测量需求',
    summary: '探讨量子计算发展对精密测量技术提出的新挑战与新机遇。',
    category: '行业动态',
    date: '2024-10-25',
    emoji: '⚛️',
    type: 'industry'
  },
]

const filteredNews = computed(() => {
  if (activeFilter.value === 'all') {
    return newsArticles
  }
  return newsArticles.filter(article => article.type === activeFilter.value)
})

const events = [
  {
    id: 1,
    title: '2025全国电镜年会',
    description: '国仪量子将携最新扫描电镜产品参展，欢迎莅临展位交流。',
    month: 'JAN',
    day: '15',
    location: '北京·国家会议中心',
    type: '学术会议',
    status: 'upcoming',
    statusText: '即将开始'
  },
  {
    id: 2,
    title: 'MRS春季会议',
    description: '国际材料研究学会春季会议，展示最新材料表征解决方案。',
    month: 'MAR',
    day: '22',
    location: '美国·西雅图',
    type: '国际展会',
    status: 'upcoming',
    statusText: '报名中'
  },
  {
    id: 3,
    title: '量子精密测量技术研讨会',
    description: '邀请行业专家共同探讨量子精密测量技术的最新进展。',
    month: 'FEB',
    day: '08',
    location: '合肥·公司总部',
    type: '研讨会',
    status: 'open',
    statusText: '开放报名'
  },
]
</script>

<style scoped>
.page-hero {
  padding: 140px 0 60px;
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

/* Filter Section */
.filter-section {
  padding: var(--space-lg) 0;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-cyan-dim);
}

.filter-bar {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-xs) var(--space-md);
  background: transparent;
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-cyan);
  border-color: var(--color-cyan);
  color: var(--color-bg-primary);
}

/* Featured Section */
.featured-section {
  background: var(--color-bg-primary);
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  overflow: hidden;
}

.featured-image {
  position: relative;
  min-height: 400px;
}

.image-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-bg-tertiary), rgba(0, 240, 255, 0.1));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
}

.featured-icon {
  font-size: 5rem;
  margin-bottom: var(--space-md);
}

.featured-badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--color-orange);
  color: var(--color-bg-primary);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
}

.featured-content {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-meta {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.article-category {
  padding: 4px 10px;
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-cyan);
  font-size: 0.75rem;
  font-family: var(--font-mono);
}

.article-date {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.featured-content h2 {
  font-size: 1.8rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
  line-height: 1.3;
}

.featured-content p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.article-actions {
  margin-top: auto;
}

/* News Grid */
.news-grid-section {
  background: var(--color-bg-primary);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.news-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.news-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 240, 255, 0.1);
}

.card-image {
  position: relative;
  height: 180px;
}

.card-image .image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-bg-tertiary), rgba(0, 240, 255, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.card-category {
  position: absolute;
  top: var(--space-sm);
  left: var(--space-sm);
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-cyan);
  font-size: 0.75rem;
  font-family: var(--font-mono);
}

.card-content {
  padding: var(--space-lg);
}

.card-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.card-content h3 {
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.4;
}

.card-content p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-cyan);
  font-size: 0.85rem;
  font-family: var(--font-mono);
  transition: gap var(--transition-fast);
}

.read-more:hover {
  gap: var(--space-sm);
}

.load-more {
  text-align: center;
  margin-top: var(--space-xl);
}

/* Events Section */
.events-section {
  background: var(--color-bg-secondary);
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.event-item {
  display: grid;
  grid-template-columns: 100px 1fr 150px;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
  transition: all var(--transition-normal);
  align-items: center;
}

.event-item:hover {
  border-color: var(--color-cyan);
}

.event-date {
  text-align: center;
  padding: var(--space-sm);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-cyan-dim);
}

.date-month {
  font-size: 0.8rem;
  color: var(--color-cyan);
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
}

.date-day {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  font-family: var(--font-mono);
}

.event-tag {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-cyan);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  margin-bottom: var(--space-sm);
}

.event-content h3 {
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.event-content p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

.event-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.event-status {
  text-align: right;
}

.status-badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}

.status-badge.upcoming {
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
}

.status-badge.open {
  background: rgba(0, 102, 255, 0.1);
  color: var(--color-blue);
  border: 1px solid var(--color-blue-dim);
}

/* Responsive */
@media (max-width: 1024px) {
  .featured-article {
    grid-template-columns: 1fr;
  }
  
  .featured-image {
    min-height: 250px;
  }
  
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .event-item {
    grid-template-columns: 80px 1fr;
  }
  
  .event-status {
    grid-column: span 2;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .event-item {
    grid-template-columns: 1fr;
  }
  
  .event-status {
    grid-column: span 1;
  }
}
</style>

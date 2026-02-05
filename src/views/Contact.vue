<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="cyber-container">
        <div class="page-header">
          <span class="section-tag">Contact Us</span>
          <h1 class="cyber-title">联系我们</h1>
          <p class="page-desc">期待与您的合作，共同探索量子技术的无限可能</p>
        </div>
      </div>
    </section>
    
    <!-- Contact Info Cards -->
    <section class="section info-section">
      <div class="cyber-container">
        <div class="info-grid">
          <div v-for="office in offices" :key="office.city" class="info-card">
            <div class="card-header">
              <div class="city-badge">{{ office.city }}</div>
              <div class="office-type">{{ office.type }}</div>
            </div>
            
            <div class="card-body">
              <div class="info-item">
                <span class="info-icon">📍</span>
                <span class="info-text">{{ office.address }}</span>
              </div>
              <div class="info-item">
                <span class="info-icon">📞</span>
                <span class="info-text">{{ office.phone }}</span>
              </div>
              <div class="info-item">
                <span class="info-icon">✉️</span>
                <span class="info-text">{{ office.email }}</span>
              </div>
            </div>
            
            <div class="card-footer">
              <span class="postal-code">邮编: {{ office.postal }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Form & Map -->
    <section class="section form-section">
      <div class="cyber-container">
        <div class="form-grid">
          <!-- Contact Form -->
          <div class="form-container">
            <h2>在线咨询</h2>
            <p>填写以下表单，我们将尽快与您取得联系</p>
            
            <form class="cyber-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input type="text" v-model="form.name" class="cyber-input" placeholder="请输入您的姓名" required>
                </div>
                <div class="form-group">
                  <label>公司/机构</label>
                  <input type="text" v-model="form.company" class="cyber-input" placeholder="请输入公司或机构名称">
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label>电话 <span class="required">*</span></label>
                  <input type="tel" v-model="form.phone" class="cyber-input" placeholder="请输入联系电话" required>
                </div>
                <div class="form-group">
                  <label>邮箱 <span class="required">*</span></label>
                  <input type="email" v-model="form.email" class="cyber-input" placeholder="请输入电子邮箱" required>
                </div>
              </div>
              
              <div class="form-group">
                <label>咨询类型</label>
                <select v-model="form.type" class="cyber-input">
                  <option value="">请选择咨询类型</option>
                  <option value="product">产品咨询</option>
                  <option value="tech">技术支持</option>
                  <option value="sales">商务合作</option>
                  <option value="service">售后服务</option>
                  <option value="other">其他</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>咨询内容 <span class="required">*</span></label>
                <textarea v-model="form.message" class="cyber-input" rows="5" placeholder="请详细描述您的需求或问题" required></textarea>
              </div>
              
              <button type="submit" class="cyber-btn cyber-btn-primary">
                <span>提交咨询</span>
              </button>
            </form>
          </div>
          
          <!-- Quick Contact -->
          <div class="quick-contact">
            <h2>快速联系</h2>
            
            <div class="quick-items">
              <div class="quick-item">
                <div class="quick-icon">📞</div>
                <div class="quick-content">
                  <h4>全国统一服务热线</h4>
                  <p class="quick-highlight">400-0606-976</p>
                  <p class="quick-desc">周一至周五 9:00-18:00</p>
                </div>
              </div>
              
              <div class="quick-item">
                <div class="quick-icon">✉️</div>
                <div class="quick-content">
                  <h4>企业邮箱</h4>
                  <p class="quick-highlight">gylz@ciqtek.com</p>
                  <p class="quick-desc">工作日24小时内回复</p>
                </div>
              </div>
              
              <div class="quick-item">
                <div class="quick-icon">🌐</div>
                <div class="quick-content">
                  <h4>官方网站</h4>
                  <p class="quick-highlight">www.ciqtek.com</p>
                  <p class="quick-desc">了解更多产品信息</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h4>关注我们</h4>
              <div class="social-icons">
                <a href="#" class="social-icon" title="微信公众号">
                  <span>📱</span>
                </a>
                <a href="#" class="social-icon" title="微博">
                  <span>📝</span>
                </a>
                <a href="#" class="social-icon" title="LinkedIn">
                  <span>💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="cyber-container">
        <div class="section-header">
          <span class="section-tag">FAQ</span>
          <h2 class="cyber-title">常见问题</h2>
        </div>
        
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item" :class="{ active: activeFaq === index }" @click="activeFaq = activeFaq === index ? null : index">
            <div class="faq-question">
              <span class="faq-q">Q</span>
              <span class="faq-text">{{ faq.question }}</span>
              <span class="faq-toggle">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="activeFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  type: '',
  message: ''
})

const activeFaq = ref(null)

const offices = [
  {
    city: '合肥',
    type: '总部',
    address: '安徽省合肥市高新区孔雀台路1969号',
    phone: '400-0606-976',
    email: 'gylz@ciqtek.com',
    postal: '230088'
  },
  {
    city: '北京',
    type: '研发中心',
    address: '北京市海淀区中关村大街18号6层61241',
    phone: '400-0606-976',
    email: 'qic@ciqtek.com',
    postal: '100080'
  },
  {
    city: '无锡',
    type: '生产基地',
    address: '江苏省无锡市惠山区城铁惠山站区站前路2号',
    phone: '0510-83382226',
    email: 'zcm@ciqtek.com',
    postal: '214187'
  },
  {
    city: '上海',
    type: '营销中心',
    address: '上海市静安区陕西北路80号七立方102室',
    phone: '400-0606-976',
    email: 'gylz@ciqtek.com',
    postal: '200041'
  }
]

const faqs = [
  {
    question: '如何申请产品试用或演示？',
    answer: '您可以通过本页面的在线咨询表单提交试用申请，或拨打全国统一服务热线400-0606-976联系我们的销售团队。我们会根据您的具体需求安排产品演示或提供试用机会。'
  },
  {
    question: '产品的售后服务政策是什么？',
    answer: '国仪量子提供全面的售后服务保障，包括：整机质保1年、终身技术支持、免费软件升级、定期维护服务等。具体政策因产品型号而异，详情请咨询客服。'
  },
  {
    question: '是否提供定制化解决方案？',
    answer: '是的，我们可以根据客户的特殊需求提供定制化解决方案。无论是硬件配置调整、软件功能定制还是系统集成，我们的技术团队都能为您提供专业支持。'
  },
  {
    question: '如何获取产品技术资料？',
    answer: '您可以在产品页面下载相关技术资料，或通过邮箱gylz@ciqtek.com联系我们的技术支持团队获取更详细的产品手册、应用笔记和技术白皮书。'
  },
  {
    question: '国仪量子是否招聘人才？',
    answer: '我们持续欢迎量子技术、精密仪器、电子工程等领域的优秀人才加入。请访问我们的招聘页面或发送简历至hr@ciqtek.com，了解最新职位信息。'
  }
]

const submitForm = () => {
  alert('感谢您的咨询！我们会尽快与您联系。')
  form.value = { name: '', company: '', phone: '', email: '', type: '', message: '' }
}
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

/* Info Section */
.info-section {
  background: var(--color-bg-primary);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.info-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  padding: var(--space-lg);
  transition: all var(--transition-normal);
}

.info-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-cyan-dim);
}

.city-badge {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-cyan);
}

.office-type {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.card-body {
  margin-bottom: var(--space-md);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.info-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.info-text {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.card-footer {
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-cyan-dim);
}

.postal-code {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

/* Form Section */
.form-section {
  background: var(--color-bg-secondary);
}

.form-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xxl);
}

.form-container h2,
.quick-contact h2 {
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.form-container > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.cyber-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-group label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.form-group label .required {
  color: var(--color-orange);
}

.cyber-input {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: all var(--transition-normal);
}

.cyber-input:focus {
  outline: none;
  border-color: var(--color-cyan);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
}

.cyber-input::placeholder {
  color: var(--color-text-muted);
}

select.cyber-input {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300f0ff' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

textarea.cyber-input {
  resize: vertical;
  min-height: 120px;
}

/* Quick Contact */
.quick-contact {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-cyan-dim);
  padding: var(--space-xl);
}

.quick-items {
  margin-bottom: var(--space-xl);
}

.quick-item {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-cyan-dim);
}

.quick-item:last-child {
  border-bottom: none;
}

.quick-icon {
  font-size: 1.5rem;
}

.quick-content h4 {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-xs);
}

.quick-highlight {
  font-size: 1.2rem;
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-weight: 600;
  margin-bottom: 4px;
}

.quick-desc {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.social-links h4 {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

.social-icons {
  display: flex;
  gap: var(--space-sm);
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-cyan-dim);
  font-size: 1.2rem;
  transition: all var(--transition-fast);
}

.social-icon:hover {
  border-color: var(--color-cyan);
  background: var(--color-cyan);
}

/* FAQ Section */
.faq-section {
  background: var(--color-bg-primary);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-cyan-dim);
  margin-bottom: var(--space-md);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.faq-item:hover,
.faq-item.active {
  border-color: var(--color-cyan);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  cursor: pointer;
}

.faq-q {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-cyan);
  color: var(--color-bg-primary);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.faq-text {
  flex: 1;
  color: var(--color-text-primary);
  font-size: 0.95rem;
}

.faq-toggle {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-cyan-dim);
  color: var(--color-cyan);
  font-size: 1.2rem;
  transition: all var(--transition-fast);
}

.faq-item.active .faq-toggle {
  background: var(--color-cyan);
  color: var(--color-bg-primary);
  border-color: var(--color-cyan);
}

.faq-answer {
  padding: 0 var(--space-lg) var(--space-lg) calc(28px + var(--space-lg) * 2);
}

.faq-answer p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-contact {
    order: -1;
  }
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .faq-answer {
    padding-left: var(--space-lg);
  }
}
</style>
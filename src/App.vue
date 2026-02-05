<template>
  <div class="app">
    <SciFiBackground />
    <CyberHeader />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <CyberFooter />
  </div>
</template>

<script setup>
import CyberHeader from './components/CyberHeader.vue'
import CyberFooter from './components/CyberFooter.vue'
import SciFiBackground from './components/SciFiBackground.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.main-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 200px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

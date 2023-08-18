<template>
  <div>
    <div class="tabs">
      <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ 'active': activeTab === index }">{{ tab.label }}</div>
    </div>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">{{ tab.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: 'Tab 1', content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' },
        { label: 'Tab 3', content: 'Content for Tab 3' },
      ],
    };
  },
};
</script>

<style>
.tabs {
  display: flex;
  margin-bottom: 1rem;
}
.tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f7f7f7;
}
.tab:last-child {
  border-right: 1px solid #ccc;
}
.tab.active {
  background-color: white;
  border-bottom: 1px solid white;
}
.tab-content > div {
  display: none;
  padding: 1rem;
}
.tab-content > div.show {
  display: block;
}
</style>

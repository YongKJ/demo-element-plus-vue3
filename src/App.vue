<template>
  <div id="app">
    <el-config-provider :size="'large'" :locale="locale">
      <router-view/>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import zhCn from 'element-plus/es/locale/lang/zh-cn';

export default defineComponent({
  name: "App",
  data() {
    return {
      locale: zhCn
    }
  }
});
</script>

<style lang="scss">
@import "./assets/css/App.css";

body {
  margin: 0;
  font-family: "Microsoft YaHei", sans-serif;
}

#nprogress .bar {
  background: #3EAF7C !important;
}
</style>

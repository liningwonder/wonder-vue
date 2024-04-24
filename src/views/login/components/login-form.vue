<template>
    <div class="login-form-container">
        <div v-if="display">
            <LoginRegister />
        </div>
        <div v-if="!display">
            <LoginMail />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import LoginMail from './login-mail.vue';
import LoginRegister from './login-register.vue';

//  切换开关
//  切换开关
let display = ref(false);

const handle = (value) => {
    display.value = value;
};
provide('handle', handle);
</script>

<style lang="less" scoped>
.login-form-container {
    margin-top: 5%;
}

.login-form-language {
    position: absolute;
    top: 10%;
    left: 93%;
}

:deep(.tiny-tabs__content) {
    margin-left: -6%;
}

// 修复组件默认tab的点击横线偏右超出
:deep(.tiny-tabs__nav.is-show-active-bar .tiny-tabs__item) {
    margin-right: 0;
}
</style>
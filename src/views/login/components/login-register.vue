<template>
    <div class="login-register-container">
        <tiny-form ref="ruleForm" :model="createData" :rules="rules" :validate-on-rule-change="isvalidate"
            :label-align="true" label-position="top" label-width="100px">
            <tiny-form-item :label="$t('login.form.nameInput')" prop="name" size="small">
                <tiny-input v-model="createData.name"
                    :placeholder="$t('login.form.registerName.placeholder')"></tiny-input>
            </tiny-form-item>
            <tiny-form-item :label="$t('login.form.mobilePhoneInput')" prop="mobilePhone" size="small">
                <tiny-input v-model="createData.mobilePhone"
                    :placeholder="$t('login.form.registerMobilePhone.placeholder')"></tiny-input>
            </tiny-form-item>
            <tiny-form-item :label="$t('login.form.mailInput')" prop="username" size="small">
                <tiny-input v-model="createData.username"
                    :placeholder="$t('login.form.registerMail.placeholder')"></tiny-input>
            </tiny-form-item>
            <tiny-form-item :label="$t('login.form.passwordInput')" prop="password" size="small ">
                <tiny-input v-model="createData.password" :placeholder="$t('login.form.registerPassword.placeholder')"
                    type="password" show-password></tiny-input>
            </tiny-form-item>
            <tiny-form-item :label="$t('login.form.passwordConfirm')" prop="passwordConfirm" size="small">
                <tiny-input v-model="createData.passwordConfirm"
                    :placeholder="$t('login.form.registerConfirmPassword.placeholder')" type="password"
                    show-password></tiny-input>
            </tiny-form-item>
            <tiny-form-item size="small">
                <tiny-button type="primary" class="login-form-btn" :loading="loading" @click="handleSubmit">{{
                    $t('login.form.register') }}</tiny-button>
            </tiny-form-item>
        </tiny-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import {
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
    Link as TinyLink,
    Modal,
} from '@opentiny/vue';
import { useI18n } from 'vue-i18n';
import useLoading from '@/hooks/loading';

// 注册
const { t } = useI18n();
const { loading, setLoading } = useLoading();
const ruleForm = ref();

let createData = reactive({
    name: '',
    mobilePhone: '',
    username: '',
    password: '',
    passwordConfirm: '',
});

let isvalidate = ref(true);

// 校验格式
const validatePass = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        callback(new Error(t('login.form.checkPassword')));
    } else {
        callback();
    }
};

const validateMail = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
) => {
    if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
        callback(new Error(t('login.form.checkUsername')));
    } else {
        callback();
    }
};

const validateName = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
) => {
    console.log(value.length)
    if (2 > value.length && 10 < value.length) {
        callback(new Error(t('login.form.checkName')));
    } else {
        callback();
    }
};


const validatePassConfirm = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
) => {
    if (createData.password && createData.password !== value) {
        callback(new Error(t('login.form.confirmPassword')));
    } else {
        callback();
    }
};

const rules = computed(() => {
    return {
        name: [
            {
                required: true,
                message: t('login.form.name.errMsg'),
                trigger: 'blur',
            },
            { validator: validateName, trigger: 'blur' },
        ],
        mobilePhone: [
            {
                required: true,
                message: t('login.form.mobilePhone.errMsg'),
                trigger: 'blur',
            },
            { validator: validateName, trigger: 'blur' },
        ],
        username: [
            {
                required: true,
                message: t('login.form.mailName.errMsg'),
                trigger: 'blur',
            },
            { validator: validateMail, trigger: 'blur' },
        ],
        password: [
            {
                required: true,
                message: t('login.form.mailpassword.errMsg'),
                trigger: 'blur',
            },
            { validator: validatePass, trigger: 'blur' },
        ],
        passwordConfirm: [
            {
                required: true,
                message: t('login.form.mailpassword2.errMsg'),
                trigger: 'blur',
            },
            { validator: validatePassConfirm, trigger: 'blur' },
        ],
    };
});

// 注册提交
function handleSubmit() {
    ruleForm.value.validate(async (e: any) => {
        if (e) {
            let data: any = reactive({
                name: createData.name,
                mobilePhone: createData.mobilePhone,
                username: createData.username,
                password: createData.password,
            });
            Modal.message({
                message: t('login.form.registerPass'),
                status: 'success',
            });
        } else {
            Modal.message({
                message: t('login.form.registerError'),
                status: 'warning',
            });
        }
    });
}
</script>

<style lang="less" scoped>
.login-register-container {
    margin-top: -6%;
    margin-left: 6%;

    .tiny-form-item {
        margin-bottom: 5px;
    }

    &-container {
        width: 320px;
    }

    .login-form-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-left: 65%;
    }

    .login-form-btn {
        display: block;
        width: 100%;
        max-width: 100%;
    }
}
</style>
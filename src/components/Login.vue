<template>
    <div id="login">
        <h3>登录应用平台</h3>
        <div id="form">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>

<style lang="scss">
    @font-face {
      font-family: 'app-icon';  /* project id 436373 */
      src: url('//at.alicdn.com/t/font_436373_mxf53ywypc8lg14i.eot');
      src: url('//at.alicdn.com/t/font_436373_mxf53ywypc8lg14i.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_436373_mxf53ywypc8lg14i.woff') format('woff'),
      url('//at.alicdn.com/t/font_436373_mxf53ywypc8lg14i.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_436373_mxf53ywypc8lg14i.svg#app-icon') format('svg');
    }
    #login {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('./../assets/images/login_bg.png') no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        &:after {
            position: absolute;
            content: '';
            display: inline-block;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(230,230,230,.9),  rgba(230,230,230,.7));
            z-index: 2;
        }
        h3 {
            position: absolute;
            left: 50%;
            top: 22%;
            transform: translate3d(-50%, -50%, 0);
            font-size: 24px;
            z-index: 10;
            color: rgba(0,0,0,.7);
            text-shadow: 0 5px 5px rgba(0,0,0,.15);
            letter-spacing: 2px;
        }
    }
    #form {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate3d(-50%, -50%, 0);
        z-index: 10;
        width: 300px;
    }
</style>

<script>
    import { userLogin } from './../config/apis/common.api';

    export default{
        data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
                    ],
                },
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        userLogin(JSON.stringify({
                            username: this.formInline.user,
                            password: this.formInline.password,
                        })).then(() => {
                            window.localStorage.setItem('hasLoginPlatform', new Date().getTime());
                            this.$emit('change-status');
                        });
                    } else {
                        this.$Message.error('请填写正确的账号和密码!');
                    }
                });
            },
        },
    };
</script>

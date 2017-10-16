<template>
    <div class="pic-upload">
        <Button type="ghost" icon="ios-cloud-upload-outline">上传图片</Button>
        <input type="file" value="上传文件" class="pic-input" ref="ipt"/>
        <p class="img-area" v-if="result !== ''">
            <Button type="primary" shape="circle"
                    icon="close-round" @click="deletePic"
                    size="small" class="pic-icon"></Button>
            <img :src="result" @click="modal = true">
        </p>
        <Modal v-model="modal"
               title="预览文件大图">
            <img :src="result">
        </Modal>
    </div>
</template>

<style lang="scss">
    .pic-upload {
        position: relative;
    }
    .pic-input {
        position: absolute;
        left: 0;
        top: 0;
        height: 40px;
        width: 120px;
        background: red;
        opacity: 0;
        z-index: 100;
        cursor: pointer;
    }
    .pic-result {
        display: block;
        width: 100%;
        margin: 10px 0 0 0;
        min-height: 80px;
    }
    .img-area {
        position: relative;
        display: inline-block;
        margin: 0 0 0 20px;
        max-width: 150px;
        box-shadow: 0 0 40px rgba(0, 0, 0, .1);
        vertical-align: top;
    }
    .pic-icon {
        position: absolute;
        display: inline-block;
        top: -12px;
        right: -12px;
        z-index: 100;
    }
    .ivu-modal-footer {
        display: none!important;
    }
</style>

<script>
    export default{
        data() {
            return {
                cantReadFile: false,
                modal: false,
                result: '',
            };
        },
        props: ['parentMessage'],
        mounted() {
            if (typeof (FileReader) === 'undefined') {
                this.cantReadFile = true;
                this.result = '抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！';
            } else {
                this.$refs.ipt.addEventListener('change', this.readFile, false);
            }
        },
        methods: {
            readFile() {
                const file = this.$refs.ipt.files[0];
                console.log(this.$refs.ipt.files);
                if (file.type && !/image\/\w+/.test(file.type)) {
                    alert('请确保文件为图像类型');
                    return;
                }
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    this.result = reader.result;
                    this.$emit('on-success', reader.result);
                };
            },
            deletePic() {
                if (!confirm('确认删除这张图片?')) return;
                this.result = '';
                this.$emit('on-success', '');
            },
        },
        watch: {
            parentMessage() {
                this.result = this.parentMessage;
            },
        },
    };
</script>

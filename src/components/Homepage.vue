<template>
    <div id="homepage">
        <div class="title1">欢迎使用「新」声动管理</div>
        <div class="p">您可以在这里阅读一些使用指南, 现就目前开放的功能进行简述。</div>
        <div class="title2">代理商管理</div>
        <p class="p">目前开放一下功能:</p>
        <div class="quote">
            <ul class="ul">
                <li class="li">代理商管理</li>
                <ul class="ul">
                    <li class="li">新增代理商</li>
                    <li class="li">修改代理商</li>
                    <li class="li">查看代理商</li>
                    <li class="li">停用代理商</li>
                </ul>
                <li class="li">代理商销售情况</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    #homepage {
        padding: 20px 25px;
    }
    .title1 {
        color: #10a3ee;
        font-size: 1.7em;
        line-height: 1.6em;
        margin: .8em 0 .6em 0;
    }
    .title2 {
        color: #10a3ee;
        font-size: 1.45em;
        line-height: 1.5em;
        margin: 1.5em 0 .8em 0;
    }
    .title3 {
        color: #10a3ee;
        font-size: 1.25em;
        line-height: 1.5em;
        margin: 1.5em 0 .8em 0;
    }
    .p {
        word-wrap: break-word;
        margin: 1.5em 0;
        color: #3c3c3c;
        line-height: 1.8;
    }
    .b {
        color: #000000;
        font-weight: bold;
    }
    .quote {
        box-sizing: border-box;
        margin: 1.6em 0;
        padding: 0 0 0 1.2em;
        border-left: 0.4em solid #dddddd;
        color: #888888;
        min-height: 20px;
        line-height: 1.8;
    }
    .img {
        max-width: 98%;
        margin: 0.8em auto 0.8em auto;
        border-radius: 5px;
    }
    .ul {
        padding: 5px 25px;
        margin: 0;
        list-style-type: disc;
    }
    .li {
        color: #3c3c3c;
    }
</style>

<script>
    export default{
        data() {
            return {
            };
        },
    };
</script>

// 头部
Vue.component('my-header',{
    template:`
    <div class="fixbox flex flex-h flex-vc flex-hbet">
        <img src="images/logo1.png" alt="logo" class="logo">
        <img src="images/iconmore.png" alt="iconmore" class="iconmore" @click="visibleYN=true">
        <div class="chooses" v-if="visibleYN">
            <div class="box-head flex flex-hend flex-vc"><img src="images/close.png" alt="close" @click="visibleYN=false"></div>
            <div class="one" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)" @click="goRouter(0)">首页</div>
            <div class="one" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)" @click="goRouter(1)">成员列表</div>
            <div class="one" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)" @click="goRouter(2)">考试</div>
        </div>
    </div>
    `,
    props:{

    },
    data (){
        return{
            visibleYN:false
        }
    },
    methods:{
        goRouter(index){
            this.visibleYN=false;
            let gourl=null
            if(index==0){
                gourl=homeUrl
            }else if(index==1){
                gourl=memberListUrl
            }else{
                gourl=loginUrl
            }
            if(window.location.href==gourl){
                return;
            }
            window.location.href=gourl
        },
        changeActive($event){
            $event.currentTarget.className="one on";
        },
        removeActive($event){
            $event.currentTarget.className="one";
        },
    }
})
// 底部
Vue.component('my-footer',{
    template:`
   <div class="footer">
        <div class="top flex flex-h flex-hc">
            <div class="right">
                <div class="dec">COPYRIGHT©宁夏机动车检验协会</div>
                <div class="dec">备案号：京ICP备05030302</div>
                <div class="dec">京公网安备 11010202007809号</div>
            </div>
        </div>
        <div class="bottom flex flex-vc flex-hc" @click="scrollToNav">
            回到顶部<img src="images/iconup1.png" alt="iconup.png">
        </div>
    </div>
    `,
    props:{

    },
    data (){
        return{

        }
    },
    methods:{
        scrollToNav(){
            document.body.scrollTop=0;
        }
    }
})
// 底部
Vue.component('my-footer2',{
    template:`
   <div class="footer2">
        <div class="top flex flex-h flex-hc">
            <div class="left">
                <img src="images/logo1.png" alt="logo" class="logo">
            </div>
            <div class="right">
                <div class="dec">关于我们 - 联系方式 - 服务内容 - 广告刊例 - 网站地图</div>
                <div class="dec">地址：北京市西城区莲花池东路106号汇融大厦A座15层 - 邮编：100055 - E-mail:caam@caam.org.cn</div>
                <div class="dec">电话：010-63979900</div>
                <div class="dec">Copyright©中国汽车工业协会 | 备案号：京ICP备05030302 | 京公网安备 11010202007809号</div>
            </div>
        </div>
    </div>
    `,
    props:{

    },
    data (){
        return{

        }
    },
    methods:{

    }
})
//输入框头部
Vue.component('my-input',{
    template:`<div class="cominputwrap flex flex-hc">
    <div class="innerwrap flex flex-h flex-vc">
    <img src="images/iconsearch1.png" alt="iconsearch">
      <form @submit.prevent="" action="">
    <input type="text" placeholder="请输入姓名、身份证号" v-model="content" @keyup.enter="searchfn">
    </form>
    </div>
    </div>`,
    props:['content'],
    data (){
        return{

        }
    },
    methods:{
        searchfn(){
            this.$emit('gosearch',this.content);
        }
    }
})

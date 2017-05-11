require('slick/slick.css')
require('slick/slick-theme.css')
require('slick/slick.min.js')

  ; (function () {

    $(function () {

      if ($('main').hasClass('youxi')) {
        $('.sy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-game/bg3.png')
          // $('.lay02-right-title').html('医生患者模式')
          $('.li1').html('大量玩家并发访问，对服务器的运算能力和稳定性有着极高的要求。')
          $('.li2').html('MMO类游戏有着比较强的PVE、PVP特性，对网络延迟的容忍度更低。')
          $('.li3').html('游戏每个区有较多玩家同时在线，需要高数据读写速度。')
          $('.li4').html('运维繁重工作量，运维自动化要求高。')
          $('.li5').html('')
          $('.li6').html('高性能服务器：最高配置可达48核，128G内存，万兆网卡。')
          $('.li7').html('业界领先BGP网络：多线BGP接入20家网络运营商，解决网络质量问题。')
          $('.li8').html('云数据库MySQL：根据腾讯多年DB经验优化内核，性能高达37000QPS，满足数据读写需求。')
          $('.li9').html('高效运维：腾讯云蓝鲸作业平台为游戏运维量身定制，提升运维效率。')
          $('.li10').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })
        $('.yy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-game/bg6.png')
          // $('.lay02-right-title').html('互动直播')
          $('.li1').html('需要网络低延时，不跨网。')
          $('.li2').html('网页游戏很容易在开服或推广期间遭受大流量DDOS 、CC等攻击')
          $('.li3').html('通过浏览器登录游戏，所有资源都需要远程加载，游戏内容下载加速和资源动态加载策略至关重要。')
          $('.li4').html('不同业务阶段对资源量动态调整的需求，需要弹性云计算能力。')
          $('.li5').html('MMORPG页游大量的开服合服,需批量操作，提高运维效率。')
          $('.li6').html('20线BGP网络覆盖全国互联网用户，大幅提升客户端到服务端的网络质量。')
          $('.li7').html('腾讯云跟进不通的业务场景，提供分布式防御系统(大禹系统)、机房安全能力清洗中心和高仿区三种安全解决方案。')
          $('.li8').html('全球400+个加速节点，20Tbps带宽能力，CDN加速能力超同类产品30%。')
          $('.li9').html('主机弹性伸缩、带宽共享、资源按量计费等模式使云服务成本弹性可控。')
          $('.li10').html('自定义镜像服务和蓝鲸平台，对服务器统一管理，扩缩容一键完成。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.dy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-game/bg9.png')
          // $('.lay02-right-title').html('互动直播')
          $('.li1').html('网络延时低，高网络吞吐量。')
          $('.li2').html('地图走位、技能、装备、人物属性变化频繁，需高性能运算能力。')
          $('.li3').html('弹性伸缩能力，MOBA工作与非工作日、工作与非工作时段在线波动大。')
          $('.li4').html('单点容灾，服务器可用性关系到玩家的在线体验，单机可靠性至关重要。')
          $('.li5').html('大量玩家涌入，批量扩容，高效运维，快速满足用户量增长。')
          $('.li6').html('20线BGP网络覆盖全国互联网用户，大幅提升客户端到服务端的网络质量。')
          $('.li7').html('腾讯云独立计算资源方案确保服务器获得计算性能超高及稳定的运算能力。')
          $('.li8').html('主机弹性伸缩、带宽共享、资源按量计费等模式使云服务成本弹性可控。')
          $('.li9').html('腾讯云乾坤系统可以实现热迁移，迁移过程对玩家透明，无感知。')
          $('.li10').html('自定义镜像服务和蓝鲸平台，对服务器统一管理，扩缩容一键完成。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.slick').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })

        $('#slick-slide00').append('<p>基础产品</p>')

        $('#slick-slide01').append('<p>游戏服务</p>')
        $('#slick-slide02').append('<p>安全防护</p>')
        $('#slick-slide00').children('p').addClass('active')
        $('#slick-slide00').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })
        $('#slick-slide01').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })
        $('#slick-slide02').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })
      }

      if ($('main').hasClass('yiliao')) {
        $('.yuyin').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution/l1.png')
          $('.lay02-right-title').html('医生患者模式')
          $('.lay02-right-text').html('通过腾讯PSTN通信平台，医生可以放心拨打自己患者的电话，不再透露自己手机号，避免骚扰，可选择实现患者能否回拨。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.shipin').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution/l2.png')
          $('.lay02-right-title').html('互动直播')
          $('.lay02-right-text').html('腾讯云互动直播服务具备400ms超低延时，多人音视频互动，服务覆盖全球的特点，可快速搭建一对一，一对多，多对多的远程医疗视频场景。只需集成SDK，就可实现音视频的采集、编解码、传输、渲染播放等工作，业界领先的云端流控策略，卓越的音视频技术，将保障您的服务在Android、iOS、Windows、Web主流平台及不同终端机型上都有着优异的直播效果，拥有与腾讯课堂一样的服务质量。更可支持桌面分享，支持云端录制实现存储功能。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.slick').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })
      }

      if ($('main').hasClass('shuju')) {

        $('.sj').click(function () {
          $('.lay03-right-img').children('img').attr('src', '../../images/solution-figure/bg2.png')
          // $('.lay02-right-title').html('医生患者模式')
          $('.xz').html('通常情况下，ADX在竞价请求只会传递用户标识，不会告知年龄，性别，学历，兴趣等用户标签，DSP需要依赖自有或第三方DMP用户标签数据来进行检索，及模型训练等处理。如何提升用户标签数据质量，从而提升广告投放的精准度和转化率是DSP的业务痛点。')
          $('.fa1').html('<strong>用户标识+用户标签：</strong>对于将RTB服务、模型训练、数据中心部署在腾讯云上的DSP，广点通ADX在竞价请求中返回用户标签的同时，在点击上报中新增用户唯一标识的上报，DSP可将该设备ID与用户标签关联后，用于模型训练，也可将该用户标识传递给广告主或第三方监测机构进行效果监控。')
          $('.fa2').html('<strong>新增用户标签：</strong>对于将RTB服务、模型训练、数据中心部署在腾讯云上的DSP，广点通ADX在竞价请求中将会返回更多用户标签，以提升DSP精准定向的能力，丰富模型训练的数据，最终提升广告效果转化。')
          $('.fa3').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })
        $('.wl').click(function () {
          $('.lay03-right-img').children('img').attr('src', '../../images/solution-figure/bg3.png')
          // $('.lay02-right-title').html('互动直播')
          $('.xz').html(' DSP是否能够买到广告，延时是决定性因素之一。通常情况下，ADX规定在100ms内DSP必须做出竞价返回，超时返回，DSP则失去竞价机会，从而曝光、点击、广告消耗也会跟着下降。网络延时是最常见也是最大的延时情况之一，如何降低优化网络延时，提升网络稳定性是DSP的业务痛点。')
          $('.fa1').html('<strong>内网直连：</strong>DSP服务部署在腾讯云上可通过专属BGP链路与广点通ADX内网直连，延时最低，稳定性高。')
          $('.fa2').html('<strong>就近接入：</strong>腾讯云机房部署了广点通ADX “就近接入”集群，降低延时，提高竞价率。')
          $('.fa3').html('<strong>优质流量对接：</strong>DSP服务部署在腾讯云上，将获得更多优质流量的竞价请求，如QQ浏览器流量，其需要DSP在60ms内必须做出竞价返回。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.cb').click(function () {
          $('.lay03-right-img').children('img').attr('src', '../../images/solution-figure/bg4.png')
          // $('.lay02-right-title').html('互动直播')
          $('.xz').html(' DSP大多采用传统IDC方式来部署服务及与ADX进行对接，需要投入人力来维护基础设施，并且广告请求波动较大，IDC模式不够弹性，带来来较高成本。')
          $('.fa1').html('<strong>云服务：</strong>腾讯云提供覆盖计算、存储与CDN、网络、数据库、大数据处理等丰富完善的云产品，按需购买，快速部署，弹性节约，可帮助DSP大大的降低基础设施成本，同时免去了大量的运维投入，将精力专注在DSP业务本身。')
          $('.fa2').html('<strong>数据迁移：</strong>依托腾讯多年的大规模数据运维经验，定制化解决迁移问题 ')
          $('.fa3').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.slick').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })
      }

      if ($('main').hasClass('shipin')) {

        $('.yx').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-video/bg1.png')
          $('.lay02-right-title').html('游戏直播')
          $('.li1').html('通过腾讯云视频解决方案，用户可快速搭建一个功能齐备的游戏直播发布平台；')
          $('.li2').html('直播提供HLS拉流/RTMP推流接入能力，快速接入游戏主播摄像头、游戏桌面、专业视频源等，并行进快速下发；通过500+CDN节点快速触及玩家；低至2秒延迟；')
          $('.li3').html('互动直播通过双向SDK，提供400ms超低延迟的实时互动能力，提供游戏直播场景中的互动能力；下行也可通过标准HLS下发进行单向直播，无需安装SDK；')
          $('.li4').html('直播以及互动直播场景均可进行录制并转入点播系统；')
          $('.li5').html('IM SDK功能可集成在移动端和网页应用中，提供基于文本、图片的即时通信功能，丰富直播交互场景；')
          $('.li6').html('可通过API快速同已有媒资系统和内容管理系统进行对接。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.sp').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-video/bg2.png')
          $('.lay02-right-title').html('视频门户')
          $('.li1').html('通过腾讯云视频解决方案，用户可快速搭建一个完善的视频门户发布平台；')
          $('.li2').html('点播提供专业的视频上传拉取、转码、分发服务，万台转码集群和500+CDN分发节点；')
          $('.li3').html('直播可实时快速发布各类HLS/RTMP标准视频直播源，一站接入专业媒体设备和导播台；')
          $('.li4').html('可通过API快速同已有媒资系统和内容管理系统进行对接；')
          $('.li5').html('各类播放器SDK快速整合播放能力至已有应用；')
          $('.li6').html('丰富的统计功能可提供完善的用户观看行为分析。')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.zx').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-video/bg3.png')
          $('.lay02-right-title').html('在线教育')
          $('.li1').html('通过腾讯云视频解决方案，用户可快速搭建一个完善的在线教育平台；')
          $('.li2').html('点播将服务于您的录播课程，覆盖全国的500+CDN下发节点确保任意时间、任意地点的学生用户均可快速查看教学内容；')
          $('.li3').html('直播、互动直播将服务于您的直播课程，支持标准HLS/RTMP直播源，也支持通过集成SDK搭建低延时互动直播课程；')
          $('.li4').html('云通信将服务于您课程中的即时通讯场景，支持图文聊天，及文件的传输。')
          $('.li5').html('')
          $('.li6').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.mn').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-video/bg4.png')
          $('.lay02-right-title').html('美女主播')
          $('.li1').html('通过腾讯云视频解决方案，用户可快速搭建传统一对多的主播平台、多对多的互动主播平台，及基于移动端的全民直播平台；')
          $('.li2').html('直播、互动直播将服务于您的直播系统，支持标准HLS/RTMP直播源，也支持通过集成SDK搭建低延时互动直播课程；')
          $('.li3').html('云通信将服务于您的互动聊天场景，用户观看美女主播时可以同时在聊天面板里发送文字、表情、图片以及自定义小礼物的等消息；')
          $('.li4').html('点播将服务于您的录制场景，可以将生动有趣的主播场景录制转码分发，进一步发挥价值扩大影响。')
          $('.li5').html('')
          $('.li6').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.cz').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-video/bg4.png')
          $('.lay02-right-title').html('垂直社交')
          $('.li1').html('通过腾讯云通信解决方案，用户可高效低成本的受QQ同等优质的聊天能力；')
          $('.li2').html('云通信将帮助开发商快速实现完美的C2C单聊和群聊功能，通过SDK高效集成账号登录体系，完备的资料关系链和群组管理，配合高联通的接入在短期内极大的提升了用户活跃度，用户粘性明显增强；')
          $('.li3').html('互动直播将服务于您的音视频社交，通过SDK可集成跨平台，高质量的音视频通信。')
          $('.li4').html('')
          $('.li5').html('')
          $('.li6').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })


        $('.slick').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5500,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })

        $('#slick-slide00').append('<p>基础产品</p>')

        $('#slick-slide01').append('<p>游戏服务</p>')
        $('#slick-slide02').append('<p>安全防护</p>')
        $('#slick-slide00').children('p').addClass('active')
        $('#slick-slide00').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })
        $('#slick-slide01').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })
        $('#slick-slide02').click(function () {
          $(this).children('p').addClass('active')
          $(this).siblings().children('p').removeClass('active')
        })

      }

      if ($('main').hasClass('lvyou')) {

        $('.sy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-tourism/bg1.png')
          $('.lay02-right-title').html('交易平台')
          $('.li1').html('大量的图片资源需要处理')
          $('.li2').html('全方位的安全防护，应对DDOS，CC，刷单')
          $('.li3').html('极致加速，实现最优的用户体验')
          $('.li4').html('便捷高触达短信服务,应用于验证码,通知和营销场景')

          $('.li6').html('万象优图支持裁剪，水印，压缩，鉴黄，标签识别等一站式的图片处理')
          $('.li7').html('大禹和天御可以提供针对DDOS，CC，刷单的全方位防护')
          $('.li8').html('500+CDN加速节点，20T带宽，极致加速体验')
          $('.li9').html('短信服务历经自有业务月10亿+短信验证，接入快捷')
          $('.li10').html('')
          $(this).addClass('active').siblings().removeClass('active')
        })
        $('.yy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-tourism/bg2.png')
          $('.lay02-right-title').html('内容平台')
          $('.li1').html('大量的UGC消息需要过滤')
          $('.li2').html('全方位的安全防护，应对DDOS，CC攻击')
          $('.li3').html('极致加速，实现最优的用户体验')
          $('.li4').html('')
          $('.li6').html('天御消息防刷帮用户实现便捷全面的消息过滤')
          $('.li7').html('大禹可实现海量DDOS防护，CC防护，用户无感知')
          $('.li8').html('500+CDN加速节点，20T带宽，极致加速体验')
          $('.li9').html('')

          $(this).addClass('active').siblings().removeClass('active')
        })

        $('.dy').click(function () {
          $('.lay02-left-img').children('img').attr('src', '../../images/solution-tourism/bg3.png')
          $('.lay02-right-title').html('传统企业上云')
          $('.li1').html('全方位的安全防护，应对DDOS，CC攻击')
          $('.li2').html('极致加速，实现最优的用户体验')
          $('.li3').html('和IDC快速组建混合云')
          $('.li4').html('便捷高触达短信服务应用于通知和验证码场景')
          $('.li6').html('对应的解决方案')
          $('.li7').html('500+CDN加速节点，20T带宽，极致加速体验')
          $('.li8').html('VPN，专线已作为标准服务上线提供服务，助力用户混合云建设')
          $('.li9').html('短信服务历经自有业务月10亿+短信验证，接入快捷')
          $(this).addClass('active').siblings().removeClass('active')
        })
      }

    })

  })()
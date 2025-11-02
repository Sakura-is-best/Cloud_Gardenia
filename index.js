// 省份介绍数据
        const provinceIntros = {
            "北京": "北京，简称'京'，是中华人民共和国的首都，是全国的政治中心、文化中心，是世界著名古都和现代化国际城市。",
            "天津": "天津，简称'津'，是中华人民共和国省级行政区、直辖市，地处华北平原东北部，海河流域下游，东临渤海，北依燕山。",
            "河北": "河北，简称'冀'，地处华北平原，东临渤海，内环京津，西为太行山地，北为燕山山地，是中国唯一兼有高原、山地、丘陵、平原、湖泊和海滨的省份。",
            "山西": "山西，简称'晋'，位于中国华北，东依太行山，西、南依吕梁山、黄河，北依古长城，是典型的为黄土覆盖的山地高原。",
            "内蒙古": "内蒙古自治区，简称'内蒙古'，位于中国北部边疆，是中国五个少数民族自治区之一，草原、森林和人均耕地面积居全中国第一。",
            "辽宁": "辽宁，简称'辽'，位于中国东北地区南部，南临黄海、渤海，是中国重要的老工业基地，有'共和国长子'和'东方鲁尔'的美誉。",
            "吉林": "吉林，简称'吉'，位于中国东北地区中部，地处东北亚地理中心位置，是中国重要的工业基地和商品粮生产基地。",
            "黑龙江": "黑龙江，简称'黑'，位于中国最东北部，是中国位置最北、纬度最高的省份，有'北大仓'（粮仓）之称。",
            "上海": "上海，简称'沪'或'申'，是中华人民共和国省级行政区、直辖市，中国的经济、金融、贸易、航运、科技创新中心。",
            "江苏": "江苏，简称'苏'，地处中国大陆东部沿海地区中部，长江、淮河下游，是著名的鱼米之乡，有'水乡江苏'的美誉。",
            "浙江": "浙江，简称'浙'，地处中国东南沿海长江三角洲南翼，素有'鱼米之乡、丝茶之府、文物之邦、旅游胜地'的美誉。",
            "安徽": "安徽，简称'皖'，地处中国华东地区，跨长江、淮河流域，拥有丰富的旅游资源，是徽文化的发源地。",
            "福建": "福建，简称'闽'，位于中国东南沿海，依山傍海，有'八山一水一分田'之说，是海上丝绸之路的起点。",
            "江西": "江西，简称'赣'，地处中国东南部，长江中下游南岸，是江南'鱼米之乡'，古有'吴头楚尾，粤户闽庭'之称。",
            "山东": "山东，简称'鲁'，位于中国东部沿海、黄河下游，是儒家文化发源地，有'孔孟之乡，礼仪之邦'的美誉。",
            "河南": "河南，简称'豫'，位于中国中东部、黄河中下游，是中华民族与华夏文明的发源地，中国四大发明中的指南针、造纸、火药三大技术均发明于河南。",
            "湖北": "湖北，简称'鄂'，位于中国中部地区，因地处洞庭湖以北而得名，素有'千湖之省'之称，是楚文化的发祥地。",
            "湖南": "湖南，简称'湘'，地处中国中部、长江中游，因大部分区域处于洞庭湖以南而得名，是伟人故里，将帅之乡。",
            "广东": "广东，简称'粤'，地处中国大陆最南部，是中国第一经济大省，岭南文化的重要传承地。",
            "广西": "广西壮族自治区，简称'桂'，地处中国华南地区，是中国唯一临海的少数民族自治区，有'桂林山水甲天下'的美誉。",
            "海南": "海南，简称'琼'，位于中国最南端，是中国国土面积第一大省，也是中国最大的经济特区和唯一的热带岛屿省份。",
            "重庆": "重庆，简称'渝'，地处中国内陆西南部，是长江上游地区的经济、金融、科创、航运和商贸物流中心。",
            "四川": "四川，简称'川'或'蜀'，位于中国西南地区内陆，素有'天府之国'的美誉，是中国西部门户，大熊猫的故乡。",
            "贵州": "贵州，简称'黔'或'贵'，地处中国西南内陆地区腹地，是中国西南地区交通枢纽，世界知名山地旅游目的地。",
            "云南": "云南，简称'云'或'滇'，位于中国西南的边陲，是人类文明重要发祥地之一，有'彩云之南'的美誉。",
            "西藏": "西藏自治区，简称'藏'，位于青藏高原西南部，素有'世界屋脊'之称，是藏文化的发源地。",
            "陕西": "陕西，简称'陕'或'秦'，地处中国内陆腹地，黄河中游，是中华民族及华夏文化的重要发祥地之一。",
            "甘肃": "甘肃，简称'甘'或'陇'，位于中国西北地区，地处黄河上游，是古丝绸之路的锁匙之地和黄金路段。",
            "青海": "青海，简称'青'，位于中国西北内陆，因境内有国内最大的内陆咸水湖——青海湖而得名，是长江、黄河、澜沧江的发源地。",
            "宁夏": "宁夏回族自治区，简称'宁'，位于中国西北内陆地区，素有'塞上江南'之称，是中华文明的发祥地之一。",
            "新疆": "新疆维吾尔自治区，简称'新'，位于中国西北边陲，是中国面积最大的省级行政区，有'歌舞之乡'、'瓜果之乡'的美称。",
            "台湾": "台湾省，简称'台'，位于中国大陆东南海域，是中国第一大岛，有'宝岛'的美称，旅游资源丰富。",
            "香港": "香港特别行政区，简称'港'，地处中国华南地区，是全球第三大金融中心，有'东方之珠'、'美食天堂'和'购物天堂'等美誉。",
            "澳门": "澳门特别行政区，简称'澳'，位于中国南部珠江口西侧，是中国大陆与南中国海的水陆交汇处，有'海上花园'之称。"
        };

        // 景点数据
        const attractionsData = {
            "北京": [
                {
                    name: "八达岭长城",
                    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于北京市延庆区，是明长城中保存最好、也最具代表性的一段，被誉为'天下九塞之一'。",
                    rating: 4.8
                },
                {
                    name: "故宫博物院",
                    image: "https://images.unsplash.com/photo-1614077151331-37f4789bda1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
                    description: "位于北京中轴线的中心，是中国明清两代的皇家宫殿，是世界上现存规模最大、保存最为完整的木质结构古建筑群之一。",
                    rating: 4.9
                },
                {
                    name: "颐和园",
                    image: "https://images.unsplash.com/photo-1628859337520-9761d4497408?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFOSVBMiU5MCVFNSU5MiU4QyVFNSU5QiVBRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
                    description: "中国清朝时期皇家园林，前身为清漪园，坐落在北京西郊，与圆明园毗邻，是以昆明湖、万寿山为基址，以杭州西湖为蓝本的大型山水园林。",
                    rating: 4.7
                }
            ],
            "四川": [
                {
                    name: "九寨沟",
                    image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于四川省阿坝藏族羌族自治州，以翠海、叠瀑、彩林、雪峰、藏情、蓝冰'六绝'著称于世。",
                    rating: 4.9
                },
                {
                    name: "峨眉山",
                    image: "https://images.unsplash.com/photo-1570654621851-5d0a1b8d0b7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "中国'四大佛教名山'之一，地势陡峭，风景秀丽，素有'峨眉天下秀'之称，山上的万佛顶最高，海拔3099米。",
                    rating: 4.7
                },
                {
                    name: "都江堰",
                    image: "https://images.unsplash.com/photo-1598975676292-0c913f6d8d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，是世界文化遗产、世界自然遗产、全国重点文物保护单位。",
                    rating: 4.6
                }
            ],
            "云南": [
                {
                    name: "丽江古城",
                    image: "https://images.unsplash.com/photo-1588410141293-3d84353daa71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于云南省丽江市古城区，坐落在丽江坝中部，始建于宋末元初，是中国以整座古城申报世界文化遗产获得成功的两座古城之一。",
                    rating: 4.8
                },
                {
                    name: "玉龙雪山",
                    image: "https://images.unsplash.com/photo-1560165009-5a79a2a9d7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于云南省丽江市境内雪山群，是北半球最近赤道终年积雪的山脉，隔江西与中甸雪山、东与绵绵山相并列。",
                    rating: 4.7
                },
                {
                    name: "石林风景区",
                    image: "https://images.unsplash.com/photo-1564551172895-bb983154b59d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    description: "位于云南省昆明市石林彝族自治县境内，是世界自然遗产，世界地质公园，国家AAAAA级旅游景区。",
                    rating: 4.5
                }
            ]
        };

        // 景点详情数据
        const attractionDetails = {
            "八达岭长城": {
                location: "北京市延庆区",
                rating: 4.8,
                duration: "3-4小时",
                mainImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                description: "八达岭长城，位于北京市延庆区军都山关沟古道北口。是中国古代伟大的防御工程万里长城的重要组成部分，是明长城的一个隘口。八达岭长城为居庸关的重要前哨，古称'居庸之险不在关而在八达岭'。",
                history: "八达岭长城史称天下九塞之一，是万里长城的精华，在明长城中，独具代表性。该段长城地势险峻，居高临下，是明代重要的军事关隘和首都北京的重要屏障。",
                tips: "八达岭长城最佳游览时间为4月-10月。建议穿着舒适的鞋子，因为需要步行较长的距离。景区内有缆车可供选择，可以节省体力。夏季注意防晒，冬季注意保暖。",
                openTime: "旺季: 6:30-19:00 (4月1日-10月31日)<br>淡季: 7:00-18:00 (11月1日-3月31日)",
                ticket: "旺季: 40元/人<br>淡季: 35元/人",
                transport: "1. 德胜门乘坐877路公交车直达八达岭长城<br>2. 北京北站乘坐市郊铁路S2线<br>3. 自驾车沿京藏高速公路行驶至八达岭长城出口",
                season: "春季和秋季是最佳游览季节，天气宜人，风景优美。"
            },
            "九寨沟": {
                location: "四川省阿坝藏族羌族自治州",
                rating: 4.9,
                duration: "1-2天",
                mainImage: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                description: "九寨沟位于四川省阿坝藏族羌族自治州九寨沟县境内，是一条纵深50余千米的山沟谷地，总面积64297公顷，森林覆盖率超过80%。因沟内有树正寨、荷叶寨、则查洼寨等九个藏族村寨坐落在这片高山湖泊群中而得名。",
                history: "九寨沟国家级自然保护区主要保护对象是以大熊猫、金丝猴等珍稀动物及其自然生态环境。有74种国家保护珍稀植物，有18种国家保护动物，还有丰富的古生物化石、古冰川地貌。",
                tips: "九寨沟海拔较高，注意预防高原反应。景区内交通便利，有环保观光车。最佳拍摄时间是上午10点前和下午4点后，光线柔和，色彩鲜艳。",
                openTime: "旺季: 7:00-18:00 (4月1日-11月15日)<br>淡季: 8:00-17:00 (11月16日-3月31日)",
                ticket: "旺季: 169元/人<br>淡季: 80元/人",
                transport: "1. 从成都新南门车站乘坐直达九寨沟的班车<br>2. 从成都双流机场乘飞机到九寨沟黄龙机场<br>3. 自驾车沿成灌高速、都汶高速、213国道前往",
                season: "秋季(9月下旬至10月下旬)是最佳游览季节，此时色彩最为丰富。"
            }
        };

        // 页面导航功能
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');
            
            // 导航链接点击事件
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetPage = this.getAttribute('data-page');
                    
                    // 隐藏所有页面
                    pages.forEach(page => {
                        page.classList.remove('active');
                    });
                    
                    // 显示目标页面
                    document.getElementById(targetPage).classList.add('active');
                    
                    // 更新导航菜单激活状态
                    navLinks.forEach(nav => {
                        nav.classList.remove('active');
                    });
                    
                    // 如果是顶部导航链接，设置激活状态
                    if (this.classList.contains('nav-link') && !this.classList.contains('province-item') && !this.classList.contains('attraction-card')) {
                        this.classList.add('active');
                    }
                    
                    // 处理省份详情页
                    if (targetPage === 'province-detail') {
                        const province = this.getAttribute('data-province');
                        showProvinceDetail(province);
                    }
                    
                    // 处理景点详情页
                    if (targetPage === 'attraction-detail') {
                        const attraction = this.getAttribute('data-attraction');
                        showAttractionDetail(attraction);
                    }
                });
            });
            
            // 搜索功能
            const searchInput = document.querySelector('.search-box input');
            const searchButton = document.querySelector('.search-box button');
            
            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                
                if (searchTerm === '') {
                    return;
                }
                
                // 这里可以添加搜索逻辑
                alert(`搜索: ${searchTerm}`);
                // 在实际应用中，这里应该跳转到搜索结果页面
            }
            
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        });
        
        // 显示省份详情
        function showProvinceDetail(province) {
            document.getElementById('province-name').textContent = province;
            document.getElementById('province-intro').textContent = provinceIntros[province] || "暂无该省份的介绍信息";
            
            const attractionsContainer = document.getElementById('province-attractions');
            attractionsContainer.innerHTML = '';
            
            if (attractionsData[province]) {
                attractionsData[province].forEach(attraction => {
                    const attractionCard = document.createElement('a');
                    attractionCard.href = '#';
                    attractionCard.className = 'attraction-card nav-link';
                    attractionCard.setAttribute('data-page', 'attraction-detail');
                    attractionCard.setAttribute('data-attraction', attraction.name);
                    
                    attractionCard.innerHTML = `
                        <div class="attraction-img">
                            <img src="${attraction.image}" alt="${attraction.name}">
                        </div>
                        <div class="attraction-info">
                            <h3>${attraction.name}</h3>
                            <p>${attraction.description}</p>
                            <div class="attraction-meta">
                                <span><i class="fas fa-map-marker-alt"></i> ${province}</span>
                                <span><i class="fas fa-star"></i> ${attraction.rating}</span>
                            </div>
                        </div>
                    `;
                    
                    attractionsContainer.appendChild(attractionCard);
                });
            } else {
                attractionsContainer.innerHTML = '<p>暂无该省份的景点数据</p>';
            }
            
            // 重新绑定导航事件
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetPage = this.getAttribute('data-page');
                    
                    // 隐藏所有页面
                    document.querySelectorAll('.page').forEach(page => {
                        page.classList.remove('active');
                    });
                    
                    // 显示目标页面
                    document.getElementById(targetPage).classList.add('active');
                    
                    // 处理景点详情页
                    if (targetPage === 'attraction-detail') {
                        const attraction = this.getAttribute('data-attraction');
                        showAttractionDetail(attraction);
                    }
                });
            });
        }
        
        // 显示景点详情
        function showAttractionDetail(attraction) {
            const detail = attractionDetails[attraction];
            
            if (detail) {
                document.getElementById('detail-title').textContent = attraction;
                document.getElementById('detail-location').textContent = detail.location;
                document.getElementById('detail-rating').textContent = detail.rating;
                document.getElementById('detail-duration').textContent = detail.duration;
                document.getElementById('detail-main-img').src = detail.mainImage;
                document.getElementById('detail-description').textContent = detail.description;
                document.getElementById('detail-history').textContent = detail.history;
                document.getElementById('detail-tips').textContent = detail.tips;
                document.getElementById('detail-open-time').innerHTML = detail.openTime;
                document.getElementById('detail-ticket').innerHTML = detail.ticket;
                document.getElementById('detail-transport').innerHTML = detail.transport;
                document.getElementById('detail-season').textContent = detail.season;
            }
        }
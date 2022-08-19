

    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const app = {
        songs: [
            {
                name: 'Buồn Không Em',
                singer: 'Đạt G',
                path: './acsess/music/Buồn Không Em Đạt G.mp',
                image: './acsess/img/datg.jpg'
            },
            {
                name: 'Chìm Sâu',
                singer: 'RPT MCk',
                path: './acsess/music/Chìm Sâu  RPT MCK.mp3',
                image: './acsess/img/mck.jpg'
            },
            {
                name: 'Ngày Khác Lạ',
                singer: 'Đen Vâu',
                path: './acsess/music/Đen  Ngay Khac La.mp3',
                image: './acsess/img/đen.jpg'
            },
            {
                name: 'Roar',
                singer: 'Katy Perry',
                path: './acsess/music/Katy Perry  Roar.mp3',
                image: './acsess/img/Katy-Perry.jpg'
            },
            {
                name: 'Moment',
                singer: 'Lil Wuyn',
                path: './acsess/music/Lil Wuyn Moment.mp3',
                image: './acsess/img/lilwuyn.jpg'
            },
            {
                name: 'Long Time No See',
                singer: 'Lil Wuyn',
                path: './acsess/music/Long-Time-No-See-Lil-Wuyn.mp3',
                image: './acsess/img/lilwuyn.jpg'
            },
            {
                name: 'IceMan',
                singer: 'Sol 7 ft Mck',
                path: './acsess/music/Sol7 ft MCK  iceMan.mp3',
                image: './acsess/img/sol7.jpg'
            },
            {
                name: 'Muộn Rồi Mà Sao Còn',
                singer: 'Sơn Tùng MTP',
                path: './acsess/music/SƠN TÙNG MTP  MUỘN RỒI MÀ SAO CÒN.mp3',
                image: './acsess/img/mtp.jpg'
            },
            {
                name: 'Sugar',
                singer: 'Maroon 5',
                path: './acsess/music/sugar.mp3',
                image: './acsess/img/maroon 5.jpg'
            },
            {
                name: 'Your Smile',
                singer: 'Obito ft Emma',
                path: './acsess/music/YOUR SMILE  Emma x Seachains x Obito.mp3',
                image: './acsess/img/Obito.jpg'
            }
        ],

        render: function() {
            const htmls = this.songs.map(function(song) {
                return `
                    <div class="play__item">
                        <div class="play__item-wrap-img">
                            <img class="play__item-img" src="${song.image}" alt="">
                        </div>
                        <div class="play__item-content">
                            <h4 class="title">${song.name}</h4>
                            <small class="singername">${song.singer}</small>
                        </div>
                    </div>
                `
            })
            $('.playlist').innerHTML = htmls.join('');
        },
        handleEvents: function() {
            const cd = $('.cd');
            const playList = $('.playlist');
            const cdWidth = cd.offsetWidth;
            console.log('hello');
            $('.playlist').onscroll = function() {
                const lengthScroll = $('.playlist').scrollTop.toFixed();
                const newWidth = cdWidth - lengthScroll;
                
                const newHeightMargin =  380 - (200 - newWidth);
                if(newWidth >= 0){
                    cd.style.width = newWidth + 'px';
                    cd.style.height = newWidth + 'px';
                    playList.style.marginTop = newHeightMargin+ 'px';
                }else {
                    if(newWidth<0){
                        cd.style.width = 0;
                        playList.style.marginTop = newHeightMargin+ 'px';
                    }
                }
                cd.style.opacity = newWidth / cdWidth;
            }
        },

        start: function() {
            this.handleEvents();

            this.render();
        }
    }

    app.start();


    
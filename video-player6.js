


player.watermark({
 file: 'https://picsum.photos/50/50',
 xpos: 0,
 ypos: 0,
 opacity: 0.6,clickable: true,
 url:'https://verkkonet.com'
});

player.thumbnails({
    0: {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    },

    30: {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    }


});

var nextsrc = ["https://drive.google.com/uc?export=&id=1-FQN9D9Lx8jQZ4BVqGOfuJSklGUv9PHi","https://drive.google.com/uc?export=&id=1047hOqoyQHbHK1pTRgKBvjtSvHZMbCEB","https://drive.google.com/uc?export=&id=1-bE8H4ibeDaE4Fq1jh6MyFvNMjSWaiT7","https://drive.google.com/uc?export=&id=1-UtBmifRsplySSVCEfZnLcZtieHHUEgK","https://drive.google.com/uc?export=&id=108VBMuTUArigZihwHkrXohl3O81zBYh8","https://drive.google.com/uc?export=&id=1-9hGOzmuSE66wXFaXhrlTxnHDH47ahQH","https://drive.google.com/uc?export=&id=10PVvxB1JyjNkA0CT76MM68DQIB-Blbu-","https://drive.google.com/uc?export=&id=10FD1PuAGO_MMs8JqBnv5i5ySJDcTKv8a","https://drive.google.com/uc?export=&id=10G6ks4pn9FUYh4O1ceDTSP2_x2mPMb7D","https://drive.google.com/uc?export=&id=108pD6_3z77ecg0ckpdLK2WiPzVXPu3a2","https://drive.google.com/uc?export=&id=10GCp5do7Jziu8KBu6FhUL0cPykJQecmJ","https://drive.google.com/uc?export=&id=10YgM8mIMKCe2PlcmyQfTrnnpahMv5MFA","https://drive.google.com/uc?export=&id=1CIYwHLciWD6tUWt6O19Pc9zdydWng86D","https://drive.google.com/uc?export=&id=1-8ielGxidy6hUfwgedmd8dfPvz-3uUJ9","https://drive.google.com/uc?export=&id=10GCp5do7Jziu8KBu6FhUL0cPykJQecmJ"];

var Elm = 0; var Player = document.getElementById('myvid');
            Player.onended = function(){
                if(++Elm < nextsrc.length){         
                     Player.src = nextsrc[Elm]; Player.play();
                } 
            };


player.rotate(player);
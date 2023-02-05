var levelOne = {
    Lich: [{x:37+(25*4),y:(390/64)}],
    Skeleton: [{x:23.5,y:(540/64)},{x:8+(25*2),y:(540/64)}],
    Tree: [{x:(55/64),y:4},{x:15+(25*2),y:3},{x:14+(25*1),y:4},{x:20,y:4}],
    Bush: [{x:(655/64),y:4},{x:15+(25*2),y:3},{x:5+(25*2),y:4},{x:12.5+(25*1),y:4}],
    Rock:[{x:14.25+(25*1),y:4}],
    Ground:[
    
    //test side collision sprites    
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:10,size:4},
    
    // standard 0-20 block grass 0
    {sprite:"./tileset/forest/forest_tiles00.png",x:14,y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:15,y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:18,y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles03.png",x:14,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:15,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:16,y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:18,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:14},
    {sprite:"./tileset/forest/forest_tiles01.png",x:19,y:11,size:7},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:18,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:22,y:12,size:4,c:true},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:25,c:true},
    // standard 0-20 block grass 1
        //tower
        {sprite:"./tileset/forest/forest_tiles26.png",x:12+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles27.png",x:13+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles28.png",x:14+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:10,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:10,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:10,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles00.png",x:4+(25*1),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:5+(25*1),y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:8+(25*1),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*1),y:11,size:3},
    {sprite:"./tileset/forest/forest_tiles03.png",x:4+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:5+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:6+(25*1),y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:8+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:9+(25*1),y:11,size:11},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*1),y:12,size:13,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*1),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*1),y:13,size:19,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*1),y:13,size:1,c:true},
    // standard 0-20 block grass 2
    {sprite:"./tileset/forest/forest_tiles00.png",x:15+(25*2),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:16+(25*2),y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:19+(25*2),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles00.png",x:0+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*2),y:11,size:14},
    {sprite:"./tileset/forest/forest_tiles03.png",x:15+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:16+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*2),y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:19+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:20+(25*2),y:11,size:6},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*2),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*2),y:12,size:21,c:true},  
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:13,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*2),y:13,size:24,c:true},
    //cave
    {sprite:"./tileset/forest/forest_tiles41.png",x:-4,y:14,size:74,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-3,y:15,size:73,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-2,y:16,size:72,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-1,y:17,size:71,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:0,y:18,size:70,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:1,y:19,size:69,c:true},    
    {sprite:"./tileset/forest/forest_tiles06.png",x:-5,y:20,size:75},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:21,size:75,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:22,size:75,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:23,size:75,c:true},
    //platform up
    {sprite:"./tileset/forest/forest_tiles06.png",x:-4,y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-3,y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-2,y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-1,y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:0,y:19,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:20,size:1},
        //empty dirt
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:16,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:17,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:18,size:3,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:19,size:4,c:true},
        //end of cave-left
    {sprite:"./tileset/forest/forest_tiles00.png",x:-5,y:14,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:19,size:1},
        //end of cave-right
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:14,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:19,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:20,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:21,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:22,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:23,size:1,c:true}, 
    // standard 0-20 block grass 3
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*3),y:11,size:25},
    {sprite:"./tileset/forest/forest_tiles07.png",x:0+(25*3),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*3),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:20+(25*3),y:12,size:6},
    {sprite:"./tileset/forest/forest_tiles07.png",x:0+(25*3),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*3),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles07.png",x:20+(25*3),y:13,size:6},
    // standard 0-20 block grass 4 
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*4),y:11,size:19},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*4),y:11,size:1}, 
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*4),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*4),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:13,size:1},
    
    
    //boss area
    {sprite:"./tileset/forest/forest_tiles26.png",x:25+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles27.png",x:26+(25*4),y:11,size:28},
    {sprite:"./tileset/forest/forest_tiles28.png",x:54+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:12,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:13,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:13,size:1}
]

};

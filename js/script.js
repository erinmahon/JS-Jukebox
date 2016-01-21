// Create a Song object through a function (aka constructor) 
// Defines what a Song is - as well as any instance of a Song
// Each Song instance will have clearly defined attributes at creation

function Song(title, artist, url){
    this.title = title;
    this.artist = artist;
    this.url = url;
    this.audioElement = new Audio(src=url); 
    this.printDetails = title + " by " + artist;
};

// Create a Jukebox object

function Jukebox(){

    this.songList = []; // array for storing song objects
    this.currentSongIndex = 0; // integer for keeping track of where 
                                                       // in the songList is the current song

// play the current song
     this.play = function(){
        this.currentSong().audioElement.play(); 
    }

// pause the current song
      this.pause = function(){
        this.currentSong().audioElement.pause();    
    }

// stop (reload) the current song
    this.stop = function(){
        this.currentSong().audioElement.load(); 
    }

// returns the song in the playList with index equal to currentSongIndex
    this.currentSong = function(){
        return this.songList[this.currentSongIndex];
    };

// move the currentSongIndex forward (or reset to 0 if at last song)
    this.nextSong = function(){
        this.currentSongIndex += 1;
        if (this.currentSongIndex >= this.songList.length){
            this.currentSongIndex = 0;
        }
    };

// move the currentSongIndex backward (but keep at 0 if already at 0)   
    this.previousSong = function(){
        this.currentSongIndex -= 1;
        if (this.currentSongIndex < 0){
            this.currentSongIndex = 0;
        };
    }

// takes song object and adds to songList   
    this.addSong = function(song){
        this.songList.push(song);   
    }

};

$(document).ready(function(){

// Instantiating new instances of the Song Object

    var song1 = new Song(
        title= "Fire and the Flood", 
        artist= "Vance Joy",
        url= "audio/Fire and the Flood.mp3"
        );
    var song2 = new Song(
        title= "Mess is Mine", 
        artist= "Vance Joy",
        url= "audio/Mess is Mine.mp3"
        );
    var song3 = new Song(
        title= "Riptide", 
        artist= "Vance Joy",
        url= "audio/Riptide.mp3"
        );
    var song4 = new Song(
        title= "Running", 
        artist= "Milky Chance",
        url= "audio/Running.mp3"
        );

// Create new jukebox instance

    jukebox = new Jukebox;   

// Add songs to new Jukebox instance

    jukebox.addSong(song1);  
    jukebox.addSong(song2);
    jukebox.addSong(song3);
    jukebox.addSong(song4);

// Set up Jukebox methods play, pause, stop, last song, next song
// Set up event (click) to html elements to trigger methods

    $('#play').click(function () {
        jukebox.play()
    })
    $('#pause').click(function () {
        jukebox.pause()
    })
    $('#stop').click(function () {
        jukebox.stop()
    })
     $('#last').click(function () {
        jukebox.stop()
        jukebox.previousSong()
        jukebox.play()
    })
    $('#next').click(function () {
        jukebox.stop()
        jukebox.nextSong()
        jukebox.play()
    })
    // $('#shuffle').click(function () {
    //     jukebox.stop()
    //     jukebox.currentSong = (Math.random()*jukebox.songList.length);
    //     jukebox.play()
    //     jukebox.currentSong()
    // })

});

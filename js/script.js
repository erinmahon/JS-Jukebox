
$(document).ready(function(){

// Create a Song object through a function (aka constructor) 
// Defines what a Song is - as well as any instance of a Song
// Each Song instance will have clearly defined attributes at creation

function Song(title, artist, url){
    this.title = title;
    this.artist = artist;
    this.url = url;
    this.audioElement = new Audio(src=url); 
};

// Create a Jukebox object

function Jukebox(){

    this.playList = []; // array for storing song objects
    this.currentSongIndex = 0; // integer for tracking where current song is in playlist

// takes song object and adds to songList   
    this.addSong = function(song){
        this.playList.push(song);   
        $(this.playList).each(function() {
            $(".songs").html("<li><audio>" + song.title + ", " + song.artist + "<source src= " + song.url + " type='mp3'></audio></li>")  
            console.log(song.title + ", " + song.artist)
        })  
     }   

// returns the song in the playList with index equal to currentSongIndex
    this.currentSong = function(song){
        return this.playList[this.currentSongIndex]; 
    };

 // play the current song
     this.play = function(song){
        this.currentSong().audioElement.play(); 
        $(".playing").html(this.currentSong().title + ", " + this.currentSong().artist);
    }
// pause the current song
      this.pause = function(){
        this.currentSong().audioElement.pause();    
    }

// stop (reload) the current song
    this.stop = function(){
        this.currentSong().audioElement.load(); 
    }

// move the currentSongIndex forward (or reset to 0 if at last song)
    this.nextSong = function(){
        this.currentSongIndex += 1;
        if (this.currentSongIndex >= this.playList.length){
            this.currentSongIndex = 0;
        }
    }

// move the currentSongIndex backward (but keep at 0 if already at 0)   
    this.previousSong = function(){
        this.currentSongIndex -= 1;
        if (this.currentSongIndex < 0){
            this.currentSongIndex = 0;
        };
    }

};


// Instantiating new instances of the Song Object

    var song1 = new Song(
        title= "Fire and the Flood", 
        artist= "Vance Joy",
        url= "Fire and the Flood.mp3"
        );
    var song2 = new Song(
        title= "Breezeblocks", 
        artist= "Alt-J",
        url= "Breezeblocks.mp3"
        );
    var song3 = new Song(
        title= "Chandelier", 
        artist= "Sia",
        url= "Chandelier.mp3"
        );
    var song4 = new Song(
        title= "Running", 
        artist= "Milky Chance",
        url= "Running.mp3"
        );
    var song5 = new Song(
        title= "Anna Sun", 
        artist= "Walk the Moon",
        url= "Anna Sun.mp3"
        );
    var song6 = new Song(
        title= "Closer", 
        artist= "Kings of Leon",
        url= "Closer.mp3"
        );
    var song7 = new Song(
        title= "Flaws", 
        artist= "Bastille",
        url= "Flaws.mp3"
        );
    var song8 = new Song(
        title= "Stubborn Love", 
        artist= "Lumineers",
        url= "Stubborn Love.mp3"
        );
    var song9 = new Song(
        title= "The Nights", 
        artist= "Avicii",
        url= "The Nights.mp3"
        );
    var song10 = new Song(
        title= "Unsteady", 
        artist= "X Ambassadors",
        url= "Unsteady.mp3"
        );

// Create new jukebox instance

    jukebox = new Jukebox;   

// Add songs to new Jukebox instance

    jukebox.addSong(song1);  
    jukebox.addSong(song2);
    jukebox.addSong(song3);
    jukebox.addSong(song4);
    jukebox.addSong(song5);
    jukebox.addSong(song6);
    jukebox.addSong(song7);
    jukebox.addSong(song8);
    jukebox.addSong(song9);
    jukebox.addSong(song10);


// Set up Jukebox methods play, pause, stop, last song, next song
// Set up event (click) to html elements to trigger methods

    $("#play").on("click", function(){
        jukebox.play();
    });

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

console.log("top of JS");

/*------------- The parameters of the assignment

Create a single object named slideshow that represents the data and functionality of a picture slideshow.
 There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

An array called photoList that contains the names of the photos as strings (Yes)

An integer currentPhotoIndex that represents which photo in the photoList is currently displayed (yes??)

A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:

logs the current photo name.
Otherwise, log "End of slideshow";

A prevPhoto() function that does the same thing, but backwards.  (In progress)

A function getCurrentPhoto() that returns the current photo from the list.

------------------------------------------------------------------ */

/* --------------The Beginning of my (half-working) solution--------------
const slideshow = {
  photoList: ["photo_one", "photo_two", "photo_three"],
  index: 0,
  nextPhoto: function() {
    if (this.index < this.photoList.length) {
      this.index++;
      console.log(this.photoList[this.index]);

    } else console.log("End of Slide Show");
  },

  prevPhoto: function() {
    if (this.index > this.photoList.length) {
      console.log(this.photoList[this.index]);
      this.index--;
    } else console.log("End of Slide Show");
  },

  getCurrentPhoto: function() {
    return this.photoList[this.index];
  }
};
--------------------------------------------------------- */

//
/*---- Marius' solution for the next photo function ------*/

/*

nextPhoto: function() {
  this.currentPhotoIndex++; //advancing before reporting...
  if (this.currentPhotoIndex < this.photolist.length) {
// 4. logs the current photo name.
    console.log(this.photolist[this.currentPhotoIndex]);
  }
// 5. Otherwise, log "End of slideshow";
  else {
    this.currentPhotoIndex = this.photolist.length -1;
    console.log("End of slideshow");
  }
},

*/
/* Jordan's solution */
const slideshow = () => {
  const photoList = [
    "https://place-hold.it/300/4287f5/fff/000.jpg?text=Picture%201",
    "https://place-hold.it/300/4ef542/fff/000.jpg?text=Picture%202",
    "https://place-hold.it/300/ed9c2b/fff/000.jpg?text=Picture%203",
    "https://place-hold.it/300/9f18de/fff/000.jpg?text=Picture%204"
  ];
  let currentPhotoIndex = 0;

  return {
    nextPhoto: () =>
      currentPhotoIndex < photoList.length - 1 && currentPhotoIndex++,
    prevPhoto: () => currentPhotoIndex > 0 && currentPhotoIndex--,
    getCurrentPhoto: () => photoList[currentPhotoIndex]
  };
};

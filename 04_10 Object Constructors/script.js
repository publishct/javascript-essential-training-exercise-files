// Object constructors are templates for creating objects that we make once and can use again and again
// Make an object constructor to use instead of as defined below (verbose)
// var course = new Object();
//
// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }
//
// console.log(course);
//
// The object constructor: 
//
// function Course(title,instructor,level,published,views) {
//     this.title = title;
//     this.instructor = instructor;
//     this.level = level;
//     this.published = published;
//     this.views = views;
//     this.updateViews = function() {
//       return ++this.views;
//     };
// }
//
// // The point is that I can now create new courses using the same constructor (see var course02)
// var course01 = new Course("JavaScript Essential Training", "Me", 1, true, 0);
// var course02 = new Course("EcmaScript6","Me",2,true,0); // I don't NEED the space after the commas but it's a bit harder to read like this
//
// console.log(course01);
// console.log(course02);
// Using this we can now expand to populating an ARRAY with Course OBJECTS
function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
      return ++this.views;
    };
}

var courses = [
    new Course("JavaScript Essential Training", "Me", 1, true, 0),
    new Course("EcmaScript6","Me",2,true,1234),
    new Course("title","me",true,0) // this object will still be created but with the undeclared properties set to undefined in the console
];

// See all courses
console.log(courses); 
// See instructor (or another property like title) by searching with object index numbers (0,1,2, etc)
// console.log(courses[1].instructor);
// Run the method (like updateViews) by searching with object index numbers (0,1,2, etc)
// console.log(courses[1].updateViews());



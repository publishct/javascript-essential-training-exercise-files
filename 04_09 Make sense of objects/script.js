// Objects (like arrays) are data models that allow us to combine properties and methods for a specific data set in a structured way
// using an object we can create the model 
var course = new Object();

// course.title="This is the title";
// course.instructor="This is more info";
// course.level=1; //number
// course.published=true; //boolean
// course.views=0;
// The above are all different ways of setting up object properties (variables associated with the object)
// The below is shortcut for writing the above 
// var course = {
//     title:"This is the title",
//     instructor:"This is more info",
//     level:1,
//     published:true,
//     views:0,
// }
// // retrieve the course object by calling it 
// console.log(course);
// // specify a property to retrieve it 
// console.log(course.title);
// 
// Objects can also contain methods, functions that use or change data in the properties 
// Create a method for updating views numbers for the course object anytime someone views the course
var course = {
    title:"This is the title",
    instructor:"This is more info",
    level:1,
    published:true,
    views:0,
    updateViews: function() {
        return ++course.views;
    }
}
// retrieve the course object by calling it 
console.log(course.views);
course.updateViews();
console.log(course.views);
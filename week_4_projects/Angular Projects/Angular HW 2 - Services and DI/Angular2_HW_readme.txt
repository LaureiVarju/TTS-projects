
Name: Michelle Dilzell
Github user id: LaureiVarju
Assignment Title: Angular Services and Dependency Injection
Assigned: 8/15/19 (Day 20 Bootcamp - Week 4)

Link to the assignment in github: 
*********************************


Note to Reviewer:
To better understand the topics of routing and dependency injection, as well as several others, I created parts of this app following the instructions from this tutorial:
https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example


*********************************
       Homework Status:
*********************************

1. Add a routing component using the ng generate module command at the command prompt. (COMPLETE -- see ..src/app/routing.module.ts)

2. Add a route for the new component that was created at the end of the last lab. Remove the tag for
hat component and put in the <router-outlet> tag in its place. (COMPLETE <router-outlet></router-outlet> was added to app.component.html in the root of app)

3. Next, add an anchor tag ( <a> ) with the appropriate property to navigate to the new page. (COMPLETE - this was done in my nav app html file.)

4. modify the html template of each component to display something other than the default message. (COMPLETE)

5. Style the pages links, either as horizontal or vertical items so they resemble a menu. (COMPLETE -- made a navbar) 

6. Finally, create another component that will serve as the application default. Give it some additonal
"Welcome to the site" verbiage and make it the default route in the routing system. (COMPLETE-- it's the 'Home' Component)



Services and DI Section
*********************************

1. Next, create a simple Person class in the src/app folder. Some applications would also create this in a
sub-folder called "models" or "domain-classes", it's entirely up to you. (COMPLETE - I took my person.ts file from the last assignment and placed it in the root of app in this project. I added the word 'export' before declaring the class)

2. Next, using the CLI and ng generate , generate a service class. Also, use the option to the generate
command to NOT create a test file. (COMPLETE - I created a service called 'data' see data.service.ts)

3. In the Service class, reference the Person class from above. Create a variable of type Person. In the
constructor for the service give it some default values. (COMPLETE- this was done on line 14 of data.services.ts)
 
4. Next, create a basic method (within the service class) to return the person such as getPerson() (COMPLETE - see line 17 in data.services.ts)

5. Pick one of the components and inject the service.(COMPLETE - the data service was injected into "thepersoncomp" component in its TS file in lines 2 and 15)

6. Create a member variable of type Person, (COMPLETE -- see line 13 in thepersoncomp.component.ts) 
and modify the html to use interpolation to display the properties of the person. (COMPLETE) 
Use the ngOnInit() method to get the Person from the service. (COMPLETE -- see line 16 in thepersoncomp.component.ts) 
 

Observables Section
*********************************

1. Change the service call to return an Obervable rather than a Person object. 
(COMPLETE -- see line 17 in data.services.ts)

2. Change the call in the component to subscribe() to the call rather than being a synchronous call. (COMPLETE -- see line 20 in mypersoncomp.ts)

3. To really see the process of Observables without a long web delay, create this below function inside the
service class: (COMPLETE)

async delay(ms: number) {
 await new Promise(resolve => setTimeout(()=>resolve(), ms));
}

4. and inside of the getPerson() method, call the method to delay before returning the value. (COMPLETE)


5. 2nd part of the lab - go to the Angular.io site and work through the Angular Tour of Heroes app. (IN PROGRESS)

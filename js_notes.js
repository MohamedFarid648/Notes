1. show-loading-image-while-ajax-is-performed

https://stackoverflow.com/questions/4684722/show-loading-image-while-ajax-is-performed
************************************************************************************************************************



2. FancyGrid(dynamic tables):
https://fancygrid.com/samples/columns/order-column

************************************************************************************************************************

3.Map in TS
https://www.learnrxjs.io/operators/transformation/map.html
************************************************************************************************************************

4.Sum elements in array(ts)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
************************************************************************************************************************

5.Deploy a Static HTML Site to Heroku

https://www.youtube.com/watch?v=LaQEIem7uPk

set your projects in folder :
git init
git add .
heroku login
heroku apps:create myapp-name
************************************************************************************************************************

6.Using Data tables

https://datatables.net/

and Export them to(pdf,excel,...):
https://datatables.net/extensions/buttons/examples/initialisation/export.html
************************************************************************************************************************


7. Diff between 2 dates
let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");
var msec =dt2-dt1;
    var mins = Math.floor(msec / 60000);

    var hrs = Math.floor(mins / 60);

    var days = Math.floor(hrs / 24);

    var yrs = Math.floor(days / 365);
    mins = mins % 60;
    hrs = hrs % 24;
    days = days % 365;

https://jsfiddle.net/user2314737/jr5jkv1p/


************************************************************************************************************************

9.convert float to int
https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
************************************************************************************************************************


10.diff between promise and obseravable

https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables

************************************************************************************************************************

11.Blocking vs Non Blocking  in Js
https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/


if javascript is single threaded how is it asynchronous ? 

https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd

ex:
http://latentflip.com/loupe

************************************************************************************************************************
12.Deploy to google cloud

a. after creating project , upload your code to :
https://ssh.cloud.google.com/cloudshell/editor?authuser=1

b.allow tcp:
gcloud compute firewall-rules create allow-mongodb --allow tcp:27017

c.find external ip (compute engine) :
https://console.cloud.google.com/compute/instances?project={{Project Id}}&authuser=1&orgonly=true&supportedpurview=organizationId&instancessize=50

d.create mongodb :
https://cloud.mongodb.com/v2

e.//const mongoDBUrl = "mongodb+srv://userName:Pass@cluster0-tgsxd.gcp.mongodb.net/dbName?retryWrites=true&w=majority";
//from https://cloud.mongodb.com/v2/5e98b209b4f9347c0e3598d0#metrics/replicaSet/5ee8c04f75243c067d52ea0d/explorer
or
//const mongoDBUrl = 'mongodb://external IP:27017/dbName';

************************************************************************************************************************

let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'this is new p tag';
let divElements = document.getElementsByClassName('blue');
console.log(divElements);
let pElements = document.getElementsByTagName('p');
console.log(pElements);
let byName = document.getElementsByName('helement');
console.log(byName);
let query = document.querySelector('#demo');
console.log(query);
let queryAll = document.querySelectorAll('blue');
console.log(queryAll);
let create = document.createElement('button');
create.textContent = 'click me';
console.log(create);
document.body.appendChild(create);
console.log('=========================================');
let spanEle = document.getElementById('spanid');
spanEle.style.color = 'pink';
let buttonElement1 = document.getElementById('buttonEle');
buttonElement1.className = 'add add1';
console.log('========================================');
let table = document.getElementById('tableid').innerHTML = 
                `<table border="1">
                <tr>
                <td>Name</td>
                <td>Age</td>
                </tr>
                <tr>
                <td>suma</td>
                <td>24</td>
                </tr>
                <tr>
                <td>vani</td>
                <td>26</td>
                </tr>
                <tr>
                <td>navya</td>
                <td>18</td>
                </tr>
                <tr>
                <td>Kavitha</td>
                <td>45</td>
                </tr>
                </table>`
console.log('=======================================');
let list = document.getElementById('listid').innerHTML = 
                ` <h2>Courses</h2>
                <ol type = 'A'>
                <u><li>Web Technologies</li></u>
                <ul type="disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                </ul>
                <u><li>J2EE</li></u>
                <ul type= "square">
                <li>JDBC</li>
                <li>Servlets</li>
                <li>JSP</li>
                </ul>
                <u><li>Frameworks</li></u>
                <ul type="disc">
                <li>Hibernate</li>
                <li>Springs</li>
                </ul>
                </ol>
                `
console.log('=======================================');
let form = document.getElementById('formid').innerHTML = 
            `
        <label>Name:</label><br>
        <input type="text" name="n1" placeholder="Enter user name"/><br>
        <label>age:</label><br>
        <input type="text" name="n2" ><br>
        <label>Address:</label><br>
        <textarea name="n3"></textarea><br>
        <lable>Date of birth</label><br>
        <input type = "date" name=n4><br>
        <label>Email</label><br>
        <input type="email" name=n5><br>
        <label>Gender</label><br>
        <input type="radio" name="n6">Male</input>
         <input type="radio" name="n6">Female</input>
        <input type="radio" name="n6">Others</input>`
        console.log('=======================================');
        let tab = document.getElementById('tabid').innerHTML =
        `<table border=1>
        <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Address</td>
        <td>DOB</td>
        <td>Email</td>
        <td>Gender</td>
        </tr>
        <tr>
        <td>suma</td>
        <td>24</td>
        <td>Dvp</td>
        <td>8-6-1996</td>
        <td>suma.v@gmail.com</td>
        <td>female</td>
        </tr>
        <tr>
        <td>vani</td>
        <td>26</td>
        <td>mysore</td>
        <td>2-4-1994</td>
        <td>vani.r@gmail.com</td>
        <td>female</td>
        </tr>
        <tr>
        <td>navya</td>
        <td>18</td>
        <td>hyd</td>
        <td>24-2-1996</td>
        <td>navya.v@gmail.com</td>
        <td>female</td>
        </tr>
        <tr>
        <td>Kavitha</td>
        <td>45</td>
        <td>blr</td>
        <td>16-9-1996</td>
        <td>kavitha.v@gmail.com</td>
        <td>female</td>
        </tr>   
        </table>`
        let pElementData = document.getElementById('demo1');
        //pElementData.style.color='blue';
       // pElementData.className = 'blue';
        pElementData.classList = 'blue fonts';
        pElementData.className = 'blue fonts';


fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
  .then(response => response.json())
  .then(data => {
    // Now 'data' contains the array of student objects
    // console.log(data);
    // You can proceed to work with this data, such as rendering it in a tabledata
    const tbodyEl=document.getElementById("tb1");
    const tableEl=document.getElementsByTagName("TABLE")[0];

    const searchBut=document.getElementById("searchBut");
    const btn1=document.getElementById("asc");
    const btn2=document.getElementById("desc");
    const btn3=document.getElementById("marks");
    const btn4=document.getElementById("passed");
    const btn5=document.getElementById("classNo");
    const btn6=document.getElementById("genderS");
    const searchBar=document.getElementById("searchBar")


    for(i=0;i<100;i++){
        let newEle=document.createElement("tr");
        newEle.innerHTML=`<td>${data[i].id}</td>
        <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
        <td>${data[i].gender}</td>
        <td>${parseFloat(data[i].class)}</td>
        <td>${parseFloat(data[i].marks)}</td>
        <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
        <td>${data[i].email}</td>`
  
        tbodyEl.appendChild(newEle);
    }

    btn1.addEventListener("click",ascOrder);
    btn2.addEventListener("click",descOrder);
    btn3.addEventListener("click",marksOrder);
    btn4.addEventListener("click",passedOrder);
    btn5.addEventListener("click",classNoOrder);
    btn6.addEventListener("click",genderOrder);
    searchBut.addEventListener("click",searchTab);

    function searchTab(){

        let result=searchBar.value;
        let searchedArr=[];

        for(let i=0;i<data.length;i++){
            if(data[i].first_name.toLowerCase()===result.toLowerCase()||data[i].last_name.toLowerCase()===result.toLowerCase()||data[i].email.toLowerCase()===result.toLowerCase()){
                searchedArr.push(data[i]);
            }
        }

        if(searchedArr.length!=0){
        tbodyEl.innerHTML="";
        for(i=0;i<searchedArr.length;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${searchedArr[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${searchedArr[i].img_src}"></div><div>${searchedArr[i].first_name+" "+searchedArr[i].last_name}</div></td>
            <td>${searchedArr[i].gender}</td>
            <td>${parseFloat(searchedArr[i].class)}</td>
            <td>${parseFloat(searchedArr[i].marks)}</td>
            <td>${(searchedArr[i].passing===true)?"Passed":"Failed"}</td>
            <td>${searchedArr[i].email}</td>`
      
            tbodyEl.appendChild(newEle);
        }
    }
    }
    function ascOrder() {

        tbodyEl.innerHTML="";
        data.sort((a,b)=>{
            let fullNameA=a.first_name+" "+a.last_name;
            let fullNameB=b.first_name+" "+b.last_name;
    
            if(fullNameA<fullNameB)return -1;
            else if(fullNameA>fullNameB)return 1;
            return 0;
        });
        for(i=0;i<100;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${data[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
            <td>${data[i].gender}</td>
            <td>${parseFloat(data[i].class)}</td>
            <td>${parseFloat(data[i].marks)}</td>
            <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
            <td>${data[i].email}</td>`
      
            tbodyEl.appendChild(newEle);
        }
    }

    function descOrder() {
    
        tbodyEl.innerHTML="";
        data.sort((a,b)=>{
            let fullNameA=a.first_name+" "+a.last_name;
            let fullNameB=b.first_name+" "+b.last_name;
    
            if(fullNameA<fullNameB)return 1;
            else if(fullNameA>fullNameB)return -1;
            return 0;
        });
        for(i=0;i<100;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${data[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
            <td>${data[i].gender}</td>
            <td>${parseFloat(data[i].class)}</td>
            <td>${parseFloat(data[i].marks)}</td>
            <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
            <td>${data[i].email}</td>`
      
            tbodyEl.appendChild(newEle);
        }
    }
    
    function marksOrder() {
    
        tbodyEl.innerHTML="";
        data.sort((a,b)=>{
            return b.marks-a.marks;
        });
        for(i=0;i<100;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${data[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
            <td>${data[i].gender}</td>
            <td>${parseFloat(data[i].class)}</td>
            <td>${parseFloat(data[i].marks)}</td>
            <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
            <td>${data[i].email}</td>`
      
            tbodyEl.appendChild(newEle);
        }
    }

    function passedOrder() {

        tbodyEl.innerHTML="";
        data.sort((a,b)=>{
            return b.passing-a.passing;
        });
        for(i=0;i<100;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${data[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
            <td>${data[i].gender}</td>
            <td>${parseFloat(data[i].class)}</td>
            <td>${parseFloat(data[i].marks)}</td>
            <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
            <td>${data[i].email}</td>`
        
            tbodyEl.appendChild(newEle);
        }

    }
    function classNoOrder() {
    
        tbodyEl.innerHTML="";
        data.sort((a,b)=>{
            return b.class-a.class;
        });
        for(i=0;i<100;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${data[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${data[i].img_src}"></div><div>${data[i].first_name+" "+data[i].last_name}</div></td>
            <td>${data[i].gender}</td>
            <td>${parseFloat(data[i].class)}</td>
            <td>${parseFloat(data[i].marks)}</td>
            <td>${(data[i].passing===true)?"Passed":"Failed"}</td>
            <td>${data[i].email}</td>`
        
            tbodyEl.appendChild(newEle);
        }
    }
    function genderOrder() {
    
        printMaleTable();
        
        printFemaleTable();
    }
    function printFemaleTable() {
        let female=data.filter((e)=>{
            return e.gender==='Female';
        })
        let newTable=document.createElement("table");
        newTable.innerHTML=`
        <thead> 
            <tr>
                <th>ID</th>
                <th width="30%">Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="tb2"></tbody> `;

        document.getElementById("root").appendChild(newTable);

        newTable.style.marginTop="30px"
        const tbodyEl2=document.getElementById("tb2");
        
        for(i=0;i<female.length;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${female[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${female[i].img_src}"></div><div>${female[i].first_name+" "+female[i].last_name}</div></td>
            <td>${female[i].gender}</td>
            <td>${parseFloat(female[i].class)}</td>
            <td>${parseFloat(female[i].marks)}</td>
            <td>${(female[i].passing===true)?"Passed":"Failed"}</td>
            <td>${female[i].email}</td>`
        
            tbodyEl2.appendChild(newEle);
        }
    }

    function  printMaleTable() {
        tbodyEl.innerHTML="";
        let male=data.filter((e)=>{
            return e.gender==='Male';
        })
        for(i=0;i<male.length;i++){
            let newEle=document.createElement("tr");
            newEle.innerHTML=`<td>${male[i].id}</td>
            <td id="imageUser"><div id="imagediv"><img src="${male[i].img_src}"></div><div>${male[i].first_name+" "+male[i].last_name}</div></td>
            <td>${male[i].gender}</td>
            <td>${parseFloat(male[i].class)}</td>
            <td>${parseFloat(male[i].marks)}</td>
            <td>${(male[i].passing===true)?"Passed":"Failed"}</td>
            <td>${male[i].email}</td>`
        
            tbodyEl.appendChild(newEle);
        }
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  

  
  
  
  

  

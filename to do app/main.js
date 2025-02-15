let detail=[];

document.querySelector('#task-form').addEventListener('submit',(e) => {
e.preventDefault();
let task=document.querySelector('#task').value;
let priority=document.querySelector('#priority').value;
if(task!=="" &&  priority!=="")
{
    let tbody=document.querySelector('tbody');
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let button=document.createElement('a');
    button.innerText='Delete';
    button.style.color="red";
    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
     td3.appendChild(button);
     td1.textContent=task;
     td2.textContent=priority;
   
     if(priority=='Low')
     {
       td2.style.backgroundColor='red';
     }
    else
     {
        td2.style.backgroundColor='green';
     }
     let newtask=
     {
        name:task,
        priority:priority,
     };
     detail.push(newtask);
     localStorage.setItem('detail',JSON.stringify(detail));

     button.addEventListener('click',()=>
    {
        alert("please conform");
        tr.remove();
        const index=detail.findIndex((task)=>task.name===newtask.name);
        detail.splice(index,1);
        localStorage.setItem('detail',JSON.stringify(detail));

    })
    document.querySelector('#task').value="";
    document.querySelector('#priority').value="";
}
else
{
    alert("please the fill the form");
}

})

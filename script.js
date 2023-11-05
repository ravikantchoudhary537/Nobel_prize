fetch("https://api.nobelprize.org/v1/prize.json").then(data =>{
    // console.log(data);
    return data.json();

}).then(Objectdata => {
    let tabledata = "";
    // let i;
    //  for(i=30;i<670;i++){
    //     //  console.log("hello");
    //     tabledata = `<td>${Objectdata.prizes[i].laureates[0].id}</td>
    //     <td>${Objectdata.prizes[i].laureates[0].firstname}</td>
    //     <td>${Objectdata.prizes[i].laureates[0].surname}</td>
    //     <td>${Objectdata.prizes[i].year}</td>
    //     <td>${Objectdata.prizes[i].category}</td>
    //     <td>${Objectdata.prizes[i].laureates[0].motivation}</td>`
        
    //     document.getElementById("table_body").innerHTML = tabledata;
    // }




    

    // console.log(Objectdata);
   
    // tabledata = `<td>${Objectdata.prizes[0].laureates[0].id}</td>
    // <td>${Objectdata.prizes[0].laureates[0].firstname}</td>
    // <td>${Objectdata.prizes[0].laureates[0].surname}</td>
    // <td>${Objectdata.prizes[0].year}</td>
    // <td>${Objectdata.prizes[0].category}</td>
    // <td>${Objectdata.prizes[0].laureates[0].motivation}</td>`
    // document.getElementById("table_body").innerHTML = tabledata;

   
    Objectdata.prizes.filter((values,inde)=>{


        values.laureates.filter((elem)=>{
            // console.log(values.category);
            // console.log(values.year);
            // console.log(elem.id);
            console.log(elem.firstname);
            // console.log(elem.surname);
            // console.log(elem.motivation);


            tabledata += `<tr><td>${elem.id}</td>
            <td>${elem.firstname}</td>
            <td>${elem.surname}</td>
            <td>${values.year}</td>
            <td>${values.category}</td>
            <td>${elem.motivation}</td></tr>`
            document.getElementById("table_body").innerHTML = tabledata;
        })
        
        
        // console.log(values.laureates[0].id);
        // tabledata += `<td>${values.laureates[].id}</td>
        //     <td>${values.laureates.firstname}</td>
        //     <td>${values.laureates.surname}</td>
        //     <td>${values.year}</td>
        //     <td>${values.category}</td>
        //     <td>${values.laureates.motivation}</td>`
            
        }).catch((err)=>{
            console.log(err);
        })
       
     
    // console.log(a)
})











// tabledata = `<h1>${values.id}</h1>`;
    // console.log(Objectdata.prizes);
    // console.log(Objectdata.prizes[0]);
    // console.log(Objectdata.prizes[0].year);
    // console.log(Objectdata.prizes[0].category);
    // console.log(Objectdata.prizes[0].laureates); 
    // console.log(Objectdata.prizes[0].laureates[0]); 
    // console.log(Objectdata.prizes[0].laureates[0].id); 
    // console.log(Objectdata.prizes[0].laureates[0].firstname); 
    // console.log(Objectdata.prizes[0].laureates[0].surname); 
    // console.log(Objectdata.prizes[0].laureates[0].motivation);
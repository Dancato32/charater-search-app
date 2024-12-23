


const getAni= async ()=>{
    try{
        const AniName= document.getElementById("search").value;
        const aniData=  await fetch(`https://www.demonslayer-api.com/api/v1/characters?limit=100&name=${AniName}`);

        if(!aniData.ok){
            console.log("no data found");
            alert("no data found");
            return;
        }
        const info= await aniData.json();
        const charac=info.content;
        console.log(charac);

        const con = document.getElementById("dataCon");
        con.innerHTML = " ";
        charac.forEach(charac => {
            const characterDiv=document.createElement("div");
            characterDiv.classList.add("ben");
            console.log(characterDiv);
            characterDiv.innerHTML=`<h3>${charac.name}</h3>
            <p>Age:${charac.age}</p>
            <p>Gender:${charac.gender}</p>
           <p>Race:${charac.race}</p>
           <p>Quote:${charac.quote}</p>
           <img src="${charac.img}"  width="200">
           <p>Description:${charac.description}</p>`;

           con.appendChild(characterDiv);
        });
        
        
    }catch(error){
        console.log("Error:",error)
    }
   
}




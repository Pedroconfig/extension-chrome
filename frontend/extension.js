const inputbtn = document.getElementById("save")
let myleads=[]
let oldleads=[]
// let tabs=[{
//     url:"https://www.google.com"
// }]
const digitar = document.getElementById("input")
const lista =document.getElementById("lista")
const del =document.getElementById("delete")
const tab = document.getElementById("tab")

// localStorage.setItem("myleads","www.exemplelead.com")
// localStorage.clear()

// let myleads=["www.blabla.com"]
// myleads=json.parse(myleads)
// myleads.psuh("www.epic.com.br")
// o inverso json.strigfy vai pra string sem ter ticks 
const leadslocal= JSON.parse(localStorage.getItem("myleads"))

if(leadslocal){
    myleads=leadslocal
    render(myleads)


}

tab.addEventListener("click",function (){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)

   })

})
    
    // myleads.push(tabs[0].url)
    // localStorage.setItem("myleads",JSON.stringify(myleads))
    // render(myleads)


function render(leads){
    let listitems =""
    for(let i=0;i<leads.length;i++){
        listitems += "<li> <a  target='_blank 'href='"+leads[i]+"'>"+ leads[i] +"</a></li>"
    }
    lista.innerHTML=listitems
    
  
      

}



del.addEventListener("dblclick",function(){
    localStorage.clear
    myleads=[]
    render(myleads)

})

inputbtn.addEventListener("click",function salvarlead(){
   myleads.push(digitar.value)
   digitar.value=""
   localStorage.setItem("myleads",JSON.stringify(myleads))
  
    render(myleads)
  


})

// function render(){
//     let listitems =""
//     for(let i=0;i<myleads.length;i++){
//         listitems += "<li> <a  target='_blank 'href='https://"+myleads[i]+"'>"+ myleads[i] +"</a></li>"
//     }
//     lista.innerHTML=listitems
    
  
      

// }

// let listitems= "<li>"+ digitar.value + "</li>"
// lista.innerhtml+=listitems nao preciso usar um loop aqui e dpois coloco 
//  digite.value ="" depois de render 
//  listitems += ` 
//     <li> 
//     <a target='_blank' href='${myurl[i]}'>${myleads[i]}</a>
//     </li>
//     `;

    //  listitems += "<li> <a  target='_blank 'href='https://"+leads[i]+"'>"+ leads[i] +"</a></li>"
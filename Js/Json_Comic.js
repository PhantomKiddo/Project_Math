//----------[data]----------

const ComicURL = "Json/Comics.Json";

let Page = parseInt(localStorage.getItem("Page_Value")) || 0;
let SaveData = parseInt(localStorage.getItem("Save_Page")) || 0;

var LocalData;



//----------[Buttons]----------

const NEXT_Btn = document.getElementById("NEXT");

const PREVIOUS_Btn = document.getElementById("PREVIOUS");

const SAVE_Btn = document.getElementById("SAVE");

const CONTINUE_Btn = document.getElementById("CONTINUE");

const RESET_Btn = document.getElementById("RESET");

const DIALOG_Btn = document.getElementById("DIALOG");



//----------[TextContent]----------

const TxtContent = document.getElementById("txtcontent")

if (DIALOG_Btn) {
    DIALOG_Btn.addEventListener("click", () => 
    {
        TxtContent.toggleAttribute("hidden");
        TxtContent.classList.toggle("IsHidden")
        DIALOG_Btn.children[0].textContent = TxtContent.classList.contains("IsHidden") 
            ? "Show Dialog" 
            : "Hide Dialog";
    });
}



//----------[Update_Page]----------

function UpdatPage()
{
    var Image = document.createElement("img");

    if(PREVIOUS_Btn)PREVIOUS_Btn.style.visibility = Page === 0? "hidden" : "visible";
    if(NEXT_Btn)NEXT_Btn.style.visibility = Page === LocalData.Act_0.length - 1? "hidden" : "visible";

    

    Image.src = LocalData.Act_0[Page].Image;
    Image.style.width = "650px";
    Image.style.verticalAlign = "middle";
    
    if(document.getElementById('Display'))
    {
        document.getElementById('Display').append(Image);
    }
    

    

    fetch(LocalData.Act_0[Page].Dialog)
    .then(res => res.text())
    .then(dialogText => 
    {
        if(document.getElementById("txtcontent"))
        {
            document.getElementById("txtcontent").innerHTML = dialogText;
        }
    })
}



//----------[Buttons_Attripute]----------

fetch(ComicURL)
.then((respond) => respond.json())
.then((data) => 
{

    LocalData = data;

    UpdatPage()

    if(NEXT_Btn)
    {
        NEXT_Btn.addEventListener("click", () => 
        {
            Page ++;
            localStorage.setItem("Page_Value", Page);
            window.location.reload()

            //console.log(Page);
        })
    }
    
    if(PREVIOUS_Btn)
    {
        PREVIOUS_Btn.addEventListener("click", () => 
        {
            Page --;
            localStorage.setItem("Page_Value", Page);
            window.location.reload()
            
            //console.log(Page);
        }) 
    }
    
})

if(SAVE_Btn)SAVE_Btn.addEventListener("click", () => localStorage.setItem("Save_Page", Page));

if(RESET_Btn)RESET_Btn.addEventListener("click", () => localStorage.setItem("Save_Page", 0));

if(CONTINUE_Btn)CONTINUE_Btn.addEventListener("click", () => 
{
    localStorage.setItem("Page_Value", SaveData);
    window.location.href = "Comics.html";
});

function JumpLink(Value)
{
    localStorage.setItem("Page_Value",Value)
    window.location.href = 'Comics.html'
}



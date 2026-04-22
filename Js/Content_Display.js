
//JSON Library Fetching 
const MainContent = "Json/Comics.Json";

//Google Sheet QueryFetching
const Sheet_ID = '1p-rgPuLOUqB8Vn8T8oMkgB7Zcvmjv6LcqiYdSzt_bwU';
const Sheet_Name = encodeURIComponent('Library');
const Sheet_Range = 'B3:F20';

const _URL = 'https://docs.google.com/spreadsheets/d/' + Sheet_ID + '/gviz/tq?sheet=' + Sheet_Name + '&range=' + Sheet_Range;



fetch(MainContent)
.then((response) => response.json())
.then((data) => 
{

    for (let i = 0; i < data.Act_0.length; i++)
    {
        
        const Content_Block = document.createElement('div');
        Content_Block.className = "Glass_Content Library_Content_Layout";

        const Title = document.createElement('h2');
        Title.textContent = data.Act_0[i].Page_Name;
        Title.className = "Wht Grid_A";

        const Description = document.createElement('p');
        Description.innerHTML = data.Act_0[i].Dialog;
        Description.className = "Grid_B";

        //-----------------------[Button]-------------------------

        const button = document.createElement('button');
        button.className = "Bubbles Grid_C";

        const BtnText = document.createElement('h3');
        BtnText.textContent = "Read()";
        BtnText.className = "H-Margin-25";

        button.appendChild(BtnText);

        button.setAttribute('onclick', 'JumpLink(' + data.Act_0[i].Page + ')');

        //-----------------------[Append]-------------------------
        
        Content_Block.append(Title, Description, button);

        document.getElementById('Main_Post').appendChild(Content_Block);

    }
})
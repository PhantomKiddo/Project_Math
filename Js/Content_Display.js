
//JSON Library Fetching 
const MainContent = "Json/Comics.Json";

//Google Sheet QueryFetching
const Sheet_ID = '1p-rgPuLOUqB8Vn8T8oMkgB7Zcvmjv6LcqiYdSzt_bwU';
const Sheet_Name = encodeURIComponent('Project_Math()_Js_Query_Post');
const Sheet_Range = 'B3:E20';

const _URL = 'https://docs.google.com/spreadsheets/d/' + Sheet_ID + '/gviz/tq?sheet=' + Sheet_Name + '&range=' + Sheet_Range;

fetch(_URL)
.then((URL_respond) => URL_respond.text())
.then((URL_Data) => 
{


    //Parsing Google Sheet for raw data.
    let data = JSON.parse(URL_Data.substr(47).slice(0,-2));



    if(document.getElementById('Main_Post'))
    {
        for (let i = 0; i < data.table.rows.length; i++) 
        {


        
            //Main content_Block
            const Content_Block = document.createElement('div');
            Content_Block.className = "Content_Block Content_Block_Layout";
            
            //The Title
            const Title = document.createElement('h2');
            Title.className = "Grid_A";
            Title.textContent = data.table.rows[i].c[0].v;

            //Description
            const Description = document.createElement('p');
            Description.className = "Grid_C";
            Description.textContent = data.table.rows[i].c[1].v;

            //Housing for the buttons
            const Btn_Layout = document.createElement('div');
            Btn_Layout.className = "Grid_D H-div-Tracks Evenly";

            //Button_1
            const Button1 = document.createElement('button');
            Button1.className = "Aero_Button";
            const BntTxt1 = document.createElement('h2'); 
            BntTxt1.textContent = "Go to Comics";
            Button1.append(BntTxt1);
            //JumpLink
            Button1.onclick = () => window.location.href = 'Library.html'



            //Button_2
            const Button2 = document.createElement('button');
            Button2.className = "Aero_Button";
            const BntTxt2 = document.createElement('h2'); 
            BntTxt2.textContent = "Go to Forums";
            Button2.append(BntTxt2);



            //Final render
            Btn_Layout.append(Button1, Button2);



            //Thumbnail
            if(data.table.rows[i].c[3]?.v) 
            {
                const Thumbnail = document.createElement('img');
                Thumbnail.className = "Grid_B";
                Thumbnail.src = data.table.rows[i].c[3].v;
                Thumbnail.style.width = "100%";
                Thumbnail.style.aspectRatio = "3/2";
                Thumbnail.style.objectFit = "contain";

                Content_Block.append(Title, Thumbnail, Description, Btn_Layout);

                document.getElementById('Main_Post').appendChild(Content_Block);

            }else
            {
                Content_Block.append(Title, Description);

                document.getElementById('Main_Post').appendChild(Content_Block);
            }
        }
    }
}) 



fetch(MainContent)
.then((respond) => respond.json())
.then((DataContent) => 
{
    if(document.getElementById('Comic_Post'))
    {
        for (let i = 0; i < DataContent.Act_0.length; i++) 
        {
            
            //Basic Button Link
            const ButtonLnk = document.createElement('button');
            ButtonLnk.className = "Aero_Button";
            const BntTxtLnk = document.createElement('h2');
            BntTxtLnk.textContent = DataContent.Act_0[i].Page_Name;
            ButtonLnk.append(BntTxtLnk);

            //JumpLink
            ButtonLnk.setAttribute('onclick', 'JumpLink(' + DataContent.Act_0[i].Page + ')');

            //Final render
            document.getElementById('Comic_Post').appendChild(ButtonLnk);
            
        }
    }
})
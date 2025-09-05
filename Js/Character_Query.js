const CharacterURL = "Json/Characters.json";

fetch(CharacterURL)
.then((respond) => respond.json())
.then((Data) => 
{
    console.log(Data.Character.Esmeralda);
})
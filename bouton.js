//FONCTION PHONE


function phone()
{
    if (document.getElementById('mail').innerHTML == 'maxpro.cerjak@gmail.com')
    {
        document.getElementById('mail').innerHTML='Mail';
        document.getElementById('phoneNbr').innerHTML='07.69.50.69.48';
    }
    else if (document.getElementById('telegram').innerHTML == '@BTCxam')
    {
        document.getElementById('telegram').innerHTML='Telegram';
        document.getElementById('phoneNbr').innerHTML='07.69.50.69.48';
    }
    else if (document.getElementById('discord').innerHTML == 'WillemMoras#7896')
    {
        document.getElementById('discord').innerHTML='Discord';
        document.getElementById('phoneNbr').innerHTML='07.69.50.69.48';
    }
    
    else if (document.getElementById('phoneNbr').innerHTML == '07.69.50.69.48')
    {
        document.getElementById('phoneNbr').innerHTML='Telephone';
    }
    else 
    {
        document.getElementById('phoneNbr').innerHTML='07.69.50.69.48';
    }
}


//FONCTION AT@


function at()
{
    if (document.getElementById('phoneNbr').innerHTML == '07.69.50.69.48')
    {
        document.getElementById('phoneNbr').innerHTML='Telephone';
        document.getElementById('mail').innerHTML='maxpro.cerjak@gmail.com';
    }
    else if (document.getElementById('telegram').innerHTML == '@BTCxam')
    {
        document.getElementById('telegram').innerHTML='Telegram';
        document.getElementById('mail').innerHTML='maxpro.cerjak@gmail.com';
    }
    
    else if (document.getElementById('discord').innerHTML == 'WillemMoras#7896')
    {
        document.getElementById('discord').innerHTML='Discord';
        document.getElementById('mail').innerHTML='maxpro.cerjak@gmail.com';
    }
    
    else if (document.getElementById('mail').innerHTML == 'maxpro.cerjak@gmail.com')
    {
        document.getElementById('mail').innerHTML='Mail';
    }
    else
    {
        document.getElementById('mail').innerHTML='maxpro.cerjak@gmail.com';
    }
    
}


//FONCTION TELEGRAM (social)


function social()
{
    if (document.getElementById('mail').innerHTML == 'maxpro.cerjak@gmail.com')
    {
        document.getElementById('mail').innerHTML='Mail';
        document.getElementById('telegram').innerHTML= "@BTCxam";
    }
    else if (document.getElementById('discord').innerHTML == "WillemMoras#7896")
    {
        document.getElementById('discord').innerHTML='Discord';
        document.getElementById('telegram').innerHTML= "@BTCxam";
    }
    else if (document.getElementById('phoneNbr').innerHTML == '07.69.50.69.48')
    {
        document.getElementById('phoneNbr').innerHTML='Telephone';
        document.getElementById('telegram').innerHTML= "@BTCxam";
    }
    
    else if (document.getElementById('telegram').innerHTML == "@BTCxam")
    {
        document.getElementById('telegram').innerHTML='Telegram';
    }
    else
    {
        document.getElementById('telegram').innerHTML= "@BTCxam";
    }
    
}


//FONCTION DISCORD



function Dcord()
{
    if (document.getElementById('mail').innerHTML == 'maxpro.cerjak@gmail.com')
    {
        document.getElementById('mail').innerHTML='Mail';
        document.getElementById('discord').innerHTML= "WillemMoras#7896";
    }
    else if (document.getElementById('phoneNbr').innerHTML == '07.69.50.69.48')
    {
        document.getElementById('phoneNbr').innerHTML='Telephone';
        document.getElementById('discord').innerHTML= "WillemMoras#7896";
    }
    else if (document.getElementById('telegram').innerHTML == '@BTCxam')
    {
        document.getElementById('telegram').innerHTML='Telegram';
        document.getElementById('discord').innerHTML= "WillemMoras#7896";
    }
    
    else if (document.getElementById('discord').innerHTML == "WillemMoras#7896")
    {
        document.getElementById('discord').innerHTML = "Discord";
    }
    else
    {
        document.getElementById('discord').innerHTML= "WillemMoras#7896";
    }
    
}





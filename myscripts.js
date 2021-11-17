//trying an embedding method a website recommended, will probably change

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~
THINGS TO ADD
Search bar functionality
Button to reset map
New map method?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function resetFun()
{
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52931.01633630838!2d-84.58621794401147!3d33.987691157645216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f56ad2af40e553%3A0x7f96a3c9d209c8d0!2sKennesaw%20State%20University!5e0!3m2!1sen!2sus!4v1636579307098!5m2!1sen!2sus";
}

function restFun()
{
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6612.860086425238!2d-84.57838107058426!3d34.03283821362419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sus!4v1636747427079!5m2!1sen!2sus";
}

function barFun()
{
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6612.858712460807!2d-84.57838107073445!3d34.03285584087002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbars!5e0!3m2!1sen!2sus!4v1636747544232!5m2!1sen!2sus";
}

function storeFun()
{
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26451.421400320254!2d-84.59151324818458!3d34.0328989784244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstores%20and%20shopping!5e0!3m2!1sen!2sus!4v1636747737435!5m2!1sen!2sus";
}

function entFun()
{
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26451.378593899077!2d-84.59151325299095!3d34.03303627400134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions%20and%20entertainment%20near%20me!5e0!3m2!1sen!2sus!4v1636747906021!5m2!1sen!2sus";
}

function cusFun()
{
    let inp = document.getElementById("search").value;
    document.getElementById('mapkenn').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26451.378593899077!2d-84.59151325299095!3d34.03303627400134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s" + split_let(inp) + "!5e0!3m2!1sen!2sus!4v1636747906021!5m2!1sen!2sus";
}

function split_let(str)
{
    let res = ""
    const splitText = str.split(" ");
    let curr = 0
    for(let i = 0; i < splitText.length - 1; i++)
    {
        res += splitText[i] + "%20" 
        curr = i
    }
    res += splitText[curr+1]
    return res;
}

function restFun2()
{
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13240.626773305654!2d-84.52848065210479!3d33.93709775509294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sus!4v1636748280087!5m2!1sen!2sus";
}

function barFun2()
{
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13240.615892539794!2d-84.5284806533077!3d33.937167725540164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbar%20or%20pub%20near%20me!5e0!3m2!1sen!2sus!4v1636748362229!5m2!1sen!2sus";
}

function storeFun2()
{
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13240.610452152945!2d-84.52848065390916!3d33.93720271074136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstores%20and%20shopping!5e0!3m2!1sen!2sus!4v1636748420126!5m2!1sen!2sus";
}

function entFun2()
{
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13240.605011763482!2d-84.52848065451069!3d33.93723769592762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions%20and%20entertainment%20near%20me!5e0!3m2!1sen!2sus!4v1636748507622!5m2!1sen!2sus";
}

function cusFun2()
{
    let inp = document.getElementById("search2").value;
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13240.605011763482!2d-84.52848065451069!3d33.93723769592762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s" + split_let(inp) + "!5e0!3m2!1sen!2sus!4v1636748507622!5m2!1sen!2sus";
}

function resetFun2()
{
    document.getElementById('mapmar').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1577186661357!2d-84.521914584788!3d33.93707138063752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81ce76f9703afb9c!2sKennesaw%20State%20University%20-%20Marietta%20Campus!5e0!3m2!1sen!2sus!4v1636731067643!5m2!1sen!2sus";
}



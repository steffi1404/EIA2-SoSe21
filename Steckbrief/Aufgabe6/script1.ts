window.addEventListener("load", function() {

//*DATEN AUS TABELLE*//
var Europa08: number = 4965.7;
var Europa18: number = 4209.3;
var Africa08: number = 1028;
var Africa18: number = 1235.5;
var SouthAmerica08: number = 1132.6;
var SouthAmerica18: number = 1261.5;
var NorthAmerica08: number = 6600.4;
var NorthAmerica18: number = 6035.6;
var Asia08: number = 12954.7;
var Asia18: number = 16274.1;
var Australia08: number = 1993;
var Australia18: number = 2100.5;
var Gesamt: number = Europa18 + Africa18 + SouthAmerica18 + NorthAmerica18 + Asia18 + Australia18;

//*EUROPA*//
var EmissionEU: number = Europa18;
var RelativeEU: number = Europa18 / Gesamt * 100;
var GrowthEU: number = (Europa18 - Europa08) / Europa18 * 100;
var absoluteEU: number = Europa18 - Europa08;

//*AFRICA*//
var EmissionAF: number = Africa18;
var RelativeAF: number = Africa18 / Gesamt * 100;
var GrowthAF: number = (Africa18 - Africa08) / Africa18 * 100;
var absoluteAF: number = Africa18 - Africa08;

//*ASIA*//
var EmissionAS: number = Asia18;
var RelativeAS: number = Asia18 / Gesamt * 100;
var GrowthAS: number = (Asia18 - Asia08) / Asia18 * 100;
var absoluteAS: number = Asia18 - Asia08;

//*AUSTRALIA*//
var EmissionAU: number = Australia18;
var RelativeAU: number = Australia18 / Gesamt * 100;
var GrowthAU: number = (Australia18 - Australia08) / Australia18 * 100;
var absoluteAU: number = Australia18 - Australia08;

//*NORTH AMERICA*//
var EmissionNA: number = NorthAmerica18;
var RelativeNA: number = NorthAmerica18 / Gesamt * 100;
var GrowthNA: number = (NorthAmerica18 - NorthAmerica08) / NorthAmerica18 * 100;
var absoluteNA: number = NorthAmerica18 - NorthAmerica08;

//*SOUTH AMERICA*//
var EmissionSA: number = SouthAmerica18;
var RelativeSA: number = SouthAmerica18 / Gesamt * 100;
var GrowthSA: number = (SouthAmerica18 - SouthAmerica08) / SouthAmerica18 * 100;
var absoluteSA: number = SouthAmerica18 - SouthAmerica08;


//*EUROPA*//
function Europe() {
    
    document.querySelector("#emission").innerHTML = EmissionEU;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of Europe in 2018";

    document.querySelector("#relative").innerHTML = RelativeEU.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";

    document.querySelector("#growth").innerHTML = GrowthEU.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#absolute").innerHTML = absoluteEU.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

//*DIAGRAMM*//
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeEU + "px");

    }
//*EVENT LISTENER*//
document.querySelector(".europe").addEventListener("click", Europe);


//*AFRICA*//
function Africa() {

    document.querySelector("#emission").innerHTML = EmissionAF;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of Africa in 2018";

    document.querySelector("#relative").innerHTML = RelativeAF.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";

    document.querySelector("#growth").innerHTML = GrowthAF.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#absolute").innerHTML = absoluteAF.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

//*DIAGRAMM*//
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeAF + "px");
        
    }
//*EVENT LISTENER*//
document.querySelector(".africa").addEventListener("click", Africa);


//*ASIA*//
function Asia() {

    document.querySelector("#emission").innerHTML = absoluteAS;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of Asia in 2018";

    document.querySelector("#relative").innerHTML = RelativeAS.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";

    document.querySelector("#growth").innerHTML = GrowthAS.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#absolute").innerHTML = absoluteAS.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    
//*DIAGRAMM*//  
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeAS + "px");
        
    }
//*EVENT LISTENER*//
document.querySelector(".asia").addEventListener("click", Asia);


//*AUSTRALIA*//
function Australia() {

    document.querySelector("#emission").innerHTML = EmissionAU;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of Australia in 2018";

    document.querySelector("#relative").innerHTML = RelativeAU.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";

    document.querySelector("#growth").innerHTML = GrowthAU.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#absolute").innerHTML = absoluteAU.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    
//*DIAGRAMM*//    
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeAU + "px");
    }
//*EVENT LISTENER*//
document.querySelector(".australia").addEventListener("click", Australia);   



//*NORTH AMERICA*//
function Northamerica() {

    document.querySelector("#emission").innerHTML = EmissionNA;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of North America in 2018";
    
    document.querySelector("#relative").innerHTML = RelativeNA.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";
    
    document.querySelector("#growth").innerHTML = GrowthNA.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    
    document.querySelector("#absolute").innerHTML = absoluteNA.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

//*DIAGRAMM*//
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeNA + "px");
    
    }
//*EVENT LISTENER*//
document.querySelector(".northamerica").addEventListener("click", Northamerica);


    
//*SOUTH AMERICA*//
function Southamerica() {

    document.querySelector("#emission").innerHTML = EmissionSA;
    document.querySelector("#emissiont").innerHTML = "Emission absolute of South America in 2018";

    document.querySelector("#relative").innerHTML = RelativeSA.toFixed(2) + "%";
    document.querySelector("#relativet").innerHTML = "Relative to total world's emission";

    document.querySelector("#growth").innerHTML = GrowthSA.toFixed(2) + "%";
    document.querySelector("#growtht").innerHTML = "Growth rate between 2008 and 2018 (in %)";

    document.querySelector("#absolute").innerHTML = absoluteSA.toFixed(2);
    document.querySelector("#absolutet").innerHTML = "Growth rate between 2008 and 2018 (absolute)";

//*DIAGRAMM*//
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector(".chart").setAttribute("style", "height:" + RelativeSA + "px");
        
    }
//*EVENT LISTENER*//
document.querySelector(".southamerica").addEventListener("click", Southamerica);

});


 



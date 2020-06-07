"use strict";
window.addEventListener("load", function () {
    //*DATEN AUS TABELLE*//
    var Europa08 = 4965.7;
    var Europa18 = 4209.3;
    var Africa08 = 1028;
    var Africa18 = 1235.5;
    var SouthAmerica08 = 1132.6;
    var SouthAmerica18 = 1261.5;
    var NorthAmerica08 = 6600.4;
    var NorthAmerica18 = 6035.6;
    var Asia08 = 12954.7;
    var Asia18 = 16274.1;
    var Australia08 = 1993;
    var Australia18 = 2100.5;
    var Gesamt = Europa18 + Africa18 + SouthAmerica18 + NorthAmerica18 + Asia18 + Australia18;
    //*EUROPA*//
    var EmissionEU = Europa18;
    var RelativeEU = Europa18 / Gesamt * 100;
    var GrowthEU = (Europa18 - Europa08) / Europa18 * 100;
    var absoluteEU = Europa18 - Europa08;
    //*AFRICA*//
    var EmissionAF = Africa18;
    var RelativeAF = Africa18 / Gesamt * 100;
    var GrowthAF = (Africa18 - Africa08) / Africa18 * 100;
    var absoluteAF = Africa18 - Africa08;
    //*ASIA*//
    var EmissionAS = Asia18;
    var RelativeAS = Asia18 / Gesamt * 100;
    var GrowthAS = (Asia18 - Asia08) / Asia18 * 100;
    var absoluteAS = Asia18 - Asia08;
    //*AUSTRALIA*//
    var EmissionAU = Australia18;
    var RelativeAU = Australia18 / Gesamt * 100;
    var GrowthAU = (Australia18 - Australia08) / Australia18 * 100;
    var absoluteAU = Australia18 - Australia08;
    //*NORTH AMERICA*//
    var EmissionNA = NorthAmerica18;
    var RelativeNA = NorthAmerica18 / Gesamt * 100;
    var GrowthNA = (NorthAmerica18 - NorthAmerica08) / NorthAmerica18 * 100;
    var absoluteNA = NorthAmerica18 - NorthAmerica08;
    //*SOUTH AMERICA*//
    var EmissionSA = SouthAmerica18;
    var RelativeSA = SouthAmerica18 / Gesamt * 100;
    var GrowthSA = (SouthAmerica18 - SouthAmerica08) / SouthAmerica18 * 100;
    var absoluteSA = SouthAmerica18 - SouthAmerica08;
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
//# sourceMappingURL=script1.js.map
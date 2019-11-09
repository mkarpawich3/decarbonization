var book = document.getElementById("book");
var pageLeft = document.getElementById("left");
var pageRight = document.getElementById("right");
var activeImage;
var activeText;

var ctrl_back = document.getElementById("backward");
var ctrl_forward = document.getElementById("forward");
var ctrl_count = document.getElementById("count");


var Page = function(imageWidth, imageHeight, imageID, textID, source) {
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.imageID = imageID;
    this.textID = textID;
    this.source = source;
}

var pageIndex = 1;
var pages = [
    new Page(1024, 243, "i1", "t1", "https://www.oerb.com/about/media/media-kit"),
    new Page(1350, 500, "i2", "t2", "https://www.oerb.com/well-site-clean-up/before-and-afters"),
    new Page(639, 831, "i3", "t3", "https://www.osti.gov/biblio/76361"),
    new Page(960, 570, "i4", "t4", "https://oklahoman.com/article/5491502/oil-natural-gas-industry-cleans-up-abandoned-well-site-near-bricktown"),
    new Page(1600, 1000, "i5", "t5", "https://oerb.com"),
    new Page(2565, 1697, "i6", "t6", "https://oerb.com/annualreport18"),
    new Page(4789, 2349, "i7", "t7", "https://www.oerb.com/about/media/oerb-trains-16000th-teacher"),
    new Page(620, 416, "i8", "t8", "https://stateimpact.npr.org/oklahoma/2017/06/15/oils-pipeline-to-americas-schools/"),
    new Page(1440, 1001, "i9", "t9", "https://www.washingtonpost.com/news/wonk/wp/2013/04/02/nasas-most-famous-climate-scientist-is-retiring-heres-a-look-back-at-his-work/"),
    new Page(700, 931, "ia", "ta", "https://digital.library.unt.edu/ark:/67531/metadc11834/"),
    new Page(1, 1, "ib", "tb", ""),
    new Page(429, 326, "ic", "tc", "http://www.curbsideclassic.com/automotive-histories/automotive-history-1960-1963chevrolet-corvair-gms-deadliest-sin/"),
    new Page(1200, 675, "id", "td", "https://www.chicagotribune.com/lifestyles/health/ct-met-flames-tobacco-20120508-story.html"),
    new Page(1600, 800, "ie", "te", "https://energyhq.com/2018/08/the-oerb-committed-to-restoration-education-since-1993/"),
    new Page(1920, 1188, "if", "tf", "https://www.oerb.com/well-site-clean-up"),
    new Page(1280, 720, "ig", "tg", ""),
    new Page(1, 1, "ii", "ti", ""),
];

function calcMultiplier(ow, oh, w, h) {
    if (w > h) {
        return ow / w;
    } else {
        return oh / h;
    }
}

function resizeBook(ow, oh) {
    book.style.height = (window.innerWidth/8)*3 + "px";
    var page = pages[pageIndex - 1];
    var multiplier = calcMultiplier(ow, oh, page.imageWidth, page.imageHeight);
    activeImage.style.width = (page.imageWidth * multiplier) + "px";
    activeImage.style.height = (page.imageHeight * multiplier) + "px";
}

function refreshPage(newIndex) {
    var oldPage = pages[pageIndex - 1];
    var newPage = pages[newIndex - 1];
    var ow = pageLeft.offsetWidth;
    var oh = pageLeft.offsetHeight;
    document.getElementById(oldPage.imageID).style.display = "none";
    document.getElementById(oldPage.textID).style.display = "none";
    activeImage = document.getElementById(newPage.imageID);
    activeImage.style.display = "block";
    activeText  = document.getElementById(newPage.textID);
    activeText.style.display = "block";
    ctrl_count.innerHTML = newIndex;
    pageIndex = newIndex;
    resizeBook(ow, oh);
}

window.addEventListener("resize", resizeBook)
ctrl_back.addEventListener("click", function() {
    if (pageIndex > 1) {
        refreshPage(pageIndex - 1);
    }
});
ctrl_forward.addEventListener("click", function() {
    if (pageIndex < pages.length) {
        refreshPage(pageIndex + 1);
    }
});

refreshPage(1);
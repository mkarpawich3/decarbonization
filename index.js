var poster = document.getElementById('poster');
var writing = document.getElementById('writing');

var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');

var tocIntro = document.getElementById('toc-intro');
var tocRumble = document.getElementById('toc-rumble');
var tocReference = document.getElementById('toc-reference');
var tocPoster = document.getElementById('toc-poster');

var pageIndex = -1;
var pageCount = 44;

function setPage(newIndex) {
    if (pageIndex > -1) {
        document.getElementById(`p${pageIndex}`).style.display = 'none';
        document.getElementById(`w${pageIndex}`).style.display = 'none';
    }
    pageIndex = newIndex;
    document.getElementById(`p${pageIndex}`).style.display = 'block';
    document.getElementById(`w${pageIndex}`).style.display = 'block';
}

leftButton.addEventListener('click', function() {
    if (pageIndex > 0) {
        setPage(pageIndex - 1);
    }
});
rightButton.addEventListener('click', function() {
    if (pageIndex < pageCount - 1) {
        setPage(pageIndex + 1);
    }
});

tocIntro.addEventListener('click', function() {
    setPage(1);
});

tocRumble.addEventListener('click', function() {
    setPage(12);
});

tocReference.addEventListener('click', function() {
    setPage(28);
});

tocPoster.addEventListener('click', function() {
    setPage(34);
});



setPage(0);
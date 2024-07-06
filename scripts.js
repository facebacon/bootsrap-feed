document.getElementById('toggleGallery').addEventListener('click', function() {
    document.getElementById('photoContainer').classList.add('gallery-view');
    document.getElementById('photoContainer').classList.remove('feed-view',);
});

document.getElementById('toggleFeed').addEventListener('click', function() {
    document.getElementById('photoContainer').classList.add('feed-view',);
    document.getElementById('photoContainer').classList.remove('gallery-view');
});
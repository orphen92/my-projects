WebFont.load({
    google: {
      families: ['Ubuntu', 'Open Sans']
    }
  });

export const run = () => {
    let doc = document;
    let marker = doc.querySelector('.main-menu_marker');
    let links = doc.querySelectorAll('.main-menu_list a');

    function indicators(event) {

        console.log('event: ', event.offsetWidth);
        marker.style.top = event.offsetTop -10 + 'px';
        marker.style.width = event.offsetWidth + 'px';
    }

    indicators(links[0]);  

    links.forEach(link => {
        link.addEventListener('mousemove', (link) => {
            indicators(link.target);
        });
    });
}
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling;

    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true';
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.setAttribute('aria-hidden', expanded);
        target.inert = expanded;

        if (!expanded) {
            target.style.maxHeight = target.scrollHeight + 'px';
            target.style.opacity = 1;
            
            if (window.matchMedia('(max-width: 576px)').matches) {
                target.style.marginTop = '4px';
                target.style.marginBottom = '20px';
            } else {
                target.style.marginBottom = '24px';
            }
        } else {
            target.style.maxHeight = null;
            target.style.marginTop = null;
            target.style.marginBottom = null;
            target.style.opacity = 0;
        }
      };
});
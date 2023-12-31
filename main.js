const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach((accordionHeader, index) => {
    const target = accordionHeader.parentElement.nextElementSibling;

    if (index === 0) {
        accordionHeader.setAttribute('aria-expanded', 'true');
        target.setAttribute('aria-hidden', 'false');
        target.style.maxHeight = target.scrollHeight + 'px';
        target.style.opacity = 1;
        if (window.matchMedia('(max-width: 576px)').matches) {
            target.style.marginTop = '4px';
            target.style.marginBottom = '20px';
        } else {
            target.style.marginBottom = '24px';
        }
    }

    accordionHeader.onclick = () => {
        const expanded = accordionHeader.getAttribute('aria-expanded') === 'true';
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.setAttribute('aria-hidden', expanded);

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
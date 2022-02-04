(function(){
    const animated = [
        {
            element: '#title',
            animation: 'bounceInDown',
        },
        {
            element: '#subtitle',
            animation: 'fadeIn',
        },
        {
            element: '.about__description',
            animation: 'fadeInLeft',
        },
        {
            element: '.skills__block:not(.skills__block--secondary)',
            animation: 'fadeInDown',
        },
    ];

    function animateCSS(element, animationName, callback) {
        NodeList.prototype.forEach = Array.prototype.forEach;

        const nodes = document.querySelectorAll(element).forEach(function (node, index) {
            index = (index / 2).toString().replace('.', '-');

            node.classList.add('animated', animationName);
            node.classList.add('delay', 'delay-' + index + 's');

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName);
                node.classList.add('delayed', 'delay-' + index + 's');
                node.removeEventListener('animationend', handleAnimationEnd);

                if (typeof callback === 'function') callback()
            }

            node.addEventListener('animationend', handleAnimationEnd)
        });
    }

    function animate(element, callback = null) {
        !element.fired && animateCSS(element.element, element.animation, callback);
        element.fired = true;
    }

    new fullpage('#fullpage', {
        licenseKey: "KrWJVerjsRRnUJT9wcI,sEhs-0PGHholV2w#t",
        navigation: true,
        anchors: ['welcome', 'about', 'projects', 'skills-primary', 'skills-secondary', 'contact'],
        navigationTooltips: ['Welcome', 'About me', 'Projects', 'Main skills', 'Secondary skills', 'Contact'],
        onLeave: function (origin, destination, direction) {
            if (destination.index == 1) animate(animated[2]); 
            if (destination.index == 3) animate(animated[3]); 
        }
    });

    animate(animated[0]);
    setTimeout(() => animate(animated[1]), 1000);
})();
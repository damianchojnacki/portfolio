(function(){
    const animated = [
        {
            element: '.about__description',
            animation: 'fadeInLeft',
        },
        {
            element: '.code-brackets',
            animation: 'fadeInDown',
        },
        {
            element: '.contact__button',
            animation: 'fadeInLeft',
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

        console.log(element);
    }

    function animate(element) {
        console.log(element);
        !element.fired && animateCSS(element.element, element.animation);
        element.fired = true;
    }

    new fullpage('#fullpage', {
        licenseKey: null,
        navigation: true,
        anchors: ['welcome', 'about', 'projects', 'technologies-main', 'technologies-other', 'contact'],
        navigationTooltips: ['Welcome', 'About me', 'Projects', 'Main technologies', 'Other technologies', 'Contact'],
        onLeave: function (origin, destination, direction) {
            if (destination.index == 1) animate(animated[0]); 
            if (destination.index == 3) animate(animated[1]); 
        }
    });
})();
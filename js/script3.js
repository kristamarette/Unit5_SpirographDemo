//---------------- SVG 2 ------------------//
$(function () {
    gsap.registerPlugin('GSDevTools');

    let rect = [$('rect')];

    let myBody = $('body');
    let content = $('#content');
    let div1 = $('#svgDiv1');

    let mySvg = $('svg');

    let paragraph = $("p");


    window.addEventListener('load', function (event) {


        event.preventDefault();
        pageLoad();


        function pageLoad() {
            const tl1 = gsap.timeline({
                id: 'tl1'
            });
            GSDevTools.create({
                id: 'tl1'
            });

            tl1.to(content, {
                autoAlpha: 1,
                duration: 0.3
            });


            tl1.fromTo(mySvg, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.3
            }, '-=0.3');


            rect.forEach((x) => {
                tl1.fromTo(x, {
                    opacity: 0
                }, {
                    opacity: 0.25,
                    duration: 2,
                    stagger: 0.1,
                    ease: "power4.Out"
                });
            });


            tl1.to(div1, {
                autoAlpha: 0,
                duration: 1
            });
            tl1.to(paragraph, {
                autoAlpha: 1,
                duration: 1
            });


            tl1.fromTo(paragraph, {
                autoAlpha: 0,
                y: '50vh',
                ease: 'bounce.out'
            }, {
                autoAlpha: 1,
                duration: 1,
                y: 0
            });

        }


    });
})
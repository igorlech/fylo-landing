import { Intro } from '@components/intro/intro';
import { Nav } from '@components/nav/nav';
import { Infobox } from '@components/infobox/infobox';
import { ImgText } from '@components/img-text/img-text';
import { Testimonials } from '@components/testimonials/testimonials';
import { Footer } from '@components/footer/footer';
import './styles.scss';

// bootstrap main App when DOMContentLOADED
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    new Nav();
    new Intro();
    new Infobox();
    new ImgText();
    new Testimonials();
    new Footer();
});

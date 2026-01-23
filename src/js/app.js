window['FLS'] = true;

import "../scss/style.scss";

// React

// import Index from './react/Index.jsx';

// Functional
import * as flsFunctions from "./files/functions.js";

// flsFunctions.isWebp();
// flsFunctions.addTouchClass();
// flsFunctions.addLoadedClass();
flsFunctions.menuInit();
// import './libs/wNumb.min.js';

// flsFunctions.spollers();

// flsFunctions.tabs();

// flsFunctions.showMore();

// import './libs/beforeafter.js';

// flsFunctions.rippleEffect();

// flsFunctions.customCursor(true);

// import './libs/keywords.js'

// import './libs/popup.js'

// import './libs/parallax-mouse.js'

// Forms
import * as flsForms from "./files/forms/forms.js";

// flsForms.formFieldsInit({
//     viewPass: false,
//     autoHeight: false
// });

// flsForms.formSubmit();

// flsForms.formQuantity();

// flsForms.formRating();

// import './libs/select.js'

// import './files/forms/datepicker.js'

// import "./files/forms/inputmask.js";

// import "./files/forms/range.js";

// import "./files/tippy.js";

import "./files/sliders.js";

// import './files/scroll/simplebar.js';

// import './files/scroll/lazyload.js';

// import './libs/watcher.js'

// import './libs/fullpage.js'

// import './libs/parallax.js'

import * as flsScroll from "./files/scroll/scroll.js";

// flsScroll.pageNavigation();

// flsScroll.headerScroll();

// flsScroll.digitsCounter();

// import "./files/gallery.js";

// import "./files/isotope.js";

// import "./libs/dynamic_adapt.js";

import "./files/script.js";

import "./files/tests.js";

const current = location.pathname.split('/').pop();
document.querySelectorAll('.menu__link').forEach(link => {
  if (link.href.includes(current)) link.classList.add('active');
});

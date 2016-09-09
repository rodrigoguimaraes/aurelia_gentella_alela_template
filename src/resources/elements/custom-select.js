// Aurelia Framework specific functionality
import {bindable, inject, customElement} from 'aurelia-framework';

// Import JSPM modules we installed earlier
import $ from 'jquery';
import 'select2/select2/js/select2.full.min.js';
// import 'select2/select2/css/select2.css!';

@customElement('select2') // Define the name of our custom element
@inject(Element) // Inject the instance of this element
export class CustomSelect {
    @bindable name = null; // The name of our custom select
    @bindable selected = false; // The default selected value
    @bindable options = {}; // The label/option values
    @bindable elementClasses = null;
    @bindable classToFindElement = null; // class used to find the element
    // @bindable elementClasses = null; //custom styles  

    constructor(element) {
        this.element = element;
    }

    // Once the Custom Element has its DOM instantiated and ready for binding
    // to happenings within the DOM itself
    attached() {
        console.log("classToFindElement");
        console.log(this.classToFindElement);
        console.log(this.elementClasses);
        $(this.element).find('.' + this.classToFindElement)
            .select2()
            .on('change', (event) => {
                let changeEvent;

                if (window.CustomEvent) {
                    changeEvent = new CustomEvent('change', {
                        detail: {
                            value: event.target.value
                        },
                        bubbles: true
                    });
                } else {
                    changeEvent = document.createEvent('CustomEvent');
                    changeEvent.initCustomEvent('change', true, true, {
                        detail: {
                            value: event.target.value
                        }
                    });
                }
                this.element.dispatchEvent(changeEvent);
            });
    }
}
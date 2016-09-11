//import {computedFrom} from 'aurelia-framework';
import {InnerPage} from "app.js";
import "fastclick/lib/fastclick.js";
import "nprogress/nprogress.js";
import "minddust/bootstrap-progressbar/bootstrap-progressbar.min.js";
import "icheck/icheck.min.js"
import "datejs/Datejs/build/date.js";
import moment from "moment/moment.js";
import "dangrossman/bootstrap-daterangepicker/daterangepicker.js";
import "mindmup/bootstrap-wysiwyg/bootstrap-wysiwyg.js";
import "jeresig/jquery.hotkeys/jquery.hotkeys.js";
// import "google/code-prettify/src/prettify.js";// Loading at index.html
import "xoxco/jQuery-Tags-Input/dist/jquery.tagsinput.min.js"; 
import Switchery from "abpetkov/switchery/dist/switchery.min.js"; 

import "guillaumepotier/Parsley.js/dist/parsley.min.js"; // PROBABLY Will become a custom element 
// import "jackmoore/autosize/dist/autosize.min.js"; // Will become a custom element
import "select2/select2/js/select2.full.min.js";  // Will become a custom element
// import "devbridge/jQuery-Autocomplete/dist/jquery.autocomplete.min.js";// Will become a custom element
import "dobtco/starrr/dist/starrr.js";

export class GeneralForm extends InnerPage{

  constructor(){
    super();
    }

  attached(){
    
//<!-- bootstrap-daterangepicker -->
    $('#birthday').daterangepicker({
      singleDatePicker: true,
      calender_style: "picker_4"
    }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });
    
//  <!-- /bootstrap-daterangepicker -->
//  <!-- bootstrap-wysiwyg -->
        function initToolbarBootstrapBindings() {
          var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
              'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
              'Times New Roman', 'Verdana'
            ],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
          $.each(fonts, function(idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
          });
          // $('a[title]').tooltip({
          //   container: 'body'
          // });
          $('.dropdown-menu input').click(function() {
              return false;
            })
            .change(function() {
              $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
            })
            .keydown('esc', function() {
              this.value = '';
              $(this).change();
            });

          $('[data-role=magic-overlay]').each(function() {
            var overlay = $(this),
              target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
          });

          if ("onwebkitspeechchange" in document.createElement("input")) {
            var editorOffset = $('#editor').offset();

            $('.voiceBtn').css('position', 'absolute').offset({
              top: editorOffset.top,
              left: editorOffset.left + $('#editor').innerWidth() - 35
            });
          } else {
            $('.voiceBtn').hide();
          }
        }

        function showErrorAlert(reason, detail) {
          var msg = '';
          if (reason === 'unsupported-file-type') {
            msg = "Unsupported format " + detail;
          } else {
            console.log("error uploading file", reason, detail);
          }
          $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }

        initToolbarBootstrapBindings();

        $('#editor').wysiwyg({
          fileUploadError: showErrorAlert
        });

        window.prettyPrint;
        prettyPrint();

//    </!-- bootstrap-wysiwyg -->

      $(document).ready(function() {
        // $.listen('parsley:field:validate', function() {
        //   validateFront();
        // });
        window.Parsley.on('field:validate', function() {
          validateFront();
        });        

        $('#demo-form .btn').on('click', function() {
          $('#demo-form').parsley().validate();
          validateFront();
        });
        var validateFront = function() {
          if (true === $('#demo-form').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
          } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
          }
        };
      });
//    <!-- Parsley -->
      $(document).ready(function() {
        // $.listen('parsley:field:validate', function() {
        //   validateFront();
        // });
        window.Parsley.on('field:validate', function() {
          validateFront();
        });        
        $('#demo-form2 .btn').on('click', function() {
          $('#demo-form2').parsley().validate();
          validateFront();
        });
        var validateFront = function() {
          if (true === $('#demo-form2').parsley().isValid()) {
            $('.bs-callout-info').removeClass('hidden');
            $('.bs-callout-warning').addClass('hidden');
          } else {
            $('.bs-callout-info').addClass('hidden');
            $('.bs-callout-warning').removeClass('hidden');
          }
        };
      });
      try {
        hljs.initHighlightingOnLoad();
      } catch (err) {}        
//    </!-- Parsley -->
//    <!-- jQuery Tags Input -->
     function onAddTag(tag) {
        alert("Added a tag: " + tag);
      }

      function onRemoveTag(tag) {
        alert("Removed a tag: " + tag);
      }

      function onChangeTag(input, tag) {
        alert("Changed a tag: " + tag);
      }

      
      $('#tags_1').tagsInput({
        width: 'auto'
      });
      
//    </!-- jQuery Tags Input -->      

// Switchery
    $(document).ready(function() {
        if ($(".js-switch")[0]) {
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            elems.forEach(function (html) {
                var switchery = new Switchery(html, {
                    color: '#26B99A'
                });
            });
        }
    });
// /Switchery

// Starrr

    $(".stars").starrr();

    $('.stars-existing').starrr({
      rating: 4
    });

    $('.stars').on('starrr:change', function (e, value) {
      $('.stars-count').html(value);
    });

    $('.stars-existing').on('starrr:change', function (e, value) {
      $('.stars-count-existing').html(value);
    });
// /Starrr

// iCheck    
  if ($("input.flat")[0]) {
      $(document).ready(function () {
          $('input.flat').iCheck({
              checkboxClass: 'icheckbox_flat-green',
              radioClass: 'iradio_flat-green'
          });
      });
  }
// /iCheck

// Accordion

  $(".expand").on("click", function () {
      $(this).next().slideToggle(200);
      $expand = $(this).find(">:first-child");

      if ($expand.text() == "+") {
          $expand.text("-");
      } else {
          $expand.text("+");
      }
  });

// /Accordion  

  // Panel toolbox
  $(document).ready(function() {
      $('.collapse-link').on('click', function() {
          var $BOX_PANEL = $(this).closest('.x_panel'),
              $ICON = $(this).find('i'),
              $BOX_CONTENT = $BOX_PANEL.find('.x_content');
          
          // fix for some div with hardcoded fix class
          if ($BOX_PANEL.attr('style')) {
              $BOX_CONTENT.slideToggle(200, function(){
                  $BOX_PANEL.removeAttr('style');
              });
          } else {
              $BOX_CONTENT.slideToggle(200); 
              $BOX_PANEL.css('height', 'auto');  
          }

          $ICON.toggleClass('fa-chevron-up fa-chevron-down');
      });

      $('.close-link').click(function () {
          var $BOX_PANEL = $(this).closest('.x_panel');

          $BOX_PANEL.remove();
      });
  });
  // /Panel toolbox


//    <!-- jQuery autocomplete -->
      var countries = { AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region" };

      var countriesArray = $.map(countries, function(value, key) {
        return {
          value: value,
          data: key
        };
      });

      // initialize autocomplete with custom appendTo
      // $('#autocomplete-custom-append').autocomplete({
      //   lookup: countriesArray
      // });
//    <!-- /jQuery autocomplete -->
//     <!-- Select2 -->

        this.selectOptions = [
            {label: '', value: ''},
            {label: 'AK', value: 'Alaska'},
            {label: 'HI', value: 'Hawaii'},
            {label: 'CA', value: 'California'},
            {label: 'NV', value: 'Nevada'},
            {label: 'OR', value: 'Oregon'},
            {label: 'WA', value: 'Washington'},
            {label: 'AZ', value: 'Arizona'},
            {label: 'CO', value: 'Colorado'},
            {label: 'ID', value: 'Idaho'},
            {label: 'MT', value: 'Montana'},
            {label: 'NE', value: 'Nebraska'},
            {label: 'NM', value: 'New Mexico'},
            {label: 'ND', value: 'North Dakota'},
            {label: 'UT', value: 'Utah'},
            {label: 'WY', value: 'Wyoming'},
            {label: 'AR', value: 'Arkansas'},
            {label: 'IL', value: 'Illinois'},
            {label: 'IA', value: 'Iowa'},
            {label: 'KS', value: 'Kansas'},
            {label: 'KY', value: 'Kentucky'},
            {label: 'LA', value: 'Louisiana'},
            {label: 'MN', value: 'Minnesota'},
            {label: 'MS', value: 'Mississippi'},
            {label: 'MO', value: 'Missouri'},
            {label: 'OK', value: 'Oklahoma'},
            {label: 'SD', value: 'South Dakota'},
            {label: 'TX', value: 'Texas'}
            
        ];


        this.selectGroupedOptions = [
            {isGroup : true, label : 'Alaskan/Hawaiian Time Zone',
            options : [
                {label: 'AK', value: 'Alaska'},
                {label: 'HI', value: 'Hawaii'}
            ]
            },
            {isGroup : true, label : 'Pacific Time Zone',
            options : [
                {label: 'CA', value: 'California'},
                {label: 'NV', value: 'Nevada'},
                {label: 'OR', value: 'Oregon'},
                {label: 'WA', value: 'Washington'}
            ]
            },
            {isGroup : true, label : 'Mountain Time Zone',
            options : [
              {label: 'AZ', value: 'Arizona'},
              {label: 'CO', value: 'Colorado'},
              {label: 'ID', value: 'Idaho'},
              {label: 'MT', value: 'Montana'},
              {label: 'NE', value: 'Nebraska'},
              {label: 'NM', value: 'New Mexico'},
              {label: 'ND', value: 'North Dakota'},
              {label: 'UT', value: 'Utah'},
              {label: 'WY', value: 'Wyoming'},
            ]
            }                    
        ];
        console.log(this.selectGroupedOptions);

      this.selectMultipleOptions = [            
            {label: 'AK', value: 'Alaska'},
            {label: 'HI', value: 'Hawaii'},
            {label: 'CA', value: 'California'},
            {label: 'NV', value: 'Nevada'},
            {label: 'OR', value: 'Oregon'},
            {label: 'WA', value: 'Washington'},
            {label: 'AZ', value: 'Arizona'},
            {label: 'CO', value: 'Colorado'},
            {label: 'ID', value: 'Idaho'},
            {label: 'MT', value: 'Montana'},
            {label: 'NE', value: 'Nebraska'},
            {label: 'NM', value: 'New Mexico'},
            {label: 'ND', value: 'North Dakota'},
            {label: 'UT', value: 'Utah'},
            {label: 'WY', value: 'Wyoming'},
            {label: 'AR', value: 'Arkansas'},
            {label: 'IL', value: 'Illinois'},
            {label: 'IA', value: 'Iowa'},
            {label: 'KS', value: 'Kansas'},
            {label: 'KY', value: 'Kentucky'},
            {label: 'LA', value: 'Louisiana'},
            {label: 'MN', value: 'Minnesota'},
            {label: 'MS', value: 'Mississippi'},
            {label: 'MO', value: 'Missouri'},
            {label: 'OK', value: 'Oklahoma'},
            {label: 'SD', value: 'South Dakota'},
            {label: 'TX', value: 'Texas'}
            
        ];          




        // $(".select2_single").select2({
        //   placeholder: "Select a state",
        //   allowClear: true
        // });
        // $(".select2_group").select2({});
        // $(".select2_multiple").select2({
        //   maximumSelectionLength: 4,
        //   placeholder: "With Max Selection limit 4",
        //   allowClear: true
        // });


    // <!-- /Select2 -->


  }   

}



// Minified Clickwrap Snippet for Demo Environment
(function(w,d,s,c,f,n,t,g,a,b,l){w["PactSafeObject"]=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},w[n].on=function(){(w[n].e=w[n].e||[]).push(arguments)},w[n].once=function(){(w[n].eo=w[n].eo||[]).push(arguments)},w[n].off=function(){(w[n].o=w[n].o||[]).push(arguments)},w[n].t=1*new Date(),w[n].l=0;a=d.createElement(s);b=d.getElementsByTagName(s)[0];a.async=1;a.src=c;a.onload=a.onreadystatechange=function(){w[n].l=1};a.onerror=a.onabort=function(){w[n].l=0};b.parentNode.insertBefore(a,b);setTimeout(function(){if(!w[n].l&&!w[n].loaded){w[n].error=1;a=d.createElement(s);a.async=1;a.src=f;a.onload=a.onreadystatechange=function(){w[n].l=1};a.onerror=a.onabort=function(){w[n].l=0};b.parentNode.insertBefore(a,b);l=function(u,e){try{e=d.createElement("img");e.src="https://d3r8bdci515tjv.cloudfront.net/error.gif?t="+w[n].t+"&u="+encodeURIComponent(u);d.getElementsByTagName("body")[0].appendChild(e)}catch(x){}};l(c);setTimeout(function(){if(!w[n].l&&!w[n].loaded){w[n].error=1;if(g&&"function"==typeof g){g.call(this);}l(f)}},t)}},t)})(window,document,"script","https://vault.demo.pactsafe.io/ps.min.js","https://d21iwaz8hush8a.cloudfront.net/ps.min.js","_ps",5000,function(){window.console&&console.error&&console.error("Unable to load Ironclad Clickwrap Library.")});
// Placeholder for future JavaScript functionality
// For example, you could add form validation, interactive elements, or animations here.

// We'll need a couple of things to get started from Ironclad Clickwrap.
var siteAccessId = 'ee990b91-7889-48e2-ad31-3e73b3b96f81'; // A Clickwrap Site Access ID
var groupKey = "abc"; // A Clickwrap Group Key.

// Creates a Site object with the a Clickwrap Site Access ID.
_ps('create', siteAccessId, {
    test_mode: true, // Allows you to clear test data from the Ironclad Clickwrap web app.
    disable_sending: true  // Disable automatically capturing and sending acceptance upon checkbox click.
});

// Since we're testing, we can enable debugging
// which will log events to console. You'll want to
// set this to false in a production environment.
_ps.debug = true;
_ps.on('all', function(){
    // will log all Ironclad Clickwrap events to your console
    // with the arguments from each
    console.log(arguments);
});

// Options set on the Clickwrap Group.
var groupOptions = {
  container_selector: 'clickwrapContainer', // HTML Element ID of where we want the clickwrap to load in the page.
  display_all: true, // Always display the contracts, even if previously signed by the Signer.
  signer_id_selector: 'signer', // Uses the email input field value as the Signer ID and listen to the field.
}

// Load a Clickwrap group into the page.


document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully.");
    // Additional JavaScript can be added here if needed
    document.getElementById("start").onclick = function () {
        _ps('load', groupKey, groupOptions);
        _ps('set', 'custom_data',
            {
                first_name: "Manner",
                last_name: "Manning",
                compay_name:"Amazing Company",
        });
        const counterpartyIdentification = document.getElementById('signer');
        if(!counterpartyIdentification?.value || counterpartyIdentification?.value == '') 
            {
                return alert('Please enter your email to continue.')
            }
            else {
                return alert('Your signer id is' + counterpartyIdentification)
            };
    }

    document.getElementById("submit").onclick = function () {
        _ps.on("valid", function(data, clickwrapGroup) {
            if (!clickwrapGroup.allChecked()) {
              // Optionally require the signer to check all checkboxes.
              return alert('invalid')
            } 
        });
        _ps('abc:send', 'agreed', {
            disable_sending: false,  // enable automatically capturing and sending acceptance upon checkbox click.
            // The event_callback function will be invoked once the "send" is complete.
            event_callback: function(err, eventType, clickwrapGroup, payload) {
                if (err) {
                    console.log("error")
                    console.log(err)
                    return
                }
                console.log("Success")
            }
        });
    };
});








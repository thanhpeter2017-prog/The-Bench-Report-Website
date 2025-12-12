// ===============================================
// GLOBAL TIME DISPLAY LOGIC
// ===============================================

function showTime() {
    // We can use optional chaining to prevent errors if the element doesn't exist
	const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.innerHTML = new Date().toUTCString();
    }
}

// Initial call to display time immediately
showTime();


setInterval(showTime, 1000);


// ===============================================
// STATE AND DATA
// ===============================================

// --- State Array ---
const states = [
    { name: 'Alabama', value: 'AL' }, { name: 'Alaska', value: 'AK' },
    { name: 'Arizona', value: 'AZ' }, { name: 'Arkansas', value: 'AR' },
    { name: 'California', value: 'CA' }, { name: 'Colorado', value: 'CO' },
    { name: 'Connecticut', value: 'CT' }, { name: 'Delaware', value: 'DE' },
    { name: 'District of Columbia', value: 'DC' }, { name: 'Florida', value: 'FL' },
    { name: 'Georgia', value: 'GA' }, { name: 'Hawaii', value: 'HI' },
    { name: 'Idaho', value: 'ID' }, { name: 'Illinois', value: 'IL' },
    { name: 'Indiana', value: 'IN' }, { name: 'Iowa', value: 'IA' },
    { name: 'Kansas', value: 'KS' }, { name: 'Kentucky', value: 'KY' },
    { name: 'Louisiana', value: 'LA' }, { name: 'Maine', value: 'ME' },
    { name: 'Maryland', value: 'MD' }, { name: 'Massachusetts', value: 'MA' },
    { name: 'Michigan', value: 'MI' }, { name: 'Minnesota', value: 'MN' },
    { name: 'Mississippi', value: 'MS' }, { name: 'Missouri', value: 'MO' },
    { name: 'Montana', value: 'MT' }, { name: 'Nebraska', value: 'NE' },
    { name: 'Nevada', value: 'NV' }, { name: 'New Hampshire', value: 'NH' },
    { name: 'New Jersey', value: 'NJ' }, { name: 'New Mexico', value: 'NM' },
    { name: 'New York', value: 'NY' }, { name: 'North Carolina', value: 'NC' },
    { name: 'North Dakota', value: 'ND' }, { name: 'Ohio', value: 'OH' },
    { name: 'Oklahoma', value: 'OK' }, { name: 'Oregon', value: 'OR' },
    { name: 'Pennsylvania', value: 'PA' }, { name: 'Rhode Island', value: 'RI' },
    { name: 'South Carolina', value: 'SC' }, { name: 'South Dakota', value: 'SD' },
    { name: 'Tennessee', value: 'TN' }, { name: 'Texas', value: 'TX' },
    { name: 'Utah', value: 'UT' }, { name: 'Vermont', value: 'VT' },
    { name: 'Virginia', value: 'VA' }, { name: 'Washington', value: 'WA' },
    { name: 'West Virginia', value: 'WV' }, { name: 'Wisconsin', value: 'WI' },
    { name: 'Wyoming', value: 'WY' }
];



const judgeData = `
    <div class="judge-bio">
        <h1>Judge Profile: Teresa Molina-Gonzalez</h1>
        <p style="color:#A9A9A9"><i>Automatically updated 2 minutes ago</i></p>
    <img src="https://www.illinoiscourts.gov/Resources/0657ef87-6560-4476-9f38-156fc34b2f56/judge-Teresa-Molina.jpg" alt="Teresa Molina-Gonzalez" width="150" height="200">    
    <div id="judge-rating-system" data-judge="Molina-Gonzalez">
      <span> 3.0 </span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
    <input type="submit" value="Rate Now" id="rate-button"><br><br>
    <div id="rating-dialog-box" class="hidden">
        <h3 class="rating-heading">Share Your Experience</h3>
        <p>Select the number of stars that best reflects your opinion of this judge's performance:</p>
        
        <div id="interactive-stars">
            <span class="fa fa-star rating-star" data-value="1"></span>
            <span class="fa fa-star rating-star" data-value="2"></span>
            <span class="fa fa-star rating-star" data-value="3"></span>
            <span class="fa fa-star rating-star" data-value="4"></span>
            <span class="fa fa-star rating-star" data-value="5"></span>
        </div>
        <br><br>
        <div class="comment-group">
            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments" rows="5" cols="50"></textarea> 
        </div>
        <br>
        
        <button id="save-rating-button">Save Rating</button>
        <p id="save-message"></p>
    </div>
    <hr>
    
<p><strong>Current Role:</strong> Judge on the Circuit Court of Cook County, assigned to the Fourth Municipal District (Maywood).</p>

<hr>
<h3 class="judge-info-header">Judicial Service</h3>
<ul>
    <li><strong>Current Assignment:</strong> Fourth Municipal District (Maywood), Circuit Court of Cook County.</li>
    <li><strong>Appointment/Election:</strong> Appointed by the Illinois Supreme Court in 2019; subsequently elected in 2020.</li>
    <li><strong>Historic Significance:</strong> She is the **first person of Puerto Rican descent** ever to be appointed to and elected for a countywide judicial seat in Cook County.</li>
    <li><strong>Initial Assignment:</strong> First Municipal District (Chicago), where she presided over bench trials, small claims, eviction cases, and statutory summary-suspension hearings.</li>
</ul>
<hr>
<h3 class="judge-info-header">Education</h3>
<ul>
    <li><strong>Juris Doctor (J.D.):</strong> The Ohio State University Michael E. Moritz College of Law (graduated 2001).</li>
    <li><strong>Bachelor of Science (B.Sc.):</strong> Ashland University, in Criminal Justice & Sociology.</li>
</ul>

<hr>
<h3 class="judge-info-header">Pre-Judicial Career</h3>
<ul>
    <li><strong>Prosecutor:</strong> Spent approximately 18 years as a prosecutor in the Cook County State's Attorney's Office, specializing in felony jury-trial work.</li>
    <li><strong>Chief of Real Estate Prosecutions (IDFPR):</strong> Served at the Illinois Department of Financial and Professional Regulation (IDFPR), leading enforcement of licensing and regulation in the real-estate, appraisal, and home-inspection sectors.</li>
</ul>
<hr>
<h3 class="judge-info-header">Community & Philosophy</h3>
<ul>
    <li><strong>Background:</strong> She is of Puerto Rican descent, originally from Cleveland, Ohio, and relocated to Chicago after law school.</li>
    <li><strong>Public Statements:</strong> She has stated that she pursued law because she values **fairness and accountability** and wanted to give a "voice for those who needed to be heard."</li>
    <li><strong>Advocacy:</strong> Has spoken publicly about the importance of **representation and diversity** on the bench.</li>
</ul>

<h3 class="judge-info-header">What is known about cases she’s presided over</h3>
<ul>
    <li>Officially, Molina-Gonzalez is a judge on the Circuit Court of Cook County, serving in the Fourth Municipal District (Maywood) as of 2025</li>
    <li>Before that, after her 2019 appointment and 2020 election, she was assigned (at various times) to bench trials, small-claims, evictions, statutory summary-suspension hearings, and — according to some directories — the Traffic Division of the First Municipal District.</li>
    <li>The most publicly reported specific case tied to her name is the pre-trial release decision regarding Lawrence Reed (Aug. 22, 2025). In that case she denied a prosecutor’s motion for detention, instead granting Reed release under electronic home monitoring.</li>
    <li>That decision — and its aftermath (the train-attack case filed against Reed) — has drawn widespread media scrutiny, so it stands out as the “named case” publicly linked to her.</li>
    </ul>
    </div>
`;
const defendantData = `
    <div class="judge-bio">
        <h1>Defendant Profile: Lawrence Reed</h1>
        <p style="color:#A9A9A9"><i>Automatically updated 2 minutes ago</i></p>
        <img src="https://cwbchicago.com/wp-content/uploads/2020/04/LAWRENCE-B-REED-.jpeg" alt="Lawrence Reed" width="150" height="200">
        <span><strong>Age:</strong> 50</span>
        
        <p class="risk-bar-label"><strong>RISK: HIGH <span id="risk-score-display"></strong></span> </p>
    <div id="risk-bar-new" data-score="8"></div>
        <span><strong>Status: In custody</strong></span>
    
        <hr>
        <h3 class="judge-info-header">Case Details (25 CR 744)</h3>
        <ul>
            <li><strong>Jurisdiction:</strong> United States District Court, Northern District of Illinois, Eastern Division (Federal Court)</li>
            <li><strong>Case Number:</strong> 25 CR 744</li>
            <li><strong>Charge:</strong> Terrorist attack or other violence against a mass transportation system (18 U.S.C. §1992) — **Federal Terrorism Offense**</li>
            <li><strong>Alleged Incident Date:</strong> November 17, 2025 (CTA Blue Line train attack)</li>
            <li><strong>Current Status:</strong> Detained in federal custody pending further proceedings.</li>
        </ul>
        <hr>
        <h3 class="judge-info-header">Publicly Known History</h3>
        <p>Reports indicate Lawrence Reed has an <strong>**extensive criminal history**</strong> spanning decades.</p>
        <ul>
            <li><strong>Total Arrests (Reported):</strong> Approximately 72 over ~30 years.</li>
            <li><strong>Convictions (Reported):</strong> Approximately 15, including 8 felonies.</li>
            <li><strong>Prior Notable Offense:</strong> Convicted of aggravated arson in 2020 for attempting to set fire to a government building.</li>
            <li><strong>Prior Case Relevance:</strong> In a separate August 2025 state-court case (aggravated battery), Reed was released on electronic home monitoring, despite prosecutor's opposition.</li>
            <li><strong>Monitoring Violations:</strong> Court records show he reportedly violated his electronic monitoring curfew and restrictions multiple times in the days leading up to the November 17, 2025, attack.</li>
        </ul>
        <h3 class="judge-info-header">Affidavit Links:</h3>
        <a href="https://www.justice.gov/usao-ndil/media/1419031/dl?inline">Case number 25 CR 744</a>
    </div>
`;

// ===============================================
//  FUNCTIONS
// ===============================================

/**
 * Populates the state dropdowns 
 */
function populateStatesDropdowns() {
    // Get select elements
    const selectElements = [
        document.getElementById('state'),
        document.getElementById('state-def')
    ].filter(el => el !== null); // Filter out any null elements if they don't exist

    if (selectElements.length === 0) return; // Exit if no elements found

    // Create an array of <options> HTML strings once
    const optionsHTML = states.map(state => 
        `<option value="${state.value}">${state.name}</option>`
    ).join(''); 

    // Append options to all found select boxes
    selectElements.forEach(selectElement => {
        // Appending to innerHTML is fast for a one-time operation like this
        selectElement.innerHTML += optionsHTML;
    });
}

/**
 * Initializes the Judge Rating system functionality:
 * - Shows/Hides the dialog box.
 * - Manages interactive star hover and click.
 * - Handles the 'Save Rating' button click.
 */
function initializeRateButton() {
    const rateButton = document.getElementById('rate-button');
    const dialogBox = document.getElementById('rating-dialog-box');
    const stars = document.querySelectorAll('#interactive-stars .rating-star');
    const saveButton = document.getElementById('save-rating-button');
    const saveMessage = document.getElementById('save-message');
    
    // Safety check: only initialize if all elements are present
    if (!rateButton || !dialogBox || stars.length === 0 || !saveButton || !saveMessage) {
        console.error("Missing elements for rating system initialization.");
        return;
    }

    let selectedRating = 0;

    /** Helper function to apply highlighting classes to stars */
    function updateStarDisplay(count, className) {
        stars.forEach(star => {
            // Remove all custom classes first
            star.classList.remove('hovered', 'selected'); 
            const starValue = parseInt(star.getAttribute('data-value'));
            
            // Apply the current class if starValue is less than or equal to the count
            if (starValue <= count) {
                star.classList.add(className);
            }
        });
        
        // After a mouseout or hover update, ensure the previously selected rating remains highlighted
        if (className !== 'hovered' && selectedRating > 0) {
            updateStarDisplay(selectedRating, 'selected');
        }
    }

    // --- Show/Hide Dialog Box ---
    rateButton.addEventListener('click', () => {
        dialogBox.classList.toggle('hidden');
        saveMessage.textContent = ''; // Clear old messages
        selectedRating = 0; // Reset rating selection
        updateStarDisplay(0, 'selected'); // Clear stars when opening
    });

    // --- Star Interactivity (Hover & Click) ---
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));

        // Mouse Over (Highlight on hover)
        star.addEventListener('mouseover', () => {
            // Only apply hover if no rating is selected (selectedRating is 0)
            if (selectedRating === 0) { 
                updateStarDisplay(starValue, 'hovered');
            }
        });

        // Mouse Out (Clear hover highlight)
        star.addEventListener('mouseout', () => {
            updateStarDisplay(selectedRating, 'selected'); // Revert to selected state
        });

        // Click (Lock the rating)
        star.addEventListener('click', () => {
            selectedRating = starValue;
            saveMessage.style.color = ''; // Reset message color
            updateStarDisplay(selectedRating, 'selected');
        });
    });

    // --- Save Button --- 
    saveButton.addEventListener('click', () => {
        if (selectedRating > 0) {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const dateString = now.toLocaleDateString();
            
            // Display confirmation message (Simulation of saving)
            saveMessage.textContent = `Your rating of ${selectedRating} stars has been saved at ${timeString} on ${dateString}.`;
            saveMessage.style.color = 'green';
            
            // Optionally: Clear the dialog or hide it after saving
            // dialogBox.classList.add('hidden'); 
        } else {
            saveMessage.textContent = 'Please select a rating before saving.';
            saveMessage.style.color = 'red';
        }
    });
}


// ===============================================
// SECTION 4: MAIN EXECUTION BLOCK (DOMContentLoaded)
// ===============================================

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialize Dropdowns
    populateStatesDropdowns();
    
    // 2. Get Form and Output Elements
    const judgeSearchForm = document.getElementById('judge-search-form');
    const defendantSearchForm = document.getElementById('defendant-search-form');
    const outputDiv = document.getElementById('search-results-output');
    const selector = document.getElementById('search-type-selector');
    
    // Safety check for critical elements
    if (!judgeSearchForm || !defendantSearchForm || !outputDiv || !selector) {
        console.error("One or more search-related DOM elements are missing.");
        return; // Stop execution if we can't find the main elements
    }
    
    // 3. Form Selector Logic to switch between Judge and Defendant search
    selector.addEventListener('change', (event) => {
        if (event.target.value === 'judge') {
            judgeSearchForm.classList.remove('hidden');
            defendantSearchForm.classList.add('hidden');
        } else if (event.target.value === 'defendant') {
            defendantSearchForm.classList.remove('hidden');
            judgeSearchForm.classList.add('hidden');
        }
        outputDiv.innerHTML = ''; // Clear results when switching search type
    });

    // 4. Judge Search Form Submission Handler
    judgeSearchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting
        
        // Grab the user's input values and convert them to uppercase for comparison
        const judgeFname = document.getElementById('judgefname').value.trim().toUpperCase();
        const judgeLname = document.getElementById('judgelname').value.trim().toUpperCase();
        const courthouse = document.getElementById('courthouse').value.trim().toUpperCase();
        const city = document.getElementById('city').value.trim().toUpperCase();
        const state = document.getElementById('state').value.trim().toUpperCase(); 
        
        // Define the exact criteria you are looking for
        const targetFname = "TERESA";
        const targetLname = "MOLINA-GONZALEZ";
        
        // Check if ALL conditions are met
        if (judgeFname === targetFname && 
            judgeLname === targetLname &&
            state === 'IL' &&
            // Check if courthouse OR city input includes "MAYWOOD"
            (courthouse.includes("MAYWOOD") || city.includes("MAYWOOD"))) {
            
            // Success: Display the detailed biography
            outputDiv.innerHTML = judgeData;
            
            // Initialize the rating system after the judgeData HTML is inserted
            initializeRateButton();
        
        } else {
            // Failure: Display a "not found" message
            outputDiv.innerHTML = `<h2>Search Results</h2><p style="color: red; font-weight: bold;">No judge matching the exact criteria was found. Please check the information and try again.</p>`;
        }
    });

    // 5. Defendant Search Form Submission Handler
    defendantSearchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting
        
        // Grab the user's input values and convert them to uppercase
        const defFname = document.getElementById('def-fname').value.trim().toUpperCase();
        const defLname = document.getElementById('def-lname').value.trim().toUpperCase();
        const defCaseNum = document.getElementById('def-case-num').value.trim().toUpperCase();
        const defState = document.getElementById('state-def').value.trim().toUpperCase(); 
        
        // Define the criteria 
        const targetFname = "LAWRENCE";
        const targetLname = "REED";
        const targetCaseNum = "25 CR 744";
        
        // Check if ALL conditions are met
        if (defFname === targetFname && 
            defLname === targetLname &&
            defState === 'IL' &&
            defCaseNum === targetCaseNum) {
            
            // Success: Display the detailed defendant information
            outputDiv.innerHTML = defendantData;
            
        } else {
            // Failure: Display a "not found" message
            outputDiv.innerHTML = `<h2>Search Results</h2><p style="color: red; font-weight: bold;">No defendant matching the exact criteria was found. Please check the information and try again.</p>`;
        }
    });
});

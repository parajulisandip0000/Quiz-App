const quizData = [
        {
            "question": "1) What information is never included on a STAR report?",
            "a": "A. Performance data for individual competitors",
            "b": "B. Performance data for an industry segment relevant to the subject hotel",
            "c": "C. Index numbers and Index Percent Changes",
            "d": "D. The names of hotels included in the subject hotel's competitive set",
            "correct": "a"
        },
        {
            "question": "2) Which one of the following is a non-geographic category shown on the STAR report?",
            "a": "A. Location",
            "b": "B. Type",
            "c": "C. Class",
            "d": "D. Market",
            "correct": "c"
        },
        {
            "question": "3) Which one of the following is an accurate statement regarding Segmentation and Additional Revenue data on the STAR Reports?",
            "a": "A. Additional Revenue categories include 'F&B', 'Rentals', and 'Other' in addition to Room Revenue",
            "b": "B. Very few Luxury and Upper Upscale chain hotels submit Segmentation and/or Additional Revenue data",
            "c": "C. The most common example of Contract Rooms and Revenue is airline crew business",
            "d": "D. Group Rooms and Revenue are defined as business sold in blocks of 50 rooms or more",
            "correct": "c"
        },
        {
            "question": "4) What are the four steps in the iterative process to effectively use the STAR data?",
            "a": "A. Analyze, Integrate, Decide and Motivate",
            "b": "B. Assess, Inspect, Decide and Monitor",
            "c": "C. Assess, Integrate, Develop and Motivate",
            "d": "D. Analyze, Identify, Develop and Monitor",
            "correct": "d"
        },
        {
            "question": "5) Which statement is true regarding the industry data that a hotel may see on a STAR report?",
            "a": "A. Non-North America hotels will not see any industry segment data",
            "b": "B. North America and Non-North America hotels see the same exact tabs on the STR Report related to industry data",
            "c": "C. North America hotels will see data for a single industry segment",
            "d": "D. North America hotels will see industry data for Market, Market Class, Submarket and Submarket Scale",
            "correct": "d"
        },
        {
            "question": "6) Which is an accurate statement regarding the Day of Week and Weekday/Weekend tab in the Monthly STAR report?",
            "a": "A. It is a very valuable tab and can be used to find areas of improvement",
            "b": "B. All of the above",
            "c": "C. It shows data by every day of the week, as well as a Weekday and Weekend subtotal",
            "d": "D. It shows all the Key Performance indicators for all four time periods for the property and the comp set",
            "correct": "b",
            "image": "image/6.png"
        },
        {
            "question": "7) Which of the following statements best describes the performance of your hotel over the last six months?",
            "a": "A. Your hotel’s Occupancy Index has progressively improved each month",
            "b": "B. Your hotel’s Occupancy Rank has consistently been 2 of 5",
            "c": "C. Your hotel is the Occupancy leader (highest occupancy) in the Competitive Set",
            "d": "D. Your hotel’s Occupancy Rank has never been higher than 3 of 5",
            "correct": "b",
            "image": "image/7.png"
        },
        {
            "question": "8) Based on the information provided above, which one of the following is an accurate statement?",
            "a": "A. The Weekday Occupancy for both your hotel and the competitive set are consistently above the Weekend Occupancy for all time periods",
            "b": "B. The Weekend Occupancy this year for your hotel is increasing in all four time periods compared to last year",
            "c": "C. The Weekend Occupancy for your hotel is consistently higher than your Competitive Set for all time periods",
            "d": "D. The Total Current Month and Running 3 Month Occupancy for both your hotel and the Competitive Set are greater than the Year To Date and Running 12 Month Occupancies",
            "correct": "c",
            "image": "image/8.png"
        },
        {
            "question": "9) Based on the information provided above, which one of the following is an accurate statement?",
            "a": "A. Your hotel had a Transient RevPAR higher on Weekdays than Weekends",
            "b": "B. Your hotel had its highest Transient RevPAR on Saturdays",
            "c": "C. Your hotel’s Total Group RevPAR for the month was less than that of the Competitive Set",
            "d": "D. Your hotel ran a lower Group RevPAR than the Competitive Set on both Weekdays and Weekends",
            "correct": "b",
            "image": "image/9.png"
        },
        {
            "question": "10) Which one of the following is an accurate statement regarding the performance at your hotel?",
            "a": "A. Your Occupancy Index (MPI) has surpassed 100 in each of the four time periods shown",
            "b": "B. In Year-to-Date performance, your hotel’s Index numbers exceed 110 in all three-performance metrics (Occupancy, ADR and RevPAR)",
            "c": "C. Your Current Month ADR was higher than the Competitive Set ADR",
            "d": "D. In Running 3 Month performance, your hotel is beating the Competitive Set in all three-performance metrics (Occupancy, ADR and RevPAR)",
            "correct": "a"
        },
        {
            "question": "11) The Competitive Set Report in a Monthly STAR Report shows what information?",
            "a": "A. 18 months of monthly data and 2 years of YTD, Running 3-month, and Running 12-month data",
            "b": "B. 12 months of monthly data and 3 years of YTD, Running 3-month, and Running 12-month data",
            "c": "C. 18 months of monthly data and 3 years of YTD, Running 3-month, and Running 12-month data",
            "d": "D. 12 months of monthly data and 2 years of YTD, Running 3-month, and Running 12-month data",
            "correct": "c"
        },
        {
            "question": "12) The line graph at the top of the Competitive Set Report in a monthly STAR report shows what?",
            "a": "A. Actual values of Occupancy, ADR and RevPAR of the subject hotel and the competitive set",
            "b": "B. Actual Percent Changes for Occupancy, ADR and RevPAR of the subject hotel and the competitive set",
            "c": "C. Index Percent Change values for Occupancy, ADR and RevPAR",
            "d": "D. Index values for Occupancy, ADR and RevPAR",
            "correct": "d"
        },
        {
            "question": "13) The 'Weekly Performance At A Glance' tab on the Weekly STAR report displays what information?",
            "a": "A. Detail daily data for every day of the prior week",
            "b": "B. Running 28-day data",
            "c": "C. A weekly total",
            "d": "D. All of the above",
            "correct": "d"
        },
        {
            "question": "14) The 'Perspectives' tabs of the Weekly STAR report show all but the following information?",
            "a": "A. 12 weeks of weekly data",
            "b": "B. A recap of daily data performance for the last 28 days",
            "c": "C. Subtotals for the key performance indicators for the Current Week, Running 28 Days, and Running Month-to-Date",
            "d": "D. Monthly performance numbers for the last 3 months",
            "correct": "d"
        },
        {
            "question": "15) The 'Daily Data for the Month' tab on the Weekly STAR report displays what information?",
            "a": "A. Provides a running MTD total based upon daily data",
            "b": "B. All of the above are displayed on this report",
            "c": "C. Displays graphs of index values for every day of the current month",
            "d": "D. Shows KPIs for the subject property and the competitive set for each day of the current month",
            "correct": "b",
            "image": "image/15.png"
        },
        {
            "question": "16) Based upon the first nine days of the month, what can you determine about your hotel’s Occupancy performance?",
            "a": "A. The Competitive Set’s ADR was well above your hotel’s ADR on the latest Friday and Saturday",
            "b": "B. The Competitive Set’s Occupancy improved year-over-year every day",
            "c": "C. The Competitive Set’s Occupancy was significantly below your hotel’s occupancy for the first three days of the month",
            "d": "D. Your hotel had the highest Occupancy in the Competitive Set every day",
            "correct": "c",
            "image": "image/16.png"
        },
        {
            "question": "17) Based on the information above, which of the following most likely caused your hotel's low RevPAR Index number for the week?",
            "a": "A. The competitive set's ADR in general is very strong.",
            "b": "B. Your ADR in general is very weak.",
            "c": "C. Your Occupancy in general is weak compared to the competitive set.",
            "d": "D. Sunday performance is weak.",
            "correct": "c",
            "image": "image/17.png"
        },
        {
            "question": "18) Based on the information provided above, which one of the following is an accurate statement?",
            "a": "A. For the total week, the current month and Running 3-month ADR values for both your hotel and the competitive set are greater than the YTD and Running 12-month ADRs.",
            "b": "B. The Weekend ADR Percent Changes for your hotel are consistently higher than your competitive set.",
            "c": "C. Weekday ADRs this year for the competitive set are increasing in all four time periods compared to last year.",
            "d": "D. The Weekday ADRs for both your hotel and the competitive set are consistently above the Weekend ADRs for all time periods.",
            "correct": "b",
            "image": "image/18.png"
        },
        {
            "question": "19) Based on the information provided above, which one of the following is an accurate statement regarding August Segmentation Occupancy performance?",
            "a": "A. Your hotel’s Transient and Contract Occupancy were lower than the competitive set average.",
            "b": "B. Your Group Occupancy decreased significantly this year over last year.",
            "c": "C. Your Transient Occupancy decreased significantly this year over last year.",
            "d": "D. Your Contract Occupancy Percent Change was lower than the competitive set's.",
            "correct": "b",
            "image": "image/19.png"
        },
        {
            "question": "20) Based on the information provided above, which one of the following is an accurate statement regarding August ADR performance?",
            "a": "A. Your hotel’s Transient ADR is significantly higher than the competitive set average.",
            "b": "B. Your Contract ADR was lower than the competitive set average.",
            "c": "C. The Transient and Group ADR Percent Changes for your hotel and for the competitive set were all negative.",
            "d": "D. The Contract ADR Percent Changes for your hotel and for the competitive set were very similar.",
            "correct": "c"
        },
        {
            "question": "21) Which one of the following is an accurate statement regarding the Weekly STAR Reports?",
            "a": "A. If a hotel has an additional competitive set or submits Segmentation (Group/Transient) data, the Weekly STAR report will not include additional pages.",
            "b": "B. Weekly STAR Reports include Year-to-Date data.",
            "c": "C. Weekly “Perspective” pages display 28 days of daily data and graph 4 weeks of weekly data.",
            "d": "D. There are separate Weekly Perspective pages for Occupancy, ADR, and RevPAR.",
            "correct": "d"
        },
        {
            "question": "22) Which is NOT an accurate statement regarding the differences between STAR Reports, Ad-hoc Industry Reports, and Destination Reports?",
            "a": "A. Destination Reports are most often received by tourism organizations.",
            "b": "B. Hotels and hotel companies cannot obtain Ad-Hoc Industry reports or Destination Reports.",
            "c": "C. Ad-hoc Industry Reports are requested on a one-time, as-needed basis.",
            "d": "D. Hotels and hotel companies have annual subscriptions to STAR reports and receive them on a regular basis.",
            "correct": "b"
        },
        {
            "question": "23) Which of the following is a rule related to requesting Trend report(s)?",
            "a": "A. A single hotel may account for a maximum of 40 percent of the participating room supply (in NA, 50% in non-NA).",
            "b": "B. All of the above are rules related to requesting a Trend Report.",
            "c": "C. If you request multiple Trend reports, the hotels you have selected must differ by more than one participating hotel on subsequent Trend requests.",
            "d": "D. You must select four or more participating hotels.",
            "correct": "b"
        },
        {
            "question": "24) Which of the following is NOT a valid way to select hotels for a Trend Report?",
            "a": "A. Ask STR to select the best-performing hotels in an area.",
            "b": "B. Obtain a Participation List of hotels and specify individual properties.",
            "c": "C. Specify an industry segment such as a country, market or submarket.",
            "d": "D. Specify a query based upon variables such as Open Date, Number of Rooms, or Meeting Space.",
            "correct": "a"
        },
        {
            "question": "25) Trend reports are available in which currency?",
            "a": "A. Any currency.",
            "b": "B. Local currency only.",
            "c": "C. Euro (€) only.",
            "d": "D. U.S. Dollars ($) only.",
            "correct": "a"
        },
        {
            "question": "26) Several tabs in the Trend Report display columns with Census Props and Rooms and STAR participation. Which is an accurate statement about this data?",
            "a": "A. These columns show the total number of hotels and rooms for the selected group of hotels, as well as the percent of those rooms that submit performance data to STR.",
            "b": "B. These columns cannot help determine if there is a “consistent sample” for the Trend Report.",
            "c": "C. The data in these columns will not change over time.",
            "d": "D. All of the statements are accurate.",
            "correct": "a",
            "image": "image/26.png"
        },
        {
            "question": "27) Which one of the following is an accurate statement?",
            "a": "A. The occupancy for the year-to-date period ending September 2012 is down from the same period in 2011.",
            "b": "B. The September YTD occupancy for both 2013 and 2012 was exactly the same.",
            "c": "C. The RevPAR in every month of 2013 was greater than the same months in 2012.",
            "d": "D. The ADR for the first eight months of 2013 was up from the same period in 2012.",
            "correct": "d"
        },
        {
            "question": "28) Which of the following is NOT a valid type of data that you can request to include on a Trend Report, in addition to monthly data?",
            "a": "A. Weekly data.",
            "b": "B. 12-month moving average data.",
            "c": "C. Daily data.",
            "d": "D. Segmentation data.",
            "correct": "a"
        },
        {
            "question": "29) Which is a true statement regarding the Changes to Existing Supply tab of a Pipeline Report?",
            "a": "A. It can be used to analyze the conversion activity in a specific area.",
            "b": "B. It shows changes to existing supply for two time periods, last 12 months and last 60 months.",
            "c": "C. It shows the net gain or loss of hotel rooms over time by brand and scale.",
            "d": "D. All of the above are true statements.",
            "correct": "d",
            "image": "image/29.png"
        },
        {
            "question": "30) Which Upscale Brand experienced the most significant net change in room supply over the last 12 month period?",
            "a": "A. Courtyard",
            "b": "B. Crowne Plaza",
            "c": "C. Springhill Suites",
            "d": "D. Doubletree",
            "correct": "b",
            "image": "image/30.png"
        },
        {
            "question": "31) Which one of the following is an accurate statement regarding Supply growth over the last 5 years?",
            "a": "A. The Luxury Scale group experienced a significant decrease in Supply.",
            "b": "B. The Independent supply increased significantly from 2010 to 2013.",
            "c": "C. The Upper Upscale segment has the largest decrease in supply.",
            "d": "D. The Upscale segment experienced a significant increase in supply.",
            "correct": "d"
        },
        {
            "question": "32) What are the four phases for hotel projects in the development pipeline?",
            "a": "A. In-Construction, Final Planning, Planning and Unconfirmed.",
            "b": "B. In-Construction, Post Planning, Planning and Pre-Permit.",
            "c": "C. In-Construction, Final Planning, Post Planning and Unconfirmed.",
            "d": "D. In-Construction, Post Planning, Planning and Unconfirmed.",
            "correct": "a",
            "image": "image/32.png"
        },
        {
            "question": "33) Which two chain scales will probably experience the largest Supply growth in the near future?",
            "a": "A. It is impossible to tell from the information provided.",
            "b": "B. Upscale and Upper Midscale.",
            "c": "C. Upper Upscale and Midscale.",
            "d": "D. Upper Midscale and Midscale.",
            "correct": "a"
        },
        {
            "question": "34) What statement is true about a Multi-Segment tab of a Destination Report?",
            "a": "A. All of the statements above are true.",
            "b": "B. You can select 'comparable markets' to track the performance of other cities that you feel you compete with.",
            "c": "C. The tab will display numbers for two different time periods, such as Current Month and YTD.",
            "d": "D. You can select several industry segments and their data will appear.",
            "correct": "b"
        },
        {
            "question": "35) Which is NOT a true statement regarding a Destination Report?",
            "a": "A. The report helps the organization 'keep their finger on the pulse' of the local hotel industry.",
            "b": "B. An organization can create a personalized report with data relevant to their needs.",
            "c": "C. There is a variety of templates that an organization can choose from.",
            "d": "D. Reports are available only on a monthly basis, but not weekly.",
            "correct": "d"
        },
        {
            "question": "36) A HOST or Profitability report displays what type of information?",
            "a": "A. Balance Sheet (Assets) information.",
            "b": "B. Monthly performance (Occupancy, ADR, RevPAR) data.",
            "c": "C. Profit and Loss information, including revenue, expenses and profit accounts.",
            "d": "D. All of the above.",
            "correct": "c"
        },
        {
            "question": "37) The HOST Report displays data based upon what time period?",
            "a": "A. Quarterly",
            "b": "B. Monthly",
            "c": "C. Weekly",
            "d": "D. Annual",
            "correct": "d"
        },
        {
            "question": "38) A HOST or Profitability report display data for how many years?",
            "a": "A. Three",
            "b": "B. One",
            "c": "C. Ten",
            "d": "D. Two",
            "correct": "d"
        }
    ];
    const questionEl = document.getElementById('question');
    const optionA = document.getElementById('optionA_text');
    const optionB = document.getElementById('optionB_text');
    const optionC = document.getElementById('optionC_text');
    const optionD = document.getElementById('optionD_text');
    const nextBtn = document.getElementById('next');
    const feedbackEl = document.getElementById('feedback');
    const resultEl = document.getElementById('result');
    
    let currentQuiz = 0;
    let score = 0;
    let answered = false;
    
    function loadQuiz() {
        deselectAnswers();
        feedbackEl.innerHTML = "";
        const currentQuizData = quizData[currentQuiz];
        
        // Check if currentQuizData is valid
        if (!currentQuizData) {
            console.error("Question data not found for index:", currentQuiz);
            return;
        }
    
        questionEl.innerText = currentQuizData.question;
    
        // Handle the image
        const questionImage = document.getElementById('questionImage');
        if (currentQuizData.image) {
            questionImage.src = currentQuizData.image;
            questionImage.style.display = 'block';
        } else {
            questionImage.style.display = 'none';
        }
    
        optionA.innerText = currentQuizData.a;
        optionB.innerText = currentQuizData.b;
        optionC.innerText = currentQuizData.c;
        optionD.innerText = currentQuizData.d;
        answered = false;
    }
    
    function deselectAnswers() {
        document.querySelectorAll('.answer').forEach(el => el.checked = false);
    }
    
    function getSelected() {
        const answers = document.querySelectorAll('.answer');
        let selectedAnswer = null;
        answers.forEach((ans) => {
            if (ans.checked) {
                selectedAnswer = ans.id.slice(-1).toLowerCase(); // Get the last character and make it lowercase
            }
        });
        return selectedAnswer;
    }
    
    function checkAnswer() {
        const selectedAnswer = getSelected();
        if (answered || !selectedAnswer) return; // Prevent multiple checks or empty selections
    
        answered = true;
        const correctAnswer = quizData[currentQuiz].correct;
        if (selectedAnswer === correctAnswer) {
            feedbackEl.innerHTML = "Correct!";
            feedbackEl.style.color = "green";
            score++;
        } else {
            feedbackEl.innerHTML = `Wrong! The correct answer was ${correctAnswer.toUpperCase()}.`;
            feedbackEl.style.color = "red";
        }
    }
    
    document.querySelectorAll('.answer').forEach((el) => {
        el.addEventListener('change', () => {
            checkAnswer();
        });
    });
    
    nextBtn.addEventListener('click', () => {
        if (answered) {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                resultEl.innerHTML = `Quiz complete! You scored ${score}/${quizData.length}.`;
                nextBtn.disabled = true;
            }
        } else {
            alert("Please select an answer before moving to the next question.");
        }
    });
    
    // Load the first question initially
    loadQuiz();
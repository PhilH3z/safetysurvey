// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
        type: "radiogroup",
        name: "question1",
        title: "What is the correct way to cross a street at a crosswalk?",
        choices: [
            "Run as fast as possible to minimize time spent at risk on the road", "Cross when the light is green", "Wait for the pedestrian signal, look both ways, then cross when the road is clear", "Walk slowly so vehicles can avoid you"
        ],
        correctAnswer: "Wait for the pedestrian signal, look both ways, then cross when the road is clear"
    },
    {
        type: "radiogroup",
        name: "question2",
        title: "If you need to walk on a street with no sidewalk, which side of the street should you be walking on?",
        choices: [
            "Right", "Left", "Facing oncoming traffic", "Same side as traffic"
        ],
        correctAnswer: "Facing oncoming traffic"
    },
    {
        type: "radiogroup",
        name: "question3",
        title: "What does it mean when the crosswalk signal is flashing?",
        choices: [
            "Pedestrians should hurry up", "Cars are about to stop", "Pedestrians should wait", "The crosswalk is preparing activation sequences"
        ],
        correctAnswer: "Pedestrians should wait"
    },
    {
        type: "radiogroup",
        name: "question4",
        title: "You're walking alone at night and you think someone is following you. What should you do?",
        choices: [
            "Walk faster", "Look at them from a distance so they know you're aware", "Get on the phone with someone", "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        type: "radiogroup",
        name: "question5",
        title: "What should you do if someone throws eggs at your windshield while you're driving?",
        choices: [
            "Turn on the windshield wipers", "Keep driving until you're somewhere safe", "Pull over and clean up the mess so you can drive unobscured", "Whip out your phone and record the culprit"
        ],
        correctAnswer: "Keep driving until you're somewhere safe"
    },
    {
        type: "radiogroup",
        name: "question6",
        title: "Which of the following is incorrect behavior after being involved in a minor car accident?",
        choices: [
            "Apologizing", "Calling the police", "Documenting information about the scene", "Seeking immediate medical attention"
        ],
        correctAnswer: "Apologizing"
    },
    {
        type: "radiogroup",
        name: "question7",
        title: "What should you do the car in front of you suddenly stops and you can't go around?",
        choices: [
            "Honk aggressively", "Exit your vehicle to investigate", "Reverse, then ram it out of the way", "Stay inside the car, lock the doors, and drive defensively"
        ],
        correctAnswer: "Stay inside the car, lock the doors, and drive defensively"
    },
    {
        type: "radiogroup",
        name: "question8",
        title: "You see someone standing on the side of the road next to a stopped vehicle. Which of the following is bad advice?",
        choices: [
            "Consider how isolated the area is from other drivers", "Get close and roll down your windows to hear them out", "Drive away and feel guilty", "Look for signs of distress and call emergency services"
        ],
        correctAnswer: "Get close and roll down your windows to hear them out"
    },
    {
        type: "radiogroup",
        name: "question9",
        title: "You're standing in the middle of the road when you notice a vehicle coming at you with no signs of slowing down. What should you do?",
        choices: [
            "Get their attention so they can stop in time", "Correctly time a jump over the vehicle", "Get out of the way", "Brace for impact and protect vital organs"
        ],
        correctAnswer: "Get out of the way"
    },
    {
        type: "radiogroup",
        name: "question10",
        title: "You're involved in a car accident and the cops begin to ask questions. How should you behave?",
        choices: [
            "Vehemently deny all wrongdoing", "Remain silent, you are not legally obligated to answer questions", "Tell them everything and cooperate fully", "Be polite but firm in only answering questions related to the incident"
        ],
        correctAnswer: "Be polite but firm in only answering questions related to the incident"
    }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Street Smarts",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Street Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);

            if (userAnswer !== correctAnswer) {
                var explanation = "";
                if (correctAnswer == "Wait for the pedestrian signal, look both ways, then cross when the road is clear"){
                    explanation = "You should wait for the pedestrian signal and walk when the coast is clear";
                }
                else if (correctAnswer == "If you need to walk on a street with no sidewalk, which side of the street should you be walking on?"){
                    explanation = "Walking toward oncoming traffic allows for better visibility";
                }
                else if (correctAnswer == "What does it mean when the crosswalk signal is flashing?"){
                    explanation = "When the crosswalk signal is flashing, it means that vehicles are about to start moving again";
                }
                else if (correctAnswer == "You're walking alone at night and you think someone is following you. What should you do?"){
                    explanation = "You should do all three of walking faster, displaying confidence and awareness, and contacting help";
                }
                else if (correctAnswer == "What should you do if someone throws eggs at your windshield while you're driving"){
                    explanation = "Using the windshield wipers would smear the eggs everywhere make it worse. Stopping to do anything else will get you carjacked. You should drive away safely";
                }
                else if (correctAnswer == "Which of the following is incorrect behavior after being involved in a minor car accident?"){
                    explanation = "Apologizing is the only incorrect option because it could be taken as an admission of fault regarding insurance claims. You can feel bad but don't apologize.";
                }
                else if (correctAnswer == "What should you do the car in front of you suddenly stops and you can't go around?"){
                    explanation = "You should prioritize safety while keeping an eye out and remaining prepared to drive. Avoid confrontation and risky behavior";
                }
                else if (correctAnswer == "You see someone standing on the side of the road next to a stopped vehicle. Which of the following is bad advice?"){
                    explanation = "Though it seems heartless, getting close and rolling your window down puts yourself at unnecessary risk. You probably couldn't offer much help besides moral support anyway";
                }
                else if (correctAnswer == "You're standing in the middle of the road when you notice a vehicle coming at you with no signs of slowing down. What should you do?"){
                    explanation = "Please have some common sense";
                }
                else if (correctAnswer == "You're involved in a car accident and the cops begin to ask questions. How should you behave?"){
                    explanation = "Don't be antagonistic. Be polite and cooperative but only answer what you need to. Ask for a lawyer if you feel pressured by the authorities";
                }
                console.log("Explanation: " + explanation);
            }

            
        }
    });

    return <Survey model={survey} />;
}
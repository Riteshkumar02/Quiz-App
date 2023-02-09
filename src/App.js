import './App.css';
import React, { useState } from 'react';
import {useRef} from 'react';


function App() {
  const questions = [
		{
			questionText: 'React Js is ______based architecture approach',
			answerOptions: [
				{ answerText: 'Module', isCorrect: false },
				{ answerText: 'Component', isCorrect: true },
				{ answerText: 'Package', isCorrect: false },
				{ answerText: 'Class', isCorrect: false },
			],
		},
		{
			questionText: 'Who Develop React.js?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Facebook', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Why react is mainly used for?',
			answerOptions: [
				{ answerText: 'Database', isCorrect: false },
				{ answerText: 'User Interface', isCorrect: true },
				{ answerText: 'MVC', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'ReactJS written in which language?',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'PHP', isCorrect: true },
				{ answerText: 'Javascript', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'What is Babel?',
			answerOptions: [
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Interpreter', isCorrect: true },
				{ answerText: 'Both A & B', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'What does props stand for?',
			answerOptions: [
				{ answerText: 'Proper Arguments', isCorrect: false },
				{ answerText: 'Properties', isCorrect: true },
				{ answerText: 'Proper Return Values', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which ReactJS command is used to create a new application?',
			answerOptions: [
				{ answerText: 'new-react-app', isCorrect: false },
				{ answerText: 'create-react-app', isCorrect: true },
				{ answerText: 'create-new-reactapp', isCorrect: false },
				{ answerText: 'react-app', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct syntax to write expression in JSX?',
			answerOptions: [
				{ answerText: ' [ expression]', isCorrect: false },
				{ answerText: '{ expression}', isCorrect: true },
				{ answerText: '{{expression}}', isCorrect: false },
				{ answerText: '_expression', isCorrect: false },
			],
		},
		{
			questionText: 'Why React is faster then normal websites?',
			answerOptions: [
				{ answerText: ' It uses Original DOM', isCorrect: true },
				{ answerText: 'It used Virtual DOM', isCorrect: false },
				{ answerText: 'It does not use any DOM', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'In ReactJS, props can be used to pass',
			answerOptions: [
				{ answerText: 'Event handler to component', isCorrect: false },
				{ answerText: 'Properties to the component', isCorrect: false },
				{ answerText: 'Both A & B', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];
  // const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [responses,Res]=useState(0)
	let btnRef = useRef();

		
		//   questionBank: [],
		//   score: 0,
		//   responses: 0
		
	

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

	 else {
			setShowScore(true);
		}
	};

	const onBtnClick = e => {
		if(btnRef.current){
		  btnRef.current.setAttribute("disabled", "disabled");
		}
	  }

  return (
    <div className="App">			
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[0].questionText}</div>
					</div>
          <div className='answer-section'>
						{questions[0].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
          <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 2</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[1].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[1].answerOptions.map((answerOption) => (
							<button  className='btn btn-primary' ref={btnRef}  onClick={() => {handleAnswerOptionClick(answerOption.isCorrect); onBtnClick();}}>{answerOption.answerText}</button>
						))}
					</div>
          <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 3</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[2].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[2].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
          <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 4</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[3].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[3].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
		  <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 5</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[4].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[4].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
		 <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 6</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[5].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[5].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
		  <br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 7</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[6].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[6].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 8</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[7].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[7].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 9</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[8].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[8].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					<br></br>
          <hr></hr>
          <div className='question-section'>
						<div className='question-count'>
							<span>Question 10</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[9].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[9].answerOptions.map((answerOption) => (
							<button className='btn btn-primary' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>



				</>
        <br></br>
        <hr></hr>
        <h3>Result</h3>
        <div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
		</div>
	);    
  
}

export default App;

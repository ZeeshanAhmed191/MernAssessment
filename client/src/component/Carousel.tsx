import { FiBookOpen } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const data = [
  {
    id: 1,
    icon: <FaThumbsUp />,
    text: "It's great!!",
  },
  {
    id: 2,
    icon: <span>🤔</span>,
    text: "Thinking...",
  },
  {
    id: 3,
    icon: <FaThumbsDown />,
    text: "It's awful",
  },
];
const Carousel = ({ questions }: { questions: string[] }) => {
  const [index, setIndex] = useState(0);
  //const textRef = useRef<HTMLSpanElement>(null);
  const [answers, setAnswers] = useState<
    { question: string; answer: string }[]
  >([]);

  const changeQuestion = (text: string) => {
    const currentQuestion = questions[index];
    const newAnswer = { question: currentQuestion, answer: text };

    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);

    //   console.log(ques)
    // if (index == questions.length - 1) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
    setIndex(index + 1);

    //console.log(textRef?.current?.textContent);
  };
  const Page = () => {
    setIndex(0);
    setAnswers([]);
  };
  return (
    <>
      {index < questions.length ? (
        <div className="w-[100%] h-screen bg-dark-400 flex">
          <div className="w-[50%] h-[100%] bg-blue-800 flex flex-col items-start justify-start gap-44 pt-10 pl-10">
            <FiBookOpen color="white" size={40} />
            <div className="flex gap-16 items-center">
              <div className="flex flex-col gap-2">
                {questions.map((_, i) => (
                  <div
                    className={`${
                      i == index ? "bg-white" : ""
                    }  w-3 h-3 rounded border`}
                  />
                ))}
                {/* <div className="w-3 h-3 border-2 rounded bg-white" />
                <div className="w-3 h-3 border-2 rounded" />
                <div className="w-3 h-3 border-2 rounded" />
                <div className="w-3 h-3 border-2 rounded" />
                <div className="w-3 h-3 border-2 rounded" /> */}
              </div>

              <h1 className="text-white font-bold text-5xl max-w-[50%]">
                {questions[index]}
              </h1>
            </div>
          </div>
          <div className="w-[50%] h-[100%] bg-white flex justify-center items-center gap-24">
            {data?.map((elem) => {
              return (
                <div
                  className="min-h-20 flex flex-col items-center"
                  key={elem.id}
                  // onClick={() => changeQuestion(elem.text)}
                >
                  <p
                    className="icon text-5xl text-yellow-300 hover:cursor-pointer"
                    onClick={() => changeQuestion(elem.text)}
                  >
                    {elem.icon}
                  </p>
                  <span
                    id="spanElem"
                    className="spanText mt-2 text-sm font-light border-2 p-1 rounded-md"
                    //ref={textRef}
                  >
                    {elem.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-8">
          <div className="cursor-pointer" onClick={Page}>
            <FaArrowLeft size={25} />
          </div>
          <h1 className="text-2xl font-bold my-4">Summary</h1>
          {answers.map((ans, i) => (
            <div key={i} className="mb-6 grid grid-cols-2">
              <div>
                {" "}
                <h2 className="text-xl font-semibold mb-2">
                  Question {i + 1}:
                </h2>
                <p className="text-lg ">{ans.question}</p>
              </div>
              <div>
                {" "}
                <h2 className="text-xl font-semibold mt-4">Your Answer:</h2>
                <p className="text-lg">{ans.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;

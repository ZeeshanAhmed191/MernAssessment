import Carousel from "./component/Carousel";
function App() {
  const questions = [
    "How was your week over all?",
    "How was your experience at work today?",
    "Did you enjoy the food you had for lunch?",
    "How was the weather of today?",
    "How did your project go today?",
  ];
  return (
    <>
      <Carousel questions={questions} />
    </>
  );
}

export default App;

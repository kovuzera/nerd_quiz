import { Container, Content, Overall } from "./styles";
import questions from "../../database/questions.json";

export function Header() {
  return (
    <header>
      <Overall>
        <Container>
          <h1>Geek Quiz</h1>
          <h2>Teste o seu conhecimento sobre Star Wars!</h2>
        </Container>
        <Content>
          {questions.map(function (question) {
            return (
              <form key={question.id}>
                <h2>{question.question}</h2>
                {question.answers.map(function (answer) {
                  return (
                    <div key={answer.id}>
                      <input type="checkbox" id={answer.id} name={answer.id} />
                      <label htmlFor={answer.id}>{answer.answer}</label>
                    </div>
                  );
                })}
              </form>
            );
          })}
        </Content>
      </Overall>
    </header>
  );
}

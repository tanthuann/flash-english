// libs
import { SoundFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
// others
import "./style.scss";

const wordInfo = {
  word: "Hello",
  pos: " exclamation, noun",
  phon: "/həˈləʊ/",
  audio:
    "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hel/hello/hello__us_1_rr.mp3",
  senses: [
    {
      sense:
        "used as a greeting when you meet somebody, in an email, when you answer the phone or when you want to attract somebody’s attention",
      examples: ["Hello John, how are you?", "Hello, is there anybody there?"]
    },
    {
      sense: "used to show that you are surprised by something",
      examples: ["Hello, hello, what's going on here?"]
    }
  ],
  ref: [
    {
      engine: "GG Translate",
      href: "https://translate.google.com/?hl=vi&sl=en&tl=vi&text=hello&op=translate"
    },
    {
      engine: "Glosbe",
      href: "https://vi.glosbe.com/en/vi/hello"
    },
    {
      engine: "Oxford",
      href: "https://www.oxfordlearnersdictionaries.com/definition/english/hello"
    }
  ]
};

const Card = () => {
  const { audio, word, pos, senses, ref, phon } = wordInfo;

  return (
    <div className="card-wrapper">
      <Row gutter={[16, 16]} justify="start" align="middle">
        <Col className="sound" span={3}>
          <SoundFilled
            onClick={() => {
              new Audio(audio).play();
            }}
          />
        </Col>
        <Col className="phon" span={21}>
          {phon}
        </Col>
        <Col className="word" span={24}>
          {word}
        </Col>
        <Col className="pos" span={24}>
          {pos}
        </Col>
        <Col className="explains" span={24}>
          <ol className="senses">
            {senses.map(({ sense, examples }) => (
              <li key={sense} className="sense">
                {sense}
                <ul className="examples">
                  {examples.map((example) => (
                    <li key={example} className="example">
                      {example}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Col>
        <Col className="ref" span={24}>
          <Row justify="center" align="middle">
            {ref.map(({ engine, href }) => (
              <Col key={engine} span={6}>
                <a target="_blank" rel="noreferrer" href={href}>
                  {engine}
                </a>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Card;

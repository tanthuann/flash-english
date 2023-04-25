// libs
import { SoundFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
// contexts
import { useFamilies } from "../../../../contexts/ProvideFamilies";
// others
import "./style.scss";

const FrontCard = () => {
  const { wordInfo } = useFamilies();
  const { audio, word, pos, senses, ref, phon } = wordInfo || {};

  return (
    <div className="front-card-wrapper">
      <Row hidden={!wordInfo} gutter={[16, 16]} justify="start" align="middle">
        <Col className="sound" span={2}>
          <SoundFilled
            onClick={() => {
              new Audio(audio).play();
            }}
          />
        </Col>
        <Col className="phon" span={22}>
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
            {senses?.map(({ sense, examples }) => (
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
            {ref?.map(({ engine, href }) => (
              <Col key={engine} span={6}>
                <a target="_top" rel="noreferrer" href={href}>
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

export default FrontCard;

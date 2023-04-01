import { Button, ContainerFixed, Flex, Image } from "@components";
import { EButtonTypes, EDirectionFlex, EJustifyFlex } from "@core";
const Resume = require("../../images/resume.png");

export function AboutUs() {
  return (
    <>
      <Flex
        justify={EJustifyFlex.Center}
        direction={EDirectionFlex.Column}
        gap={10}
      >
        <Button
          type={EButtonTypes.Primary}
          target="_blank"
          href="https://quoc-thinh-resume.netlify.app/"
        >
          Click to view my resume
        </Button>
        <Image preview={false} width="100%" height="100%" src={Resume} />
      </Flex>
    </>
  );
}

export default AboutUs;

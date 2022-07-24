import { IconButton } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function AnswerDisplay({ classname, result, nextRound}) {
  return (
    <div className={classname}>
    {result && result}{" "}
    {result && (
      <IconButton
        onClick={() => nextRound()}
        variant="ghost"
        ml={5}
        icon={<ArrowRightIcon />}
      />
    )}
  </div>
  )
}

export default AnswerDisplay
import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { InView } from "react-intersection-observer";
const CountUp = ({ end, ...props }) => {
  const [inView, setInView] = React.useState(false);
  const { countUp, start } = useCountUp({
    end: end,
    start: 0,
    duration: 3,
    formattingFn(number) {
      return new Intl.NumberFormat().format(number);
    },
  });
  useEffect(() => {
    start();
  }, [inView]);
  return (
    <InView triggerOnce onChange={setInView}>
      <span {...props}>{countUp}+</span>
    </InView>
  );
};

export default CountUp;

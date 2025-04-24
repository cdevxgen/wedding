import styles from './index';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[8px] bg-[#eedd41]`}
    >
      <p className="font-bold text-[20px] text-black">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-extrabold text-2xl text-black dark-shadow leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;

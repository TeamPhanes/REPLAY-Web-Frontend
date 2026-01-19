interface CheckListProps {
  title: string;
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  check: string | undefined;
}

export default function CheckList({
  title,
  contentOne,
  contentTwo,
  contentThree,
  check,
}: CheckListProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-base font-normal tracking-[-2.5%] text-basefont">
        {title}
      </p>
      <ul className="flex gap-2">
        <li
          className={`${check === 'EASY' || check === 'GOOD' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentOne}
        </li>
        <li
          className={`${check === 'NORMAL' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentTwo}
        </li>
        <li
          className={`${check === 'HARD' || check === 'BAD' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentThree}
        </li>
      </ul>
    </div>
  );
}

interface CheckListProps {
  title: string;
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  check: string;
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
      <p className="font-normal text-base tracking-[-2.5%] text-basefont">
        {title}
      </p>
      <ul className="flex gap-2">
        <li
          className={`${check === contentOne ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentOne}
        </li>
        <li
          className={`${check === contentTwo ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentTwo}
        </li>
        <li
          className={`${check === contentThree ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
        >
          {contentThree}
        </li>
      </ul>
    </div>
  );
}

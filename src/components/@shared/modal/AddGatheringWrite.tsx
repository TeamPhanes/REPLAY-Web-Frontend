export default function AddGatheringWrite() {
  return (
    <div className="flex flex-col mt-8">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모임 소개글
      </p>
      <textarea
        placeholder={`모임에 대한 소개글을 써보세요.

모임에 대한 변동 가격을 써주면 모임 참여시 많은 도움이 되요.
ex) 인당 18,000원, 인당 20,000원이 예상됩니다.`}
        className="rounded-[30px] border-[1px] border-spot bg-card w-full h-96 p-5 outline-none text-basefont resize-none mt-3"
      />
    </div>
  );
}

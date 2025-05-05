import Image from 'next/image';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Rating from '@/components/@shared/rating/Rating';
import DateAndPrice from '@/components/gatheringDetail/DateAndPrice';
import TagAndLink from '@/components/gatheringDetail/TagAndLink';
import {
  GatheringDTO,
  GatheringDetailDTO,
} from '@/types/gathering/gathering.type';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface GatheringDetailCardProps {
  list: GatheringDTO['get'];
  detail: GatheringDetailDTO['get'];
}

export default function GatheringDetailCard({
  list,
  detail,
}: GatheringDetailCardProps) {
  return (
    <>
      <div className="flex h-[460px] justify-between">
        <Image
          src={detail.detailImage}
          alt={list.themeName}
          width={797}
          height={460}
          quality={100}
          className="rounded-[30px]"
        />
        <div className="relative h-[460px] w-[471px] rounded-[30px] bg-card p-5">
          <button type="button" className="absolute right-5 top-20">
            <Image src={HeartLine} alt="heart" width={32} height={32} />
          </button>
          <TagAndLink tag={list.genres} />
          <div className="mt-7 w-[395px]">
            <TitleAndSpot
              themeName={list.name}
              cafe={list.cafe}
              spot={list.leader}
            />
          </div>
          <div className="mt-9 flex w-[395px] flex-col gap-3">
            <DateAndPrice
              registrationEnd={list.registrationEnd}
              price={detail.price}
            />
            <AddressAndLevel address={list.address} level={list.level} />
          </div>
          <div className="mt-9 flex items-center justify-center gap-12">
            <Rating
              rating={list.participantCount}
              maxRating={6}
              width={288}
              height={48}
              type="User"
              capacity={list.capacity}
            />
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-grayFont">
              {list.participantCount}/{list.capacity}
            </p>
          </div>
          <button
            type="button"
            className="absolute bottom-5 w-[431px] rounded-2xl bg-mainBlue px-[10px] py-3"
          >
            <p className="text-2xl font-semibold text-white">모임 참여하기</p>
          </button>
        </div>
      </div>
      <div className="mt-5 h-[712px] w-[570px] rounded-[30px] bg-card p-5">
        <div className="relative flex items-center justify-center">
          <div className="w-[169px] border-t border-black" />
          <p className="min-w-[90px] text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            소개
          </p>
          <div className="w-[169px] border-t border-black" />
        </div>
        <p className="mt-5 text-base font-normal tracking-[-2.5%] text-basefont">
          {detail.content}
        </p>
      </div>
    </>
  );
}

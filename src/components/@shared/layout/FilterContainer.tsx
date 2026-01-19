'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import { useOpen } from '@/hooks/useOpen';
import BlackDelete from '@/public/icons/delete/black_delete.svg';
import FilterIcon from '@/public/icons/filter/black_filter.svg';
import ResetIcon from '@/public/icons/filter/black_reset.svg';
import MainBlueButton from '../button/MainBlueButton';
import Modal from '../modal/Modal';

interface FilterContainerProps {
  setPage?: (value: number) => void;
}

export default function FilterContainer({ setPage }: FilterContainerProps) {
  const [selectedType, setSelectedType] = useState('locate');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const { isOpen, openModal, closeModal } = useOpen();
  const {
    genreList,
    removeGenre,
    clearGenre,
    districtList,
    removeDistrictList,
    clearDistrict,
  } = useQueryStringStore();

  useEffect(() => {
    if (setPage) {
      setPage(0);
    }
  }, [setPage, genreList, districtList]);

  return (
    <>
      <button
        type="button"
        className="absolute right-4 z-10"
        onClick={openModal}
      >
        <Image src={FilterIcon} alt="필터" width={24} height={24} />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="relative w-80 rounded-[4px] bg-card-white p-4 md:w-[600px]"
      >
        <div className="relative flex items-center justify-center gap-2">
          <MainWhiteButton
            onClick={() => {
              setSelectedType('locate');
              setSelectedDistrict(null);
            }}
          >
            지역
          </MainWhiteButton>
          <MainWhiteButton onClick={() => setSelectedType('genre')}>
            테마
          </MainWhiteButton>
        </div>
        <LocationFilter
          selectedType={selectedType}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
        />
        <GenreFilter selectedType={selectedType} />

        {districtList.length !== 0 || genreList.length !== 0 ? (
          <div className="relative mt-10 flex flex-col gap-2">
            <div className="flex flex-col items-start gap-[6px] md:flex-row md:items-center">
              {districtList.map((value, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => removeDistrictList(value)}
                    className="flex animate-modalIn items-center gap-[6px] rounded-[4px] bg-brand-main300 px-3 py-[6px] text-base font-semibold tracking-[-2.5%] text-font-baseBlack"
                  >
                    {value}
                    <Image
                      src={BlackDelete}
                      alt="장르 삭제하기"
                      width={20}
                      height={20}
                    />
                  </button>
                );
              })}
            </div>

            {genreList.length !== 0 ? (
              <div className="flex flex-col items-start gap-[6px] md:flex-row md:items-center">
                {genreList.map((value, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => removeGenre(value)}
                      className="flex animate-modalIn items-center gap-[6px] rounded-[4px] bg-brand-sub300 px-3 py-[6px] text-base font-semibold tracking-[-2.5%] text-font-baseBlack"
                    >
                      {value}
                      <Image
                        src={BlackDelete}
                        alt="장르 삭제하기"
                        width={20}
                        height={20}
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}

            <div className="absolute bottom-0 right-0 flex items-center gap-1">
              <MainWhiteButton
                onClick={() => {
                  setSelectedType('locate');
                  setSelectedDistrict(null);
                  clearGenre();
                  clearDistrict();
                }}
                className="!p-[7px]"
              >
                <Image src={ResetIcon} alt="초기화" width={20} height={20} />
              </MainWhiteButton>
              <MainBlueButton
                onClick={() => {
                  setSelectedType('locate');
                  setSelectedDistrict(null);
                  closeModal();
                }}
                className="!px-6 !py-[7px] !text-base/[22px]"
              >
                확인
              </MainBlueButton>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

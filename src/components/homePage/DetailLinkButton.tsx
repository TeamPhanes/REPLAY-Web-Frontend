import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/useThemeStore';
import { GetTheme } from '@/axios/theme';
import { CarouselDTO } from '@/types/home/home.type';

interface DetailLinkButtonProps {
  list: CarouselDTO;
  imageWidth: number;
  imageHeight: number;
}

export default function DetailLinkButton({
  list,
  imageWidth,
  imageHeight,
}: DetailLinkButtonProps) {
  const { accessToken } = useAuthStore();
  const router = useRouter();
  const { setSelectedTheme } = useThemeStore();
  const [isNavigating, setIsNavigating] = useState(false);

  // const handleClick = async () => {
  //   setIsNavigating(true);
  //   try {
  //     const response = await GetTheme({
  //       accessToken,
  //       keyword: list.name,
  //       page: 0,
  //       limit: 1,
  //       sort: 'likes',
  //       state: '시.도',
  //       city: '시.군.구',
  //       genre: '전체',
  //     });
  //     const firstTheme = response.data.data[0];
  //     if (firstTheme) {
  //       setSelectedTheme(firstTheme);
  //       router.push(`/theme/${list.link}`);
  //     }
  //   } catch (error) {
  //     setIsNavigating(false);
  //   }
  // };

  // return (
  //   <button type="button" onClick={handleClick} disabled={isNavigating}>
  //     <Image
  //       src={list.image}
  //       alt={list.name}
  //       width={imageWidth}
  //       height={imageHeight}
  //       unoptimized
  //       quality={100}
  //       style={{
  //         width: `${imageWidth}px`,
  //         height: `${imageHeight}px`,
  //       }}
  //     />
  //   </button>
  // );
}

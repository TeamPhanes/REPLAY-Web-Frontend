'use client';

import { useQueryStringStore } from '@/store/useQueryStringStore';
import GenreDropdown from '@/components/@shared/filter/GenreDropdown';
import { genreList } from '@/constants/filter/genreList';

export default function GenreFilter() {
  const { genre, setGenre } = useQueryStringStore();
  return <GenreDropdown genre={genre} setGenre={setGenre} list={genreList} />;
}

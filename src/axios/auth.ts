import { axiosInstance } from '@/libs/axiosInstance';
import { useAuthStore } from '@/store/authStore';
import { API_PATH } from '@/axios/path.config';

export const GetLogin = async (social: string) => {
  const popupWindow = window.open(
    API_PATH.auth.signUp(social),
    '_blank',
    'width=1024,height=768'
  );

  if (!popupWindow) {
    alert('팝업을 차단한 것 같습니다. 팝업을 허용해 주세요.'); // 추후 toast ui로 변경
    return;
  }

  const handleMessage = (e: MessageEvent) => {
    if (e.origin !== 'https://repaly.phanescloud.com') return;
    if (!e.data || e.data.type !== 'token') return;

    const { type, accessToken } = e.data;

    if (type === 'token' && accessToken) {
      useAuthStore.getState().setAccessToken(accessToken);
      window.removeEventListener('message', handleMessage);
      window.location.href = '/';
    } else {
      alert('로그인 진행 중 오류가 있습니다.');
    }
  };
  window.addEventListener('message', handleMessage);
};

export const PostLogout = async () => {
  try {
    await axiosInstance.post(API_PATH.auth.logout);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

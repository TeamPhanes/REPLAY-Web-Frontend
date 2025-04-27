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

  try {
    window.addEventListener('message', (e) => {
      if (e.origin !== window.location.origin) return;
      if (e.data.type === 'token' && e.data.accessToken) {
        localStorage.setItem('accessToken', e.data.accessToken);
        window.opener.postMessage({ success: true }, window.origin);
        popupWindow.close();
      }
    });
  } catch (error) {
    if (popupWindow) {
      popupWindow.postMessage(
        { success: false, message: `Authorization 요청 실패: ${error}` },
        window.origin
      );
      popupWindow.close();
    }
  }
};

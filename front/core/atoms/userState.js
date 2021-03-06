import { atom, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import * as API from '../../pages/api/api';

const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: 'user',
  default: { user: null },
  effects_UNSTABLE: [persistAtom],
});

export const tokenAtom = atom({
  key: 'token',
  default: { token: null },
  effects_UNSTABLE: [persistAtom],
});

export const isLoginAtom = atom({
  key: 'isLogin',
  default: { login: false },
  effects_UNSTABLE: [persistAtom],
});

export const profileUrlAtom = atom({
  key: 'profileUrl',
  default: { profileUrl: null },
  effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
  key: 'userName',
  default: { userName: null },
  effects_UNSTABLE: [persistAtom],
});

export const userDescriptionAtom = atom({
  key: 'userDescription',
  default: { userDescription: null },
  effects_UNSTABLE: [persistAtom],
});

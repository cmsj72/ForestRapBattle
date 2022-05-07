export interface UserInfo {
  username: string;
  nickname: string;
  profileImg?: string | null | undefined;
}

export interface NavUserInfo {
  userId: number;
  nickname: string;
  profileImg?: string | null | undefined;
}

export interface LoginUserInfo {
  username: string;
  password: string;
}

export interface SetPasswordInfo {
  username: string;
  oldPassword: string;
  newPassword: string;
  passwordCheck: string;
  [key: string]: any;
}

export interface SetUserInfo {
  username: string;
  nickname: string;
  [key: string]: any;
}

export interface SignupUserInfo {
  username: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
  profileId?: number | null | undefined;
  [key: string]: any; // 이거를 쓰면 ts를 쓰는 의미가 없긴한데 일단 오류를 해결하기 위해 사용
}

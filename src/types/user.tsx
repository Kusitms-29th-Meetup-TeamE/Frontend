export interface UserProps {
  name: string;
  age?: number;
  gender: string;
  location: string;
  imgUrl?: string;
}

export interface UserInfoProps extends UserProps {
  email?: string;
  birthYear?: string;
  password?: string;
  nickname?: string;
  confirmPassword?: string;
}

// 위의 UserProps들과 key값이 달라서 임의로 생성
export interface KakaoUserProps {
  name: string;
  birthyear: string;
  email: string;
  gender: string;
  profileImage: string;
}

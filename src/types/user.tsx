export interface UserProps {
  name: string;
  age: number;
  gender: string;
  location: string;
  imgUrl?: string;
}

export interface UserInfoProps extends UserProps {
  email?: string;
  birthYear?: string;
  password?: string;
  nickname?: string;
}

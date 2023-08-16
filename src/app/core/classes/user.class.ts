export interface IUser {
  id?: string;
  name?: string;
  middleName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  avatar?: any;
  email?: string;
  ReferingId?: IUser;
  Business?: any;
  status?: any;
  lastLogout?: any;
  description?: string;
  address?: string;
  phone?: any;
  token?: string;
  roles?: Array<{
    type: 'Messenger' | 'Client' | 'Owner' | 'Admin';
  }>;
  ci?: any;
}

export interface IMessenger {
  id?: string;
  name?: string;
  middleName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  avatar?: any;
  email?: string;
  ReferingId?: IUser;
  status?: any;
  lastLogout?: any;
  description?: string;
  address?: string;
  phone?: any;
  token?: string;
  roles?: any[];
  city?: any;
  Country: any;
  CountryId?: any;
  dni?: any;
  Countries?: any[];
  Person?: IUser;
}

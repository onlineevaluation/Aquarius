import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtUser } from '../domain/JwtUser';
/**
 * 授权信息
 */
export const authInfo = () => {
  const jwtHelperService = new JwtHelperService();
  let token = localStorage.getItem('token');
  const jwtUser = new JwtUser();
  if (token !== null) {
    const user = jwtHelperService.decodeToken(token);
    jwtUser.auth = user.auth;
    jwtUser.exp = user.exp;
    jwtUser.iat = user.iat;
    jwtUser.sub = user.sub;
    jwtUser.classId = user.classId;
    jwtUser.userId = user.userId;
  } else {
    jwtUser.userId = -1;
  }
  return jwtUser;
};

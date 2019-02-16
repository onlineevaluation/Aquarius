export class JwtUser {
  auth: string;
  exp: number;
  iat: number;
  sub: string;
  /**
   * 用户id
   */
  userId: number;
  /**
   * 班级id
   */
  classId: number;
}

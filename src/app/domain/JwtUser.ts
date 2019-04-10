export class JwtUser {
  exp: number;
  iat: number;
  /**
   * 被签发者
   */
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

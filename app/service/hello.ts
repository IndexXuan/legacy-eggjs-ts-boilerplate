import { Service } from 'egg';

/**
 * Hello Service
 */
export default class HelloService extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}

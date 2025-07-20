export class EnumHelper {
  static getKeys<T extends { [key: string]: string | number }>(enumObj: T): string[] {
    return Object.keys(enumObj).filter(key => isNaN(Number(key)));
  }

  static getValues<T extends { [key: string]: string | number }>(enumObj: T): Array<string | number> {
    return this.getKeys(enumObj).map(key => enumObj[key]);
  }

  /**
   * Dictionnary with key and value
   * @param enumObj 
   * @returns 
   */
  static getEntries<T extends { [key: string]: string | number }>(enumObj: T): { key: string; value: string | number }[] {
    return this.getKeys(enumObj).map(key => ({
      key,
      value: enumObj[key],
    }));
  }

}

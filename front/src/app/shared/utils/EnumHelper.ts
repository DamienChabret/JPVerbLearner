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

   /**
   * Trouver une clé à partir d'une valeur
   */
  static getKeyByValue<T extends { [key: string]: string | number }>(
    enumObj: T,
    valueToFind: string | number
  ): string | undefined {
    return this.getKeys(enumObj).find(key => enumObj[key] === valueToFind);
  }

  /**
   * Trouver une valeur à partir d'une clé (utile si enumObj est partiellement dynamique)
   */
  static getValueByKey<T extends { [key: string]: string | number }>(
    enumObj: T,
    keyToFind: string
  ): string | number | undefined {
    return enumObj[keyToFind];
  }

}

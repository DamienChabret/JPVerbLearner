import { environment } from "@environments/environment"
import { JLPTLevelEnum } from "@models/JlptLevelEnum";
import { VerbGroupEnum } from "@models/VerbGroupeEnum";
import { VerbModel } from "@models/VerbModel"

const verbGroupMap: Record<string, VerbGroupEnum> = {
  GROUPE_1: VerbGroupEnum.GROUPE_1,
  GROUPE_2: VerbGroupEnum.GROUPE_2,
  GROUPE_3: VerbGroupEnum.GROUPE_3
};

const verbLevelMap: Record<string, JLPTLevelEnum> = {
  JLPT_N1: JLPTLevelEnum.JPLT_N1,
  JLPT_N2: JLPTLevelEnum.JPLT_N2,
  JLPT_N3: JLPTLevelEnum.JPLT_N3,
  JLPT_N4: JLPTLevelEnum.JPLT_N4,
  JLPT_N5: JLPTLevelEnum.JPLT_N5
};

function mapVerbGroup(apiValue: string): VerbGroupEnum {
  return verbGroupMap[apiValue];
}

function mapVerbLevel(apiValue: string): JLPTLevelEnum {
  return verbLevelMap[apiValue];
}



export class VerbService {
   
   async getVerbs(): Promise<VerbModel[]> {
      return fetch(environment.apiUrl + '/verbs')
      .then(res => res.json())
      .then((res: VerbModel[]) => {
         // transformation de chaque élément
         return res.map(verb => ({
            ...verb,
            verbGroup: mapVerbGroup(verb.verbGroup),
            jlptLevel: mapVerbLevel(verb.jlptLevel)
         }));
      })
   }

   async getVerb(id : number): Promise<VerbModel> {
       return fetch(environment.apiUrl + `/verbs/${id}`)
      .then(res => res.json())
      .then((res: VerbModel) => {
         return {
            ...res,
            verbGroup: mapVerbGroup(res.verbGroup),
            jlptLevel: mapVerbLevel(res.jlptLevel)

         };
      })
   }
}

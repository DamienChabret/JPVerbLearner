import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { JLPTLevelEnum } from '@models/JlptLevelEnum';
import { FormValues } from '@models/ValueFormInterface';
import { VerbGroupEnum } from '@models/VerbGroupeEnum';
import { VerbModel } from '@models/VerbModel';

const verbGroupMap: Record<string, VerbGroupEnum> = {
  GROUPE_1: VerbGroupEnum.GROUPE_1,
  GROUPE_2: VerbGroupEnum.GROUPE_2,
  GROUPE_3: VerbGroupEnum.GROUPE_3,
};

const verbLevelMap: Record<string, JLPTLevelEnum> = {
  JLPT_N1: JLPTLevelEnum.JLPT_N1,
  JLPT_N2: JLPTLevelEnum.JLPT_N2,
  JLPT_N3: JLPTLevelEnum.JLPT_N3,
  JLPT_N4: JLPTLevelEnum.JLPT_N4,
  JLPT_N5: JLPTLevelEnum.JLPT_N5,
};

function mapVerbGroup(apiValue: string): VerbGroupEnum {
  return verbGroupMap[apiValue];
}

function mapVerbLevel(apiValue: string): JLPTLevelEnum {
  return verbLevelMap[apiValue];
}

@Injectable({ providedIn: 'root' })
export class VerbService {
  async getVerbs(): Promise<VerbModel[]> {
    return fetch(environment.apiUrl + '/verbs')
      .then((res) => res.json())
      .then((res: VerbModel[]) => {
        // transformation de chaque élément
        return res.map((verb) => ({
          ...verb,
          verbGroup: mapVerbGroup(verb.verbGroup),
          jlptLevel: mapVerbLevel(verb.jlptLevel),
        }));
      });
  }

  async getVerbsByFilter(formValues: FormValues): Promise<VerbModel[]> {
    // Construction des query params manuellement
    const queryParams = new URLSearchParams();
    (formValues.groupValue as Array<string>).forEach((g) => queryParams.append('GroupValue', g));
    (formValues.levelValue as Array<string>).forEach((l) => queryParams.append('LevelValue', l));
    
    const url = `${environment.apiUrl}/verbs?${queryParams.toString()}`;
    console.log(url);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('API error');
    }

    const data: VerbModel[] = await res.json();

    return data.map((verb) => ({
      ...verb,
      verbGroup: mapVerbGroup(verb.verbGroup),
      jlptLevel: mapVerbLevel(verb.jlptLevel),
    }));
  }


  async getVerb(id: number): Promise<VerbModel> {
    return fetch(environment.apiUrl + `/verbs/${id}`)
      .then((res) => res.json())
      .then((res: VerbModel) => {
        return {
          ...res,
          verbGroup: mapVerbGroup(res.verbGroup),
          jlptLevel: mapVerbLevel(res.jlptLevel),
        };
      });
  }
}

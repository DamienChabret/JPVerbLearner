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
  JLPT_N1: JLPTLevelEnum.JPLT_N1,
  JLPT_N2: JLPTLevelEnum.JPLT_N2,
  JLPT_N3: JLPTLevelEnum.JPLT_N3,
  JLPT_N4: JLPTLevelEnum.JPLT_N4,
  JLPT_N5: JLPTLevelEnum.JPLT_N5,
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
    // Récupérer les clés sélectionnées (groupes cochés)
    const selectedGroups = Object.entries(formValues.groupValue)
      .filter(([_, checked]) => checked)
      .map(([key]) => key); // Clés déjà mappées (ex: GROUPE_1)

    const selectedLevels = Object.entries(formValues.levelValue)
      .filter(([_, checked]) => checked)
      .map(([key]) => key); // Clés déjà mappées (ex: JPLT_N5)

    const selectedPoliteness = Object.entries(formValues.politessValue).find(
      ([_, checked]) => checked,
    )?.[0];

    const selectedForm = Object.entries(formValues.formValue).find(
      ([_, checked]) => checked,
    )?.[0];

    const selectedRevision = Object.entries(formValues.revisionsValue).find(
      ([_, checked]) => checked,
    )?.[0];

    // Construction des query params manuellement
    const queryParams = new URLSearchParams();

    selectedGroups.forEach((g) => queryParams.append('Group', g));
    selectedLevels.forEach((l) => queryParams.append('Level', l));
    if (selectedPoliteness)
      queryParams.append('Politeness', selectedPoliteness);
    if (selectedForm) queryParams.append('Form', selectedForm);
    if (selectedRevision) queryParams.append('Revision', selectedRevision);

    const url = `${environment.apiUrl}/verbs?${queryParams.toString()}`;

    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((res: VerbModel[]) => {
        return res.map((verb) => ({
          ...verb,
          verbGroup: mapVerbGroup(verb.verbGroup),
          jlptLevel: mapVerbLevel(verb.jlptLevel),
        }));
      });
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

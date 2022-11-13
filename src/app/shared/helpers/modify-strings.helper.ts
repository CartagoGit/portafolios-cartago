import { TLastNameModels, TNameModels } from '../interfaces/storage.interface';

/**
 * ? Método para retornar el nombre del modelo en singular (y con la primera letra en mayúscula si capitalize es true)
 * @param model - nombre del modelo a formatear
 * @param needCapitalize - poner en true si deseamos la primera letra en mayuscula - (default= false)
 * @returns {string} nombre del modelo formateado
 */
export const getSingular = (
  model: TNameModels | string,
  needCapitalize = false
) => {
  if (needCapitalize) (model as string) = capitalize(model);
  return model.slice(0, model.length - 1);
};

/**
 * ? Método para convertir la primera letra de un texto en mayúsculas
 * @param text
 * @returns {string} texto con la primera letra en mayúsculas
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getLastNameModel = (typeModel: TNameModels) => {
  const modelFormated = getSingular(typeModel, true);
  const lastNameModel = ('last' + modelFormated) as TLastNameModels;
  return lastNameModel;
};

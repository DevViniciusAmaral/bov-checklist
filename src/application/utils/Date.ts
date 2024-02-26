import { ptBR } from "date-fns/locale";
import { format as DFformat } from "date-fns";

export const formatDate = (value: string, format: string = "dd/MM/yyyy") => {
  return DFformat(new Date(value), format, { locale: ptBR });
};

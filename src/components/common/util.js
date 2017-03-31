import moment from 'moment';

export function parseStrToDate(strDate){
  return strDate !== undefined||null ? new Date(moment(strDate).format("YYYY-MM-DD").toString()) : null;
}
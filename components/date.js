import {parseISO, format} from 'date-fns'
import {ko} from 'date-fns/locale'

export default function Date({dateString}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy LLLL do', {locale: ko})}</time>
}

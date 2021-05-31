export const useGetMonthName = () => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сенятбря', 'октября', 'ноября', 'декабря']
  return (monthNumber) => {
    return months[+monthNumber]
  }
}
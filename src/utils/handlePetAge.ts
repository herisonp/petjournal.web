export function handlePetAge(dateOfBirth: string | Date) {
  const datePet = new Date(dateOfBirth);
  const dateNow = new Date();

  const timeDiff = Math.abs(dateNow.getTime() - datePet.getTime());

  const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const years = Math.floor(dayDifference / 365);
  const months = Math.floor((dayDifference % 365) / 30);
  const days = dayDifference % 30;

  let dateFormat: string = '';

  if (years > 0) {
    dateFormat = `${years} ${years > 1 ? 'anos' : 'ano'}`;
    return dateFormat;
  }

  if (months > 0) {
    dateFormat = `${months} ${months > 1 ? 'meses' : 'mês'}`;
    return dateFormat;
  }

  if (days > 0) {
    dateFormat = `${days} ${days > 1 ? 'dias' : 'dia'}`;
    return dateFormat;
  }
}
